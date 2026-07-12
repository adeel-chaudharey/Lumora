"use client";

export default function ProductForm() {
  return (
    <div className="max-w-6xl mx-auto">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Add Product
        </h1>

        <p className="text-slate-400 mt-2">
          Create a new product for your store.
        </p>

      </div>

      <form className="space-y-8">

        {/* Basic Information */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">

          <h2 className="text-2xl font-semibold text-white mb-8">
            Basic Information
          </h2>

          <div className="grid grid-cols-2 gap-6">

            {/* Product Name */}
            <div className="col-span-2">
              <label className="block text-sm text-slate-300 mb-2">
                Product Name
              </label>
              <input
                type="text"
                placeholder="MacBook Pro M4"
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none transition-all duration-300 focus:border-emerald-400"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Slug
              </label>
              <input
                type="text"
                placeholder="macbook-pro-m4"
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Category
              </label>
              <select
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option>Select Category</option>
              </select>
            </div>

            {/* Short Description */}
            <div className="col-span-2">
              <label className="block text-sm text-slate-300 mb-2">
                Short Description
              </label>
              <textarea
                rows={3}
                placeholder="Short summary..."
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none resize-none focus:border-emerald-400"
              />
            </div>

            {/* Full Description */}
            <div className="col-span-2">
              <label className="block text-sm text-slate-300 mb-2">
                Full Description
              </label>
              <textarea
                rows={8}
                placeholder="Detailed product description..."
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none resize-none focus:border-emerald-400"
              />
            </div>

          </div>

        </div>

        {/* Pricing */}
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

        {/* Inventory */}
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

        {/* Media */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">

          <h2 className="text-2xl font-semibold text-white mb-8">
            Product Media
          </h2>

          <div className="border-2 border-dashed border-slate-700 rounded-2xl p-12 text-center transition-all duration-300 hover:border-emerald-400 hover:bg-slate-950">

            <div className="text-6xl mb-5">
              📷
            </div>

            <h3 className="text-xl font-semibold text-white">
              Drag & Drop Product Images
            </h3>

            <p className="text-slate-400 mt-3">
              PNG, JPG, JPEG or WEBP
            </p>

            <button
              type="button"
              className="mt-8 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-emerald-400"
            >
              Browse Files
            </button>

          </div>

          <div className="mt-8">
            <label className="block text-sm text-slate-300 mb-2">
              Product Video URL
            </label>
            <input
              type="text"
              placeholder="https://youtube.com/..."
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
            />
          </div>

        </div>

        {/* SEO */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">

          <h2 className="text-2xl font-semibold text-white mb-8">
            SEO
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                SEO Title
              </label>
              <input
                type="text"
                placeholder="Apple MacBook Pro M4 | Lumora"
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                SEO Description
              </label>
              <textarea
                rows={4}
                placeholder="Write a search engine friendly description..."
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none resize-none focus:border-emerald-400"
              />
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-8">

          <button
            type="button"
            className="rounded-xl border border-slate-700 px-6 py-3 text-white transition-all duration-300 hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            type="button"
            className="rounded-xl bg-slate-700 px-6 py-3 text-white transition-all duration-300 hover:bg-slate-600"
          >
            Save Draft
          </button>

          <button
            type="submit"
            className="rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.35)]"
          >
            Publish Product
          </button>

        </div>

      </form>

    </div>
  );
}