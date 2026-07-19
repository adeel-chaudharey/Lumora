create table public.orders (
    id uuid primary key default gen_random_uuid(),

    customer_name text not null,
    customer_email text not null,

    total numeric(10,2) not null default 0,

    status text not null default 'Pending',

    created_at timestamptz default now(),
    updated_at timestamptz default now()
);