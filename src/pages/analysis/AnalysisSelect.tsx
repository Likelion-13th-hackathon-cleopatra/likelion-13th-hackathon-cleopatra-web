import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FilledButton from "../../components/analysisSelect/FilledButton";
import SelectButton from "../../components/analysisSelect/SelectButton";
import BottomSheet from "../../components/analysisSelect/BottomSheet";
import IndustrySelector from "../../components/analysisSelect/IndustrySelector";
import SubCategorySelector from "../../components/analysisSelect/SubCategorySelector";
import CitySelector from "../../components/analysisSelect/CitySelector";
import DistrictSelector from "../../components/analysisSelect/DistrictSelector";
import DongSelector from "../../components/analysisSelect/DongSelector";
import SearchInput from "../../components/analysisSelect/SearchInput";
import KakaoMapNew from "../../components/analysisSelect/KakaoMapNew";
import AnalysisModal from "../../components/analysisSelect/AnalysisModal";
import AnalysisLoading from "../../components/analysisSelect/AnalysisLoading";
import RejectRegionModal from "../../components/analysisSelect/RejectRegionModal";
import { getIndustryById, getSubCategoryById } from "../../data/industryData";
import { getCityById, getDistrictById, getDongById } from "../../data/regionData";
import { analysisApi } from "../../utils/api";

