import Link from "next/link";

export default function CouponHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Coupons
        </h1>

        <p className="mt-2 text-slate-400">
          Manage store discounts and promotions.
        </p>
      </div>

      <Link
        href="/admin/coupons/new"
        className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500 transition"
      >
        + New Coupon
      </Link>
    </div>
  );
}