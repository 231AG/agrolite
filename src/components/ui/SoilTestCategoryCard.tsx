"use client";

import { useId, useState } from "react";
import {
  Atom,
  CheckCircle,
  ChevronDown,
  FlaskConical,
  Layers,
  Microscope,
  Recycle,
  ShieldAlert,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import type { SoilTestCategory, SoilTestIcon } from "@/lib/soil-testing";

const ICONS: Record<SoilTestIcon, LucideIcon> = {
  physical: Layers,
  chemical: FlaskConical,
  macro: Sprout,
  micro: Atom,
  biological: Microscope,
  contamination: ShieldAlert,
  amendment: Recycle,
};

/** Parameter list is always visible from md up; collapsible on mobile. */
export function SoilTestCategoryCard({ category }: { category: SoilTestCategory }) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const Icon = ICONS[category.icon];

  return (
    <article
      id={category.id}
      className="h-full bg-white rounded-2xl border border-border shadow-sm p-6 scroll-mt-28"
    >
      <h3 className="font-display text-xl font-bold text-secondary heading-display">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={listId}
          className="w-full flex items-center gap-4 text-left md:cursor-default"
        >
          <span className="shrink-0 w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
          </span>
          <span className="flex-1">{category.title}</span>
          <ChevronDown
            className={`md:hidden w-5 h-5 text-primary shrink-0 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <p className="text-sm text-muted mt-3">{category.why}</p>
      <ul
        id={listId}
        className={`${open ? "block" : "hidden"} md:block mt-5 space-y-2.5`}
      >
        {category.parameters.map((parameter) => (
          <li key={parameter} className="flex items-start gap-2.5 text-sm">
            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <span>{parameter}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
