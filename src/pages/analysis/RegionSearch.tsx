import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchInput from "../../components/analysisSelect/SearchInput";
import RejectRegionModal from "../../components/analysisSelect/RejectRegionModal";
import { searchRegions } from "../../data/regionData";

// 검색 결과 타입 정의
interface SearchResult {
  type: 'city' | 'district' | 'dong';
  city: string;
  district?: string;
  dong?: string;
  fullAddress: string;
}

export default function RegionSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // RejectRegionModal 상태
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [rejectedRegion, setRejectedRegion] = useState<string>('');

  // useLocation의 state에서 업종 정보 읽기
  const currentIndustry = location.state?.industry;
  const currentSubCategory = location.state?.subCategory;

  // 지원 가능한 동인지 확인하는 함수
  const isSupportedDong = (dongName: string) => {
    return dongName === '공릉1동' || dongName === '공릉2동';
  };

  // 실시간 검색 (동까지만 표시)
  useEffect(() => {
    const results = searchRegions(searchQuery);
    // 동(dong) 타입 결과만 필터링
    const dongResults = results.filter(result => result.type === 'dong');
    setSearchResults(dongResults);
  }, [searchQuery]);

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 돌아가기
  };

  const handleSearch = (query: string) => {
    console.log('검색 실행:', query);
    // 엔터 키를 눌렀을 때의 동작 (필요시 추가 기능 구현)
  };

  // 검색어 하이라이트 함수
  const highlightSearchTerm = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;
    
    const normalizedSearch = searchTerm.toLowerCase().replace(/\s+/g, '');
    const normalizedText = text.toLowerCase().replace(/\s+/g, '');
    
    const index = normalizedText.indexOf(normalizedSearch);
    if (index === -1) return text;
    
    // 원본 텍스트에서 매칭되는 부분 찾기
    let originalIndex = 0;
    let normalizedIndex = 0;
    
    while (normalizedIndex < index && originalIndex < text.length) {
      if (text[originalIndex] !== ' ') {
        normalizedIndex++;
      }
      originalIndex++;
    }
    
    const startIndex = originalIndex;
    let endIndex = startIndex;
    let matchedChars = 0;
    
    while (matchedChars < normalizedSearch.length && endIndex < text.length) {
      if (text[endIndex] !== ' ') {
        matchedChars++;
      }
      endIndex++;
    }
    
    return (
      <>
        <span className="text-gray-25">
          {text.substring(0, startIndex)}
        </span>
        <span className="text-primary-green Sub_Bold_14">
          {text.substring(startIndex, endIndex)}
        </span>
        <span className="text-gray-25">
          {text.substring(endIndex)}
        </span>
      </>
    );
  };

  const handleResultClick = (result: SearchResult) => {
    // 동 결과인 경우에만 지원 가능한 동인지 확인
    if (result.type === 'dong' && result.dong) {
      if (!isSupportedDong(result.dong)) {
        // 지원하지 않는 동인 경우
        setRejectedRegion(result.fullAddress);
        setIsRejectModalOpen(true);
        return;
      }
    }
    
    // 지원하는 동이거나 동이 아닌 경우 AnalysisSelect로 이동
    console.log('Selected region:', result);
    
    // navigate의 state로 지역 정보와 업종 정보 전달 (URL에 노출되지 않음)
    navigate('/analysis/select', {
      state: {
        city: result.city,
        district: result.district || '',
        dong: result.dong || '',
        // 현재 state에서 업종 정보 읽어와서 전달
        industry: currentIndustry,
        subCategory: currentSubCategory
      }
    });
  };

  return (
    <main className="relative min-h-[100svh] bg-grayscale-5">
      {/* 헤더 */}
      <header className="relative px-[24px] py-[19.5px] bg-grayscale-5 border-b border-gray-100">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={handleBack}
          className="absolute left-[24px] top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors z-10"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-primary-green-40"
          >
            <path 
              d="M15 18L9 12L15 6" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 가운데 정렬된 제목 */}
        <div className="flex items-center justify-center h-full">
          <span className="Sub_Bold_14 text-primary-green">지역 직접 검색</span>
        </div>
      </header>

      {/* AnalysisSelect와 똑같은 검색창 */}
      <div className="px-[24px] py-[16px]">
        <SearchInput 
          placeholder="예) 서울시 노원구 공릉1동"
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={handleSearch}
        />
      </div>

      {/* 검색 결과 영역 */}
      <div className="px-[24px]">
        {searchQuery.length > 0 ? (
          <div>
            {/* 실제 검색 결과 리스트 */}
            <div className="space-y-4">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div 
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className="cursor-pointer"
                  >
                    <p className="Sub_Bold_14">
                      {highlightSearchTerm(result.fullAddress, searchQuery)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="Sub_Bold_14 text-gray-500 text-center py-[40px]">
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-[60px]">
          </div>
        )}
      </div>

      {/* RejectRegionModal */}
      <RejectRegionModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        selectedRegion={rejectedRegion}
      />
    </main>
  );
}