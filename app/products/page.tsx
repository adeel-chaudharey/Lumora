import { getProducts } from "./queries";

import ProductGrid from "@/components/storefront/ProductGrid";
import ProductFilters from "@/components/storefront/ProductFilters";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-slate-950">

      <section className="mx-auto max-w-7xl px-8 py-12">

        <h1 className="mb-10 text-5xl font-bold text-white">
          Products
        </h1>

        <div className="grid grid-cols-12 gap-10">

          <aside className="col-span-3">
            <ProductFilters />
          </aside>

          <section className="col-span-9">
            <ProductGrid products={products} />
          </section>

        </div>

      </section>

    </main>
  );
}