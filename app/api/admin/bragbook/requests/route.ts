import { NextResponse } from "next/server";
import { isAdmin, isRedisConfigured, listRequests } from "@/lib/bragbook";

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isRedisConfigured()) {
    return NextResponse.json({ requests: [], unconfigured: true });
  }
  const requests = await listRequests();
  return NextResponse.json({ requests });
}
