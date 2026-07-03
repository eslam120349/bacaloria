import { Navigate, useParams } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { SelectCard } from "../components/SelectCard";
import { Breadcrumb } from "../components/Breadcrumb";
import { getSubject } from "../data/helpers";
import { GraduationCap } from "lucide-react";

export default function SubjectPage() {
  const { subjectSlug = "" } = useParams();
  const subject = getSubject(subjectSlug);

  if (!subject || !subject.available) return <Navigate to="/" replace />;

  return (
    <PageShell>
      <Breadcrumb
        items={[{ label: "الرئيسية", to: "/" }, { label: subject.name }]}
      />
      <h1 className="text-2xl font-bold text-chalk sm:text-3xl">{subject.name}</h1>
      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-chalk/65">
        اختر الصف الدراسي للوصول إلى الوحدات والدروس الخاصة به.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {subject.grades.map((grade) => (
          <SelectCard
            key={grade.slug}
            to={`/${subject.slug}/${grade.slug}`}
            title={grade.name}
            subtitle={grade.stage}
            icon={GraduationCap}
          />
        ))}
      </div>
    </PageShell>
  );
}
