import React, { useState } from 'react';
import SelectButton from '../common/SelectButton';

export default function IndustrySelectExample() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">업종 선택 예시</h2>
      
      <SelectButton
        label="창업 업종을 선택해주세요"
        isIndustrySelector={true}
        selectedValue={selectedIndustry}
        onValueChange={setSelectedIndustry}
        className="w-full"
      />
      
      {selectedIndustry && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">선택된 업종:</p>
          <p className="font-medium text-primary-green-80">{selectedIndustry}</p>
        </div>
      )}
    </div>
  );
} 