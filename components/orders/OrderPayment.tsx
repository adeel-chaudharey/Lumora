import { Order } from "@/app/admin/orders/types";

interface Props {
  order: Order;
}

export default function OrderPayment({
  order,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-lg font-semibold text-white">
        Payment
      </h2>

      <p>
        Status: {order.payment_status}
      </p>

      <p>
        Stripe ID:
        <br />
        {order.stripe_payment_intent || "—"}
      </p>
    </div>
  );
}