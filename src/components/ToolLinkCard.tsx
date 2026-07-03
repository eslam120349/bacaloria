import { ArrowUpLeft } from "lucide-react";
import { toolIconMap } from "./icons";
import type { ToolLink } from "../data/types";

export function ToolLinkCard({ tool }: { tool: ToolLink }) {
  const Icon = toolIconMap[tool.icon];

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3.5 rounded-lg border border-board-line/70 bg-board-dark/40 p-4 transition-colors hover:border-amber/70 hover:bg-board-dark/70"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-board-line/40">
        <Icon size={18} strokeWidth={1.9} className="text-amber" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-chalk">{tool.name}</h4>
          <ArrowUpLeft
            size={14}
            className="shrink-0 text-chalk/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-[-2px] group-hover:text-amber"
          />
        </div>
        <p className="mt-1 text-sm leading-relaxed text-chalk/65">{tool.note}</p>
      </div>
    </a>
  );
}
