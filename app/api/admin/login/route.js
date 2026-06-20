import { NextResponse } from "next/server";
import { createAdminSessionCookie, expiredAdminSessionCookie, passwordMatches } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!passwordMatches(body?.password)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const sessionCookie = createAdminSessionCookie();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.options);
  return response;
}

export async function DELETE() {
  const sessionCookie = expiredAdminSessionCookie();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.options);
  return response;
}
