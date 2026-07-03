import { PageShell } from "../components/PageShell";
import { SelectCard } from "../components/SelectCard";
import { curriculum } from "../data/curriculum";
import { totalLessonCount } from "../data/helpers";
import { subjectIconMap, defaultSubjectIcon } from "../components/icons";

export default function Home() {
  return (
    <PageShell>
      <div className="mb-12 max-w-2xl">
        <span className="chalk-underline font-mono text-sm font-medium text-amber">
          دليل المعلم الرقمي
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-chalk sm:text-4xl">
          كل ما يحتاجه المعلم لتحضير حصته، في مكان واحد
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-chalk/65">
          اختر المادة، ثم الصف، ثم الدرس — لتصل مباشرة إلى التحضير الإلكتروني الكامل
          وروابط الأدوات التفاعلية (مثل Desmos وGeoGebra ومحاكيات PhET) المناسبة له،
          متوافقة مع نظام البكالوريا المصرية الجديد.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {curriculum.map((subject) => {
          const Icon = subjectIconMap[subject.slug] ?? defaultSubjectIcon;
          const count = subject.available ? totalLessonCount(subject) : 0;
          return (
            <SelectCard
              key={subject.slug}
              to={`/${subject.slug}`}
              title={subject.name}
              subtitle={subject.description}
              icon={Icon}
              disabled={!subject.available}
              meta={
                subject.available ? (
                  <span className="inline-flex items-center rounded-full bg-amber/15 px-2.5 py-0.5 font-mono text-xs font-medium text-amber-dark">
                    {count} درسًا جاهزًا
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-ink/5 px-2.5 py-0.5 font-mono text-xs font-medium text-ink-soft">
                    قريبًا
                  </span>
                )
              }
            />
          );
        })}
      </div>
    </PageShell>
  );
}
