-- Chat Gator "Bask" — shared group sessions (1-8 players per invite code).
--
-- Everything here is deliberately ephemeral: a session (and every member
-- row and time bucket hanging off it, via ON DELETE CASCADE) expires 48h
-- after its invite code was created. Expired rows are hidden by RLS the
-- moment they expire and physically deleted by the hourly pg_cron job at
-- the bottom. Nothing in these tables is sensitive: player names, the names
-- of who they hit/healed/were hit by, and numbers. No chat, no raw log lines.
--
-- The page talks to this with the project's public (anon/publishable) key
-- straight from the browser, so the rules below are the whole security model:
-- anyone can create a session; anyone holding a code can read it and write
-- member/tick rows for it while it's alive; nobody can change a session's
-- expiry or delete anything (the cron job does that).
--
-- Safe to re-run: every statement is idempotent.

-- ---------------------------------------------------------------- tables --
create table if not exists public.bask_sessions (
  code        text primary key check (code ~ '^[A-Z2-9]{6}$'),
  created_at  timestamptz not null default now(),
  expires_at  timestamptz not null default now() + interval '48 hours'
);

create table if not exists public.bask_members (
  code        text not null references public.bask_sessions(code) on delete cascade,
  player      text not null check (char_length(player) between 1 and 40),
  joined_at   timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  totals      jsonb not null default '{}'::jsonb check (pg_column_size(totals) <= 65536),
  primary key (code, player)
);

create table if not exists public.bask_ticks (
  code        text not null,
  player      text not null,
  t           timestamptz not null,               -- start of a 15s bucket
  updated_at  timestamptz not null default now(),
  data        jsonb not null check (pg_column_size(data) <= 4096),
  primary key (code, player, t),
  foreign key (code, player) references public.bask_members(code, player) on delete cascade
);
create index if not exists bask_ticks_code_updated on public.bask_ticks (code, updated_at);

-- ------------------------------------------------------------- triggers --
-- Server-side clock for updated_at, so viewers' "give me what changed since
-- X" polling never depends on a player's PC clock being right.
create or replace function public.bask_touch() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists bask_members_touch on public.bask_members;
create trigger bask_members_touch before insert or update on public.bask_members
  for each row execute function public.bask_touch();
drop trigger if exists bask_ticks_touch on public.bask_ticks;
create trigger bask_ticks_touch before insert or update on public.bask_ticks
  for each row execute function public.bask_touch();

-- Session must be alive, and at most 8 players per code. Runs as definer so
-- the count sees every member regardless of RLS. joined_at is pinned on
-- update so a re-upsert can't rewrite history.
create or replace function public.bask_member_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from bask_sessions s where s.code = new.code and s.expires_at > now()) then
    raise exception 'This bask has expired or does not exist.' using errcode = 'P0001';
  end if;
  if tg_op = 'INSERT' then
    perform pg_advisory_xact_lock(hashtext(new.code));
    -- An upsert from someone already in the bask fires this INSERT trigger
    -- too (before turning into an update), so only count genuinely new names.
    if not exists (select 1 from bask_members m where m.code = new.code and m.player = new.player)
       and (select count(*) from bask_members m where m.code = new.code) >= 8 then
      raise exception 'This bask is full (8 gators max).' using errcode = 'P0001';
    end if;
  else
    new.joined_at := old.joined_at;
  end if;
  return new;
end $$;

drop trigger if exists bask_members_guard on public.bask_members;
create trigger bask_members_guard before insert or update on public.bask_members
  for each row execute function public.bask_member_guard();

-- Time buckets can only be written while their session is alive.
create or replace function public.bask_tick_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from bask_sessions s where s.code = new.code and s.expires_at > now()) then
    raise exception 'This bask has expired or does not exist.' using errcode = 'P0001';
  end if;
  return new;
end $$;

drop trigger if exists bask_ticks_guard on public.bask_ticks;
create trigger bask_ticks_guard before insert or update on public.bask_ticks
  for each row execute function public.bask_tick_guard();

-- -------------------------------------------------------------- access --
alter table public.bask_sessions enable row level security;
alter table public.bask_members  enable row level security;
alter table public.bask_ticks    enable row level security;

grant usage on schema public to anon;
grant select, insert         on public.bask_sessions to anon;
grant select, insert, update on public.bask_members  to anon;
grant select, insert, update on public.bask_ticks    to anon;

drop policy if exists bask_sessions_read   on public.bask_sessions;
drop policy if exists bask_sessions_create on public.bask_sessions;
create policy bask_sessions_read on public.bask_sessions
  for select to anon using (expires_at > now());
-- A new session always gets the default 48h; the client can't pick its own.
create policy bask_sessions_create on public.bask_sessions
  for insert to anon with check (
    created_at between now() - interval '1 minute' and now() + interval '1 minute'
    and expires_at <= now() + interval '48 hours 1 minute'
  );

drop policy if exists bask_members_read  on public.bask_members;
drop policy if exists bask_members_write on public.bask_members;
drop policy if exists bask_members_edit  on public.bask_members;
create policy bask_members_read on public.bask_members
  for select to anon using (exists (select 1 from public.bask_sessions s where s.code = bask_members.code and s.expires_at > now()));
create policy bask_members_write on public.bask_members
  for insert to anon with check (exists (select 1 from public.bask_sessions s where s.code = bask_members.code and s.expires_at > now()));
create policy bask_members_edit on public.bask_members
  for update to anon using (exists (select 1 from public.bask_sessions s where s.code = bask_members.code and s.expires_at > now()));

drop policy if exists bask_ticks_read  on public.bask_ticks;
drop policy if exists bask_ticks_write on public.bask_ticks;
drop policy if exists bask_ticks_edit  on public.bask_ticks;
create policy bask_ticks_read on public.bask_ticks
  for select to anon using (exists (select 1 from public.bask_sessions s where s.code = bask_ticks.code and s.expires_at > now()));
create policy bask_ticks_write on public.bask_ticks
  for insert to anon with check (exists (select 1 from public.bask_sessions s where s.code = bask_ticks.code and s.expires_at > now()));
create policy bask_ticks_edit on public.bask_ticks
  for update to anon using (exists (select 1 from public.bask_sessions s where s.code = bask_ticks.code and s.expires_at > now()));

-- ------------------------------------------------------------- cleanup --
-- Hourly: physically delete every expired session; members and ticks go with
-- it via ON DELETE CASCADE. RLS already hides them from the moment they expire.
create extension if not exists pg_cron;
select cron.unschedule('bask-cleanup') where exists (select 1 from cron.job where jobname = 'bask-cleanup');
select cron.schedule('bask-cleanup', '7 * * * *',
  $$delete from public.bask_sessions where expires_at < now()$$);
