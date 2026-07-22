export default function CartPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="mx-auto max-w-7xl px-8 py-12">
        <h1 className="mb-10 text-5xl font-bold text-white">
          Shopping Cart
        </h1>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-slate-400">
            Your cart is empty.
          </p>
        </div>
      </section>
    </main>
  );
}