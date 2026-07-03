import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export type Crumb = {
  label: string;
  to?: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="مسار التصفح" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[13px] text-chalk/60">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="rounded px-1 py-0.5 transition-colors hover:text-amber"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? "px-1 py-0.5 text-chalk" : "px-1 py-0.5"}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronLeft size={13} strokeWidth={2.5} className="opacity-50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
