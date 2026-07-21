import { Coupon } from "@/app/admin/coupons/types";

interface Props {
  coupons: Coupon[];
}

export default function CouponStats({
  coupons,
}: Props) {
  const activeCoupons = coupons.filter(
    (coupon) => coupon.active
  ).length;

  const expiredCoupons = coupons.filter(
    (coupon) =>
      coupon.expires_at &&
      new Date(coupon.expires_at) < new Date()
  ).length;

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400">
          Total Coupons
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {coupons.length}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400">
          Active
        </p>

        <h2 className="mt-2 text-3xl font-bold text-emerald-400">
          {activeCoupons}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400">
          Expired
        </p>

        <h2 className="mt-2 text-3xl font-bold text-red-400">
          {expiredCoupons}
        </h2>
      </div>
    </div>
  );
}