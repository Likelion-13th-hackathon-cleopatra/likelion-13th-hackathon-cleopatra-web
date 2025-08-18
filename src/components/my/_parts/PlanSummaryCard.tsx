// src/components/my/_parts/PlanSummaryCard.tsx
import React from "react";

type Props = {
  planName: string;
  remainingReports: number;
  createdReports: number;
  onClick?: () => void;
};

export function PlanSummaryCard({
  planName,
  remainingReports,
  createdReports,
  onClick,
}: Props) {
  return (
    <div className="px-4">
      <div
        onClick={onClick}
        role="button"
        tabIndex={0}
        className="rounded-2xl border bg-white shadow-sm p-4"
      >
        <div className="text-sm font-semibold mb-3">이용 정보</div>
        <div className="grid grid-cols-3 divide-x rounded-lg overflow-hidden border">
          <Stat label="결제 플랜" value={planName} />
          <Stat label="남은 보고서" value={remainingReports} />
          <Stat label="생성한 보고서" value={createdReports} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="py-3 text-center bg-gray-50">
      <div className="text-[11px] text-gray-500">{label}</div>
      <div className="text-sm font-medium mt-0.5">{value}</div>
    </div>
  );
}
