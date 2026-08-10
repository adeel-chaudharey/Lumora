import { createClient } from "@/utils/supabase/server";

import { StoreProduct } from "@/types/storefront";

export async function getFeaturedProducts(): Promise<StoreProduct[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("status", "published")
    .eq("featured", true)
    .limit(4);

  if (error) {
    console.error("Failed to fetch featured products:", error);
    return [];
  }

  return data ?? [];
}