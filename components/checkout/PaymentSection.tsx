import { ShieldCheck } from "lucide-react";
import { createCheckoutSession } from "@/app/checkout/actions";

export default function PaymentSection() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Payment
      </h2>

      <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

        <div className="flex items-center gap-3">
          <ShieldCheck
            size={24}
            className="text-emerald-500"
          />

          <div>
            <p className="font-semibold text-white">
              Secure Stripe Checkout
            </p>

            <p className="text-sm text-slate-400">
              Your payment is securely processed by Stripe.
              We never store your card information.
            </p>
          </div>
        </div>

        <div className="mt-8">
         <form action={createCheckoutSession}>
  <button
    className="w-full rounded-xl bg-emerald-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-emerald-500"
  >
    Pay with Stripe
  </button>
</form>
        </div>

        <div className="mt-5 text-center text-sm text-slate-500">
          Visa • Mastercard • American Express • Apple Pay • Google Pay
        </div>

      </div>
    </div>
  );
}