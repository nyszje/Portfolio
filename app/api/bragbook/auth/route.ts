import { NextRequest, NextResponse } from "next/server";
import {
  getCode,
  isRedisConfigured,
  issueSession,
  logAccess,
} from "@/lib/bragbook";

export async function POST(req: NextRequest) {
  if (!isRedisConfigured()) {
    return NextResponse.json(
      { error: "Bragbook is not configured." },
      { status: 503 },
    );
  }

  const body = await req.json().catch(() => null);
  const code = (body?.code ?? "").toString().trim();
  if (!code) {
    return NextResponse.json({ error: "Code required." }, { status: 400 });
  }

  const record = await getCode(code);
  if (!record || !record.active) {
    return NextResponse.json({ error: "Invalid code." }, { status: 401 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const ua = req.headers.get("user-agent") || "unknown";

  await logAccess(code, ip, ua);
  await issueSession(code, record.employer);

  return NextResponse.json({ ok: true, employer: record.employer });
}
