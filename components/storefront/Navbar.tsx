import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          Lumora
          <span className="text-emerald-400">.</span>
        </Link>

        <nav className="flex items-center gap-8">

          <Link
            href="/products"
            className="text-slate-300 transition hover:text-white"
          >
            Shop
          </Link>

          <Link
            href="#"
            className="text-slate-300 transition hover:text-white"
          >
            Categories
          </Link>

          <Link
            href="#"
            className="text-slate-300 transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="#"
            className="text-slate-300 transition hover:text-white"
          >
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}