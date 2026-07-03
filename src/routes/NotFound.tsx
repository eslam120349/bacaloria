import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { CompassIcon } from "lucide-react";

export default function NotFound() {
  return (
    <PageShell>
      <div className="flex flex-col items-center py-20 text-center">
        <CompassIcon size={36} className="mb-4 text-amber" strokeWidth={1.5} />
        <h1 className="text-xl font-bold text-chalk">الصفحة غير موجودة</h1>
        <p className="mt-2 max-w-sm text-[15px] text-chalk/60">
          يبدو أن هذا الدرس أو المسار لم يُضَف إلى الدليل بعد.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-md bg-amber px-4 py-2 font-medium text-board-dark transition-colors hover:bg-amber-dark"
        >
          العودة للرئيسية
        </Link>
      </div>
    </PageShell>
  );
}
