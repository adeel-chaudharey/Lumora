import CheckoutForm from "@/components/checkout/CheckoutForm";
import AddressSelector from "@/components/checkout/AddressSelector";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentSection from "@/components/checkout/PaymentSection";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="mx-auto max-w-7xl px-8 py-12">
        <h1 className="mb-10 text-5xl font-bold text-white">
          Checkout
        </h1>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <AddressSelector />
            <CheckoutForm />
            <PaymentSection />
          </div>

          <div>
            <OrderSummary />
          </div>
        </div>
      </section>
    </main>
  );
}