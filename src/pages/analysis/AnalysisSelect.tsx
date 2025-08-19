import { useState} from "react";
import { useNavigate } from "react-router-dom";
import FilledButton from "../../components/common/FilledButton";
import SelectButton from "../../components/common/SelectButton";
import BottomSheet from "../../components/common/BottomSheet";
import IndustrySelector from "../../components/common/IndustrySelector";

export default function AnalysisSelect() {
  const navigate = useNavigate();
  const [isIndustrySheetOpen, setIsIndustrySheetOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');

  const handleIndustrySelect = (industryId: string) => {
    setSelectedIndustry(industryId);
    setIsIndustrySheetOpen(false);
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
    return industries[id as keyof typeof industries] || '창업 업종';
  };

  return (
    <main className="relative min-h-[100svh] bg-grayscale-white px-[24px] pt-[36px] pb-[200px]">
      {/* 섹션 1: 창업 업종 */}
      <section className="max-w-mobile mx-auto">
        <h2 className="Head_Bold_16 mb-[14px] text-primary-green">
          창업 업종
        </h2>

        <div className="flex flex-row gap-[10px]">
          <SelectButton
            label={selectedIndustry ? getIndustryName(selectedIndustry) : "창업 업종"}
            onClick={() => setIsIndustrySheetOpen(true)}
            className="flex-1"
          />
          <SelectButton
            label="업종 하위 구분"
            onClick={() => console.log("하위 업종 선택")}
            className="flex-1"
          />
        </div>
      </section>

      {/* 섹션 간 간격 */}
      <div className="h-[30px]" />

      {/* 섹션 2: 창업 예정 지역 */}
      <section className="max-w-mobile mx-auto">
        <h2 className="Head_Bold_16 mb-[14px] text-primary-green">
          창업 예정 지역
        </h2>

        <div className="flex flex-row gap-[10px]">
          <SelectButton
            label="시/도"
            onClick={() => console.log("시/도 선택")}
            className="flex-1"
          />
          <SelectButton
            label="시/군/구"
            onClick={() => console.log("시/군/구 선택")}
            className="flex-1"
          />
          <SelectButton
            label="읍/면/동"
            onClick={() => console.log("읍/면/동 선택")}
            className="flex-1"
          />
        </div>
      </section>

      {/* 하단 고정 CTA (BottomNavBar 88px + 24px) */}
      <div className="fixed left-1/2 -translate-x-1/2 w-full max-w-mobile px-[24px] bottom-[112px]">
        <FilledButton text="분석하기" onClick={() => navigate("/analysis/result")} />
      </div>

      {/* 창업 업종 선택 바텀시트 */}
      <BottomSheet
        name="industry-selector"
        isOpen={isIndustrySheetOpen}
        onClose={() => setIsIndustrySheetOpen(false)}
        title="창업 업종 선택"
      >
        <IndustrySelector
          selectedIndustry={selectedIndustry}
          onSelect={handleIndustrySelect}
        />
      </BottomSheet>
    </main>
  );
}