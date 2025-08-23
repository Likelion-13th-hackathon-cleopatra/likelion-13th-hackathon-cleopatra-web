import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FilledButton from "../../components/common/FilledButton";
import SelectButton from "../../components/common/SelectButton";
import BottomSheet from "../../components/common/BottomSheet";
import IndustrySelector from "../../components/common/IndustrySelector";
import SubCategorySelector from "../../components/common/SubCategorySelector";
import CitySelector from "../../components/common/CitySelector";
import DistrictSelector from "../../components/common/DistrictSelector";
import DongSelector from "../../components/common/DongSelector";
import SearchInput from "../../components/common/SearchInput";
import { getIndustryById, getSubCategoryById } from "../../data/industryData";
import { getCityById, getDistrictById, getDongById } from "../../data/regionData";

export default function AnalysisSelect() {
  const navigate = useNavigate();
  const [isIndustrySheetOpen, setIsIndustrySheetOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [isSubCategorySheetOpen, setIsSubCategorySheetOpen] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');
  
  // 지역 선택 상태
  const [isCitySheetOpen, setIsCitySheetOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [isDistrictSheetOpen, setIsDistrictSheetOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [isDongSheetOpen, setIsDongSheetOpen] = useState(false);
  const [selectedDong, setSelectedDong] = useState<string>('');

  const handleIndustrySelect = (industryId: string) => {
    setSelectedIndustry(industryId);
    setSelectedSubCategory(''); // 업종 변경 시 하위 카테고리 초기화
    setIsIndustrySheetOpen(false);
  };

  const handleSubCategorySelect = (subCategoryId: string) => {
    setSelectedSubCategory(subCategoryId);
    setIsSubCategorySheetOpen(false);
  };

  // 지역 선택 핸들러
  const handleCitySelect = (cityId: string) => {
    setSelectedCity(cityId);
    setSelectedDistrict(''); // 시도 변경 시 구 초기화
    setSelectedDong(''); // 시도 변경 시 동 초기화
    setIsCitySheetOpen(false);
  };

  const handleDistrictSelect = (districtId: string) => {
    setSelectedDistrict(districtId);
    setSelectedDong(''); // 구 변경 시 동 초기화
    setIsDistrictSheetOpen(false);
  };

  const handleDongSelect = (dongId: string) => {
    setSelectedDong(dongId);
    setIsDongSheetOpen(false);
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

  const getRegionDisplayName = (type: 'city' | 'district' | 'dong', id: string, cityId?: string, districtId?: string) => {
    if (type === 'city') {
      const city = getCityById(id);
      return city?.name || '시/도';
    } else if (type === 'district') {
      const district = getDistrictById(cityId!, id);
      return district?.name || '시/군/구';
    } else {
      const dong = getDongById(cityId!, districtId!, id);
      return dong?.name || '읍/면/동';
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
            label={selectedCity ? getRegionDisplayName('city', selectedCity) : "시/도"}
            onClick={() => setIsCitySheetOpen(true)}
          />
          <SelectButton
            label={selectedDistrict ? getRegionDisplayName('district', selectedDistrict, selectedCity) : "시/군/구"}
            onClick={() => selectedCity ? setIsDistrictSheetOpen(true) : undefined}
            className={selectedCity ? '' : 'opacity-50 cursor-not-allowed'}
          />
          <SelectButton
            label={selectedDong ? getRegionDisplayName('dong', selectedDong, selectedCity, selectedDistrict) : "읍/면/동"}
            onClick={() => selectedDistrict ? setIsDongSheetOpen(true) : undefined}
            className={selectedDistrict ? '' : 'opacity-50 cursor-not-allowed'}
          />
        </div>
      </section>

      {/* 섹션 간 간격 */}
      <div className="h-[12px]" />

      {/* 섹션 3: 지역 직접 검색 */}
      <section className="max-w-mobile mx-auto">
        <SearchInput 
          placeholder="지역 직접 검색"
          navigateToSearch={true}
        />
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

      {/* 시도 선택 바텀시트 */}
      <BottomSheet
        name="city-selector"
        isOpen={isCitySheetOpen}
        onClose={() => setIsCitySheetOpen(false)}
      >
        <CitySelector
          selectedCity={selectedCity}
          onSelect={handleCitySelect}
        />
      </BottomSheet>

      {/* 구 선택 바텀시트 */}
      <BottomSheet
        name="district-selector"
        isOpen={isDistrictSheetOpen}
        onClose={() => setIsDistrictSheetOpen(false)}
      >
        {selectedCity && (
          <DistrictSelector
            cityId={selectedCity}
            selectedDistrict={selectedDistrict}
            onSelect={handleDistrictSelect}
          />
        )}
      </BottomSheet>

      {/* 동 선택 바텀시트 */}
      <BottomSheet
        name="dong-selector"
        isOpen={isDongSheetOpen}
        onClose={() => setIsDongSheetOpen(false)}
      >
        {selectedCity && selectedDistrict && (
          <DongSelector
            cityId={selectedCity}
            districtId={selectedDistrict}
            selectedDong={selectedDong}
            onSelect={handleDongSelect}
          />
        )}
      </BottomSheet>
    </main>
  );
}