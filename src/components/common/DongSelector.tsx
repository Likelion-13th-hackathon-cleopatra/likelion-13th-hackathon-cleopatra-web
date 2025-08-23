import React from 'react';
import { getDongsByDistrict } from '../../data/regionData';

interface DongSelectorProps {
  cityId: string;
  districtId: string;
  selectedDong?: string;
  onSelect: (dongId: string) => void;
}

export default function DongSelector({ cityId, districtId, selectedDong, onSelect }: DongSelectorProps) {
  const dongs = getDongsByDistrict(cityId, districtId);

  if (dongs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="Sub_Bold_14 text-gray-500">해당 구의 동 정보가 없습니다.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto">
        {dongs.map((dong) => (
          <button
            key={dong.id}
            onClick={() => onSelect(dong.id)}
            className={`
              flex items-center justify-center p-4 rounded-[16px] transition-all h-[45px]
              ${selectedDong === dong.id
                ? 'bg-primary-green/20'
                : 'bg-white border border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            <span className="Sub_Bold_14 text-primary-green-40">{dong.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}