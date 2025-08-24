import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Import SVG icons
import RegionAnalysisActive from '../../assets/icons/gnb/region-analysis-active.svg?react';
import RegionAnalysisInactive from '../../assets/icons/gnb/region-analysis.svg?react';
import CommunityActive from '../../assets/icons/gnb/community-active.svg?react'; // Assuming active for community is needed later
import CommunityInactive from '../../assets/icons/gnb/community.svg?react';
import MyStorageActive from '../../assets/icons/gnb/my-storage-active.svg?react'; // Assuming active for my-storage is needed later
import MyStorageInactive from '../../assets/icons/gnb/my-storage.svg?react';

interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function BottomNavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Determine active state for each button
  const isRegionAnalysisActive = currentPath === '/analysis' || currentPath.startsWith('/analysis/');
  // For now, community and my-storage are always inactive
  const isCommunityActive = currentPath === '/community';
  const isMyStorageActive = currentPath === '/my-storage';

  // 네비게이션 전에 확인하는 함수
  const handleNavigation = (path: string) => {
    // AnalysisSelect 페이지에서 뭔가 선택된 상태인지 확인
    if (currentPath === '/analysis/select') {
      // localStorage에서 선택 상태 확인 (AnalysisSelect에서 저장)
      const hasSelection = localStorage.getItem('analysisSelection');
      
      if (hasSelection === 'true') {
        // 선택된 상태라면 커스텀 이벤트 발생
        const event = new CustomEvent('showRejectModal', { 
          detail: { targetPath: path } 
        });
        window.dispatchEvent(event);
        return;
      }
    }
    
    // 선택되지 않았거나 다른 페이지라면 바로 이동
    navigate(path);
  };

  // Function to render a navigation item
  const NavItem = ({ icon: Icon, label, isActive, onClick }: NavItemProps) => (
    <button
      className="flex flex-col items-center justify-center w-[70px] h-[60px] text-gray-600 hover:text-blue-500 transition-colors"
      onClick={onClick}
    >
      <Icon className="w-full h-full" /> {/* Icon will fill the button size */}
      {/* Optional: add label below icon if needed */}
      {/* <span className="text-xs mt-1">{label}</span> */}
    </button>
  );

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-50 border-t border-gray-200"
         style={{ 
           height: '88px', 
           width: '430px', 
           maxWidth: '100vw',
           padding: '8px 54px 20px 54px' 
         }}>
      <div className="flex justify-between items-center h-full">
        {/* 지역분석 */}
        <NavItem
          icon={isRegionAnalysisActive ? RegionAnalysisActive : RegionAnalysisInactive}
          label="지역분석"
          isActive={isRegionAnalysisActive}
          onClick={() => handleNavigation('/analysis')}
        />

        {/* 커뮤니티 - 화면 중앙 배치 */}
        <NavItem
          icon={isCommunityActive ? CommunityActive : CommunityInactive}
          label="커뮤니티"
          isActive={isCommunityActive}
          onClick={() => handleNavigation('/community')} // Placeholder path
        />

        {/* 내 보관함 */}
        <NavItem
          icon={isMyStorageActive ? MyStorageActive : MyStorageInactive}
          label="내 보관함"
          isActive={isMyStorageActive}
          onClick={() => handleNavigation('/my-storage')} // Placeholder path
        />
              </div>
      </div>
    );
}