import { useState, useMemo, useCallback } from "react";
import type { Filter, ReportSummary, SortKey } from "../types/my";

// 백엔드 응답을 가정한 원본 데이터 타입
type RawReport = {
  report_id: number;
  secondary: string;
  sub_neighborhood: string;
  created_at: string;
  favorite: boolean;
};

const MOCK_REPORTS: RawReport[] = [
  {
    report_id: 1,
    secondary: "외식업",
    sub_neighborhood: "공릉1동",
    created_at: "2025-08-22T15:45:12Z",
    favorite: false,
  },
  {
    report_id: 2,
    secondary: "카페",
    sub_neighborhood: "월계3동",
    created_at: "2025-08-21T11:20:00Z",
    favorite: true,
  },
  {
    report_id: 3,
    secondary: "뷰티",
    sub_neighborhood: "하계1동",
    created_at: "2025-08-20T18:00:00Z",
    favorite: false,
  },
  {
    report_id: 4,
    secondary: "스포츠",
    sub_neighborhood: "중계본동",
    created_at: "2025-08-19T09:30:00Z",
    favorite: false,
  },
  {
    report_id: 5,
    secondary: "의료업",
    sub_neighborhood: "상계2동",
    created_at: "2025-08-18T13:00:00Z",
    favorite: true,
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
  const [items, setItems] = useState<RawReport[]>(MOCK_REPORTS);
  const isLoading = false;
  const error = null;

  const processedData = useMemo(() => {
    // 1. 원본 데이터를 프론트엔드 타입으로 변환
    let arr: ReportSummary[] = items.map((r) => ({
      id: `r${r.report_id}`,
      category: r.secondary, // category와 label에 모두 `secondary` 값을 사용
      label: r.secondary,
      dong: r.sub_neighborhood,
      createdAt: r.created_at,
      starred: r.favorite,
    }));

    // 2. Filter by starred
    if (filter.starred) {
      arr = arr.filter((r) => r.starred);
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
          return (a.label + a.dong).localeCompare(b.label + a.dong);
        case "name_desc":
          return (b.label + b.dong).localeCompare(a.label + a.dong);
        default:
          return 0;
      }
    });
    return arr;
  }, [items, sort, filter, query]);

  const toggleStar = useCallback((id: string, nextStarred: boolean) => {
    // Mock implementation: update local state based on the raw data structure
    setItems((prev) =>
      prev.map((it) =>
        `r${it.report_id}` === id ? { ...it, favorite: nextStarred } : it
      )
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

