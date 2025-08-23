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
              flex flex-col items-center justify-center p-4 rounded-xl border transition-all h-20
              ${selectedIndustry === industry.id
                ? 'bg-green-50 border-green-500 text-green-700'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            <img 
              src={industry.icon} 
              alt={industry.name}
              className="w-8 h-8 mb-2"
            />
            <span className="text-sm font-medium">{industry.name}</span>
          </button>
        ))}
      </div>
    </>
  );
} 