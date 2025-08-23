import React from 'react';
import { getSubCategoriesByIndustry } from '../../data/industryData';

interface SubCategorySelectorProps {
  industryId: string;
  selectedSubCategory?: string;
  onSelect: (subCategoryId: string) => void;
}

export default function SubCategorySelector({ 
  industryId, 
  selectedSubCategory, 
  onSelect 
}: SubCategorySelectorProps) {
  const subCategories = getSubCategoriesByIndustry(industryId);

  if (subCategories.length === 0) {
    return (
      <>
        <h2 className="text-lg font-semibold text-gray-800 mb-6">업종 하위 구분</h2>
        <div className="text-center py-8 text-gray-500">
          선택된 업종에 대한 하위 카테고리가 없습니다.
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {subCategories.map((subCategory) => (
          <button
            key={subCategory.id}
            onClick={() => onSelect(subCategory.id)}
            className={`
              flex flex-col items-center justify-center p-4 rounded-xl border transition-all h-20
              ${selectedSubCategory === subCategory.id
                ? 'bg-green-50 border-green-500 text-green-700'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            <img 
              src={subCategory.icon} 
              alt={subCategory.name}
              className="w-8 h-8 mb-2"
            />
            <span className="text-sm font-medium">{subCategory.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}