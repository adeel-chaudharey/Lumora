import { ProductFormData } from "@/types/product";
import { Dispatch, SetStateAction } from "react";

type PricingSectionProps = {
  formData: ProductFormData;
  setFormData: Dispatch<SetStateAction<ProductFormData>>;
};

export default function PricingSection({
  formData,
  setFormData,
}: PricingSectionProps) {


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
  value={formData.price}
  onChange={(e) =>
    setFormData({
      ...formData,
      price: Number(e.target.value),
    })
  }
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
  value={formData.comparePrice}
  onChange={(e) =>
    setFormData({
      ...formData,
      comparePrice: Number(e.target.value),
    })
  }
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
  value={formData.costPrice}
  onChange={(e) =>
    setFormData({
      ...formData,
      costPrice: Number(e.target.value),
    })
  }
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
  value={formData.tax}
  onChange={(e) =>
    setFormData({
      ...formData,
      tax: Number(e.target.value),
    })
  }
  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
/>
        </div>

        {/* Currency */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Currency
          </label>
<select
  value={formData.currency}
  onChange={(e) =>
    setFormData({
      ...formData,
      currency: e.target.value,
    })
  }
  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
>
  <option value="USD">USD</option>
  <option value="PKR">PKR</option>
  <option value="AUD">AUD</option>
  <option value="EUR">EUR</option>
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