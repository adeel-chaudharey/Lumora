import Navbar from "@/components/storefront/Navbar";
import Hero from "@/components/storefront/Hero";
import FeaturedCategories from "@/components/storefront/FeaturedCategories";

import FeaturedProducts from "@/components/storefront/FeaturedProducts";
import { getFeaturedProducts } from "./storefront/queries";
export default async function HomePage() {
  const featuredProducts =
    await getFeaturedProducts();

  return (
    <main className="min-h-screen bg-slate-950">

      <Navbar />

      <Hero />

      <FeaturedCategories />

      <FeaturedProducts
        products={featuredProducts}
      />

    </main>
  );
}