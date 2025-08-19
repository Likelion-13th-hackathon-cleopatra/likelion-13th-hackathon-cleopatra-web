import React, { useState, useEffect } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  name?: string; // 바텀시트 구분을 위한 이름
}

export default function BottomSheet({ isOpen, onClose, children, title, name }: BottomSheetProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // 애니메이션 완료 후 닫기
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
        data-sheet-name={name}
      >
        {/* Handle */}
        <div className="flex justify-center pt-[6px] pb-[19px]">
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