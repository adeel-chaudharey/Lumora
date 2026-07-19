import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getDashboardData() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

 const [
  { count: productCount },
  { count: categoryCount },
  { data: orders },
  { data: latestProducts },
  { data: lowStockProducts },
  { data: recentOrders },
  { count: orderCount },
  { data: latestCustomers },
  { data: activities },
] = await Promise.all([
    supabase
      .from("products")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("categories")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("orders")
      .select("id,total,created_at"),

    supabase
      .from("products")
      .select("id,name,price,stock,image_url")
      .order("created_at", { ascending: false })
      .limit(5),

    supabase
      .from("products")
      .select("id,name,stock,low_stock_alert,image_url")
      .lte("stock", 10)
      .order("stock", { ascending: true })
      .limit(5),

    supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5),

    supabase
      .from("orders")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("orders")
      .select("id, customer_name, customer_email")
      .order("created_at", {
        ascending: false,
      })
      .limit(5),
      supabase
  .from("orders")
  .select("id, customer_name, created_at")
  .order("created_at", {
    ascending: false,
  })
  .limit(5),
  ]);




const activityFeed =
  activities?.map((activity) => ({
    id: activity.id,
    message: `New order received from ${activity.customer_name}`,
    created_at: activity.created_at,
  })) ?? [];



  return {
    productCount: productCount ?? 0,
    categoryCount: categoryCount ?? 0,
    orderCount: orderCount ?? 0,
    orders: orders ?? [],
    latestProducts: latestProducts ?? [],
    lowStockProducts: lowStockProducts ?? [],
    recentOrders: recentOrders ?? [],
    latestCustomers: latestCustomers ?? [],
    activityFeed,
  };
}