import React from "react";

type FilledButtonProps = {
  text: string;                 // 버튼에 표시될 텍스트
  onClick?: () => void;         // 클릭 이벤트
  disabled?: boolean;           // 비활성화 여부
  className?: string;           // 추가 커스텀 클래스
};

export default function FilledButton({
  text,
  onClick,
  disabled = false,
  className = "",
}: FilledButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full py-[14px] rounded-[16px] font-bold text-white
        transition-colors duration-200
        ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}
        ${className}
      `}
    >
      {text}
    </button>
  );
}