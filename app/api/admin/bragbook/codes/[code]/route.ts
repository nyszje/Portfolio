import { NextRequest, NextResponse } from "next/server";
import {
  activateCode,
  deleteCode,
  isAdmin,
  isRedisConfigured,
  revokeCode,
} from "@/lib/bragbook";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isRedisConfigured()) {
    return NextResponse.json(
      { error: "Upstash Redis is not configured." },
      { status: 503 },
    );
  }
  const { code } = await params;
  const body = await req.json().catch(() => null);
  const action = body?.action;
  if (action === "revoke") {
    await revokeCode(code);
  } else if (action === "activate") {
    await activateCode(code);
  } else {
    return NextResponse.json({ error: "Unknown action." }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isRedisConfigured()) {
    return NextResponse.json(
      { error: "Upstash Redis is not configured." },
      { status: 503 },
    );
  }
  const { code } = await params;
  await deleteCode(code);
  return NextResponse.json({ ok: true });
}
