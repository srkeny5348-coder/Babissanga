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

create table if not exists public.contact_messages (
  id text primary key,
  data jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Public can submit contact messages" on public.contact_messages;
create policy "Public can submit contact messages"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Authenticated can read contact messages" on public.contact_messages;
create policy "Authenticated can read contact messages"
  on public.contact_messages for select
  to authenticated
  using (true);

drop policy if exists "Authenticated can update contact messages" on public.contact_messages;
create policy "Authenticated can update contact messages"
  on public.contact_messages for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated can delete contact messages" on public.contact_messages;
create policy "Authenticated can delete contact messages"
  on public.contact_messages for delete
  to authenticated
  using (true);
