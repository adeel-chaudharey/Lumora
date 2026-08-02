import { createClient } from "@/utils/supabase/server";

export async function getCheckoutData() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data } = await supabase
    .from("cart_items")
    .select(`
      quantity,
      products (
        id,
        name,
        price,
        thumbnail,
        stock
      )
    `)
    .eq("customer_id", user.id);

  return data ?? [];
}