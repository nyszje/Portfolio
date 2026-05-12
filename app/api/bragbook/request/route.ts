import { NextRequest, NextResponse } from "next/server";
import { createRequest, isRedisConfigured } from "@/lib/bragbook";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  if (!isRedisConfigured()) {
    return NextResponse.json(
      { error: "Bragbook is not configured yet." },
      { status: 503 },
    );
  }

  const body = await req.json().catch(() => null);
  const name = (body?.name ?? "").toString().trim().slice(0, 100);
  const company = (body?.company ?? "").toString().trim().slice(0, 100);
  const email = (body?.email ?? "").toString().trim().slice(0, 200);
  const note = (body?.note ?? "").toString().trim().slice(0, 1000);

  if (!name || !company || !email) {
    return NextResponse.json(
      { error: "Name, company, and email are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 },
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const ua = req.headers.get("user-agent") || "unknown";
  const referer = req.headers.get("referer") || undefined;

  await createRequest({
    name,
    company,
    email,
    note: note || undefined,
    ip,
    ua,
    referer,
  });

  return NextResponse.json({ ok: true });
}
