import Image from "next/image";
import Link from "next/link";
import { StoreProduct } from "@/types/storefront";

interface Props {
  product: StoreProduct;
}
export default function ProductCard({
  product,
}: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-300 hover:scale-105 hover:border-emerald-500"
    >
      {product.image_url ? (
        <Image
          src={product.image_url}
          alt={product.name}
          width={500}
          height={400}
          className="h-64 w-full object-cover"
        />
      ) : (
        <div className="flex h-64 items-center justify-center bg-slate-800 text-6xl">
          📦
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-white">
          {product.name}
        </h3>

        <p className="mt-3 line-clamp-2 text-slate-400">
          {product.short_description}
        </p>

        <p className="mt-6 text-2xl font-bold text-emerald-400">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}