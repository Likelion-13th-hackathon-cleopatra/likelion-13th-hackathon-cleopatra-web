import { useState } from "react";
import type { Plan } from "../types/my";

/**
 * 요금제 정보를 제공하는 훅.
 * 현재는 백엔드 구현 전으로, 목 데이터를 즉시 반환합니다.
 */
export function usePlan() {
  const [data] = useState<Plan>({
    name: "FREE",
    remainingReports: 5,
    createdReports: 10,
  });
  const [isLoading] = useState(false);
  const [error] = useState<Error | null>(null);

  return { data, isLoading, error };
}
