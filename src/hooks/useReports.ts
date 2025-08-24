import { useState, useMemo, useCallback, useEffect } from "react";
import type { Filter, ReportSummary, SortKey } from "../types/my";
import { analysisApi } from "../utils/api";
import { getAnonymousId } from "../utils/anonymousId";

// 백엔드 응답을 가정한 원본 데이터 타입
type RawReport = {
  report_id: number;
  secondary: string;
  sub_neighborhood: string;
  created_at: string;
  favorite: boolean;
};

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
  const [items, setItems] = useState<RawReport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // API에서 리포트 목록 가져오기
  useEffect(() => {
    const fetchReports = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const anonymousId = getAnonymousId();
        const response = await analysisApi.getReportList(anonymousId);
        
        console.log('리포트 목록 API 응답:', response);
        
        // API 응답 구조에 따라 데이터 변환
        if (response.data?.reportList && Array.isArray(response.data.reportList)) {
          const reports: RawReport[] = response.data.reportList.map((item: any) => ({
            report_id: item.reportId, // reportId로 변경
            secondary: item.secondary || '업종 미분류',
            sub_neighborhood: item.subNeighborhood || '지역 미분류', // subNeighborhood로 변경
            created_at: item.createdAt, // createdAt으로 변경
            favorite: item.favorite || false,
          }));
          console.log('변환된 리포트 데이터:', reports);
          setItems(reports);
        } else {
          console.log('리포트 데이터가 없거나 잘못된 형식:', response.data);
          setItems([]);
        }
      } catch (err) {
        console.error('Failed to fetch reports:', err);
        setError('리포트 목록을 불러오는데 실패했습니다.');
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  const processedData = useMemo(() => {
    // 1. 원본 데이터를 프론트엔드 타입으로 변환
    let arr: ReportSummary[] = items.map((r) => ({
      id: String(r.report_id), // r 제거하고 report_id만 사용
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
    // 로컬 상태 업데이트 (즉시 반영)
    setItems((prev) =>
      prev.map((it) =>
        String(it.report_id) === id ? { ...it, favorite: nextStarred } : it
      )
    );
    
    // TODO: 실제 API 호출로 즐겨찾기 상태 업데이트
    // 현재는 로컬 상태만 업데이트
    console.log(`Toggled star for report ${id} to ${nextStarred}.`);
  }, []);

  return {
    data: processedData,
    isLoading,
    error,
    toggleStar,
  };
}

