// src/types/my.ts
export type SortKey = "date_desc" | "date_asc" | "name_asc" | "name_desc";
export type Filter = { category?: string; starred?: boolean };

export type Plan = {
  name: "FREE" | "PRO" | "BUSINESS";
  remainingReports: number;
  createdReports: number;
};

export type ReportSummary = {
  id: string;
  category: "restaurant" | "gym" | "cafe" | "etc";
  dong: string; // 예: "공릉1동"
  label: string; // 예: "패스트푸드"
  createdAt: string; // ISO
  starred: boolean;
};
