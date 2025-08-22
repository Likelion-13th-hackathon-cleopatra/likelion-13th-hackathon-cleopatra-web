// src/components/my/_parts/ReportCard.tsx
import React from "react";
import { mapCategoryToIcon } from "../../../utils/mapCategoryToIcon";
import starIcon from "../../../assets/icons/my/star.svg";
import filledStarIcon from "../../../assets/icons/my/filled-star.svg";

type Props = {
  id: string;
  category: string;
  label: string;
  dong: string;
  date: string; // 포맷된 날짜
  starred: boolean;
  onClick: () => void;
  onToggleStar: (next: boolean) => void;
};

export function ReportCard({
  label,
  dong,
  date,
  starred,
  onClick,
  onToggleStar,
}: Props) {
  const categoryIcon = mapCategoryToIcon(label);

  return (
    <button
      onClick={onClick}
      className="rounded-xl border bg-white p-[14px] shadow-sm text-left w-full"
    >
      {/* Top Row: Icon and Star */}
      <div className="flex items-start justify-between mb-2">
        <img src={categoryIcon} alt={`${label} icon`} className="w-5 h-5" />
        <button
          className="p-1 -mr-1 -mt-1" // 클릭 영역 확보
          aria-label={starred ? "즐겨찾기 해제" : "즐겨찾기"}
          onClick={(e) => {
            e.stopPropagation();
            onToggleStar(!starred);
          }}
        >
          <img
            src={starred ? filledStarIcon : starIcon}
            alt="Star icon"
            className="w-3 h-3"
          />
        </button>
      </div>

      {/* Bottom Row: Text Pill & Date */}
      <div className="mt-2">
        <div className="inline-flex items-center gap-[2px] rounded-full bg-[#CFF0D2] px-[6px] py-[3px]">
          <span className="text-[10px] font-bold text-primary-green40">
            {label}
          </span>
          <span className="text-[10px] font-bold text-primary-green40 mx-0.5">
            ·
          </span>
          <span className="text-[10px] font-bold text-primary-green40">
            {dong}
          </span>
        </div>
        <div className="text-[11px] text-grayscale-45 mt-2">{date}</div>
      </div>
    </button>
  );
}
