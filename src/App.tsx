import AppRoutes from "./app/routes/AppRoutes";
import BottomNavBar from "./components/layout/BottomNavBar";
import RejectTapModal from "./components/analysisSelect/RejectTapModal";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const showNavBar = location.pathname !== "/";
  
  // RejectTapModal 상태
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string>('');

  // 커스텀 이벤트 리스너 설정
  useEffect(() => {
    const handleShowRejectModal = (event: CustomEvent) => {
      setPendingNavigation(event.detail.targetPath);
      setIsRejectModalOpen(true);
    };

    window.addEventListener('showRejectModal', handleShowRejectModal as EventListener);
    
    return () => {
      window.removeEventListener('showRejectModal', handleShowRejectModal as EventListener);
    };
  }, []);

  // 모달에서 확인했을 때 실행되는 함수
  const handleConfirmNavigation = () => {
    setIsRejectModalOpen(false);
    if (pendingNavigation) {
      // 선택 상태 초기화
      localStorage.removeItem('analysisSelection');
      navigate(pendingNavigation);
    }
  };

  // 모달에서 취소했을 때 실행되는 함수
  const handleCancelNavigation = () => {
    setIsRejectModalOpen(false);
    setPendingNavigation('');
  };

  return (
    <div className="mobile-wrapper">
      <div className="mobile-container relative pb-16">
        <AppRoutes />
        {showNavBar && <BottomNavBar />}
        
        {/* RejectTapModal */}
        <RejectTapModal
          isOpen={isRejectModalOpen}
          onClose={handleCancelNavigation}
          onStartAnalysis={handleConfirmNavigation}
        />
      </div>
    </div>
  );
}
