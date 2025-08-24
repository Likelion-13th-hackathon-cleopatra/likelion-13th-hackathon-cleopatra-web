import React, { useState } from "react";
import BottomSheet from "./BottomSheet";
import IndustrySelector from "./IndustrySelector";

type SelectButtonProps = {
  label: string;                // 버튼에 보여줄 텍스트
  onClick?: () => void;         // 클릭 이벤트
  isOpen?: boolean;             // 드롭다운 열림 여부 (화살표 회전용)
  className?: string;           // 추가 커스텀 스타일
  isIndustrySelector?: boolean; // 업종 선택기 여부
  selectedValue?: string;       // 선택된 값
  onValueChange?: (value: string) => void; // 값 변경 콜백
};

export default function SelectButton({
  label,
  onClick,
  isOpen = false,
  className = "",
  isIndustrySelector = false,
  selectedValue,
  onValueChange,
}: SelectButtonProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleClick = () => {
    if (isIndustrySelector) {
      setIsBottomSheetOpen(true);
    } else if (onClick) {
      onClick();
    }
  };

  const handleIndustrySelect = (industryId: string) => {
    if (onValueChange) {
      onValueChange(industryId);
    }
    setIsBottomSheetOpen(false);
  };

  const getIndustryName = (id: string) => {
    const industries = {
      food: '요식업',
      service: '서비스업',
      medical: '의료업',
      sports: '스포츠',
      beauty: '뷰티',
      culture: '문화',
      legal: '법률',
      retail: '도소매업',
    };
    return industries[id as keyof typeof industries] || label;
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`
          flex items-center justify-between px-[12px] py-[6px] rounded-full border border-gray-200 bg-white
          font-semibold text-[14px] leading-[21px] tracking-[-0.03em]
          text-gray-700
          ${className}
        `}
      >
        <span>{selectedValue ? getIndustryName(selectedValue) : label}</span>
        <svg 
          className={`w-[10px] h-[10px] ml-[6px]`}
          width="10" 
          height="5.89" 
          viewBox="0 0 10 5.89" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M1.53244 0.815456L5.00447 4.28749L8.47651 0.815456C8.8255 0.466463 9.38926 0.466463 9.73825 0.815456C10.0872 1.16445 10.0872 1.72821 9.73825 2.0772L5.63087 6.18458C5.28188 6.53358 4.71812 6.53358 4.36913 6.18458L0.261745 2.0772C-0.0872483 1.72821 -0.0872483 1.16445 0.261745 0.815456C0.610738 0.475411 1.18345 0.466463 1.53244 0.815456Z" 
            fill="#0DB659"
          />
        </svg>
      </button>

      {/* 업종 선택 바텀시트 */}
      {isIndustrySelector && (
        <BottomSheet
          isOpen={isBottomSheetOpen}
          onClose={() => setIsBottomSheetOpen(false)}
          title="창업 업종 선택"
        >
          <IndustrySelector
            selectedIndustry={selectedValue}
            onSelect={handleIndustrySelect}
          />
        </BottomSheet>
      )}
    </>
  );
}