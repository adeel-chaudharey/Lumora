import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export interface CartItemData {
  id: string;
  quantity: number;
  name: string;
  price: number;
  image: string | null;
}

export async function getCartItems(): Promise<CartItemData[]> {
  const cookieStore = await cookies();
  const supabase =await createClient(cookieStore);

  // Temporary customer ID (replace after authentication)
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



console.log("Customer ID:", customerId);
console.log("Raw data:", data);


  if (error) {
    console.error(error);
    return [];
  }

  return (
    data?.map((item: any) => ({
      id: item.id,
      quantity: item.quantity,
      name: item.product.name,
      price: item.product.price,
      image: item.product.image_url,
    })) ?? []
  );
}