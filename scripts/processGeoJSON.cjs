// GeoJSON을 React에서 사용할 수 있는 TypeScript 파일로 변환하는 스크립트
// Node.js에서 실행: node scripts/processGeoJSON.cjs

const fs = require('fs');
const path = require('path');

// GeoJSON 파일 경로 (다운로드받은 파일로 변경)
const geoJsonPath = './hangjeongdong_서울특별시.geojson'; // 실제 파일명으로 변경

// 출력 파일 경로
const outputPath = './src/data/seoulBoundaryData.ts';

function processGeoJSON() {
  try {
    // GeoJSON 파일 읽기
    const geoJsonData = JSON.parse(fs.readFileSync(geoJsonPath, 'utf8'));
    
    console.log('GeoJSON 파일 로드 완료');
    console.log('JSON 구조:', Object.keys(geoJsonData));
    console.log('JSON 타입:', typeof geoJsonData);
    
    if (geoJsonData.features) {
      console.log('총 지역 수:', geoJsonData.features.length);
    } else {
      console.log('features 키가 없습니다. 가능한 키들:', Object.keys(geoJsonData));
    }
    
    // GeometryCollection 형태 처리
    let geometries = [];
    if (geoJsonData.type === 'GeometryCollection' && geoJsonData.geometries) {
      geometries = geoJsonData.geometries;
      console.log('GeometryCollection 형태, 총 geometry 수:', geometries.length);
    } else if (geoJsonData.features) {
      // 표준 FeatureCollection 형태
      geometries = geoJsonData.features.map(f => ({ ...f.geometry, properties: f.properties }));
      console.log('FeatureCollection 형태, 총 feature 수:', geometries.length);
    } else {
      console.error('알 수 없는 GeoJSON 구조:', Object.keys(geoJsonData));
      return;
    }

    // 각 geometry(지역)를 처리
    const processedData = {};
    let seoulCount = 0;
    
    geometries.forEach((geometry, index) => {
      // GeometryCollection의 경우 properties가 geometry 안에 없을 수 있음
      const properties = geometry.properties || {};
      
      // VWorld 데이터의 속성명 확인 (첫 5개만 로그 출력)
      if (index < 5) {
        console.log(`Feature ${index} properties:`, Object.keys(properties));
        console.log(`Feature ${index} full properties:`, properties);
      }
      
      // 서울시 데이터만 필터링 (시도명이 서울특별시인 경우)
      const sido = properties.sidonm || properties.SIDO_NM || properties.CTPRVN_NM || '';
      if (!sido.includes('서울')) {
        return; // 서울이 아니면 건너뛰기
      }
      
      seoulCount++;
      
      // 속성명은 데이터에 따라 다를 수 있음
      // adm_nm: "서울특별시 종로구 사직동" -> 파싱해서 구/동 정보 추출
      const fullName = properties.adm_nm || '';
      const parts = fullName.split(' ');
      const districtName = parts[1] || properties.sggnm || ''; // 종로구
      const dongName = parts[2] || ''; // 사직동
      
      const regionName = dongName;
      
      console.log(`처리 중: ${districtName} ${regionName}`);
      
      // 좌표 추출 (Polygon 또는 MultiPolygon 처리)
      let coordinates = [];
      if (geometry.type === 'Polygon') {
        coordinates = geometry.coordinates[0]; // 외곽선만
      } else if (geometry.type === 'MultiPolygon') {
        coordinates = geometry.coordinates[0][0]; // 첫 번째 폴리곤의 외곽선
      }
      
      // 좌표가 너무 많으면 간소화 (성능 최적화)
      if (coordinates.length > 100) {
        // 3개마다 하나씩만 선택해서 간소화
        coordinates = coordinates.filter((coord, i) => i % 3 === 0);
      }
      
      // 중심점 계산
      const center = calculateCenter(coordinates);
      
      // 지역 레벨 판단 (구/동)
      const level = regionName.includes('구') ? 'district' : 'dong';
      
      // 키 이름을 간단하게 (구 이름만 또는 동 이름만)
      const key = level === 'district' ? regionName : regionName;
      
      processedData[key] = {
        name: regionName,
        level: level,
        coordinates: coordinates,
        center: center,
        district: districtName // 추가 정보
      };
    });
    
    console.log(`서울시 지역 수: ${seoulCount}개`);
    
    // TypeScript 파일 생성
    const tsContent = `// 서울시 행정구역 경계 데이터 (VWorld 기반)
// 자동 생성됨 - 수동 편집 금지

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

export const seoulBoundaryData: Record<string, RegionBoundary> = ${JSON.stringify(processedData, null, 2)};

// 지역명으로 경계 데이터 검색
export const getSeoulBoundaryData = (regionName: string): RegionBoundary | undefined => {
  return seoulBoundaryData[regionName];
};

// 여러 지역 조합으로 검색
export const getSeoulBoundaryByAddress = (district?: string, dong?: string): RegionBoundary | undefined => {
  // 우선순위: 동 > 구
  if (dong) {
    if (seoulBoundaryData[dong]) return seoulBoundaryData[dong];
  }
  
  if (district) {
    if (seoulBoundaryData[district]) return seoulBoundaryData[district];
  }
  
  return undefined;
};

// 전체 서울시 경계 (모든 동 경계의 조합)
export const getSeoulCityBoundary = (): RegionBoundary => {
  // 임시로 큰 사각형 반환 (실제로는 모든 동 경계를 합쳐야 함)
  return {
    name: '서울시',
    level: 'city',
    coordinates: [
      [126.760, 37.420], // 좌하
      [127.280, 37.420], // 우하
      [127.280, 37.700], // 우상
      [126.760, 37.700], // 좌상
      [126.760, 37.420]  // 닫기  
    ],
    center: { lat: 37.5665, lng: 126.9780 }
  };
};
`;
    
    // 파일 저장
    fs.writeFileSync(outputPath, tsContent, 'utf8');
    console.log(`\n✅ 변환 완료! 파일 저장: ${outputPath}`);
    console.log(`총 ${Object.keys(processedData).length}개 지역 처리됨`);
    
  } catch (error) {
    console.error('❌ 변환 실패:', error.message);
    console.error('상세 오류:', error);
  }
}

// 중심점 계산 함수
function calculateCenter(coordinates) {
  let totalLat = 0;
  let totalLng = 0;
  const count = coordinates.length;
  
  coordinates.forEach(coord => {
    totalLng += coord[0]; // longitude
    totalLat += coord[1]; // latitude
  });
  
  return {
    lat: totalLat / count,
    lng: totalLng / count
  };
}

// 스크립트 실행
if (require.main === module) {
  processGeoJSON();
}

module.exports = { processGeoJSON };