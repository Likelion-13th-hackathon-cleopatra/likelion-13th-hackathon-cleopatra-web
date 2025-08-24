import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onClick?: () => void;
  navigateToSearch?: boolean;
  className?: string;
}

export default function SearchInput({ 
  placeholder = "지역 직접 검색",
  value,
  onChange,
  onSearch,
  onClick,
  navigateToSearch = false,
  className = ""
}: SearchInputProps) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(inputValue);
  };

  const handleClick = () => {
    if (navigateToSearch) {
      navigate('/analysis/region-search');
    } else {
      onClick?.();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        {/* 검색 아이콘 */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg 
            width="15" 
            height="15" 
            viewBox="0 0 15 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10.4172 9.55977H9.75885L9.52552 9.33477C10.5255 8.1681 11.0422 6.57643 10.7589 4.88477C10.3672 2.5681 8.43385 0.718099 6.10052 0.434766C2.57552 0.00143281 -0.391145 2.9681 0.042188 6.4931C0.325521 8.82643 2.17552 10.7598 4.49219 11.1514C6.18385 11.4348 7.77552 10.9181 8.94219 9.9181L9.16719 10.1514V10.8098L12.7089 14.3514C13.0505 14.6931 13.6089 14.6931 13.9505 14.3514C14.2922 14.0098 14.2922 13.4514 13.9505 13.1098L10.4172 9.55977ZM5.41719 9.55977C3.34219 9.55977 1.66719 7.88477 1.66719 5.80977C1.66719 3.73477 3.34219 2.05977 5.41719 2.05977C7.49219 2.05977 9.16719 3.73477 9.16719 5.80977C9.16719 7.88477 7.49219 9.55977 5.41719 9.55977Z" 
              fill="#0DB659"
            />
          </svg>
        </div>

                {/* 입력 필드 */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleClick}
          placeholder={placeholder}
          readOnly={navigateToSearch}
          className="
           flex items-center w-full py-[6px] pl-[32.21px] pr-[6px] rounded-full border border-gray-200 bg-white
           font-semibold text-[14px] leading-[21px] tracking-[-0.03em] cursor-pointer
           focus:outline-none focus:border-gray-200"
        />
      </div>
    </form>
  );
}