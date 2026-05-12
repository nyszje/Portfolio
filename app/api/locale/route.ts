import { NextRequest, NextResponse } from "next/server";
import { LOCALES, type Locale } from "@/lib/i18n";
import { COOKIE_NAME } from "@/lib/locale";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const locale = body?.locale as string | undefined;
  if (!locale || !LOCALES.includes(locale as Locale)) {
    return NextResponse.json({ error: "Invalid locale." }, { status: 400 });
  }
  const res = NextResponse.json({ ok: true, locale });
  res.cookies.set(COOKIE_NAME, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}
