import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const storePath = path.join(process.cwd(), "data", "submissions.json");
const allowedTypes = new Set(["appointment", "contact"]);

async function readSubmissions() {
  try {
    const raw = await fs.readFile(storePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
    await fs.mkdir(path.dirname(storePath), { recursive: true });
    await fs.writeFile(storePath, "[]", "utf8");
    return [];
  }
}

async function writeSubmissions(submissions) {
  await fs.mkdir(path.dirname(storePath), { recursive: true });
  await fs.writeFile(storePath, JSON.stringify(submissions, null, 2), "utf8");
}

function cleanPayload(payload) {
  return Object.fromEntries(
    Object.entries(payload || {}).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim() : value
    ])
  );
}

export async function GET() {
  const submissions = await readSubmissions();
  return NextResponse.json({
    submissions: submissions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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
    status: "new"
  };

  const submissions = await readSubmissions();
  submissions.push(submission);
  await writeSubmissions(submissions);

  return NextResponse.json({ ok: true, submission }, { status: 201 });
}
