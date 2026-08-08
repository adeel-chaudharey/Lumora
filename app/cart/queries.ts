import { createClient } from "@/utils/supabase/server";

export interface CartItemData {
  id: string;
  quantity: number;
  name: string;
  price: number;
  image: string | null;
}

export async function getCartItems(): Promise<CartItemData[]> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

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
    .eq("customer_id", user.id);

  if (error) {
    console.error("Failed to fetch cart:", error);
    return [];
  }

  return (
    data?.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      name: item.product.name,
      price: item.product.price,
      image: item.product.image_url,
    })) ?? []
  );
}