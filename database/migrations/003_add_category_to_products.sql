-- ==========================================
-- Migration 003
-- Add Category Relationship
-- ==========================================

alter table public.products
add column category_id uuid;

alter table public.products
add constraint fk_products_category
foreign key (category_id)
references public.categories(id)
on delete set null;