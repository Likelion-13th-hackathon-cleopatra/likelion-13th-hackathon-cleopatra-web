import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../components/common/SearchInput";
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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

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
        {text.substring(0, startIndex)}
        <span className="text-primary-green-40 font-semibold">
          {text.substring(startIndex, endIndex)}
        </span>
        {text.substring(endIndex)}
      </>
    );
  };

  const handleResultClick = (result: SearchResult) => {
    // 결과 선택 시 AnalysisSelect 페이지로 돌아가면서 선택된 지역 정보 전달
    console.log('Selected region:', result);
    
    // URL 파라미터로 선택된 지역 정보 전달
    const searchParams = new URLSearchParams({
      city: result.city,
      district: result.district || '',
      dong: result.dong || ''
    });
    
    navigate(`/analysis/select?${searchParams.toString()}`);
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
          <span className="Head_Bold_16 text-gray-900">지역 직접 검색</span>
        </div>
      </header>

      {/* AnalysisSelect와 똑같은 검색창 */}
      <div className="px-[24px] py-[20px]">
        <SearchInput 
          placeholder="지역 직접 검색"
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={handleSearch}
        />
      </div>

      {/* 검색 결과 영역 */}
      <div className="px-[24px] py-[20px]">
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
                    <p className="Sub_Bold_14 text-gray-800">
                      {highlightSearchTerm(result.fullAddress, searchQuery)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="Sub_Bold_14 text-gray-500 text-center py-[40px]">
                  검색 결과가 없습니다
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-[60px]">
          </div>
        )}
      </div>
    </main>
  );
}