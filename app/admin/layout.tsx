import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Header />
          {children}
        </div>
      </main>
    </div>
  );
}