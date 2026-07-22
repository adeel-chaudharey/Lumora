import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { StoreProduct } from "@/types/storefront";

export async function getProduct(
  slug: string
): Promise<StoreProduct | null> {
  const cookieStore = await cookies();

  const supabase = createClient(cookieStore);

  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  return data;
}