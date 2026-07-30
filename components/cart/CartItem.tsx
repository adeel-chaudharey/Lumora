"use client";
import Image from "next/image";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
} from "@/app/cart/actions";
interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string | null;
}

interface Props {
  item: CartProduct;
}

export default function CartItem({ item }: Props) {


const [isPending, startTransition] = useTransition();
const router = useRouter();

function handleIncrease() {
  startTransition(async () => {
    await increaseQuantity(item.id);
    router.refresh();
  });
}

function handleDecrease() {
  startTransition(async () => {
    await decreaseQuantity(item.id);
    router.refresh();
  });
}


function handleRemove() {
  startTransition(async () => {
    await removeCartItem(item.id);
    router.refresh();
  });
}

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-5">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={90}
            height={90}
            className="rounded-xl object-cover"
          />
        ) : (
          <div className="flex h-[90px] w-[90px] items-center justify-center rounded-xl bg-slate-800 text-3xl">
            📦
          </div>
        )}

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
          <button
  onClick={handleDecrease}
  disabled={isPending}
  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-white transition hover:bg-slate-700 disabled:opacity-50"
>
  −
</button>

          <span className="w-6 text-center text-white">
            {item.quantity}
          </span>

          <button
  onClick={handleIncrease}
  disabled={isPending}
  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-white transition hover:bg-slate-700 disabled:opacity-50"
>
  +
</button>
        </div>

        <button
  onClick={handleRemove}
  disabled={isPending}
  className="mt-4 text-sm text-red-400 transition hover:text-red-300 disabled:opacity-50"
>
  Remove
</button>

        <p className="mt-2 font-semibold text-emerald-400">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}