"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

const CUSTOMER_ID =
  "1d266cc6-16f9-485c-a55c-5598d4602cbf";

export async function increaseQuantity(cartItemId: string) {
  const cookieStore = await cookies();
  const supabase =await createClient(cookieStore);

  const { data } = await supabase
    .from("cart_items")
    .select("quantity")
    .eq("id", cartItemId)
    .eq("customer_id", CUSTOMER_ID)
    .single();

  if (!data) return;

  await supabase
    .from("cart_items")
    .update({
      quantity: data.quantity + 1,
    })
    .eq("id", cartItemId);
}


export async function decreaseQuantity(cartItemId: string) {
  const cookieStore = await cookies();
  const supabase =await createClient(cookieStore);

  const { data } = await supabase
    .from("cart_items")
    .select("quantity")
    .eq("id", cartItemId)
    .eq("customer_id", CUSTOMER_ID)
    .single();

  if (!data) return;

  if (data.quantity <= 1) {
    return;
  }

  await supabase
    .from("cart_items")
    .update({
      quantity: data.quantity - 1,
    })
    .eq("id", cartItemId);
}


export async function removeCartItem(cartItemId: string) {
  const cookieStore = await cookies();
  const supabase =await createClient(cookieStore);

  await supabase
    .from("cart_items")
    .delete()
    .eq("id", cartItemId)
    .eq("customer_id", CUSTOMER_ID);
}