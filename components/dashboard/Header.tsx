import { logout } from "@/app/auth/actions";

export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="mb-8 flex items-center justify-between border-b border-slate-800 pb-6">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back! Here&apos;s what&apos;s happening in your store today.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="
              w-64
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              px-4
              py-2.5
              text-sm
              text-white
              placeholder:text-slate-500
              outline-none
              transition-all
              duration-200
              focus:border-emerald-400
              focus:ring-2
              focus:ring-emerald-400/10
            "
          />
        </div>

        {/* Admin Info */}
        <div className="flex items-center gap-4 border-l border-slate-800 pl-4">
          <div className="text-right">
            <p className="text-sm font-semibold text-white">
              Admin
            </p>

            <p className="mt-0.5 text-xs text-slate-500">
              {today}
            </p>
          </div>

          {/* Logout */}
          <form action={logout}>
            <button
              type="submit"
              className="
                rounded-xl
                border
                border-red-500/30
                bg-red-500/5
                px-4
                py-2.5
                text-sm
                font-semibold
                text-red-400
                transition-all
                duration-200
                hover:border-red-500
                hover:bg-red-500
                hover:text-white
                hover:shadow-lg
                hover:shadow-red-500/10
              "
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}