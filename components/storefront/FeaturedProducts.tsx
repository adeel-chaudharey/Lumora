import Image from "next/image";
import Link from "next/link";

import { StoreProduct } from "@/types/storefront";

interface Props {
  products: StoreProduct[];
}

export default function FeaturedProducts({ products }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <h2 className="mb-12 text-4xl font-bold text-white">
        Featured Products
      </h2>

      {products.length === 0 ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">
          <p className="text-lg text-slate-400">
            No featured products available yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-300 hover:scale-105 hover:border-emerald-500"
            >
              {product.image_url ? (
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="h-60 w-full object-cover"
                />
              ) : (
                <div className="flex h-60 items-center justify-center bg-slate-800 text-6xl">
                  📦
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {product.name}
                </h3>

                {product.short_description && (
                  <p className="mt-3 line-clamp-2 text-slate-400">
                    {product.short_description}
                  </p>
                )}

                <p className="mt-6 text-2xl font-bold text-emerald-400">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}