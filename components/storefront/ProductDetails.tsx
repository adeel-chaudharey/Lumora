import Image from "next/image";
import { StoreProduct } from "@/types/storefront";
import AddToCartButton from "@/components/cart/AddToCartButton";
interface Props {
  product: StoreProduct;
}

export default function ProductDetails({
  product,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-16">

      <div>
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            width={700}
            height={700}
            className="rounded-3xl border border-slate-800 object-cover"
          />
        ) : (
          <div className="flex h-[650px] items-center justify-center rounded-3xl bg-slate-900 text-8xl">
            📦
          </div>
        )}
      </div>

      <div className="space-y-8">

        <h1 className="text-5xl font-bold text-white">
          {product.name}
        </h1>

        <p className="text-lg text-slate-400">
          {product.description}
        </p>

        <div className="text-4xl font-bold text-emerald-400">
          ${product.price}
        </div>

        <div className="space-y-2">

          <p>
            <span className="font-semibold">
              Brand:
            </span>{" "}
            {product.brand || "—"}
          </p>

          <p>
            <span className="font-semibold">
              SKU:
            </span>{" "}
            {product.sku}
          </p>

          <p>
            <span className="font-semibold">
              Stock:
            </span>{" "}
            {product.stock}
          </p>

        </div>

        <AddToCartButton product={product} />

      </div>

    </div>
  );
}