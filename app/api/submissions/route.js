import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { createSubmission, listSubmissions } from "@/lib/submissionsStore";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const allowedTypes = new Set(["appointment", "contact"]);

function cleanPayload(payload) {
  return Object.fromEntries(
    Object.entries(payload || {}).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim() : value
    ])
  );
}

export async function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const submissions = await listSubmissions();
  return NextResponse.json({
    submissions
  });
}

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body || !allowedTypes.has(body.type) || typeof body.payload !== "object") {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const submission = {
    id: crypto.randomUUID(),
    type: body.type,
    payload: cleanPayload(body.payload),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "new"
  };

  const savedSubmission = await createSubmission(submission);

  return NextResponse.json({ ok: true, submission: savedSubmission }, { status: 201 });
}
