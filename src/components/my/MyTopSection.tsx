// src/components/my/MyTopSection.tsx
import React from "react";
import profilePlaceholder from "../../assets/icons/profile-placeholder.svg";

type Props = {
  user: { anonId: string };
  onOpenMenu?: () => void;
  onManageAccount?: () => void; // "계정 관리" 진입 등
};

export default function MyTopSection({
  user,
  onOpenMenu,
  onManageAccount,
}: Props) {
  return (
    <section>
      {/* Header */}
      <div className="relative flex items-center justify-center h-12 px-4">
        <h1 className="font-bold text-sm leading-[150%] tracking-[-0.03em] text-[#0DB659]">
          MY
        </h1>
        <button
          aria-label="메뉴 열기"
          onClick={onOpenMenu}
          className="absolute right-4 grid h-6 w-6 place-items-center rounded hover:bg-gray-100"
        >
          <span className="i">≡</span>
        </button>
      </div>

      {/* Profile card */}
      <div
        role="button"
        tabIndex={0}
        onClick={onManageAccount}
        className="flex items-center justify-between px-6 pb-3"
      >
        <div className="flex items-center gap-3">
          <img src={profilePlaceholder} alt="프로필" className="h-16 w-16" />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold leading-[150%] tracking-[-0.03em]">
              홍길동 사장님
            </span>
            <span className="text-xs font-bold leading-[150%] tracking-[-0.03em] text-[#B6B6B5]">
              계정 관리
            </span>
          </div>
        </div>
        <svg
          className="-rotate-90 transform text-[#0DB659]"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1.75L6 6.25L10.5 1.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
