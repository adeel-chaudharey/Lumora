import Image from "next/image";
import { StoreProduct } from "@/types/storefront";

interface Props {
  products: StoreProduct[];
}

export default function FeaturedProducts({
  products,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      <h2 className="mb-12 text-4xl font-bold text-white">
        Featured Products
      </h2>

      <div className="grid grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
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

              <p className="mt-3 text-slate-400 line-clamp-2">
                {product.short_description}
              </p>

              <p className="mt-6 text-2xl font-bold text-emerald-400">
                ${product.price}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}