interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  cartItems: CartItem[];
}

export default function OrderSummary({
  cartItems,
}: Props) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 100 ? 0 : 10;

  const tax = subtotal * 0.1;

  const total = subtotal + shipping + tax;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Order Summary
      </h2>

      <div className="space-y-5">

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between"
          >
            <div>
              <p className="text-white">
                {item.name}
              </p>

              <p className="text-sm text-slate-400">
                Qty {item.quantity}
              </p>
            </div>

            <p className="text-white">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}

        <hr className="border-slate-700" />

        <div className="flex justify-between text-slate-300">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-slate-300">
          <span>Shipping</span>
          <span>
            {shipping === 0
              ? "FREE"
              : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between text-slate-300">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <hr className="border-slate-700" />

        <div className="flex justify-between text-xl font-bold text-white">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

      </div>
    </div>
  );
}