export default function FeaturedCategories() {
  const categories = [
    "Office",
    "Gaming",
    "Furniture",
    "Accessories",
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <h2 className="mb-12 text-4xl font-bold text-white">
        Shop by Category
      </h2>

      <div className="grid grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category}
            className="group cursor-pointer rounded-3xl border border-slate-800 bg-slate-900 p-10 transition duration-300 hover:scale-105 hover:border-emerald-500"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500/20 text-4xl">
              📦
            </div>

            <h3 className="text-2xl font-bold text-white">
              {category}
            </h3>

            <p className="mt-3 text-slate-400">
              Explore premium {category.toLowerCase()} products.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}