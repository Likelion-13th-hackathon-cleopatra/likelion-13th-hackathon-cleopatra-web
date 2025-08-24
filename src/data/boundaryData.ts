// 서울시 주요 구역 경계 데이터 (샘플)
// 실제 VWorld 데이터로 교체 예정

export interface RegionBoundary {
  name: string;
  level: 'city' | 'district' | 'dong';
  coordinates: number[][]; // [lng, lat] 형태
  center: {
    lat: number;
    lng: number;
  };
}

// 임시 샘플 데이터 (실제 경계는 VWorld 데이터로 교체)
export const boundaryData: Record<string, RegionBoundary> = {
  '강남구': {
    name: '강남구',
    level: 'district',
    // 강남구 대략적인 경계 (사각형 근사)
    coordinates: [
      [127.020, 37.495], // 좌하
      [127.095, 37.495], // 우하  
      [127.095, 37.540], // 우상
      [127.020, 37.540], // 좌상
      [127.020, 37.495]  // 닫기
    ],
    center: { lat: 37.5173, lng: 127.0473 }
  },
  
  '노원구': {
    name: '노원구', 
    level: 'district',
    // 노원구 대략적인 경계 (사각형 근사)
    coordinates: [
      [127.030, 37.630], // 좌하
      [127.090, 37.630], // 우하
      [127.090, 37.680], // 우상  
      [127.030, 37.680], // 좌상
      [127.030, 37.630]  // 닫기
    ],
    center: { lat: 37.6542, lng: 127.0568 }
  },

  '종로구': {
    name: '종로구',
    level: 'district', 
    // 종로구 대략적인 경계 (사각형 근사)
    coordinates: [
      [126.960, 37.560], // 좌하
      [127.010, 37.560], // 우하
      [127.010, 37.590], // 우상
      [126.960, 37.590], // 좌상  
      [126.960, 37.560]  // 닫기
    ],
    center: { lat: 37.5735, lng: 126.9788 }
  },

  '서울시': {
    name: '서울시',
    level: 'city',
    // 서울시 대략적인 경계 (큰 사각형)
    coordinates: [
      [126.760, 37.420], // 좌하
      [127.280, 37.420], // 우하
      [127.280, 37.700], // 우상
      [126.760, 37.700], // 좌상
      [126.760, 37.420]  // 닫기  
    ],
    center: { lat: 37.5665, lng: 126.9780 }
  }
};

// 지역명으로 경계 데이터 검색
export const getBoundaryData = (regionName: string): RegionBoundary | undefined => {
  return boundaryData[regionName];
};

// 여러 지역 조합으로 검색 (예: "서울시 강남구")
export const getBoundaryByFullAddress = (city?: string, district?: string, dong?: string): RegionBoundary | undefined => {
  // 우선순위: 동 > 구 > 시
  if (dong && city && district) {
    const fullName = `${city} ${district} ${dong}`;
    if (boundaryData[fullName]) return boundaryData[fullName];
  }
  
  if (district && city) {
    const districtName = `${city} ${district}`;
    if (boundaryData[districtName]) return boundaryData[districtName];
    // 구 이름만으로도 검색
    if (boundaryData[district]) return boundaryData[district];
  }
  
  if (city) {
    return boundaryData[city];
  }
  
  return undefined;
};