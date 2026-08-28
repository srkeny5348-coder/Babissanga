create table if not exists public.site_data (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.site_data enable row level security;

drop policy if exists "Public can read site data" on public.site_data;
create policy "Public can read site data"
  on public.site_data for select
  to anon, authenticated
  using (true);

drop policy if exists "Public can write site data" on public.site_data;
create policy "Public can write site data"
  on public.site_data for insert
  to authenticated
  with check (id = 'main');

drop policy if exists "Public can update site data" on public.site_data;
create policy "Public can update site data"
  on public.site_data for update
  to authenticated
  using (id = 'main')
  with check (id = 'main');
