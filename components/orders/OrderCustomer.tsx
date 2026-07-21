import { Order } from "@/app/admin/orders/types";

interface Props {
  order: Order;
}

export default function OrderCustomer({
  order,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-lg font-semibold text-white">
        Customer
      </h2>

      <p className="font-medium text-white">
        {order.customer_name}
      </p>

      <p className="text-slate-400">
        {order.customer_email}
      </p>
    </div>
  );
}