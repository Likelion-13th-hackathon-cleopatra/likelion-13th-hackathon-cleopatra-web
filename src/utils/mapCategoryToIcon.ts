import beautyIcon from "../assets/icons/category/beauty.svg";
import bookIcon from "../assets/icons/category/book.svg";
import businessIcon from "../assets/icons/category/bussiness.svg";
import cafeIcon from "../assets/icons/category/cafe.svg";
import cookieIcon from "../assets/icons/category/cookie.svg";
import cultureIcon from "../assets/icons/category/culture.svg";
import drinkIcon from "../assets/icons/category/drink.svg";
import educationIcon from "../assets/icons/category/education.svg";
import furnitureIcon from "../assets/icons/category/furniture.svg";
import glassesIcon from "../assets/icons/category/glasses.svg";
import hamburgerIcon from "../assets/icons/category/hambuger.svg";
import lawIcon from "../assets/icons/category/law.svg";
import medicalIcon from "../assets/icons/category/medical.svg";
import petIcon from "../assets/icons/category/pet.svg";
import plantIcon from "../assets/icons/category/plant.svg";
import serviceIcon from "../assets/icons/category/service.svg";
import spoonIcon from "../assets/icons/category/spoon.svg";
import sportsIcon from "../assets/icons/category/sports.svg";

const iconMapping: Record<string, string> = {
  "외식업": spoonIcon,
  "한식": spoonIcon,
  "중식": spoonIcon,
  "일식": spoonIcon,
  "양식": spoonIcon,
  "패스트푸드": hamburgerIcon,
  "카페": cafeIcon,
  "제과": cookieIcon,
  "술집": drinkIcon,
  "서비스업": serviceIcon,
  "교육": educationIcon,
  "의료업": medicalIcon,
  "스포츠": sportsIcon,
  "뷰티": beautyIcon,
  "문화": cultureIcon,
  "법률": lawIcon,
  "도매업": businessIcon,
  "의류": businessIcon,
  "서적": bookIcon,
  "식물": plantIcon,
  "애완동물": petIcon,
  "안경": glassesIcon,
  "가구": furnitureIcon,
};

export function mapCategoryToIcon(category: string): string {
  return iconMapping[category] || businessIcon; // Default icon
}
