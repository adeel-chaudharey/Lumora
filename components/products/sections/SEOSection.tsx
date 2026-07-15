import { ProductFormData } from "@/types/product";
import { Dispatch, SetStateAction } from "react";

type SEOSectionProps = {
  formData: ProductFormData;
  setFormData: Dispatch<SetStateAction<ProductFormData>>;
};

export default function SEOSection({
  formData,
  setFormData,
}: SEOSectionProps) {
  return (
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
            value={formData.seoTitle}
            onChange={(e) =>
              setFormData({
                ...formData,
                seoTitle: e.target.value,
              })
            }
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
            value={formData.seoDescription}
            onChange={(e) =>
              setFormData({
                ...formData,
                seoDescription: e.target.value,
              })
            }
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none resize-none focus:border-emerald-400"
          />
        </div>
      </div>
    </div>
  );
}