export default function AddressSelector() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Shipping Address
      </h2>

      <div className="space-y-4">

        <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-emerald-500 bg-slate-800 p-5">
          <input
            type="radio"
            defaultChecked
            name="address"
            className="mt-1"
          />

          <div>
            <p className="font-semibold text-white">
              Home
            </p>

            <p className="text-slate-400">
              John Doe
            </p>

            <p className="text-slate-400">
              221B Baker Street
            </p>

            <p className="text-slate-400">
              London, UK
            </p>
          </div>
        </label>

        <button
          className="w-full rounded-xl border border-dashed border-slate-700 py-4 text-slate-400 transition hover:border-emerald-500 hover:text-white"
        >
          + Add New Address
        </button>

      </div>
    </div>
  );
}