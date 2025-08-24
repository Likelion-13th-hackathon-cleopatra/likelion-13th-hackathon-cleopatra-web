import React from 'react';
import { getAllIndustries } from '../../data/industryData';

interface IndustrySelectorProps {
  selectedIndustry?: string;
  onSelect: (industryId: string) => void;
}

export default function IndustrySelector({ selectedIndustry, onSelect }: IndustrySelectorProps) {
  const industries = getAllIndustries();

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {industries.map((industry) => (
          <button
            key={industry.id}
            onClick={() => onSelect(industry.id)}
            className={`
              flex flex-row items-center justify-center p-4 rounded-[16px] transition-all h-[45px]
              ${selectedIndustry === industry.id
                ? 'bg-primary-green/20'
                : 'bg-white border border-gray-200'
              }
            `}
          >
            <img 
              src={industry.icon} 
              alt={industry.name}
              className="w-[20px] h-[20px] mr-[10px]"
            />
            <span className="Sub_Bold_14 text-primary-green-40">{industry.name}</span>
          </button>
        ))}
      </div>
    </>
  );
} 