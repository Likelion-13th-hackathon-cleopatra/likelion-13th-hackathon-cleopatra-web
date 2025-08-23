import React, { useEffect, useRef } from 'react';

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
            level: 8
          };

          const map = new window.kakao.maps.Map(mapContainer.current, options);
          
          // 마커 생성
          const marker = new window.kakao.maps.Marker({
            position: position
          });
          
          marker.setMap(map);
          
          console.log('카카오맵 초기화 완료');
          
          // 선택된 지역이 있으면 해당 위치로 이동
          if (selectedCity || selectedDistrict || selectedDong) {
            // moveToSelectedRegion을 여기서 직접 실행
            let address = selectedCity || '';
            if (selectedDistrict) address += ` ${selectedDistrict}`;
            if (selectedDong) address += ` ${selectedDong}`;

            if (address) {
              // 간단한 좌표 매핑
              const coordinates: Record<string, {lat: number, lng: number}> = {
                '서울시': { lat: 37.5665, lng: 126.9780 },
                '서울시 강남구': { lat: 37.5173, lng: 127.0473 },
                '서울시 노원구': { lat: 37.6542, lng: 127.0568 },
                '서울시 종로구': { lat: 37.5735, lng: 126.9788 },
              };

              const coord = coordinates[address] || coordinates['서울시'];
              const newPosition = new window.kakao.maps.LatLng(coord.lat, coord.lng);
              
              map.setCenter(newPosition);
              marker.setPosition(newPosition);
              
              // 확대 레벨 조정
              const level = selectedDong ? 4 : selectedDistrict ? 6 : 8;
              map.setLevel(level);
              
              console.log(`지도 이동: ${address}`);
            }
          }

        } catch (error) {
          console.error('카카오맵 초기화 실패:', error);
        }
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