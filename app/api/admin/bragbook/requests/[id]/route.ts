import { NextRequest, NextResponse } from "next/server";
import {
  createCode,
  deleteRequest,
  getCode,
  isAdmin,
  isRedisConfigured,
  updateRequestStatus,
} from "@/lib/bragbook";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
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

  const { id } = await params;
  const body = await req.json().catch(() => null);
  const action = body?.action;

  if (action === "decline") {
    await updateRequestStatus(id, "declined");
    return NextResponse.json({ ok: true });
  }

  if (action === "fulfill") {
    const employer = (body?.employer ?? "").toString().trim();
    let code = (body?.code ?? "").toString().trim();
    if (!employer) {
      return NextResponse.json(
        { error: "Employer required." },
        { status: 400 },
      );
    }
    if (!code) code = generateCode(employer);
    if (await getCode(code)) {
      return NextResponse.json(
        { error: "Code already exists. Pick a different one." },
        { status: 409 },
      );
    }
    const created = await createCode(code, employer);
    await updateRequestStatus(id, "fulfilled", code);
    return NextResponse.json({ ok: true, code: created });
  }

  return NextResponse.json({ error: "Unknown action." }, { status: 400 });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
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
  const { id } = await params;
  await deleteRequest(id);
  return NextResponse.json({ ok: true });
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
