export default function PricingSection() {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">

      <h2 className="text-2xl font-semibold text-white mb-8">
        Pricing
      </h2>

      <div className="grid grid-cols-2 gap-6">

        {/* Selling Price */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Selling Price
          </label>

          <input
            type="number"
            placeholder="999"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Compare At Price */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Compare At Price
          </label>

          <input
            type="number"
            placeholder="1199"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Cost Price */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Cost Price
          </label>

          <input
            type="number"
            placeholder="700"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Tax */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Tax (%)
          </label>

          <input
            type="number"
            placeholder="15"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Currency */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Currency
          </label>

          <select
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          >
            <option>USD</option>
            <option>PKR</option>
            <option>AUD</option>
            <option>EUR</option>
          </select>
        </div>

        {/* Profit Margin */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Profit Margin
          </label>

          <input
            disabled
            placeholder="Auto Calculated"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-slate-400"
          />
        </div>

      </div>

    </div>
  );
}