import React from 'react';

interface StrategyCardProps {
  title: string;
  items: string[];
  className?: string;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ title, items, className = '' }) => {
  // ** 안의 텍스트를 강조 스타일로 변환하는 함수
  const formatText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<span style="font-family: \'Sub_Bold_20\'; color: #086D35; font-weight: bold;">$1</span>');
  };

  return (
    <div className={`bg-[#E7F8EE] rounded-lg p-4 ${className}`}>
      {/* 제목 */}
      <div 
        className="Body_Regular_12 text-[#555554] mb-3"
        dangerouslySetInnerHTML={{ 
          __html: formatText(title) 
        }}
      />
      
      {/* 아이템 리스트 */}
      <div className="space-y-[6px]">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-[4px]">
            {/* 아이콘 */}
            <div className="flex-shrink-0 w-[12px] h-[12px] bg-[#0DB659] rounded-full flex items-center justify-center mt-[3px]">
              <span className="text-white Sub_Bold_8">{index + 1}</span>
            </div>
            
            {/* 텍스트 */}
            <div 
              className="Body_Regular_12 text-[#555554] leading-[18px] flex-1"
              dangerouslySetInnerHTML={{ 
                __html: formatText(item) 
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyCard; 