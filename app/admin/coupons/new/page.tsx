import CouponForm from "@/components/coupons/CouponForm";

export default function NewCouponPage() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-white">
        Create Coupon
      </h1>

      <CouponForm />

    </div>
  );
}