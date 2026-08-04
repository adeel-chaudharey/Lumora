export default function CheckoutForm() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Contact Information
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-slate-400">
            First Name
          </label>

          <input
            type="text"
            placeholder="John"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Last Name
          </label>

          <input
            type="text"
            placeholder="Doe"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-slate-400">
            Email
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-slate-400">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+1 234 567 890"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-slate-400">
            Order Notes (Optional)
          </label>

          <textarea
            rows={4}
            placeholder="Anything we should know?"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
          />
        </div>
      </div>
    </div>
  );
}