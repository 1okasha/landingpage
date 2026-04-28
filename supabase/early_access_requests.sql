create extension if not exists pgcrypto;

create table if not exists public.early_access_requests (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  work_email text not null,
  phone_number text,
  company_project_name text not null,
  primary_use_case text not null,
  monthly_call_volume text not null,
  anything_else text,
  created_at timestamptz not null default now()
);

create index if not exists early_access_requests_created_at_idx
  on public.early_access_requests (created_at desc);

create index if not exists early_access_requests_work_email_idx
  on public.early_access_requests (work_email);
