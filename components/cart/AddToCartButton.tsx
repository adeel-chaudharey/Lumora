"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";

import { StoreProduct } from "@/types/storefront";
import { addToCart } from "@/app/cart/actions";

interface Props {
  product: StoreProduct;
}

export default function AddToCartButton({
  product,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleAddToCart() {
    try {
      setIsLoading(true);
      setMessage("");

      await addToCart(product.id);

      setMessage("Added to cart ✓");
    } catch (error) {
      console.error(error);
      setMessage("Could not add to cart");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className="flex items-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ShoppingCart size={22} />

        {isLoading ? "Adding..." : "Add To Cart"}
      </button>

      {message && (
        <p className="text-sm text-emerald-400">
          {message}
        </p>
      )}
    </div>
  );
}