
import { useState } from "react";

// MyStorage.tsx에서 사용하는 user 객체에 대한 타입 정의
export interface User {
  anonId: string;
  name: string;
}

/**
 * 사용자 정보를 제공하는 훅.
 * 현재는 백엔드 구현 전으로, 목 데이터를 즉시 반환합니다.
 */
export function useUser() {
  const [data] = useState<User>({
    anonId: "dev-user-id-12345",
    name: "클레오파트라",
  });
  const [isLoading] = useState(false);
  const [error] = useState<Error | null>(null);

  return { data, isLoading, error };
}
