import { curriculum } from "./curriculum";
import type { Grade, Lesson, Subject, Track } from "./types";

export function getSubject(subjectSlug: string): Subject | undefined {
  return curriculum.find((s) => s.slug === subjectSlug);
}

export function getGrade(subjectSlug: string, gradeSlug: string): Grade | undefined {
  return getSubject(subjectSlug)?.grades.find((g) => g.slug === gradeSlug);
}

export function getTrack(
  subjectSlug: string,
  gradeSlug: string,
  trackSlug: string
): Track | undefined {
  return getGrade(subjectSlug, gradeSlug)?.tracks?.find((t) => t.slug === trackSlug);
}

export type LessonLocation = {
  subject: Subject;
  grade: Grade;
  track?: Track;
  lesson: Lesson;
};

/** يبحث عن درس بمساره الكامل بغض النظر عن وجود مسار أو عدمه */
export function findLesson(
  subjectSlug: string,
  gradeSlug: string,
  trackSlug: string | undefined,
  lessonSlug: string
): LessonLocation | undefined {
  const subject = getSubject(subjectSlug);
  const grade = subject?.grades.find((g) => g.slug === gradeSlug);
  if (!subject || !grade) return undefined;

  if (grade.hasTracks) {
    const track = grade.tracks?.find((t) => t.slug === trackSlug);
    const lesson = track?.lessons.find((l) => l.slug === lessonSlug);
    if (!track || !lesson) return undefined;
    return { subject, grade, track, lesson };
  }

  const lesson = grade.lessons?.find((l) => l.slug === lessonSlug);
  if (!lesson) return undefined;
  return { subject, grade, lesson };
}

/** يجمع كل الدروس في مسار أو صف معين، مع مراعاة وجود مسارات من عدمه */
export function lessonsFor(grade: Grade, trackSlug?: string): Lesson[] {
  if (!grade.hasTracks) return grade.lessons ?? [];
  const track = grade.tracks?.find((t) => t.slug === trackSlug);
  return track?.lessons ?? [];
}

export function totalLessonCount(subject: Subject): number {
  return subject.grades.reduce((sum, grade) => {
    if (grade.hasTracks) {
      return sum + (grade.tracks?.reduce((s, t) => s + t.lessons.length, 0) ?? 0);
    }
    return sum + (grade.lessons?.length ?? 0);
  }, 0);
}
