import { Navigate, useParams } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { Breadcrumb } from "../components/Breadcrumb";
import { ToolLinkCard } from "../components/ToolLinkCard";
import { findLesson } from "../data/helpers";
import { Target, ListChecks, ClipboardList, Wrench, PencilLine } from "lucide-react";

export default function LessonPage() {
  const {
    subjectSlug = "",
    gradeSlug = "",
    trackSlug,
    lessonSlug = "",
  } = useParams();

  const found = findLesson(subjectSlug, gradeSlug, trackSlug, lessonSlug);
  if (!found) return <Navigate to="/" replace />;

  const { subject, grade, track, lesson } = found;

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: "الرئيسية", to: "/" },
          { label: subject.name, to: `/${subject.slug}` },
          { label: grade.name, to: `/${subject.slug}/${grade.slug}` },
          ...(track
            ? [{ label: track.name, to: `/${subject.slug}/${grade.slug}/${track.slug}` }]
            : []),
          { label: lesson.title },
        ]}
      />

      <div className="mb-10">
        <span className="font-mono text-sm font-medium text-amber">{lesson.unit}</span>
        <h1 className="mt-2 text-2xl font-bold leading-snug text-chalk sm:text-3xl">
          {lesson.title}
        </h1>
        <p className="mt-2 font-mono text-sm text-chalk/50">{lesson.duration}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* التحضير الإلكتروني */}
        <div className="paper-grid rounded-xl border border-paper-line bg-paper p-6 text-ink sm:p-8">
          <PrepBlock icon={Target} title="الأهداف التعليمية">
            <ul className="space-y-1.5">
              {lesson.objectives.map((o, i) => (
                <li key={i} className="flex gap-2 text-[15px] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-dark" />
                  {o}
                </li>
              ))}
            </ul>
          </PrepBlock>

          <PrepBlock icon={ListChecks} title="المتطلبات السابقة">
            <ul className="space-y-1.5">
              {lesson.prerequisites.map((p, i) => (
                <li key={i} className="flex gap-2 text-[15px] leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-soft/40" />
                  {p}
                </li>
              ))}
            </ul>
          </PrepBlock>

          <PrepBlock icon={ClipboardList} title="خطوات التحضير">
            <div className="space-y-5">
              {lesson.sections.map((section, i) => (
                <div key={i} className="border-r-2 border-paper-line pr-4">
                  <h3 className="font-semibold text-ink">{section.title}</h3>
                  <div className="mt-1.5 space-y-1.5">
                    {section.body.map((line, j) => (
                      <p key={j} className="text-[15px] leading-relaxed text-ink-soft">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PrepBlock>

          <PrepBlock icon={PencilLine} title="الواجب المنزلي">
            <ul className="space-y-1.5">
              {lesson.homework.map((h, i) => (
                <li key={i} className="flex gap-2 text-[15px] leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-soft/40" />
                  {h}
                </li>
              ))}
            </ul>
          </PrepBlock>
        </div>

        {/* الأدوات الإلكترونية */}
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="mb-3 flex items-center gap-2">
            <Wrench size={16} className="text-amber" />
            <h2 className="font-semibold text-chalk">الأدوات الإلكترونية</h2>
          </div>
          <div className="space-y-3">
            {lesson.tools.map((tool) => (
              <ToolLinkCard key={tool.name} tool={tool} />
            ))}
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function PrepBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Target;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7 last:mb-0">
      <div className="mb-2.5 flex items-center gap-2">
        <Icon size={16} className="text-amber-dark" strokeWidth={2.1} />
        <h2 className="font-semibold text-ink">{title}</h2>
      </div>
      {children}
    </div>
  );
}
