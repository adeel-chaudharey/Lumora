import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default async function OrdersPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold text-white">
        Orders
      </h1>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
        <table className="min-w-full">
          <thead className="border-b border-slate-800 bg-slate-950">
            <tr>
              <th className="px-6 py-4 text-left text-slate-300">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-slate-300">
                Email
              </th>

              <th className="px-6 py-4 text-left text-slate-300">
                Total
              </th>

              <th className="px-6 py-4 text-left text-slate-300">
                Status
              </th>

              <th className="px-6 py-4 text-left text-slate-300">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {orders?.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >
                <td className="px-6 py-4 text-white">
                  {order.customer_name}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {order.customer_email}
                </td>

                <td className="px-6 py-4 text-emerald-400">
                  ${order.total}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-400">
                    {order.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-slate-400">
                  {new Date(order.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}