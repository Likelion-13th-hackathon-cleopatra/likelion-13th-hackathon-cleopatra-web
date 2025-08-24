import React, { useState, useEffect, useRef } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  name?: string; // 바텀시트 구분을 위한 이름
}

export default function BottomSheet({ isOpen, onClose, children, title, name }: BottomSheetProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartY = useRef<number>(0);
  const currentTranslateY = useRef<number>(0);
  const currentTranslateYRef = useRef<number>(0); // 현재 translateY 값을 추적

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      setTranslateY(0);
      currentTranslateYRef.current = 0;
    }
  }, [isOpen]);

  // translateY가 변경될 때마다 ref 업데이트
  useEffect(() => {
    currentTranslateYRef.current = translateY;
  }, [translateY]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setTranslateY(0);
    }, 300); // 애니메이션 완료 후 닫기
  };

  // 터치 시작
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    console.log('Touch start:', e.touches[0].clientY);
    touchStartY.current = e.touches[0].clientY;
    currentTranslateY.current = translateY;
    setIsDragging(true);
  };

  // 터치 이동
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const currentY = e.touches[0].clientY;
    const diff = currentY - touchStartY.current;
    
    console.log('Touch move:', currentY, diff, translateY);
    
    // 아래로 스와이프할 때만 허용 (위로는 제한)
    const newTranslateY = Math.max(0, diff);
    setTranslateY(newTranslateY);
  };

  // 터치 종료
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    e.preventDefault();
    console.log('Touch end, translateY:', currentTranslateYRef.current);
    setIsDragging(false);
    
    // 일정 거리 이상 스와이프했으면 닫기
    if (currentTranslateYRef.current > 100) {
      handleClose();
    } else {
      // 원래 위치로 복귀
      setTranslateY(0);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isClosing ? 'bg-opacity-0' : 'bg-opacity-50'
        } z-50`}
        onClick={handleClose}
      />
      
      {/* Bottom Sheet */}
      <div 
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-mobile bg-white rounded-t-[20px] z-[60] transition-transform duration-300 ${
          isClosing ? 'animate-slide-down' : 'animate-slide-up'
        }`}
        style={{
          transform: `translate(-50%, ${translateY}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
        data-sheet-name={name}
      >
        {/* Handle */}
        <div 
          className="flex justify-center pt-[6px] pb-[19px] cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={(e) => {
            e.preventDefault();
            const startY = e.clientY;
            const startTranslateY = translateY;
            
            const handleMouseMove = (e: MouseEvent) => {
              const diff = e.clientY - startY;
              const newTranslateY = Math.max(0, diff);
              setTranslateY(newTranslateY);
            };
            
            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
              
              if (currentTranslateYRef.current > 100) {
                handleClose();
              } else {
                setTranslateY(0);
              }
            };
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        >
          <div className="w-[44px] h-[4px] bg-gray-300 rounded-full" />
        </div>
        
        
        {/* Content */}
        <div className="p-[24px]">
          {children}
        </div>
      </div>
    </>
  );
} 