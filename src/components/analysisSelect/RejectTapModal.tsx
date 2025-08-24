import React from 'react';

interface RejectTapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartAnalysis?: () => void;
  selectedIndustry?: string;
  selectedSubCategory?: string;
  selectedRegion?: string;
}

export default function RejectTapModal({
  isOpen,
  onClose,
  onStartAnalysis,
  selectedIndustry,
  selectedSubCategory,
  selectedRegion
}: RejectTapModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* 모달 컨테이너 */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-[20px] w-full max-w-[327px] px-[24px] pb-[24px] pt-[44px]"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* 경고 아이콘 */}
          <div className="flex justify-center mb-[6px]">
            <img 
              src="/src/assets/icons/common/reject-icon.svg" 
              alt="경고" 
              className="w-[90px] h-[90px]"
            />
          </div>

          {/* 모달 헤더 */}
          <div className="text-center mb-[16px]">
            <h2 className="Head_Bold_16 text-[#032412]">
            지금 탭을 나가면 입력하신 정보가<br/>저장되지 않아요.
            </h2>
          </div>

          {/* 버튼 영역 */}
          <div className="flex gap-[12px]">
          <button
              onClick={onClose}
              className="flex-1 py-[14px] rounded-[16px] Sub_Bold_14 text-white bg-grayscale-25"
            >
              이어서 입력할게요
            </button>
            <button
              onClick={() => {
                if (onStartAnalysis) {
                  onStartAnalysis();
                } else {
                  onClose();
                }
              }}
              className="flex-1 py-[14px] rounded-[16px] Sub_Bold_14 text-white bg-primary-green"
            >
              나가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}