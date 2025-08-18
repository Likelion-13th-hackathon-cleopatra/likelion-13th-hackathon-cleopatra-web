import { useState, useMemo, useCallback } from "react";
import type { Filter, ReportSummary, SortKey } from "../types/my";

const MOCK_REPORTS: ReportSummary[] = [
  {
    id: "r1",
    category: "restaurant",
    dong: "공릉1동",
    label: "패스트푸드",
    createdAt: "2025-08-15T09:12:00Z",
    starred: true,
  },
  {
    id: "r2",
    category: "cafe",
    dong: "공릉1동",
    label: "카페·디저트",
    createdAt: "2025-08-12T11:00:00Z",
    starred: false,
  },
  {
    id: "r3",
    category: "gym",
    dong: "공릉2동",
    label: "헬스장",
    createdAt: "2025-08-10T14:20:00Z",
    starred: false,
  },
  {
    id: "r4",
    category: "restaurant",
    dong: "중계1동",
    label: "한식",
    createdAt: "2025-08-09T07:45:00Z",
    starred: true,
  },
];

/**
 * 보고서 목록을 제공하는 훅.
 * 현재는 백엔드 구현 전으로, 목 데이터를 즉시 반환하고, 정렬/필터링/검색을 클라이언트 사이드에서 처리합니다.
 */
export function useReports(params: {
  sort: SortKey;
  filter: Filter;
  query: string;
}) {
  const { sort, filter, query } = params;
  const [items, setItems] = useState<ReportSummary[]>(MOCK_REPORTS);
  const isLoading = false;
  const error = null;

  const processedData = useMemo(() => {
    let arr = [...items];
    // 1. Filter by starred
    if (filter.starred) {
      arr = arr.filter((r) => r.starred);
    }
    // 2. Filter by category
    if (filter.category) {
      arr = arr.filter((r) => r.category === filter.category);
    }
    // 3. Filter by query (label or dong)
    const q = query.trim().toLowerCase();
    if (q) {
      arr = arr.filter(
        (r) =>
          r.label.toLowerCase().includes(q) || r.dong.toLowerCase().includes(q)
      );
    }
    // 4. Sort
    arr.sort((a, b) => {
      switch (sort) {
        case "date_desc":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case "date_asc":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        case "name_asc":
          return (a.label + a.dong).localeCompare(b.label + b.dong);
        case "name_desc":
          return (b.label + b.dong).localeCompare(a.label + a.dong);
        default:
          return 0;
      }
    });
    return arr;
  }, [items, sort, filter, query]);

  const toggleStar = useCallback((id: string, nextStarred: boolean) => {
    // Mock implementation: just update local state
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, starred: nextStarred } : it))
    );
    console.log(`Toggled star for report ${id} to ${nextStarred}. (Mock)`);
  }, []);

  return {
    data: processedData,
    isLoading,
    error,
    toggleStar,
  };
}

