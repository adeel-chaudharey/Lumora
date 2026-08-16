import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Products", href: "/admin/products" },
  { name: "Orders", href: "/admin/orders" },
  { name: "Customers", href: "/admin/customers" },
  { name: "Categories", href: "/admin/categories" },
  { name: "Coupons", href: "/admin/coupons" },
  { name: "Reviews", href: "/admin/reviews" },
  { name: "Inventory", href: "/admin/inventory" },
  { name: "Analytics", href: "/admin/analytics" },
  { name: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-40
        flex
        h-screen
        w-64
        flex-col
        border-r
        border-slate-800
        bg-slate-950
        px-5
        py-6
      "
    >
      {/* Logo */}
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Lumora<span className="text-emerald-400">.</span>
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          Admin Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="
              group
              relative
              flex
              items-center
              rounded-xl
              px-4
              py-3
              text-sm
              font-medium
              text-slate-400
              transition-all
              duration-200
              hover:bg-slate-800/70
              hover:text-white
            "
          >
            {/* Active/hover indicator */}
            <span
              className="
                absolute
                left-0
                h-6
                w-1
                rounded-r-full
                bg-emerald-400
                opacity-0
                transition-opacity
                duration-200
                group-hover:opacity-100
              "
            />

            {item.name}
          </Link>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-800 pt-4">
        <p className="px-2 text-xs text-slate-600">
          Lumora Admin
        </p>
      </div>
    </aside>
  );
}