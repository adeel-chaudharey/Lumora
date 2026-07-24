type Order = {
  id: string;
  customer_name: string;
  total: number;
  status: string;
};

type Props = {
  orders: Order[];
};

export default function RecentOrders({
  orders,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Orders
      </h2>

      {orders.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center">
          <p className="text-slate-400">
            No orders yet.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Orders will appear here once customers start purchasing.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between rounded-lg bg-slate-950 p-4"
            >
              <div>
                <p className="font-medium text-white">
                  {order.customer_name}
                </p>

                <p className="text-sm text-slate-400">
                  {order.status}
                </p>
              </div>

              <span className="font-semibold text-emerald-400">
                ${order.total}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}