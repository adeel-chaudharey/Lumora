import { notFound } from "next/navigation";

import { getProduct } from "./queries";

import ProductDetails from "@/components/storefront/ProductDetails";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950">

      <section className="mx-auto max-w-7xl px-8 py-12">

        <ProductDetails product={product} />

      </section>

    </main>
  );
}