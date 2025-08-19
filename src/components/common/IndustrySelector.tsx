import React from 'react';

interface Industry {
  id: string;
  name: string;
  icon: string;
}

interface IndustrySelectorProps {
  selectedIndustry?: string;
  onSelect: (industryId: string) => void;
}

const industries: Industry[] = [
  { id: 'food', name: '요식업', icon: '🍽️' },
  { id: 'service', name: '서비스업', icon: '🎧' },
  { id: 'medical', name: '의료업', icon: '🏥' },
  { id: 'sports', name: '스포츠', icon: '⚽' },
  { id: 'beauty', name: '뷰티', icon: '💄' },
  { id: 'culture', name: '문화', icon: '⭐' },
  { id: 'legal', name: '법률', icon: '⚖️' },
  { id: 'retail', name: '도소매업', icon: '🛒' },
];

export default function IndustrySelector({ selectedIndustry, onSelect }: IndustrySelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {industries.map((industry) => (
        <button
          key={industry.id}
          onClick={() => onSelect(industry.id)}
          className={`
            flex flex-col items-center justify-center p-4 rounded-xl border transition-all
            ${selectedIndustry === industry.id
              ? 'bg-primary-green-10 border-primary-green-80 text-primary-green-80'
              : 'bg-white border-bg-grayscale-15 text-primary-green-80 hover:bg-gray-50'
            }
          `}
        >
          <span className="text-2xl mb-2">{industry.icon}</span>
          <span className="text-sm font-medium">{industry.name}</span>
        </button>
      ))}
    </div>
  );
} 