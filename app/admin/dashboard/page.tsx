import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import StatsCard from "../../components/dashboard/StatsCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import LowStockProducts from "../../components/dashboard/LowStockProducts";
import TopProducts from "../../components/dashboard/TopProducts";
import RecentOrders from "../../components/dashboard/RecentOrders";

// Placeholder components
function SalesChart() {
  return <div className="card">Sales Chart</div>;
}

const LatestCustomers = () => <div className="card">Latest Customers</div>;

const RecentReviews = () => <div className="card">Recent Reviews</div>;
const ActivityFeed = () => <div className="card">Activity Feed</div>;
const QuickActions = () => <div className="card">Quick Actions</div>;

import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  AlertTriangle,
  TrendingUp,
  CreditCard,
  Activity,
} from "lucide-react";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
const [
  { count: productCount },
  { count: categoryCount },
  { data: orders },
  { data: latestProducts },
  { data: lowStockProducts },
  { count: orderCount },
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
  .select("total, created_at"),
  supabase
    .from("products")
    .select("id, name, price, stock, image_url")
    .order("created_at", { ascending: false })
    .limit(5),

  supabase
    .from("products")
    .select(
      "id, name, stock, low_stock_alert, image_url"
    )
    .lte("stock", 10)
    .order("stock", { ascending: true })
    .limit(5),

supabase
  .from("orders")
  .select("*", {
    count: "exact",
    head: true,
  }),


]);



const today = new Date();

const todayRevenue =
  orders
    ?.filter((order) => {
      const orderDate = new Date(order.created_at);

      return (
        orderDate.getDate() === today.getDate() &&
        orderDate.getMonth() === today.getMonth() &&
        orderDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce(
      (sum, order) => sum + Number(order.total),
      0
    ) ?? 0;



const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

const monthlyRevenue =
  orders
    ?.filter((order) => {
      const orderDate = new Date(order.created_at);

      return (
        orderDate.getMonth() === currentMonth &&
        orderDate.getFullYear() === currentYear
      );
    })
    .reduce(
      (sum, order) => sum + Number(order.total),
      0
    ) ?? 0;


const averageOrderValue =
  orderCount && orderCount > 0
    ? monthlyRevenue / orderCount
    : 0;



  return (
    <div className="space-y-8">
      {/* KPI Cards */}

      <div className="grid grid-cols-4 gap-6">
        <StatsCard
          title="Today's Revenue"
          value={`$${todayRevenue.toFixed(2)}`}
          description="Compared to yesterday"
          change="+12.4%"
          trend="up"
          icon={<DollarSign size={28} />}
        />

        <StatsCard
          title="Monthly Revenue"
          value={`$${monthlyRevenue.toFixed(2)}`}
          description="Compared to last month"
          change="+18.7%"
          trend="up"
          icon={<TrendingUp size={28} />}
        />

        <StatsCard
  title="Orders"
  value={String(orderCount ?? 0)}
  description="Total Orders"
  change=""
  trend="up"
  icon={<ShoppingCart size={28} />}
/>

        <StatsCard
          title="Products"
          value={String(productCount ?? 0)}
          description="Products Listed"
          change=""
          trend="up"
          icon={<Package size={28} />}
        />

        <StatsCard
          title="Categories"
          value={String(categoryCount ?? 0)}
          description="Store Categories"
          change=""
          trend="up"
          icon={<Users size={28} />}
        />

        <StatsCard
          title="Low Stock"
          value={String(lowStockProducts?.length ?? 0)}
          description="Need Restocking"
          change="-2"
          trend="down"
          icon={<AlertTriangle size={28} />}
        />

        <StatsCard
          title="Conversion Rate"
          value="4.8%"
          description="Store Conversion"
          change="+0.8%"
          trend="up"
          icon={<Activity size={28} />}
        />

        <StatsCard
          title="Average Order"
          value={`$${averageOrderValue.toFixed(2)}`}
          description="Average Order Value"
          change="+5.2%"
          trend="up"
          icon={<CreditCard size={28} />}
        />
      </div>

      {/* Charts */}

      <div className="grid grid-cols-2 gap-6">
        <RevenueChart />
        <SalesChart />
      </div>

      {/* Tables */}

      <div className="grid grid-cols-2 gap-6">
        <RecentOrders orders={[]} />
        <TopProducts
  products={latestProducts ?? []}
/>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <LatestCustomers />
        <LowStockProducts
  products={lowStockProducts ?? []}
/>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <RecentReviews />
        <ActivityFeed />
      </div>

      <QuickActions />
    </div>
  );
}