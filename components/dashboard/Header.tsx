import { logout } from "@/app/auth/actions";



export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="flex items-center justify-between mb-10">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Welcome back! Here&apos;s what&apos;s happening in your store today.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-5
            py-3
            text-white
            outline-none
            w-72
            transition-all
            duration-300
            focus:border-emerald-400
            focus:shadow-[0_0_15px_rgba(52,211,153,0.2)]
          "
        />

        
        <div className="flex items-center gap-6">
  <div className="text-right">
    <p className="text-white font-semibold">
      Admin
    </p>

    <p className="text-slate-400 text-sm">
      {today}
    </p>
  </div>

  <form action={logout}>
    <button
      type="submit"
      className="
        rounded-xl
        border
        border-red-500
        px-5
        py-3
        font-semibold
        text-red-400
        transition-all
        duration-300
        hover:bg-red-500
        hover:text-white
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