import { Order } from "@/app/admin/orders/types";

interface Props {
  order: Order;
}

export default function OrderShipping({
  order,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-lg font-semibold text-white">
        Shipping
      </h2>

      <p>
        Fulfillment:
        {order.fulfillment_status}
      </p>

      <p>
        Tracking:
        {order.tracking_number || "Not Assigned"}
      </p>
    </div>
  );
}