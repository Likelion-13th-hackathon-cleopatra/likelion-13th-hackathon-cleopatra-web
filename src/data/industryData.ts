import spoonIcon from "../assets/icons/category/spoon.svg";
import hamburgerIcon from "../assets/icons/category/hambuger.svg";
import cafeIcon from "../assets/icons/category/cafe.svg";
import cookieIcon from "../assets/icons/category/cookie.svg";
import drinkIcon from "../assets/icons/category/drink.svg";
import serviceIcon from "../assets/icons/category/service.svg";
import educationIcon from "../assets/icons/category/education.svg";
import medicalIcon from "../assets/icons/category/medical.svg";
import sportsIcon from "../assets/icons/category/sports.svg";
import beautyIcon from "../assets/icons/category/beauty.svg";
import cultureIcon from "../assets/icons/category/culture.svg";
import lawIcon from "../assets/icons/category/law.svg";
import businessIcon from "../assets/icons/category/bussiness.svg";
import bookIcon from "../assets/icons/category/book.svg";
import plantIcon from "../assets/icons/category/plant.svg";
import petIcon from "../assets/icons/category/pet.svg";
import glassesIcon from "../assets/icons/category/glasses.svg";
import furnitureIcon from "../assets/icons/category/furniture.svg";

export interface SubCategory {
  id: string;
  name: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  subCategories: SubCategory[];
}

export const industryData: Record<string, Industry> = {
  food: {
    id: 'food',
    name: '외식업',
    icon: spoonIcon,
    subCategories: [
      { id: 'korean', name: '한식', icon: spoonIcon },
      { id: 'chinese', name: '중식', icon: spoonIcon },
      { id: 'western', name: '일식', icon: spoonIcon },
      { id: 'japanese', name: '양식', icon: spoonIcon },
      { id: 'fastfood', name: '패스트푸드', icon: hamburgerIcon },
      { id: 'cafe', name: '카페', icon: cafeIcon },
      { id: 'cookie', name: '제과', icon: cookieIcon },
      { id: 'drink', name: '술집', icon: drinkIcon },
    ]
  },
  service: {
    id: 'service',
    name: '서비스업',
    icon: serviceIcon,
    subCategories: [
      { id: 'education', name: '교육', icon: educationIcon },
      { id: 'medical', name: '의료업', icon: medicalIcon },
      { id: 'sports', name: '스포츠', icon: sportsIcon },
      { id: 'beauty', name: '뷰티', icon: beautyIcon },
      { id: 'culture', name: '문화', icon: cultureIcon },
      { id: 'law', name: '법률', icon: lawIcon }
    ]
  },
  business: {
    id: 'business',
    name: '도매업',
    icon: businessIcon,
    subCategories: [
      { id: 'clothing', name: '의류', icon: businessIcon },
      { id: 'sports', name: '스포츠', icon: sportsIcon },
      { id: 'book', name: '서적', icon: bookIcon },
      { id: 'plant', name: '식물', icon: plantIcon },
      { id: 'pet', name: '애완동물', icon: petIcon },
      { id: 'glasses', name: '안경', icon: glassesIcon },
      { id: 'furniture', name: '가구', icon: furnitureIcon }
    ]
  },
};

// 유틸리티 함수들
export const getIndustryById = (id: string): Industry | undefined => {
  return industryData[id];
};

export const getSubCategoryById = (industryId: string, subCategoryId: string): SubCategory | undefined => {
  const industry = getIndustryById(industryId);
  return industry?.subCategories.find(sub => sub.id === subCategoryId);
};

export const getAllIndustries = (): Industry[] => {
  return Object.values(industryData);
};

export const getSubCategoriesByIndustry = (industryId: string): SubCategory[] => {
  const industry = getIndustryById(industryId);
  return industry?.subCategories || [];
};