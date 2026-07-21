import { Order } from "@/app/admin/orders/types";

interface Props {
  order: Order;
}

export default function OrderSummary({
  order,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-lg font-semibold text-white">
        Summary
      </h2>

      <div className="space-y-2">
        <p>
          Subtotal:
          ${Number(order.subtotal).toFixed(2)}
        </p>

        <p>
          Tax:
          ${Number(order.tax).toFixed(2)}
        </p>

        <p>
          Shipping:
          ${Number(order.shipping).toFixed(2)}
        </p>

        <p>
          Discount:
          ${Number(order.discount).toFixed(2)}
        </p>

        <hr className="border-slate-700" />

        <p className="font-bold text-white">
          Total:
          ${Number(order.total).toFixed(2)}
        </p>
      </div>
    </div>
  );
}