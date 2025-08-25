import React from 'react';
import { getDistrictsByCity } from '../../data/regionData';

interface DistrictSelectorProps {
  cityId: string;
  selectedDistrict?: string;
  onSelect: (districtId: string) => void;
}

export default function DistrictSelector({ cityId, selectedDistrict, onSelect }: DistrictSelectorProps) {
  const districts = getDistrictsByCity(cityId);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto">
        {districts.map((district) => (
          <button
            key={district.id}
            onClick={() => onSelect(district.id)}
            className={`
              flex items-center justify-center p-4 rounded-[16px] transition-all h-[45px]
              ${selectedDistrict === district.id
                ? 'bg-primary-green/20'
                : 'bg-white border border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            <span className="Sub_Bold_14 text-primary-green-40">{district.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}