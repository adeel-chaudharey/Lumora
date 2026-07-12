export default function InventorySection() {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">

      <h2 className="text-2xl font-semibold text-white mb-8">
        Inventory
      </h2>

      <div className="grid grid-cols-2 gap-6">

        {/* SKU */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            SKU
          </label>

          <input
            type="text"
            placeholder="SKU-10001"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Barcode */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Barcode
          </label>

          <input
            type="text"
            placeholder="1234567890123"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Quantity in Stock
          </label>

          <input
            type="number"
            placeholder="50"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Low Stock */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Low Stock Alert
          </label>

          <input
            type="number"
            placeholder="10"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Weight (kg)
          </label>

          <input
            type="number"
            placeholder="1.5"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Brand
          </label>

          <input
            type="text"
            placeholder="Apple"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

      </div>

      {/* Inventory Settings */}
      <div className="mt-8 space-y-5">

        <label className="flex items-center gap-3 text-slate-300">
          <input
            type="checkbox"
            className="h-5 w-5 accent-emerald-500"
          />
          Track Inventory
        </label>

        <label className="flex items-center gap-3 text-slate-300">
          <input
            type="checkbox"
            className="h-5 w-5 accent-emerald-500"
          />
          Continue Selling When Out of Stock
        </label>

      </div>

    </div>
  );
}