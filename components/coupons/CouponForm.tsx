"use client";

import { useState } from "react";

export default function CouponForm() {
  const [code, setCode] = useState("");
  const [type, setType] = useState("percentage");
  const [value, setValue] = useState("");

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 space-y-6">

      <div>
        <label className="mb-2 block">
          Coupon Code
        </label>

        <input
          value={code}
          onChange={(e)=>setCode(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3"
        />
      </div>

      <div>
        <label className="mb-2 block">
          Discount Type
        </label>

        <select
          value={type}
          onChange={(e)=>setType(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3"
        >
          <option value="percentage">
            Percentage
          </option>

          <option value="fixed">
            Fixed Amount
          </option>
        </select>
      </div>

      <div>
        <label className="mb-2 block">
          Discount Value
        </label>

        <input
          type="number"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3"
        />
      </div>

      <button
        className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold hover:bg-emerald-500"
      >
        Save Coupon
      </button>

    </div>
  );
}