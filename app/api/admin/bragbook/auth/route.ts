import { NextRequest, NextResponse } from "next/server";
import {
  checkAdminPassword,
  clearAdminSession,
  issueAdminSession,
} from "@/lib/bragbook";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const password = (body?.password ?? "").toString();
  if (!checkAdminPassword(password)) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }
  await issueAdminSession();
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  await clearAdminSession();
  return NextResponse.json({ ok: true });
}
