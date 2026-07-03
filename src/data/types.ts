// كل المحتوى هنا عبارة عن بيانات ثابتة (لا قاعدة بيانات) — لإضافة درس جديد
// يكفي إضافة عنصر جديد لمصفوفة lessons في ملف curriculum.ts

export type ToolLink = {
  name: string; // اسم الأداة، مثلاً "Desmos"
  url: string; // رابط الأداة أو المحاكاة مباشرة
  icon: ToolIconKey;
  note: string; // شرح مختصر لكيفية استخدام الأداة في هذا الدرس
};

export type ToolIconKey =
  | "graph"
  | "simulation"
  | "geometry"
  | "video"
  | "worksheet"
  | "board"
  | "link";

export type LessonSection = {
  title: string;
  body: string[]; // فقرات نصية، كل فقرة سطر مستقل
};

export type Lesson = {
  slug: string;
  title: string;
  unit: string; // اسم الوحدة التي ينتمي إليها الدرس
  duration: string; // مثال: "حصتان (90 دقيقة)"
  objectives: string[];
  prerequisites: string[];
  sections: LessonSection[]; // خطوات التحضير: تمهيد، عرض، تطبيق، تقويم...
  tools: ToolLink[];
  homework: string[];
};

export type Track = {
  slug: string;
  name: string;
  equivalent: string; // المسمى المقابل في النظام القديم
  lessons: Lesson[];
};

export type Grade = {
  slug: string;
  name: string;
  stage: string; // وصف المرحلة (تمهيدية / تخصصية)
  hasTracks: boolean;
  lessons?: Lesson[]; // تُستخدم عند عدم وجود مسارات (الصف الأول الثانوي)
  tracks?: Track[]; // تُستخدم عند وجود مسارات (الصف الثاني والثالث)
};

export type Subject = {
  slug: string;
  name: string;
  description: string;
  available: boolean; // مادة مفعّلة أم "قريباً"
  grades: Grade[];
};
