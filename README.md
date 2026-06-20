# BlackBurn Cleaning Services

A white and green luxury Next.js, React, Tailwind CSS, and Framer Motion cleaning website for a premium Blackburn service brand.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Admin panel: `http://localhost:3000/admin001`

Admin password: set `ADMIN_PASSWORD` in Vercel. The requested default is `Black@BurnServices1092`.

Appointment and contact submissions are stored locally in `data/submissions.json` until Supabase env vars are configured.
On Vercel, add the variables from `.env.example` in Project Settings -> Environment Variables.

## Supabase table

Create this table when you provide the Supabase URL/key/service-role key:

```sql
create table if not exists public.submissions (
  id text primary key,
  type text not null check (type in ('appointment', 'contact')),
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'new' check (status in ('new', 'contacted', 'completed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```
