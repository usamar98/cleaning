import { promises as fs } from "node:fs";
import path from "node:path";

const storePath = path.join(process.cwd(), "data", "submissions.json");
const tableName = process.env.SUPABASE_SUBMISSIONS_TABLE || "submissions";

function supabaseConfig() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) return null;

  return {
    url: url.replace(/\/$/, ""),
    serviceRoleKey
  };
}

function toClientSubmission(row) {
  return {
    id: row.id,
    type: row.type,
    payload: row.payload || {},
    createdAt: row.created_at || row.createdAt,
    updatedAt: row.updated_at || row.updatedAt,
    status: row.status || "new"
  };
}

function toSupabaseSubmission(submission) {
  return {
    id: submission.id,
    type: submission.type,
    payload: submission.payload,
    created_at: submission.createdAt,
    updated_at: submission.updatedAt,
    status: submission.status
  };
}

async function supabaseFetch(pathname, options = {}) {
  const config = supabaseConfig();
  if (!config) {
    throw new Error("Supabase is not configured");
  }

  const response = await fetch(`${config.url}/rest/v1/${tableName}${pathname}`, {
    ...options,
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Supabase request failed: ${response.status} ${details}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

async function readLocalSubmissions() {
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

async function writeLocalSubmissions(submissions) {
  await fs.mkdir(path.dirname(storePath), { recursive: true });
  await fs.writeFile(storePath, JSON.stringify(submissions, null, 2), "utf8");
}

export async function listSubmissions() {
  if (supabaseConfig()) {
    const rows = await supabaseFetch("?select=*&order=created_at.desc");
    return rows.map(toClientSubmission);
  }

  const submissions = await readLocalSubmissions();
  return submissions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export async function createSubmission(submission) {
  if (supabaseConfig()) {
    const rows = await supabaseFetch("", {
      method: "POST",
      body: JSON.stringify(toSupabaseSubmission(submission))
    });
    return toClientSubmission(rows[0]);
  }

  const submissions = await readLocalSubmissions();
  submissions.push(submission);
  await writeLocalSubmissions(submissions);
  return submission;
}

export async function updateSubmissionStatus(id, status) {
  const updatedAt = new Date().toISOString();

  if (supabaseConfig()) {
    const rows = await supabaseFetch(`?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: JSON.stringify({ status, updated_at: updatedAt })
    });
    return rows[0] ? toClientSubmission(rows[0]) : null;
  }

  const submissions = await readLocalSubmissions();
  let updated = null;
  const nextSubmissions = submissions.map((submission) => {
    if (submission.id !== id) return submission;
    updated = { ...submission, status, updatedAt };
    return updated;
  });

  await writeLocalSubmissions(nextSubmissions);
  return updated;
}

export async function deleteSubmission(id) {
  if (supabaseConfig()) {
    const rows = await supabaseFetch(`?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE"
    });
    return Array.isArray(rows) ? rows.length > 0 : true;
  }

  const submissions = await readLocalSubmissions();
  const nextSubmissions = submissions.filter((submission) => submission.id !== id);
  await writeLocalSubmissions(nextSubmissions);
  return nextSubmissions.length !== submissions.length;
}
