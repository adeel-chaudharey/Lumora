import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ReactNode } from "react";

type StatsCardProps = {
  title: string;
  value: string | number;
  description: string;
  change: string;
  trend: "up" | "down";
  icon: ReactNode;
};

export default function StatsCard({
  title,
  value,
  description,
  change,
  trend,
  icon,
}: StatsCardProps) {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:border-emerald-400/40
        hover:shadow-[0_0_25px_rgba(52,211,153,0.18)]
      "
    >
      <div className="flex items-center justify-between">
        <div className="text-emerald-400 text-2xl">
          {icon}
        </div>

        <div
          className={`flex items-center gap-1 text-sm font-medium ${
            trend === "up"
              ? "text-emerald-400"
              : "text-red-400"
          }`}
        >
          {trend === "up" ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {change}
        </div>
      </div>

      <p className="text-slate-400 mt-5">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-white mt-2">
        {value}
      </h2>

      <p className="text-slate-500 mt-4">
        {description}
      </p>
    </div>
  );
}

 