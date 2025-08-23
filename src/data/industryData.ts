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
    icon: '/src/assets/icons/category/spoon.svg',
    subCategories: [
      { id: 'korean', name: '한식', icon: '/src/assets/icons/category/spoon.svg' },
      { id: 'chinese', name: '중식', icon: '/src/assets/icons/category/spoon.svg' },
      { id: 'western', name: '일식', icon: '/src/assets/icons/category/spoon.svg' },
      { id: 'japanese', name: '양식', icon: '/src/assets/icons/category/spoon.svg' },
      { id: 'fastfood', name: '패스트푸드', icon: '/src/assets/icons/category/hamburger.svg' },
      { id: 'cafe', name: '카페', icon: '/src/assets/icons/category/cafe.svg' },
      { id: 'cookie', name: '제과', icon: '/src/assets/icons/category/cookie.svg' },
      { id: 'drink', name: '술집', icon: '/src/assets/icons/category/drink.svg' },
    ]
  },
  service: {
    id: 'service',
    name: '서비스업',
    icon: '/src/assets/icons/category/service.svg',
    subCategories: [
      { id: 'education', name: '교육', icon: '/src/assets/icons/category/education.svg' },
      { id: 'medical', name: '의료업', icon: '/src/assets/icons/category/medical.svg' },
      { id: 'sports', name: '스포츠', icon: '/src/assets/icons/category/sports.svg' },
      { id: 'beauty', name: '뷰티', icon: '/src/assets/icons/category/beauty.svg' },
      { id: 'culture', name: '문화', icon: '/src/assets/icons/category/culture.svg' },
      { id: 'law', name: '법률', icon: '/src/assets/icons/category/law.svg' }
    ]
  },
  business: {
    id: 'business',
    name: '도매업',
    icon: '/src/assets/icons/category/bussiness.svg',
    subCategories: [
      { id: 'clothing', name: '의류', icon: '/src/assets/icons/category/bussiness.svg' },
      { id: 'sports', name: '스포츠', icon: '/src/assets/icons/category/sports.svg' },
      { id: 'book', name: '서적', icon: '/src/assets/icons/category/book.svg' },
      { id: 'plant', name: '식물', icon: '/src/assets/icons/category/plant.svg' },
      { id: 'pet', name: '애완동물', icon: '/src/assets/icons/category/pet.svg' },
      { id: 'glasses', name: '안경', icon: '/src/assets/icons/category/glasses.svg' },
      { id: 'furniture', name: '가구', icon: '/src/assets/icons/category/furniture.svg' }
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