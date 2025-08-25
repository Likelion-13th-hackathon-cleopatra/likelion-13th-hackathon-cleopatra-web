import React from 'react';

interface AnalysisLoadingProps {
  isOpen: boolean;
  onComplete?: () => void;
}

export default function AnalysisLoading({ isOpen, onComplete }: AnalysisLoadingProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center animate-fade-in">
      {/* 로딩 아이콘 영역 */}
      <div className="mb-[32px]">
        {/* 8개 원 회전 스피너 */}
        <div className="relative w-[76px] h-[76px] animate-spin">
          {/* 원 1 - 12시 방향 */}
          <div 
            className="absolute w-[10.67px] h-[10.67px] rounded-full"
            style={{
              top: '0px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#0DB659' 
            }}
          />
          
          {/* 원 2 - 1시 30분 방향 */}
          <div 
            className="absolute w-[10.67px] h-[10.67px] rounded-full"
            style={{
              top: '7.32px',
              right: '7.32px',
              backgroundColor: 'rgba(13, 182, 89, 0.7)'
            }}
          />
          
          {/* 원 3 - 3시 방향 */}
          <div 
            className="absolute w-[10.67px] h-[10.67px] rounded-full"
            style={{
              top: '50%',
              right: '0px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(13, 182, 89, 0.4)' 
            }}
          />
          
          {/* 원 4 - 4시 30분 방향 */}
          <div 
            className="absolute w-[10.67px] h-[10.67px] rounded-full"
            style={{
              bottom: '7.32px',
              right: '7.32px',
              backgroundColor: 'rgba(13, 182, 89, 0.1)'
            }}
          />
          
          {/* 원 5 - 6시 방향 */}
          <div 
            className="absolute w-[10.67px] h-[10.67px] rounded-full"
            style={{
              bottom: '0px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#FFC251' 
            }}
          />
          
          {/* 원 6 - 7시 30분 방향 */}
          <div 
            className="absolute w-[10.67px] h-[10.67px] rounded-full"
            style={{
              bottom: '7.32px',
              left: '7.32px',
              backgroundColor: 'rgba(255, 194, 81, 0.7)'
            }}
          />
          
          {/* 원 7 - 9시 방향 */}
          <div 
            className="absolute w-[10.67px] h-[10.67px] rounded-full"
            style={{
              top: '50%',
              left: '0px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 194, 81, 0.4)'
            }}
          />
          
          {/* 원 8 - 10시 30분 방향 */}
          <div 
            className="absolute w-[10.67px] h-[10.67px] rounded-full"
            style={{
              top: '7.32px',
              left: '7.32px',
              backgroundColor: 'rgba(255, 194, 81, 0.1)'
            }}
          />
        </div>
      </div>

      {/* 로딩 텍스트 */}
      <div className="text-center">
        <h2 className="Body_SemiBold_18 text-[#032412] mb-[8px]">
        맞춤형 리포트를 생성하고 있어요!<br/>잠시만 기다려주세요.
        </h2>
      </div>
    </div>
  );
}