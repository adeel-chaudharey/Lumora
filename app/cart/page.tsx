import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  const cartItems = [
    {
      id: "1",
      name: "Lumora Hoodie",
      price: 79.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    },
    {
      id: "2",
      name: "Wireless Headphones",
      price: 129.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },
  ];

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