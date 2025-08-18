// src/pages/MyStorage.tsx
import React, { useState } from "react";
import MyTopSection from "../components/my/MyTopSection";
import { PlanSummaryCard } from "../components/my/_parts/PlanSummaryCard";
import { CommunitySection } from "../components/my/_parts/CommunitySection";
import ReportPanel from "../components/my/ReportPanel";
import type { Filter, SortKey } from "../types/my";
import { useUser } from "../hooks/useUser";
import { usePlan } from "../hooks/usePlan";
import { useReports } from "../hooks/useReports";
import { useNavigate } from "react-router-dom";

export default function MyStorage() {
  const nav = useNavigate();
  const { data: user, isLoading: isUserLoading, error: userError } = useUser();
  const { data: plan, isLoading: isPlanLoading, error: planError } = usePlan();

  const [sort, setSort] = useState<SortKey>("date_desc");
  const [filter, setFilter] = useState<Filter>({});
  const [query, setQuery] = useState("");

  const {
    data: reports,
    isLoading: isReportsLoading,
    error: reportsError,
    toggleStar,
  } = useReports({ sort, filter, query });

  // 데이터 로딩 중일 때 로딩 화면 표시
  if (isUserLoading || isPlanLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  // 에러 발생 시 에러 메시지 표시
  if (userError || planError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Error loading data. Please try again later.</div>
      </div>
    );
  }

  // 데이터가 없을 경우 (로딩 후)
  if (!user || !plan) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>No user or plan data available.</div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <MyTopSection
        user={{ anonId: user.anonId, name: user.name }}
        onOpenMenu={() => console.log("open menu")}
        onManageAccount={() => console.log("go device manage")}
      />
      <div className="mt-3">
        <PlanSummaryCard
          planName={plan.name}
          remainingReports={plan.remainingReports}
          createdReports={plan.createdReports}
          onClick={() => console.log("go plan detail")}
        />
      </div>
      <CommunitySection
        items={[
          {
            label: "내가 작성한 글",
            onClick: () => console.log("go my posts"),
          },
          { label: "저장한 글", onClick: () => console.log("go saved posts") },
          {
            label: "관심 키워드 설정",
            onClick: () => console.log("go keyword settings"),
          },
        ]}
      />
      <ReportPanel
        reports={reports}
        sort={sort}
        filter={filter}
        query={query}
        loading={isReportsLoading}
        error={reportsError}
        onChangeSort={setSort}
        onChangeFilter={setFilter}
        onChangeQuery={setQuery}
        onOpenReport={(id) => nav(`/reports/${id}`)}
        onToggleStar={toggleStar}
      />
    </div>
  );
}
