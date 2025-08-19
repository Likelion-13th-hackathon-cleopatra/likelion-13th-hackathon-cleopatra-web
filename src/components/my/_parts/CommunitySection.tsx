import React from "react";

type Item = { label: string; onClick: () => void };
export function CommunitySection({ items }: { items: Item[] }) {
  return (
    <div className="px-4 mt-6">
      <div className="flex flex-col gap-4 rounded-2xl border bg-white px-4 py-[18px] shadow-sm">
        <div className="text-base font-bold text-primary-green40">
          커뮤니티 관리
        </div>
        {items.map((it) => (
          <button
            key={it.label}
            onClick={it.onClick}
            className="flex w-full items-center justify-between"
          >
            <span className="text-sm font-semibold text-grayscale-65">
              {it.label}
            </span>
            <svg
              className="-rotate-90 transform text-grayscale-85"
              width="10"
              height="6"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.75L6 6.25L10.5 1.75"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
