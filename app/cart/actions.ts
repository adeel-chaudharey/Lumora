"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function addToCart(productId: string) {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in to add items to your cart.");
  }

  // Check whether this product is already in the cart
  const { data: existingItem, error: fetchError } = await supabase
    .from("cart_items")
    .select("id, quantity")
    .eq("customer_id", user.id)
    .eq("product_id", productId)
    .maybeSingle();

  if (fetchError) {
    throw new Error(fetchError.message);
  }

  if (existingItem) {
    // Product already exists → increase quantity
    const { error } = await supabase
      .from("cart_items")
      .update({
        quantity: existingItem.quantity + 1,
      })
      .eq("id", existingItem.id)
      .eq("customer_id", user.id);

    if (error) {
      throw new Error(error.message);
    }
  } else {
    // Product doesn't exist → create cart item
    const { error } = await supabase
      .from("cart_items")
      .insert({
        customer_id: user.id,
        product_id: productId,
        quantity: 1,
      });

    if (error) {
      throw new Error(error.message);
    }
  }

  revalidatePath("/cart");
}