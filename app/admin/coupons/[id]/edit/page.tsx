import CouponForm from "@/components/coupons/CouponForm";

export default function EditCouponPage() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-white">
        Edit Coupon
      </h1>

      <CouponForm />

    </div>
  );
}