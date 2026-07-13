export default function ActionButtons() {
  return (
    <div className="flex justify-end gap-4 pt-8">

      <button
        type="button"
        className="rounded-xl border border-slate-700 px-6 py-3 text-white transition-all duration-300 hover:bg-slate-800"
      >
        Cancel
      </button>

      <button

      //ok
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
  );
}