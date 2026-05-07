import { NextRequest, NextResponse } from "next/server";
import {
  createCode,
  getCode,
  getLogs,
  isAdmin,
  isRedisConfigured,
  listCodes,
} from "@/lib/bragbook";

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isRedisConfigured()) {
    return NextResponse.json({ codes: [], unconfigured: true });
  }
  const codes = await listCodes();
  const withLogs = await Promise.all(
    codes.map(async (c) => ({
      ...c,
      logs: await getLogs(c.code),
    })),
  );
  return NextResponse.json({ codes: withLogs });
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isRedisConfigured()) {
    return NextResponse.json(
      { error: "Upstash Redis is not configured." },
      { status: 503 },
    );
  }

  const body = await req.json().catch(() => null);
  const employer = (body?.employer ?? "").toString().trim();
  let code = (body?.code ?? "").toString().trim();
  if (!employer) {
    return NextResponse.json({ error: "Employer required." }, { status: 400 });
  }
  if (!code) {
    code = generateCode(employer);
  }

  const existing = await getCode(code);
  if (existing) {
    return NextResponse.json(
      { error: "Code already exists." },
      { status: 409 },
    );
  }

  const created = await createCode(code, employer);
  return NextResponse.json({ code: created });
}

function generateCode(employer: string): string {
  const slug = employer
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 20);
  const rand = Math.random().toString(36).slice(2, 6);
  return `${slug}-${rand}`;
}
