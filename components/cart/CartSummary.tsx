interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Props {
  items: CartProduct[];
}

export default function CartSummary({
  items,
}: Props) {
  const subtotal = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;

  const total = subtotal + shipping;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Order Summary
      </h2>

      <div className="space-y-4 text-slate-300">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            ${shipping.toFixed(2)}
          </span>
        </div>

        <div className="border-t border-slate-700 pt-4">
          <div className="flex justify-between text-lg font-bold text-white">
            <span>Total</span>

            <span className="text-emerald-400">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <button className="mt-8 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-emerald-400">
        Proceed to Checkout
      </button>
    </div>
  );
}