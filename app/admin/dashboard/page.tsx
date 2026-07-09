import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatsCard from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1 p-8">
        <Header />

        <div className="grid grid-cols-4 gap-6 mt-8">
          <StatsCard
            title="Revenue"
            value="$0"
            description="Today's Revenue"
          />

          <StatsCard
            title="Orders"
            value="0"
            description="Pending Orders"
          />

          <StatsCard
            title="Products"
            value="0"
            description="Products Listed"
          />

          <StatsCard
            title="Customers"
            value="0"
            description="Registered Customers"
          />
        </div>
      </main>
    </div>
  );
}