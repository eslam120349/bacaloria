import { Navigate, useParams } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { SelectCard } from "../components/SelectCard";
import { Breadcrumb } from "../components/Breadcrumb";
import { LessonGrid } from "../components/LessonGrid";
import { getGrade, getSubject } from "../data/helpers";
import { Route } from "lucide-react";

export default function GradePage() {
  const { subjectSlug = "", gradeSlug = "" } = useParams();
  const subject = getSubject(subjectSlug);
  const grade = getGrade(subjectSlug, gradeSlug);

  if (!subject || !grade) return <Navigate to="/" replace />;

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: "الرئيسية", to: "/" },
          { label: subject.name, to: `/${subject.slug}` },
          { label: grade.name },
        ]}
      />
      <h1 className="text-2xl font-bold text-chalk sm:text-3xl">{grade.name}</h1>
      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-chalk/65">{grade.stage}</p>

      {grade.hasTracks ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {grade.tracks?.map((track) => (
            <SelectCard
              key={track.slug}
              to={`/${subject.slug}/${grade.slug}/${track.slug}`}
              title={track.name}
              subtitle={track.equivalent}
              icon={Route}
              meta={
                <span className="font-mono text-xs text-ink-soft">
                  {track.lessons.length} درسًا
                </span>
              }
            />
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <LessonGrid subjectSlug={subject.slug} gradeSlug={grade.slug} lessons={grade.lessons ?? []} />
        </div>
      )}
    </PageShell>
  );
}
