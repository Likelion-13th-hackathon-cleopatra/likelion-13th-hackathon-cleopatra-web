import { useState} from "react";
import { useNavigate } from "react-router-dom";
import FilledButton from "../../components/common/FilledButton";
import SelectButton from "../../components/common/SelectButton";
import BottomSheet from "../../components/common/BottomSheet";
import IndustrySelector from "../../components/common/IndustrySelector";
import SubCategorySelector from "../../components/common/SubCategorySelector";
import { getIndustryById, getSubCategoryById } from "../../data/industryData";

export default function AnalysisSelect() {
  const navigate = useNavigate();
  const [isIndustrySheetOpen, setIsIndustrySheetOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [isSubCategorySheetOpen, setIsSubCategorySheetOpen] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');

  const handleIndustrySelect = (industryId: string) => {
    setSelectedIndustry(industryId);
    setSelectedSubCategory(''); // 업종 변경 시 하위 카테고리 초기화
    setIsIndustrySheetOpen(false);
  };

  const handleSubCategorySelect = (subCategoryId: string) => {
    setSelectedSubCategory(subCategoryId);
    setIsSubCategorySheetOpen(false);
  };

  const getDisplayName = (type: 'industry' | 'subCategory', id: string, industryId?: string) => {
    if (type === 'industry') {
      const industry = getIndustryById(id);
      return industry?.name || '창업 업종';
    } else {
      const subCategory = getSubCategoryById(industryId!, id);
      return subCategory?.name || '업종 하위 구분';
    }
  };

  return (
    <main className="relative min-h-[100svh] bg-grayscale-white px-[24px] pt-[36px] pb-[200px] bg-grayscale-5">
      {/* 섹션 1: 창업 업종 */}
      <section className="max-w-mobile mx-auto">
        <h2 className="Head_Bold_16 mb-[14px] text-primary-green">
          창업 업종
        </h2>

        <div className="flex flex-row gap-[10px]">
          <SelectButton
            label={selectedIndustry ? getDisplayName('industry', selectedIndustry) : "창업 업종"}
            onClick={() => setIsIndustrySheetOpen(true)}
          />
          <SelectButton
            label={selectedSubCategory ? getDisplayName('subCategory', selectedSubCategory, selectedIndustry) : "업종 하위 구분"}
            onClick={() => selectedIndustry ? setIsSubCategorySheetOpen(true) : undefined}
            className={selectedIndustry ? '' : 'opacity-50 cursor-not-allowed'}
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
          />
          <SelectButton
            label="시/군/구"
            onClick={() => console.log("시/군/구 선택")}
          />
          <SelectButton
            label="읍/면/동"
            onClick={() => console.log("읍/면/동 선택")}
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
      >
        <IndustrySelector
          selectedIndustry={selectedIndustry}
          onSelect={handleIndustrySelect}
        />
      </BottomSheet>

      {/* 업종 하위 구분 선택 바텀시트 */}
      <BottomSheet
        name="sub-category-selector"
        isOpen={isSubCategorySheetOpen}
        onClose={() => setIsSubCategorySheetOpen(false)}
      >
        {selectedIndustry && (
          <SubCategorySelector
            industryId={selectedIndustry}
            selectedSubCategory={selectedSubCategory}
            onSelect={handleSubCategorySelect}
          />
        )}
      </BottomSheet>
    </main>
  );
}