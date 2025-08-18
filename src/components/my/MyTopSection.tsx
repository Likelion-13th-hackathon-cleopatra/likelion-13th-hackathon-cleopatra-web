// src/components/my/MyTopSection.tsx
import React from "react";

type Props = {
  user: { name?: string; anonId: string };
  onOpenMenu?: () => void;
  onManageAccount?: () => void; // "기기 관리" 진입 등
};

export default function MyTopSection({
  user,
  onOpenMenu,
  onManageAccount,
}: Props) {
  return (
    <section className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-12">
        <div className="w-6" />
        <h1 className="text-base font-semibold">MY</h1>
        <button
          aria-label="메뉴 열기"
          onClick={onOpenMenu}
          className="w-6 h-6 grid place-items-center rounded hover:bg-gray-100"
        >
          <span className="i">≡</span>
        </button>
      </div>

      {/* Profile card */}
      <div className="px-4 pb-3">
        <div
          role="button"
          tabIndex={0}
          onClick={onManageAccount}
          className="flex items-center justify-between rounded-2xl border bg-white px-4 py-3 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-gray-200 grid place-items-center text-sm">
              👤
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user.name ?? "손님"}</span>
              <span className="text-xs text-gray-500">기기 관리</span>
            </div>
          </div>
          <span aria-hidden className="text-gray-400">
            ›
          </span>
        </div>
      </div>
    </section>
  );
}
