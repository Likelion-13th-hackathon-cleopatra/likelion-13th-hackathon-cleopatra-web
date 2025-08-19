// src/components/my/_parts/PlanSummaryCard.tsx
import React from "react";

type Props = {
  onClick?: () => void;
};

export function PlanSummaryCard({ onClick }: Props) {
  return (
    <div className="px-4">
      <div
        onClick={onClick}
        role="button"
        tabIndex={0}
        className="h-[135px] rounded-[15px] border bg-white shadow-sm px-4 py-[18px]"
      >
        <div className="flex items-center justify-between text-base font-bold text-primary-green40 mb-3">
          <span>이용 요금제 정보</span>
          <svg
            className="-rotate-90 transform"
            width="10"
            height="6"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.75L6 6.25L10.5 1.75"
              stroke="#0DB659"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-[14px]">
          <Stat label="결제 플랜" value="PRO" />
          <Stat label="남은 보고서" value={`${3}개`} />
          <Stat label="생성한 보고서" value={`${5}개`} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex h-[59px] w-[95px] flex-grow flex-col items-center justify-center rounded-[10px] bg-[rgba(255,194,81,0.25)] px-[5px] py-[10px]">
      <div className="text-[10px] font-bold text-sub-yellow40">{label}</div>
      <div className="text-base font-bold text-sub-yellow60 mt-0.5">{value}</div>
    </div>
  );
}
