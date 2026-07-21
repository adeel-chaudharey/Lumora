import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { StoreProduct } from "@/types/storefront";
export async function getProducts(): Promise<StoreProduct[]> {
  const cookieStore = await cookies();

  const supabase = createClient(cookieStore);

  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("status", "published")
    .order("created_at", {
      ascending: false,
    });

  return data ?? [];
}