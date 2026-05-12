import { Redis } from "@upstash/redis";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export type BragbookCode = {
  code: string;
  employer: string;
  createdAt: number;
  active: boolean;
};

export type AccessLog = {
  ts: number;
  ip: string;
  ua: string;
};

export type AccessRequest = {
  id: string;
  ts: number;
  name: string;
  company: string;
  email: string;
  note?: string;
  ip: string;
  ua: string;
  referer?: string;
  status: "pending" | "fulfilled" | "declined";
  fulfilledCode?: string;
};

const SESSION_COOKIE = "bragbook_session";
const ADMIN_COOKIE = "bragbook_admin";
const SESSION_DAYS = 30;

function getSecret(): Uint8Array {
  const s = process.env.BRAGBOOK_SECRET;
  if (!s) throw new Error("BRAGBOOK_SECRET is not set");
  return new TextEncoder().encode(s);
}

let redisClient: Redis | null = null;
export function getRedis(): Redis {
  if (redisClient) return redisClient;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error(
      "Upstash Redis is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.",
    );
  }
  redisClient = new Redis({ url, token });
  return redisClient;
}

export function isRedisConfigured(): boolean {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}

// ---------- Code CRUD ----------

export async function createCode(
  code: string,
  employer: string,
): Promise<BragbookCode> {
  const r = getRedis();
  const data: BragbookCode = {
    code,
    employer,
    createdAt: Date.now(),
    active: true,
  };
  await r.set(`code:${code}`, JSON.stringify(data));
  await r.sadd("code:list", code);
  return data;
}

export async function getCode(code: string): Promise<BragbookCode | null> {
  const r = getRedis();
  const raw = await r.get(`code:${code}`);
  if (!raw) return null;
  return typeof raw === "string" ? JSON.parse(raw) : (raw as BragbookCode);
}

export async function listCodes(): Promise<BragbookCode[]> {
  const r = getRedis();
  const codes = (await r.smembers("code:list")) as string[];
  if (codes.length === 0) return [];
  const results = await Promise.all(codes.map((c) => getCode(c)));
  return results
    .filter((x): x is BragbookCode => x !== null)
    .sort((a, b) => b.createdAt - a.createdAt);
}

export async function revokeCode(code: string): Promise<void> {
  const r = getRedis();
  const existing = await getCode(code);
  if (!existing) return;
  existing.active = false;
  await r.set(`code:${code}`, JSON.stringify(existing));
}

export async function activateCode(code: string): Promise<void> {
  const r = getRedis();
  const existing = await getCode(code);
  if (!existing) return;
  existing.active = true;
  await r.set(`code:${code}`, JSON.stringify(existing));
}

export async function deleteCode(code: string): Promise<void> {
  const r = getRedis();
  await r.del(`code:${code}`);
  await r.del(`logs:${code}`);
  await r.srem("code:list", code);
}

// ---------- Access logs ----------

export async function logAccess(
  code: string,
  ip: string,
  ua: string,
): Promise<void> {
  const r = getRedis();
  const entry: AccessLog = { ts: Date.now(), ip, ua };
  await r.lpush(`logs:${code}`, JSON.stringify(entry));
  await r.ltrim(`logs:${code}`, 0, 199);
}

export async function getLogs(code: string): Promise<AccessLog[]> {
  const r = getRedis();
  const raw = (await r.lrange(`logs:${code}`, 0, -1)) as (string | AccessLog)[];
  return raw.map((x) => (typeof x === "string" ? JSON.parse(x) : x));
}

// ---------- Access requests ----------

export async function createRequest(
  data: Omit<AccessRequest, "id" | "ts" | "status">,
): Promise<AccessRequest> {
  const r = getRedis();
  const id =
    Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const entry: AccessRequest = {
    id,
    ts: Date.now(),
    status: "pending",
    ...data,
  };
  await r.set(`request:${id}`, JSON.stringify(entry));
  await r.zadd("request:list", { score: entry.ts, member: id });
  return entry;
}

export async function listRequests(): Promise<AccessRequest[]> {
  const r = getRedis();
  const ids = (await r.zrange("request:list", 0, -1, {
    rev: true,
  })) as string[];
  if (ids.length === 0) return [];
  const raw = await Promise.all(ids.map((id) => r.get(`request:${id}`)));
  return raw
    .filter((x): x is unknown => x !== null && x !== undefined)
    .map((x) =>
      typeof x === "string" ? (JSON.parse(x) as AccessRequest) : (x as AccessRequest),
    );
}

export async function updateRequestStatus(
  id: string,
  status: AccessRequest["status"],
  fulfilledCode?: string,
): Promise<void> {
  const r = getRedis();
  const raw = await r.get(`request:${id}`);
  if (!raw) return;
  const entry =
    typeof raw === "string" ? (JSON.parse(raw) as AccessRequest) : (raw as AccessRequest);
  entry.status = status;
  if (fulfilledCode) entry.fulfilledCode = fulfilledCode;
  await r.set(`request:${id}`, JSON.stringify(entry));
}

export async function deleteRequest(id: string): Promise<void> {
  const r = getRedis();
  await r.del(`request:${id}`);
  await r.zrem("request:list", id);
}

// ---------- Bragbook session (per-recipient) ----------

export async function issueSession(code: string, employer: string) {
  const token = await new SignJWT({ code, employer })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DAYS}d`)
    .sign(getSecret());

  const c = await cookies();
  c.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  });
}

export async function clearSession() {
  const c = await cookies();
  c.delete(SESSION_COOKIE);
}

export async function readSession(): Promise<{
  code: string;
  employer: string;
} | null> {
  const c = await cookies();
  const token = c.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return {
      code: payload.code as string,
      employer: payload.employer as string,
    };
  } catch {
    return null;
  }
}

// ---------- Admin session ----------

export async function issueAdminSession() {
  const token = await new SignJWT({ admin: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());

  const c = await cookies();
  c.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
}

export async function clearAdminSession() {
  const c = await cookies();
  c.delete(ADMIN_COOKIE);
}

export async function isAdmin(): Promise<boolean> {
  const c = await cookies();
  const token = c.get(ADMIN_COOKIE)?.value;
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload.admin === true;
  } catch {
    return false;
  }
}

export function checkAdminPassword(input: string): boolean {
  const expected = process.env.BRAGBOOK_ADMIN_PASSWORD;
  if (!expected || !input) return false;
  if (input.length !== expected.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= expected.charCodeAt(i) ^ input.charCodeAt(i);
  }
  return mismatch === 0;
}
