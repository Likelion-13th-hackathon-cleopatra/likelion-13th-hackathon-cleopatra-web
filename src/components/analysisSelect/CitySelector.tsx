import React from 'react';
import { getAllCities } from '../../data/regionData';

interface CitySelectorProps {
  selectedCity?: string;
  onSelect: (cityId: string) => void;
}

export default function CitySelector({ selectedCity, onSelect }: CitySelectorProps) {
  const cities = getAllCities();

  return (
    <>
      <div className="grid grid-cols-1 gap-3">
        {cities.map((city) => (
          <button
            key={city.id}
            onClick={() => onSelect(city.id)}
            className={`
              flex items-center justify-center p-4 rounded-[16px] transition-all h-[45px]
              ${selectedCity === city.id
                ? 'bg-primary-green/20'
                : 'bg-white border border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            <span className="Sub_Bold_14 text-primary-green-40">{city.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}