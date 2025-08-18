import React from "react";

type Item = { label: string; onClick: () => void };
export function CommunitySection({ items }: { items: Item[] }) {
  return (
    <div className="px-4 mt-3">
      <div className="rounded-2xl border bg-white shadow-sm">
        {items.map((it, idx) => (
          <button
            key={it.label}
            onClick={it.onClick}
            className={`w-full flex items-center justify-between px-4 py-3 ${
              idx !== 0 ? "border-t" : ""
            }`}
          >
            <span className="text-sm">{it.label}</span>
            <span aria-hidden className="text-gray-400">
              ›
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
