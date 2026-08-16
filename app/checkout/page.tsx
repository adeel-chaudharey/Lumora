import CheckoutForm from "@/components/checkout/CheckoutForm";
import AddressSelector from "@/components/checkout/AddressSelector";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentSection from "@/components/checkout/PaymentSection";
import { getCheckoutData } from "./queries";

export default async function CheckoutPage() {

const data = await getCheckoutData();
const cartItems = data.flatMap(item => item.products.map(product => ({
  ...product,
  quantity: item.quantity
})));


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

          <OrderSummary cartItems={cartItems} />
        </div>
      </section>
    </main>
  );
}