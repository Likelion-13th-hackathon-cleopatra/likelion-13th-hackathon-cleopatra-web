import React from 'react';
import warningIcon from '../../assets/icons/common/warning-icon.svg';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartAnalysis?: () => void;
  selectedIndustry?: string;
  selectedSubCategory?: string;
  selectedRegion?: string;
}

export default function AnalysisModal({
  isOpen,
  onClose,
  onStartAnalysis,
  selectedIndustry,
  selectedSubCategory,
  selectedRegion
}: AnalysisModalProps) {
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
              src={warningIcon} 
              alt="경고" 
              className="w-[90px] h-[90px]"
            />
          </div>

          {/* 모달 헤더 */}
          <div className="text-center mb-[16px]">
            <h2 className="Head_Bold_16 text-[#032412]">
            입력하신 상권 분석 정보를<br/>다시 한번 검토해주세요.
            </h2>
          </div>
          
          {/* 선택된 정보 태그들 */}
          <div className="flex flex-col items-center gap-[8px] mb-[34px]">
            {/* 업종 정보 태그 */}
            <div className="inline-flex items-center bg-[#FFF0D3] rounded-[100px] px-[12px] py-[4px]">
              <span className="Sub_Bold_12 text-[#8B6914] space-x-[6px]">
                <span>{selectedIndustry}</span>
                <span>•</span>
                <span>{selectedSubCategory}</span>
              </span>
            </div>
            
            {/* 지역 정보 태그 */}
            <div className="inline-flex items-center bg-[#FFF0D3] rounded-[100px] px-[12px] py-[4px]">
              <span className="Sub_Bold_12 text-[#8B6914]">
                {selectedRegion?.split(' ').map((part, index, array) => (
                  <span key={index}>
                    <span>{part}</span>
                    {index < array.length - 1 && (
                      <>
                        <span className="inline-block w-[6px]"></span>
                        <span>•</span>
                        <span className="inline-block w-[6px]"></span>
                      </>
                    )}
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="flex gap-[12px]">
            <button
              onClick={onClose}
              className="flex-1 py-[14px] rounded-[16px] Sub_Bold_14 text-white bg-grayscale-25"
            >
              정보를 수정할래요
            </button>
            <button
              onClick={() => {
                if (onStartAnalysis) {
                  // 즉시 실행하여 지연 없이 로딩창으로 전환
                  onStartAnalysis();
                } else {
                  onClose();
                }
              }}
              className="flex-1 py-[14px] rounded-[16px] Sub_Bold_14 text-white bg-primary-green hover:bg-primary-green15 transition-colors active:scale-95"
            >
              리포트 생성하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}