import Link from "next/link";
import { Coupon } from "@/app/admin/coupons/types";

interface Props {
  coupons: Coupon[];
}

export default function CouponTable({
  coupons,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <table className="w-full">
        <thead className="bg-slate-800">
          <tr>
            <th className="px-6 py-4 text-left">Code</th>
            <th className="px-6 py-4 text-left">Type</th>
            <th className="px-6 py-4 text-left">Value</th>
            <th className="px-6 py-4 text-left">Used</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left"></th>
          </tr>
        </thead>

        <tbody>
          {coupons.map((coupon) => (
            <tr
              key={coupon.id}
              className="border-t border-slate-800 hover:bg-slate-800/60 transition"
            >
              <td className="px-6 py-4 font-semibold">
                {coupon.code}
              </td>

              <td className="px-6 py-4">
                {coupon.discount_type}
              </td>

              <td className="px-6 py-4">
                {coupon.discount_value}
              </td>

              <td className="px-6 py-4">
                {coupon.used_count}
              </td>

              <td className="px-6 py-4">
                {coupon.active ? (
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
                    Active
                  </span>
                ) : (
                  <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400">
                    Disabled
                  </span>
                )}
              </td>

              <td className="px-6 py-4">
                <Link
                  href={`/admin/coupons/${coupon.id}/edit`}
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}