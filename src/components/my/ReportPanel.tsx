// src/components/my/ReportPanel.tsx
import React from "react";
import type { Filter, ReportSummary } from "../../types/my";
import { ReportCard } from "./_parts/ReportCard";
import { EmptyState } from "./_parts/EmptyState";

type Props = {
  reports: ReportSummary[];
  loading?: boolean;
  error?: string | null;
  onOpenReport: (id: string) => void;
  onToggleStar: (id: string, next: boolean) => void;
  filter: Filter;
  onChangeFilter: (f: Filter) => void;
};

export default function ReportPanel(props: Props) {
  const {
    reports,
    loading,
    error,
    onOpenReport,
    onToggleStar,
    filter,
    onChangeFilter,
  } = props;

  const widthClass = filter.starred ? "w-[80px]" : "w-[60px]";

  return (
    <section className="bg-white px-6 pt-6 pb-[112px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-primary-green40">
          보고서 생성 내역
        </h2>
        <select
          value={filter.starred ? "starred" : "all"}
          onChange={(e) => {
            const isStarred = e.target.value === "starred";
            onChangeFilter({ ...filter, starred: isStarred ? true : undefined });
          }}
          className={`h-[26px] appearance-none rounded-full border bg-white bg-[url('/src/assets/icons/my/arrow_down.svg')] bg-[length:10px_5.89px] bg-[right_8px_center] bg-no-repeat py-1 pl-2 pr-6 text-xs font-bold text-primary-green60 ${
            widthClass
          }`}
        >
          <option value="all">전체</option>
          <option value="starred">즐겨찾기</option>
        </select>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border bg-white p-3 animate-pulse h-24"
            />
          ))}
        </div>
      ) : error ? (
        <EmptyState text="목록을 불러오지 못했어요. 잠시 후 다시 시도해주세요." />
      ) : reports.length === 0 ? (
        <EmptyState text="생성된 보고서가 없습니다. 상단에서 새 보고서를 만들어보세요." />
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {reports.map((r) => (
            <ReportCard
              key={r.id}
              id={r.id}
              category={r.category}
              label={r.label}
              dong={r.dong}
              date={new Date(r.createdAt)
                .toLocaleDateString("en-CA")
                .replace(/-/g, "/")}
              starred={r.starred}
              onClick={() => onOpenReport(r.id)}
              onToggleStar={(next) => onToggleStar(r.id, next)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
