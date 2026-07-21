import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { StoreProduct } from "@/types/storefront";

export async function getFeaturedProducts(): Promise<StoreProduct[]> {
  const cookieStore = await cookies();

  const supabase = createClient(cookieStore);

  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("status", "published")
    .limit(4);

  return data ?? [];
}