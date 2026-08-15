import { createClient } from "@/utils/supabase/server";
import { StoreProduct } from "@/types/Storefront";
import { cookies } from "next/headers";

export async function getProduct(
  slug: string
): Promise<StoreProduct | null> {
  const supabase = await createClient(await cookies());

  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  return data;
}


//store front connected to the db
//promise function to get product by slug