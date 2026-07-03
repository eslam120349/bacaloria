import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { PanelsTopLeft } from "lucide-react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="chalk-grid min-h-screen bg-board">
      <header className="border-b border-board-line/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-board-line/40">
              <PanelsTopLeft size={17} className="text-amber" strokeWidth={2.25} />
            </span>
            <span className="font-semibold tracking-tight text-chalk">
              السبورة
              <span className="mr-1.5 font-mono text-xs font-normal text-chalk/50">
                دليل معلم الرياضيات
              </span>
            </span>
          </Link>
          <span className="hidden font-mono text-xs text-chalk/40 sm:inline">
            نظام البكالوريا المصرية
          </span>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
      <footer className="border-t border-board-line/60 py-6">
        <p className="mx-auto max-w-5xl px-6 font-mono text-xs text-chalk/35">
          دليل داخلي للمعلمين — كل المحتوى قابل للتعديل والإضافة مباشرة من ملفات المشروع
        </p>
      </footer>
    </div>
  );
}
