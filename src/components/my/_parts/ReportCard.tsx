// src/components/my/_parts/ReportCard.tsx
import React from "react";

type Props = {
  id: string;
  category: string;
  title: string; // 예: "패스트푸드 - 공릉1동"
  date: string; // 포맷된 날짜
  starred: boolean;
  onClick: () => void;
  onToggleStar: (next: boolean) => void;
};

const catSymbol: Record<string, string> = {
  restaurant: "🍜",
  cafe: "☕",
  gym: "💪",
  etc: "📄",
};

export function ReportCard({
  category,
  title,
  date,
  starred,
  onClick,
  onToggleStar,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-3 shadow-sm relative">
      <button
        className="absolute right-2 top-2"
        aria-label={starred ? "즐겨찾기 해제" : "즐겨찾기"}
        aria-pressed={starred}
        onClick={(e) => {
          e.stopPropagation();
          onToggleStar(!starred);
        }}
      >
        <span>{starred ? "★" : "☆"}</span>
      </button>
      <button onClick={onClick} className="text-left w-full">
        <div className="text-2xl mb-1">{catSymbol[category] ?? "📄"}</div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-[11px] text-gray-500 mt-0.5">{date}</div>
      </button>
    </div>
  );
}
