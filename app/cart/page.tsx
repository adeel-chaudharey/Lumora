import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";
import { getCartItems } from "./queries";
export default async function CartPage() {
 const cartItems = await getCartItems();

  return (
    <main className="min-h-screen bg-slate-950">
      <section className="mx-auto max-w-7xl px-8 py-12">
        <h1 className="mb-10 text-5xl font-bold text-white">
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CartList items={cartItems} />
          </div>

          <CartSummary items={cartItems} />
        </div>
      </section>
    </main>
  );
}