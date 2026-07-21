import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function getOrders() {
  const cookieStore = await cookies();

  const supabase = createClient(cookieStore);

  const { data } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return data ?? [];
}

export async function getOrder(id: string) {
  const cookieStore = await cookies();

  const supabase = createClient(cookieStore);

  const { data } = await supabase
    .from("orders")
    .select(`
      *,
      order_items (*)
    `)
    .eq("id", id)
    .single();

  return data;
}