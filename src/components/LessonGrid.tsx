import { SelectCard } from "./SelectCard";
import { NotebookText } from "lucide-react";
import type { Lesson } from "../data/types";

export function LessonGrid({
  subjectSlug,
  gradeSlug,
  trackSlug,
  lessons,
}: {
  subjectSlug: string;
  gradeSlug: string;
  trackSlug?: string;
  lessons: Lesson[];
}) {
  const units = Array.from(new Set(lessons.map((l) => l.unit)));
  const base = trackSlug
    ? `/${subjectSlug}/${gradeSlug}/${trackSlug}`
    : `/${subjectSlug}/${gradeSlug}`;

  return (
    <div className="space-y-9">
      {units.map((unit) => (
        <section key={unit}>
          <h2 className="mb-3 font-mono text-sm font-medium text-amber">{unit}</h2>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {lessons
              .filter((l) => l.unit === unit)
              .map((lesson) => (
                <SelectCard
                  key={lesson.slug}
                  to={`${base}/lesson/${lesson.slug}`}
                  title={lesson.title}
                  subtitle={lesson.duration}
                  icon={NotebookText}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
