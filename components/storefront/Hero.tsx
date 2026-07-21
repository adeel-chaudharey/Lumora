import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl items-center justify-between px-8">

      <div className="max-w-2xl">

        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-400">
          Premium Workspace
        </p>

        <h1 className="text-6xl font-black leading-tight text-white">

          Build Your

          <span className="block text-emerald-400">
            Dream Workspace
          </span>

        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-400">

          Premium office furniture,
          accessories and productivity
          essentials carefully selected
          for modern professionals.

        </p>

        <div className="mt-10 flex gap-5">

          <Link
            href="/products"
            className="rounded-xl bg-emerald-600 px-7 py-4 font-semibold transition hover:scale-105 hover:bg-emerald-500"
          >
            Shop Now
          </Link>

          <Link
            href="/products"
            className="rounded-xl border border-slate-700 px-7 py-4 transition hover:border-emerald-400"
          >
            Explore
          </Link>

        </div>

      </div>

      <div className="flex h-[500px] w-[500px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-slate-900">

        <span className="text-8xl">
          💻
        </span>

      </div>

    </section>
  );
}