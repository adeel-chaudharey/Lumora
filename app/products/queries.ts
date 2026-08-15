import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { StoreProduct } from "@/types/Storefront";

export async function getProducts(): Promise<StoreProduct[]> {
  const supabase = await createClient(await cookies());

  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("status", "published")
    .order("created_at", {
      ascending: false,
    });

  return data ?? [];
}