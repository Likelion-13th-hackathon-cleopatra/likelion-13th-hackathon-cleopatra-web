// 지역 경계 데이터 타입 정의

export interface RegionBoundary {
  name: string;
  level: 'city' | 'district' | 'dong';
  coordinates: number[][]; // [lng, lat] 형태
  center: {
    lat: number;
    lng: number;
  };
  district?: string; // 구 이름
}

export type BoundaryData = Record<string, RegionBoundary>;