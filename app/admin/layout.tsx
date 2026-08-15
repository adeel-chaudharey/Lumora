import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { createClient } from "@/utils/supabase/server";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  // Check authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not logged in
  if (!user) {
    redirect("/auth/login");
  }

  // Check role
  const { data: customer } = await supabase
    .from("customers")
    .select("role")
    .eq("id", user.id)
    .single();

  // Not admin
  if (!customer || customer.role !== "admin") {
    redirect("/");
  }

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

//admin layout changed

//stripe web hook is getting started  from here , rolll back if needed