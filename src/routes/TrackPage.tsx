import { Navigate, useParams } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { Breadcrumb } from "../components/Breadcrumb";
import { LessonGrid } from "../components/LessonGrid";
import { getGrade, getSubject, getTrack } from "../data/helpers";

export default function TrackPage() {
  const { subjectSlug = "", gradeSlug = "", trackSlug = "" } = useParams();
  const subject = getSubject(subjectSlug);
  const grade = getGrade(subjectSlug, gradeSlug);
  const track = getTrack(subjectSlug, gradeSlug, trackSlug);

  if (!subject || !grade || !track) return <Navigate to="/" replace />;

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: "الرئيسية", to: "/" },
          { label: subject.name, to: `/${subject.slug}` },
          { label: grade.name, to: `/${subject.slug}/${grade.slug}` },
          { label: track.name },
        ]}
      />
      <h1 className="text-2xl font-bold text-chalk sm:text-3xl">{track.name}</h1>
      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-chalk/65">
        {track.equivalent} — {grade.name}
      </p>

      <div className="mt-8">
        <LessonGrid
          subjectSlug={subject.slug}
          gradeSlug={grade.slug}
          trackSlug={track.slug}
          lessons={track.lessons}
        />
      </div>
    </PageShell>
  );
}
