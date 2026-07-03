import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, type LucideIcon } from "lucide-react";

export function SelectCard({
  to,
  title,
  subtitle,
  icon: Icon,
  disabled = false,
  meta,
}: {
  to: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  disabled?: boolean;
  meta?: ReactNode;
}) {
  const content = (
    <div
      className={`group relative flex items-center gap-4 rounded-lg border bg-paper p-5 transition-all ${
        disabled
          ? "border-paper-line/70 opacity-60"
          : "border-paper-line shadow-[0_1px_0_0_rgba(0,0,0,0.03)] hover:-translate-y-0.5 hover:border-amber hover:shadow-md"
      }`}
    >
      {Icon && (
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${
            disabled ? "bg-board/10" : "bg-board/10 group-hover:bg-amber/15"
          }`}
        >
          <Icon
            size={20}
            strokeWidth={1.9}
            className={disabled ? "text-ink-soft" : "text-board group-hover:text-amber-dark"}
          />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-ink">{title}</h3>
        {subtitle && <p className="mt-0.5 truncate text-sm text-ink-soft">{subtitle}</p>}
        {meta && <div className="mt-2">{meta}</div>}
      </div>
      {!disabled && (
        <ChevronLeft
          size={18}
          className="shrink-0 text-ink-soft/50 transition-transform group-hover:-translate-x-0.5 group-hover:text-amber-dark"
        />
      )}
    </div>
  );

  if (disabled) {
    return <div aria-disabled="true">{content}</div>;
  }

  return (
    <Link to={to} className="block rounded-lg focus-visible:outline-none">
      {content}
    </Link>
  );
}
