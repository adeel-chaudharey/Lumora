import React from 'react'

import Image from "next/image";

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Props {
  item: CartProduct;
}

export default function CartItem({ item }: Props) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-5">
        <Image
          src={item.image}
          alt={item.name}
          width={90}
          height={90}
          className="rounded-xl object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold text-white">
            {item.name}
          </h3>

          <p className="mt-2 text-slate-400">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="text-right">
        <div className="flex items-center gap-3">
      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-white transition hover:bg-slate-700">
        −
      </button>

      <span className="w-6 text-center text-white">
        {item.quantity}
      </span>

      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-white transition hover:bg-slate-700">
        +
      </button>
    </div>



    <button className="mt-4 text-sm text-red-400 transition hover:text-red-300">
      Remove
    </button>




        <p className="mt-2 font-semibold text-emerald-400">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}