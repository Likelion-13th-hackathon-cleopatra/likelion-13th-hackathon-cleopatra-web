// src/components/my/ReportPanel.tsx
import React, { useId } from "react";
import type { Filter, ReportSummary, SortKey } from "../../types/my";
import { ReportCard } from "./_parts/ReportCard";
import { EmptyState } from "./_parts/EmptyState";

type Props = {
  reports: ReportSummary[];
  sort: SortKey;
  filter: Filter;
  query: string;
  total?: number;
  loading?: boolean;
  error?: string | null;
  onChangeSort: (s: SortKey) => void;
  onChangeFilter: (f: Filter) => void;
  onChangeQuery: (q: string) => void;
  onOpenReport: (id: string) => void;
  onToggleStar: (id: string, next: boolean) => void;
};

const CATEGORIES = [
  { label: "전체", value: "" },
  { label: "식당", value: "restaurant" },
  { label: "카페", value: "cafe" },
  { label: "헬스장", value: "gym" },
  { label: "기타", value: "etc" },
];

export default function ReportPanel(props: Props) {
  const {
    reports,
    sort,
    filter,
    query,
    loading,
    error,
    onChangeSort,
    onChangeFilter,
    onChangeQuery,
    onOpenReport,
    onToggleStar,
  } = props;

  const searchId = useId();

  return (
    <section className="mt-4 px-4">
      {/* Filter controls */}
      <div className="rounded-2xl border bg-white shadow-sm p-3 mb-3">
        <div className="flex items-center gap-2">
          {/* Star toggle */}
          <button
            onClick={() =>
              onChangeFilter({ ...filter, starred: !filter.starred })
            }
            className={`px-2 h-8 rounded border text-xs ${
              filter.starred ? "bg-yellow-50 border-yellow-300" : "bg-white"
            }`}
            aria-pressed={!!filter.starred}
          >
            ★ 즐겨찾기
          </button>

          {/* Category select */}
          <select
            value={filter.category ?? ""}
            onChange={(e) =>
              onChangeFilter({
                ...filter,
                category: e.target.value || undefined,
              })
            }
            className="h-8 rounded border px-2 text-xs"
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>

          {/* Sort select */}
          <select
            value={sort}
            onChange={(e) => onChangeSort(e.target.value as SortKey)}
            className="h-8 rounded border px-2 text-xs ml-auto"
          >
            <option value="date_desc">최신순</option>
            <option value="date_asc">오래된순</option>
            <option value="name_asc">이름↑</option>
            <option value="name_desc">이름↓</option>
          </select>
        </div>

        {/* Search */}
        <div className="mt-2">
          <label htmlFor={searchId} className="sr-only">
            검색
          </label>
          <input
            id={searchId}
            value={query}
            onChange={(e) => onChangeQuery(e.target.value)}
            placeholder="업종/동으로 검색"
            className="w-full h-9 rounded border px-3 text-sm"
          />
        </div>
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
