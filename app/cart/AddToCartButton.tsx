"use client";

import { ShoppingCart } from "lucide-react";

import { StoreProduct } from "@/types/storefront";

interface Props {
  product: StoreProduct;
}

export default function AddToCartButton({
  product,
}: Props) {
  function handleAddToCart() {
    console.log("Added:", product.name);
  }

  return (
    <button
      onClick={handleAddToCart}
      className="flex items-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-emerald-500"
    >
      <ShoppingCart size={22} />

      Add To Cart
    </button>
  );
}