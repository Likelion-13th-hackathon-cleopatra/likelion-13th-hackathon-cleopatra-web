import React, { useEffect, useRef } from 'react';
import type { RegionBoundary } from '../../types/boundary';

interface KakaoMapNewProps {
  selectedCity?: string;
  selectedDistrict?: string;
  selectedDong?: string;
  width?: string;
  height?: string;
}

// 전역 kakao 타입 선언
declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMapNew({ 
  selectedCity, 
  selectedDistrict, 
  selectedDong,
  width = "100%",
  height = "200px"
}: KakaoMapNewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const currentPolygon = useRef<any>(null); // 현재 표시된 다각형

  useEffect(() => {
    const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_MAP_APP_KEY;
    
    if (!KAKAO_APP_KEY) {
      console.error('카카오맵 API 키가 설정되지 않았습니다.');
      return;
    }

    // 스크립트 로드 함수
    const loadKakaoMapScript = () => {
      return new Promise<void>((resolve, reject) => {
        // 이미 로드되어 있으면 바로 resolve
        if (window.kakao && window.kakao.maps) {
          resolve();
          return;
        }

        // 기존 스크립트 제거
        const existingScript = document.querySelector('script[src*="dapi.kakao.com"]');
        if (existingScript) {
          existingScript.remove();
        }

        // 새 스크립트 생성 (autoload=false로 document.write 경고 방지)
        const script = document.createElement('script');
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services&autoload=false`;
        
        script.onload = () => {
          console.log('카카오맵 스크립트 로드 완료');
          resolve();
        };
        
        script.onerror = () => {
          console.error('카카오맵 스크립트 로드 실패');
          reject(new Error('카카오맵 스크립트 로드 실패'));
        };

        document.head.appendChild(script);
      });
    };

    // 지도 초기화 함수
    const initializeMap = () => {
      if (!mapContainer.current) return;

      // kakao.maps.load() 콜백 사용해서 완전히 초기화된 후 실행
      window.kakao.maps.load(() => {
        try {
          console.log('카카오맵 API 초기화 시작');
          
          // 서울 기본 위치
          const position = new window.kakao.maps.LatLng(37.5665, 126.9780);
          
          const options = {
            center: position,
            level: 12  // 더욱 축소된 뷰 (서울시 전체가 보이도록)
          };

          const map = new window.kakao.maps.Map(mapContainer.current, options);
          
          // 마커 생성 (초기에는 지도에 표시하지 않음)
          const marker = new window.kakao.maps.Marker({
            position: position
          });
          // marker.setMap(map); // 초기에는 마커를 표시하지 않음
          
          console.log('카카오맵 초기화 완료');
          
          // 선택된 지역이 있으면 해당 위치로 이동
          if (selectedDong) {
            // 동적 import로 데이터 로드
            import('../../data/seoulBoundaryData').then(({ seoulBoundaryData }) => {
              const regionData = seoulBoundaryData[selectedDong];
              if (regionData) {
                // 실제 지역 데이터의 중심점 사용
                const newPosition = new window.kakao.maps.LatLng(
                  regionData.center.lat, 
                  regionData.center.lng
                );
                
                map.setCenter(newPosition);
                marker.setPosition(newPosition);
                marker.setMap(map); // 지역 선택 시에만 마커 표시
                map.setLevel(6); // 동 레벨
                
                console.log(`지도 이동: ${regionData.district} ${regionData.name}`);
                
                // 지역 경계 다각형 표시
                displayRegionBoundary(map, selectedCity, selectedDistrict, selectedDong);
              } else {
                console.log('해당 동의 데이터를 찾을 수 없습니다:', selectedDong);
              }
            }).catch(error => {
              console.error('지역 데이터 로드 실패:', error);
            });
          } else {
            // 기본 서울 중심으로 설정 (마커 없이)
            const defaultPosition = new window.kakao.maps.LatLng(37.5665, 126.9780);
            map.setCenter(defaultPosition);
            map.setLevel(10);  // 더욱 축소된 뷰
          }

        } catch (error) {
          console.error('카카오맵 초기화 실패:', error);
        }
      });
    };

    // 지역 경계 다각형 표시 함수
    const displayRegionBoundary = (map: any, city?: string, district?: string, dong?: string) => {
      // 기존 다각형 제거
      if (currentPolygon.current) {
        currentPolygon.current.setMap(null);
        currentPolygon.current = null;
      }

      // 동이 선택되지 않았으면 리턴
      if (!dong) {
        console.log('동이 선택되지 않았습니다.');
        return;
      }

      // 동적 import로 경계 데이터 가져오기
      import('../../data/seoulBoundaryData').then(({ seoulBoundaryData }) => {
        const boundaryData = seoulBoundaryData[dong];
        if (!boundaryData) {
          console.log('해당 지역의 경계 데이터가 없습니다:', { city, district, dong });
          return;
        }

        try {
          // 좌표 배열을 카카오맵 LatLng 객체로 변환
          const polygonPath = boundaryData.coordinates.map(coord => 
            new window.kakao.maps.LatLng(coord[1], coord[0]) // lat, lng 순서 주의
          );

          // 다각형 스타일 옵션
          const polygonOptions = {
            path: polygonPath,
            strokeWeight: 2,
            strokeColor: '#0DB659', // primary-green 색상
            strokeOpacity: 0.8,
            fillColor: '#0DB659',
            fillOpacity: 0.15
          };

          // 다각형 생성 및 지도에 표시
          currentPolygon.current = new window.kakao.maps.Polygon(polygonOptions);
          currentPolygon.current.setMap(map);
          
          console.log(`${boundaryData.name} 경계 표시 완료`);
          
        } catch (error) {
          console.error('다각형 표시 실패:', error);
        }
      }).catch(error => {
        console.error('지역 경계 데이터 로드 실패:', error);
      });
    };

    // 실행
    loadKakaoMapScript()
      .then(() => {
        initializeMap();
      })
      .catch((error) => {
        console.error('카카오맵 로드 실패:', error);
      });

  }, [selectedCity, selectedDistrict, selectedDong]);

  return (
    <div 
      ref={mapContainer}
      style={{ width, height }}
      className="border border-gray-200 rounded-[12px] overflow-hidden bg-gray-100"
    >
      {/* 로딩 상태는 CSS background로 처리 */}
    </div>
  );
}