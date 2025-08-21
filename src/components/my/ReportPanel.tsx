// src/components/my/ReportPanel.tsx
import React from "react";
import type { ReportSummary } from "../../types/my";
import { ReportCard } from "./_parts/ReportCard";
import { EmptyState } from "./_parts/EmptyState";

type Props = {
  reports: ReportSummary[];
  loading?: boolean;
  error?: string | null;
  onOpenReport: (id: string) => void;
  onToggleStar: (id: string, next: boolean) => void;
};

export default function ReportPanel(props: Props) {
  const {
    reports,
    loading,
    error,
    onOpenReport,
    onToggleStar,
  } = props;

  return (
    <section className="bg-white px-6 pt-6 pb-[112px]">
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
              title={`${r.label} - ${r.dong}`}
              date={new Date(r.createdAt).toLocaleDateString()}
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
