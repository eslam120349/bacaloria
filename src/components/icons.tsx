import {
  LineChart,
  FlaskConical,
  Compass,
  PlayCircle,
  NotebookPen,
  PanelsTopLeft,
  Link2,
  Calculator,
  BookOpen,
  Atom,
  Languages,
  type LucideIcon,
} from "lucide-react";
import type { ToolIconKey } from "../data/types";

export const toolIconMap: Record<ToolIconKey, LucideIcon> = {
  graph: LineChart,
  simulation: FlaskConical,
  geometry: Compass,
  video: PlayCircle,
  worksheet: NotebookPen,
  board: PanelsTopLeft,
  link: Link2,
};

export const subjectIconMap: Record<string, LucideIcon> = {
  math: Calculator,
  science: Atom,
  arabic: Languages,
};

export const defaultSubjectIcon = BookOpen;
