"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { BragbookCategory as Category } from "@/lib/bragbook-data";

export default function BragbookCategory({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-paper/20 last:border-b">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`bragbook-cat-${category.slug}`}
        className="w-full py-6 md:py-8 flex items-start justify-between gap-6 text-left group"
      >
        <div className="flex items-start gap-4 md:gap-8 flex-1 min-w-0">
          <span className="font-mono text-xs text-smoke pt-2 hidden md:block">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-paper group-hover:text-acid transition-colors duration-200">
              {category.title}
            </h3>
            <p className="font-body text-sm text-smoke mt-1 max-w-xl">
              {category.blurb}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 pt-2">
          <span className="font-mono text-xs text-smoke hidden sm:inline">
            {category.items.length}{" "}
            {category.items.length === 1 ? "item" : "items"}
          </span>
          <span
            className="w-8 h-8 rounded-full border border-paper/30 flex items-center justify-center group-hover:border-acid transition-colors"
            aria-hidden="true"
          >
            {open ? (
              <Minus className="w-3.5 h-3.5 text-paper group-hover:text-acid transition-colors" />
            ) : (
              <Plus className="w-3.5 h-3.5 text-paper group-hover:text-acid transition-colors" />
            )}
          </span>
        </div>
      </button>

      <div
        id={`bragbook-cat-${category.slug}`}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="pb-8 md:pl-16 space-y-6">
            {category.items.map((item, i) => (
              <li
                key={i}
                className="border-l border-paper/10 pl-4 md:pl-6"
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h4 className="font-display font-medium text-base md:text-lg text-paper">
                    {item.title}
                  </h4>
                  <span className="font-mono text-xs text-smoke shrink-0">
                    {item.year}
                  </span>
                </div>
                {item.description && (
                  <p className="font-body text-sm text-smoke leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
