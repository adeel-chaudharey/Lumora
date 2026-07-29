import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export interface CartItemData {
  id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    image_url: string | null;
  };
}

export async function getCartItems(): Promise<CartItemData[]> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  // Temporary customer ID (replace after auth)
 const customerId =
  "1d266cc6-16f9-485c-a55c-5598d4602cbf";

  const { data, error } = await supabase
    .from("cart_items")
    .select(`
      id,
      quantity,
      product:products!cart_product_fk (
        id,
        name,
        slug,
        price,
        image_url
      )
    `)
    .eq("customer_id", customerId);

  console.log(data);

  if (error) {
  console.log("SUPABASE ERROR:", error);
  throw error;
}

  return (data as CartItemData[]) ?? [];
}