import { ProductFormData } from "@/types/product";
import { Dispatch, SetStateAction } from "react";

type MediaSectionProps = {
  formData: ProductFormData;
  setFormData: Dispatch<SetStateAction<ProductFormData>>;
};

export default function MediaSection({
  formData,
  setFormData,
}: MediaSectionProps) {
  return (
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
          value={formData.videoUrl}
          onChange={(e) =>
            setFormData({
              ...formData,
              videoUrl: e.target.value,
            })
          }
          className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white outline-none focus:border-emerald-400"
        />
      </div>
    </div>
  );
}