export default function AnalysisSelect() {
  const navigate = useNavigate();
  const location = useLocation();
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

  // 분석 모달 상태
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);
  
  // 분석 로딩 상태
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(false);

  // RejectRegionModal 상태
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [rejectedRegion, setRejectedRegion] = useState<string>('');

  // 분석 준비 상태 확인 (업종과 지역이 모두 선택되었는지)
  const isAnalysisReady = selectedSubCategory && selectedDong;

  // 선택 상태를 localStorage에 저장/제거하는 useEffect
  useEffect(() => {
    if (selectedIndustry || selectedSubCategory || selectedCity || selectedDistrict || selectedDong) {
      localStorage.setItem('analysisSelection', 'true');
    } else {
      localStorage.removeItem('analysisSelection');
    }
  }, [selectedIndustry, selectedSubCategory, selectedCity, selectedDistrict, selectedDong]);

  // 지원 가능한 동인지 확인하는 함수
  const isSupportedDong = (dongName: string) => {
    return dongName === '공릉1동' || dongName === '공릉2동';
  };

  // 분석 시작 함수
  const handleStartAnalysis = async () => {
    try {
      setIsAnalysisModalOpen(false); // 모달 닫기
      setIsAnalysisLoading(true); // 로딩 시작

      // API 호출하여 상권 분석 요청
      const analysisData = {
        industry: selectedIndustry ? getIndustryById(selectedIndustry)?.name || '' : '', // 업종 한글 이름 (예: "외식업")
        subCategory: selectedSubCategory ? getSubCategoryById(selectedIndustry, selectedSubCategory)?.name || '' : '', // 하위 업종 한글 이름 (예: "일식")
        city: selectedCity,
        district: selectedDistrict ? getDistrictById(selectedCity, selectedDistrict)?.name || '' : '', // 구 이름 (예: "노원구")
        dong: selectedDong ? getDongById(selectedCity, selectedDistrict, selectedDong)?.name || '' : '', // 동 이름 (예: "공릉1동")
      };

      console.log('전송할 데이터:', analysisData);

      const response = await analysisApi.requestAnalysis(analysisData);
      
      // 분석 완료 후 ReportView로 이동
      if (response.analysisId) {
        navigate(`/report/${response.analysisId}`);
      } else {
        // analysisId가 없는 경우 기본값으로 이동
        navigate('/report/default');
      }
    } catch (error) {
      console.error('Analysis failed:', error);
      // 에러 처리 (사용자에게 알림 등)
      setIsAnalysisLoading(false);
      // 에러 모달이나 토스트 메시지 표시
    }
  };

  // 분석 완료 함수 (기존 코드 유지)
  const handleAnalysisComplete = () => {
    setIsAnalysisLoading(false);
    navigate("/analysis/result"); // 결과 페이지로 이동
  };

  // URL 파라미터에서 업종 정보 읽어와서 상태 업데이트 (항상 실행)
  useEffect(() => {
    const industryParam = location.state?.industry;
    const subCategoryParam = location.state?.subCategory;

    // 업종 정보 복원
    if (industryParam) {
      setSelectedIndustry(industryParam);
    }
    if (subCategoryParam) {
      setSelectedSubCategory(subCategoryParam);
    }
  }, [location.state]);

  // URL 파라미터에서 지역 정보 읽어와서 상태 업데이트 (한 번만 실행)
  useEffect(() => {
    const cityParam = location.state?.city;
    const districtParam = location.state?.district;
    const dongParam = location.state?.dong;

    if (cityParam || districtParam || dongParam) {
      // cityParam에서 city ID 찾기 (예: "서울시" -> "seoul")
      if (cityParam === '서울시') {
        setSelectedCity('seoul');
      }
      
      // districtParam에서 district ID 찾기
      if (districtParam && cityParam === '서울시') {
        // regionData에서 district ID 찾기
        const city = getCityById('seoul');
        if (city) {
          const districtEntry = Object.entries(city.districts).find(
            ([_, district]) => district.name === districtParam
          );
          if (districtEntry) {
            setSelectedDistrict(districtEntry[0]);
          }
        }
      }
      
      // dongParam에서 dong ID 찾기
      if (dongParam && districtParam && cityParam === '서울시') {
        const city = getCityById('seoul');
        if (city) {
          const districtEntry = Object.entries(city.districts).find(
            ([_, district]) => district.name === districtParam
          );
          if (districtEntry) {
            const district = districtEntry[1];
            const dongEntry = district.dongs.find(dong => dong.name === dongParam);
            if (dongEntry) {
              setSelectedDong(dongEntry.id);
            }
          }
        }
      }
      
      // URL 파라미터 제거 (지역 정보만 제거하고 업종 정보는 유지)
      // const newSearchParams = new URLSearchParams();
      // const industryParam = searchParams.get('industry');
      // const subCategoryParam = searchParams.get('subCategory');
      // if (industryParam) {
      //   newSearchParams.set('industry', industryParam);
      // }
      // if (subCategoryParam) {
      //   newSearchParams.set('subCategory', subCategoryParam);
      // }
      // setSearchParams(newSearchParams);
    }
  }, [location.state]); // 빈 의존성 배열로 한 번만 실행

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
    const dongName = getDongById(selectedCity, selectedDistrict, dongId)?.name;
    
    if (dongName && !isSupportedDong(dongName)) {
      // 지원하지 않는 동인 경우
      setRejectedRegion(dongName);
      setIsRejectModalOpen(true);
      return;
    }
    
    // 지원하는 동인 경우
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
          currentIndustry={selectedIndustry}
          currentSubCategory={selectedSubCategory}
        />
        
        {/* 카카오맵 */}
        <div className="mt-[16px]">
          <KakaoMapNew
            selectedCity={selectedCity ? getCityById(selectedCity)?.name : undefined}
            selectedDistrict={selectedDistrict ? getDistrictById(selectedCity, selectedDistrict)?.name : undefined}
            selectedDong={selectedDong ? getDongById(selectedCity, selectedDistrict, selectedDong)?.name : undefined}
            height="200px"
          />
        </div>
      </section>

      {/* 하단 고정 CTA (BottomNavBar 88px + 24px) */}
      <div className="fixed left-1/2 -translate-x-1/2 w-full max-w-mobile px-[24px] bottom-[112px]">
        <FilledButton 
          text="분석하기" 
          onClick={() => setIsAnalysisModalOpen(true)}
          disabled={!isAnalysisReady}
        />
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

      {/* 분석 시작 모달 */}
      <AnalysisModal
        isOpen={isAnalysisModalOpen}
        onClose={() => setIsAnalysisModalOpen(false)}
        onStartAnalysis={handleStartAnalysis}
        selectedIndustry={selectedIndustry ? getIndustryById(selectedIndustry)?.name : ''}
        selectedSubCategory={selectedSubCategory ? getSubCategoryById(selectedIndustry, selectedSubCategory)?.name : ''}
        selectedRegion={selectedDong ? `${getCityById(selectedCity)?.name} ${getDistrictById(selectedCity, selectedDistrict)?.name} ${getDongById(selectedCity, selectedDistrict, selectedDong)?.name}` : ''}
      />

      {/* 분석 로딩 화면 */}
      <AnalysisLoading
        isOpen={isAnalysisLoading}
        onComplete={handleAnalysisComplete}
      />

      {/* RejectTapModal */}
      <RejectRegionModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        selectedRegion={rejectedRegion}
      />
    </main>
  );
}