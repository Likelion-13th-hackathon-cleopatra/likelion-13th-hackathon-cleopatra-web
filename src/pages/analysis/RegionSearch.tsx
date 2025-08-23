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
    <main className="relative min-h-[100svh] bg-grayscale-white">
      {/* 헤더 */}
      <header className="flex items-center px-[24px] py-[16px] bg-white border-b border-gray-100">
        <button
          onClick={handleBack}
          className="mr-[12px] p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M15 18L9 12L15 6" 
              stroke="#333" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 검색 입력창 */}
        <div className="flex-1 relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg 
              width="15" 
              height="15" 
              viewBox="0 0 15 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M10.4172 9.55977H9.75885L9.52552 9.33477C10.5255 8.1681 11.0422 6.57643 10.7589 4.88477C10.3672 2.5681 8.43385 0.718099 6.10052 0.434766C2.57552 0.00143281 -0.391145 2.9681 0.042188 6.4931C0.325521 8.82643 2.17552 10.7598 4.49219 11.1514C6.18385 11.4348 7.77552 10.9181 8.94219 9.9181L9.16719 10.1514V10.8098L12.7089 14.3514C13.0505 14.6931 13.6089 14.6931 13.9505 14.3514C14.2922 14.0098 14.2922 13.4514 13.9505 13.1098L10.4172 9.55977ZM5.41719 9.55977C3.34219 9.55977 1.66719 7.88477 1.66719 5.80977C1.66719 3.73477 3.34219 2.05977 5.41719 2.05977C7.49219 2.05977 9.16719 3.73477 9.16719 5.80977C9.16719 7.88477 7.49219 9.55977 5.41719 9.55977Z" 
                fill="#0DB659"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="지역명 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full 
              h-[48px] 
              pl-[48px] 
              pr-4 
              bg-gray-100 
              border 
              border-gray-200 
              rounded-[24px] 
              text-gray-700 
              placeholder-gray-500 
              focus:outline-none 
              focus:ring-2 
              focus:ring-primary-green-40 
              focus:border-transparent
              text-[14px]
              leading-[21px]
              tracking-[-0.03em]
            "
          />
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
            <h3 className="Head_Bold_16 text-gray-800 mb-4">
              '{searchQuery}' 검색 결과
            </h3>
            
            {/* 실제 검색 결과 리스트 */}
            <div className="space-y-3">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div 
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className="p-4 bg-white border border-gray-200 rounded-[12px] hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <p className="Sub_Bold_14 text-gray-800">
                      {highlightSearchTerm(result.fullAddress, searchQuery)}
                    </p>
                    <p className="text-[12px] text-gray-500 mt-1">
                      {result.city}
                      {result.district && ` > ${result.district}`}
                      {result.dong && ` > ${result.dong}`}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-[40px]">
                  <p className="Sub_Bold_14 text-gray-500 mb-2">검색 결과가 없습니다</p>
                  <p className="text-[12px] text-gray-400">다른 키워드로 검색해보세요</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-[60px]">
            <div className="mb-4">
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 15 15" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto opacity-30"
              >
                <path 
                  d="M10.4172 9.55977H9.75885L9.52552 9.33477C10.5255 8.1681 11.0422 6.57643 10.7589 4.88477C10.3672 2.5681 8.43385 0.718099 6.10052 0.434766C2.57552 0.00143281 -0.391145 2.9681 0.042188 6.4931C0.325521 8.82643 2.17552 10.7598 4.49219 11.1514C6.18385 11.4348 7.77552 10.9181 8.94219 9.9181L9.16719 10.1514V10.8098L12.7089 14.3514C13.0505 14.6931 13.6089 14.6931 13.9505 14.3514C14.2922 14.0098 14.2922 13.4514 13.9505 13.1098L10.4172 9.55977ZM5.41719 9.55977C3.34219 9.55977 1.66719 7.88477 1.66719 5.80977C1.66719 3.73477 3.34219 2.05977 5.41719 2.05977C7.49219 2.05977 9.16719 3.73477 9.16719 5.80977C9.16719 7.88477 7.49219 9.55977 5.41719 9.55977Z" 
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <p className="Sub_Bold_14 text-gray-500 mb-2">지역명을 검색해보세요</p>
            <p className="text-[12px] text-gray-400">예: 강남구, 역삼동, 홍대입구 등</p>
          </div>
        )}
      </div>
    </main>
  );
}