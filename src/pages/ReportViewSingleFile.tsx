// This is an auto-generated file. Do not edit manually.
// All components from ReportView.tsx and its dependencies, including SVGs, have been merged into this file.

import React, { useState, useEffect, type FC, type ReactNode, type CSSProperties } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { v4 as uuidv4 } from 'uuid';

// --- Start of SVG Icons as React Components ---

const DownloadIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.50018 20.2998C5.50018 20.8498 5.95018 21.2998 6.50018 21.2998H18.5002C19.0502 21.2998 19.5002 20.8498 19.5002 20.2998C19.5002 19.7498 19.0502 19.2998 18.5002 19.2998H6.50018C5.95018 19.2998 5.50018 19.7498 5.50018 20.2998Z" fill="#0DB659"/>
    <path d="M5.50018 20.2998C5.50018 20.8498 5.95018 21.2998 6.50018 21.2998H18.5002C19.0502 21.2998 19.5002 20.8498 19.5002 20.2998C19.5002 19.7498 19.0502 19.2998 18.5002 19.2998H6.50018C5.95018 19.2998 5.50018 19.7498 5.50018 20.2998Z" fill="black" fillOpacity="0.4"/>
    <path d="M10.5049 5.2998V10.2998C10.5049 10.8521 10.0572 11.2998 9.50493 11.2998H7.91509C7.91466 11.3007 7.91355 11.3017 7.91314 11.3027H7.91216L12.5001 15.8906L17.0909 11.2998H15.5049C14.9528 11.2997 14.5049 10.852 14.5049 10.2998V5.2998H10.5049ZM16.5049 9.2998H17.0948C18.8924 9.2998 19.7501 11.4687 18.502 12.7168L13.9122 17.3066C13.1316 18.0872 11.8685 18.0872 11.0879 17.3066L6.4981 12.7168C5.23496 11.4536 6.13891 9.29989 7.91509 9.2998H8.50493V5.2998C8.50493 4.19761 9.40277 3.29995 10.5049 3.2998H14.5049C15.6072 3.2998 16.5049 4.19752 16.5049 5.2998V9.2998Z" fill="#0DB659"/>
    <path d="M10.5049 5.2998V10.2998C10.5049 10.8521 10.0572 11.2998 9.50493 11.2998H7.91509C7.91466 11.3007 7.91355 11.3017 7.91314 11.3027H7.91216L12.5001 15.8906L17.0909 11.2998H15.5049C14.9528 11.2997 14.5049 10.852 14.5049 10.2998V5.2998H10.5049ZM16.5049 9.2998H17.0948C18.8924 9.2998 19.7501 11.4687 18.502 12.7168L13.9122 17.3066C13.1316 18.0872 11.8685 18.0872 11.0879 17.3066L6.4981 12.7168C5.23496 11.4536 6.13891 9.29989 7.91509 9.2998H8.50493V5.2998C8.50493 4.19761 9.40277 3.29995 10.5049 3.2998H14.5049C15.6072 3.2998 16.5049 4.19752 16.5049 5.2998V9.2998Z" fill="black" fillOpacity="0.4"/>
  </svg>
);

const SummaryIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3.50018 6.7998C3.21685 6.7998 2.97952 6.70414 2.78818 6.5128C2.59618 6.3208 2.50018 6.08314 2.50018 5.7998V2.7998C2.50018 2.51647 2.59618 2.2788 2.78818 2.0868C2.97952 1.89547 3.21685 1.7998 3.50018 1.7998H6.50018C6.78352 1.7998 7.02118 1.89547 7.21318 2.0868C7.40452 2.2788 7.50018 2.51647 7.50018 2.7998C7.50018 3.08314 7.40452 3.32047 7.21318 3.5118C7.02118 3.7038 6.78352 3.7998 6.50018 3.7998H4.50018V5.7998C4.50018 6.08314 4.40452 6.3208 4.21318 6.5128C4.02118 6.70414 3.78352 6.7998 3.50018 6.7998ZM21.5002 6.7998C21.2169 6.7998 20.9795 6.70414 20.7882 6.5128C20.5962 6.3208 20.5002 6.08314 20.5002 5.7998V3.7998H18.5002C18.2168 3.7998 17.9795 3.7038 17.7882 3.5118C17.5962 3.32047 17.5002 3.08314 17.5002 2.7998C17.5002 2.51647 17.5962 2.2788 17.7882 2.0868C17.9795 1.89547 18.2168 1.7998 18.5002 1.7998H21.5002C21.7835 1.7998 22.0208 1.89547 22.2122 2.0868C22.4042 2.2788 22.5002 2.51647 22.5002 2.7998V5.7998C22.5002 6.08314 22.4042 6.3208 22.2122 6.5128C22.0208 6.70414 21.7835 6.7998 21.5002 6.7998ZM3.50018 23.7998C3.21685 23.7998 2.97952 23.7038 2.78818 23.5118C2.59618 23.3205 2.50018 23.0831 2.50018 22.7998V19.7998C2.50018 19.5165 2.59618 19.2791 2.78818 19.0878C2.97952 18.8958 3.21685 18.7998 3.50018 18.7998C3.78352 18.7998 4.02118 18.8958 4.21318 19.0878C4.40452 19.2791 4.50018 19.5165 4.50018 19.7998V21.7998H6.50018C6.78352 21.7998 7.02118 21.8958 7.21318 22.0878C7.40452 22.2791 7.50018 22.5165 7.50018 22.7998C7.50018 23.0831 7.40452 23.3205 7.21318 23.5118C7.02118 23.7038 6.78352 23.7998 6.50018 23.7998H3.50018ZM18.5002 23.7998C18.2168 23.7998 17.9795 23.7038 17.7882 23.5118C17.5962 23.3205 17.5002 23.0831 17.5002 22.7998C17.5002 22.5165 17.5962 22.2791 17.7882 22.0878C17.9795 21.8958 18.2168 21.7998 18.5002 21.7998H20.5002V19.7998C20.5002 19.5165 20.5962 19.2791 20.7882 19.0878C20.9795 18.8958 21.2169 18.7998 21.5002 18.7998C21.7835 18.7998 22.0208 18.8958 22.2122 19.0878C22.4042 19.2791 22.5002 19.5165 22.5002 19.7998V22.7998C22.5002 23.0831 22.4042 23.3205 22.2122 23.5118C22.0208 23.7038 21.7835 23.7998 21.5002 23.7998H18.5002ZM7.50018 18.7998H17.5002V6.7998H7.50018V18.7998ZM7.50018 20.7998C6.95018 20.7998 6.47952 20.6041 6.08818 20.2128C5.69618 19.8208 5.50018 19.3498 5.50018 18.7998V6.7998C5.50018 6.2498 5.69618 5.77914 6.08818 5.3878C6.47952 4.9958 6.95018 4.7998 7.50018 4.7998H17.5002C18.0502 4.7998 18.5212 4.9958 18.9132 5.3878C19.3045 5.77914 19.5002 6.2498 19.5002 6.7998V18.7998C19.5002 19.3498 19.3045 19.8208 18.9132 20.2128C18.5212 20.6041 18.0502 20.7998 17.5002 20.7998H7.50018ZM10.5002 10.7998H14.5002C14.7835 10.7998 15.0212 10.7038 15.2132 10.5118C15.4045 10.3205 15.5002 10.0831 15.5002 9.7998C15.5002 9.51647 15.4045 9.2788 15.2132 9.0868C15.0212 8.89547 14.7835 8.7998 14.5002 8.7998H10.5002C10.2168 8.7998 9.97952 8.89547 9.78818 9.0868C9.59618 9.2788 9.50018 9.51647 9.50018 9.7998C9.50018 10.0831 9.59618 10.3205 9.78818 10.5118C9.97952 10.7038 10.2168 10.7998 10.5002 10.7998ZM10.5002 13.7998H14.5002C14.7835 13.7998 15.0212 13.7038 15.2132 13.5118C15.4045 13.3205 15.5002 13.0831 15.5002 12.7998C15.5002 12.5165 15.4045 12.2788 15.2132 12.0868C15.0212 11.8955 14.7835 11.7998 14.5002 11.7998H10.5002C10.2168 11.7998 9.97952 11.8955 9.78818 12.0868C9.59618 12.2788 9.50018 12.5165 9.50018 12.7998C9.50018 13.0831 9.59618 13.3205 9.78818 13.5118C9.97952 13.7038 10.2168 13.7998 10.5002 13.7998ZM10.5002 16.7998H14.5002C14.7835 16.7998 15.0212 16.7038 15.2132 16.5118C15.4045 16.3205 15.5002 16.0831 15.5002 15.7998C15.5002 15.5165 15.4045 15.2788 15.2132 15.0868C15.0212 14.8955 14.7835 14.7998 14.5002 14.7998H10.5002C10.2168 14.7998 9.97952 14.8955 9.78818 15.0868C9.59618 15.2788 9.50018 15.5165 9.50018 15.7998C9.50018 16.0831 9.59618 16.3205 9.78818 16.5118C9.97952 16.7038 10.2168 16.7998 10.5002 16.7998Z" fill="#FFC251"/>
    </svg>
);

const Icon1: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="3.50018" y="3.2998" width="12" height="12" rx="6" fill="#FFC251"/>
        <path d="M10.508 6.64355V12.2998H9.32831V7.76074H9.29706L8.00018 8.57324V7.53418L9.39862 6.64355H10.508Z" fill="white"/>
    </svg>
);

const Icon2: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="3.50018" y="3.2998" width="12" height="12" rx="6" fill="#FFC251"/>
        <path d="M7.50409 12.2998L7.49628 11.4482L9.52753 9.58105C10.0588 9.07324 10.34 8.76074 10.34 8.31543C10.34 7.81543 9.95721 7.50293 9.44159 7.50293C8.91034 7.50293 8.56659 7.83887 8.56659 8.37793H7.4494C7.44159 7.26855 8.2619 6.56543 9.45721 6.56543C10.6682 6.56543 11.4728 7.25293 11.4728 8.2373C11.4728 8.87793 11.1603 9.40918 9.99628 10.4639L9.1369 11.2998V11.3311H11.551V12.2998H7.50409Z" fill="white"/>
    </svg>
);

const Icon3: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="3.50018" y="3.2998" width="12" height="12" rx="6" fill="#FFC251"/>
        <path d="M9.48456 12.3779C8.24237 12.3779 7.35175 11.6904 7.32831 10.7061H8.51581C8.53925 11.1279 8.9455 11.4092 9.49237 11.4092C10.0549 11.4092 10.4611 11.0889 10.4533 10.6357C10.4611 10.1748 10.0471 9.84668 9.383 9.84668H8.85956V8.97949H9.383C9.93768 8.97949 10.3283 8.6748 10.3283 8.22949C10.3283 7.7998 10.0002 7.50293 9.50018 7.50293C9.00018 7.50293 8.58612 7.78418 8.5705 8.21387H7.4455C7.46112 7.2373 8.34393 6.56543 9.50018 6.56543C10.6799 6.56543 11.4689 7.26074 11.4611 8.15918C11.4689 8.79199 11.0236 9.24512 10.3908 9.35449V9.40137C11.2189 9.50293 11.6799 10.0107 11.6721 10.7139C11.6799 11.6826 10.758 12.3779 9.48456 12.3779Z" fill="white"/>
    </svg>
);

const ArrowDownIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1.53244 0.315456L5.00447 3.78749L8.47651 0.315456C8.8255 -0.0335374 9.38926 -0.0335374 9.73826 0.315456C10.0872 0.664449 10.0872 1.22821 9.73826 1.5772L5.63087 5.68458C5.28188 6.03358 4.71812 6.03358 4.36913 5.68458L0.261745 1.5772C-0.0872483 1.22821 -0.0872483 0.664449 0.261745 0.315456C0.610738 -0.0245889 1.18345 -0.0335374 1.53244 0.315456Z" fill="#0DB659"/>
    </svg>
);

const LogoSvg: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 72 76" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
        <path d="M16.0697 36.9575C17.5682 36.9574 18.7838 38.1719 18.7845 39.6704L18.7894 56.1978C18.7898 56.697 19.1954 57.1019 19.6947 57.1021H60.8812C62.38 57.1022 63.595 58.3171 63.5951 59.8159V65.2437C63.5951 66.7425 62.38 67.9583 60.8812 67.9585H19.6996C19.1998 67.9585 18.7951 68.364 18.7953 68.8638L18.7963 73.0522C18.7967 74.551 17.5821 75.7663 16.0834 75.7671L10.6556 75.769C9.15665 75.7696 7.93942 74.5551 7.93884 73.0562V68.8628C7.93862 68.3634 7.53295 67.9586 7.03357 67.9585H2.83142C1.37933 67.9584 0.194035 66.8174 0.12146 65.3833L0.117554 65.2437V59.8159C0.117633 58.3171 1.33262 57.1022 2.83142 57.1021H7.02869C7.52826 57.1019 7.93307 56.6964 7.93298 56.1968L7.9281 39.6743C7.92784 38.1756 9.14224 36.9601 10.641 36.9595L16.0697 36.9575Z M60.8558 0.769043C62.3545 0.768691 63.5699 1.98324 63.5707 3.48193L63.5717 7.67529C63.5718 8.17474 63.9775 8.58041 64.4769 8.58057H68.6801C70.1788 8.58089 71.3939 9.79567 71.3939 11.2944L71.3929 16.7222C71.3928 18.2209 70.1778 19.4368 68.6791 19.437H64.4818C63.9823 19.4371 63.5776 19.8418 63.5775 20.3413L63.5824 36.8638C63.5828 38.3626 62.3683 39.578 60.8695 39.5786L55.4408 39.5806C53.9422 39.5807 52.7266 38.3664 52.726 36.8677L52.7211 20.3413C52.7208 19.8419 52.3152 19.4371 51.8158 19.437H10.6302C9.13136 19.4369 7.91638 18.2211 7.91638 16.7222V11.2944C7.91638 9.79552 9.13136 8.58067 10.6302 8.58057H51.8109C52.3105 8.58049 52.7152 8.17489 52.7152 7.67529L52.7142 3.48584C52.7139 1.98704 53.9293 0.771582 55.4281 0.770996L60.8558 0.769043Z" fill="currentColor" />
    </svg>
);

// --- End of SVG Icons ---

// --- Global Types ---
type ReportRaw = any; // Using 'any' as dummyReport mock is not available.

// --- Start of utils/number.ts ---
const won = (n: number) => "₩" + (n ?? 0).toLocaleString("ko-KR");
const wonInMan = (n: number) => {
  if (!n) return "0만 원";
  const man = n / 10000;
  const roundedMan = Math.round(man);
  return roundedMan.toLocaleString("ko-KR") + "만 원";
};
// --- End of utils/number.ts ---

// --- Start of utils/anonymousId.ts ---
const ANONYMOUS_ID_KEY = "primary_key";
function getAnonymousId(): string {
  let anonymousId = localStorage.getItem(ANONYMOUS_ID_KEY);
  if (!anonymousId) {
    anonymousId = uuidv4();
    localStorage.setItem(ANONYMOUS_ID_KEY, anonymousId);
  }
  return anonymousId;
}
// --- End of utils/anonymousId.ts ---

// --- Start of utils/api.ts ---
const API_BASE_URL = "https://api.guseokguseok.site";
async function authenticatedFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
  const anonymousId = getAnonymousId();
  const headers = new Headers(init?.headers);
  headers.set("primary_key", anonymousId);
  const response = await fetch(input, { ...init, headers });
  if (!response.ok) {
    console.error("API request failed:", response.status, response.statusText);
  }
  return response;
}
const analysisApi = {
  requestAnalysis: async (analysisData: { industry: string; subCategory: string; city: string; district: string; dong: string; }) => {
    const anonymousId = getAnonymousId();
    const requestBody = {
      primary: analysisData.industry,
      secondary: analysisData.subCategory,
      district: analysisData.district,
      neighborhood: analysisData.dong.replace(/\d+동$/, '동'),
      sub_neighborhood: analysisData.dong
    };
    const response = await authenticatedFetch(`${API_BASE_URL}/api/report/${anonymousId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Analysis request failed: ${response.status}: ${errorText}`);
    }
    return response.json();
  },
  getReportDetail: async (primaryKey: string, reportId: string) => {
    const response = await authenticatedFetch(`${API_BASE_URL}/api/report/${primaryKey}/${reportId}`, { method: "GET" });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get report detail: ${response.status}: ${errorText}`);
    }
    return response.json();
  },
};
// --- End of utils/api.ts ---

// --- Start of components/icons/Logo.tsx ---
const Logo = (props: React.SVGProps<SVGSVGElement>) => <LogoSvg {...props} />;
// --- End of components/icons/Logo.tsx ---

// --- Start of Primitives ---

const SectionCard: FC<{
  title: string;
  titleClassName?: string;
  subtitle?: string;
  right?: ReactNode;
  children: ReactNode;
  initialIsOpen?: boolean;
}> = ({ title, titleClassName, subtitle, right, children, initialIsOpen = true }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  return (
    <section className="section-card shadow-sm bg-white">
      <header className="section-card__header flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h3 className={`section-card__title ${titleClassName || ""}`.trim()}>{title}</h3>
          {subtitle && <p className="section-card__subtitle">{subtitle}</p>}
        </div>
        <div className="flex items-center">
          {right && <div className="section-card__right mr-2">{right}</div>}
          <button aria-label={isOpen ? "접기" : "펼치기"} className="p-2">
            <ArrowDownIcon width="14" height="8.25" className={`transition-transform duration-300 ${isOpen ? "" : "-rotate-180"}`} />
          </button>
        </div>
      </header>
      {isOpen && <div className="section-card__body">{children}</div>}
    </section>
  );
};

const InnerCard: FC<{
  title: string;
  children: ReactNode;
  className?: string;
  rightContent?: ReactNode;
  hasBorder?: boolean;
  hasBackground?: boolean;
}> = ({ title, children, className = "", rightContent, hasBorder = true, hasBackground = true }) => {
  const baseClasses = "rounded-[10px] p-[14px] space-y-[10px]";
  const borderClasses = hasBorder ? "border border-[#CFF0DE]" : "";
  const backgroundClass = hasBackground ? "bg-white" : "";
  return (
    <div className={`${baseClasses} ${backgroundClass} ${borderClasses} ${className}`.trim()}>
      <div className="flex justify-between items-center">
        <h4 className="Head_Bold_14 text-grayscale-65">{title}</h4>
        {rightContent}
      </div>
      <div>{children}</div>
    </div>
  );
};

const InnerCard2: FC<{
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}> = ({ title, subtitle, children, className = "" }) => {
  return (
    <div className={`rounded-[10px] border border-[#CFF0DE] p-[14px] space-y-[10px] ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="Head_Bold_14 text-grayscale-65">{title}</h4>
        {subtitle && <span className="Body_Regular_10 text-grayscale-25">{subtitle}</span>}
      </div>
      <div>{children}</div>
    </div>
  );
};

const AIInterpretationCard: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`rounded-[5px] bg-[#FFF9EE] p-[10px] space-y-[6px] ${className}`}>
      <div className="flex items-center gap-1.5">
        <Logo width="13.3" height="14" color="#FFC251" />
        <span className="Body_Bold_12 text-sub-yellow40">AI 해설</span>
      </div>
      <div className="Body_Regular_12 text-grayscale-65">{children}</div>
    </div>
  );
};

const parseTextWithBold = (text: string | null | undefined): ReactNode => {
  if (!text || typeof text !== 'string') {
    return <span className="Body_Regular_12" style={{ color: '#555554' }}>데이터를 불러오는 중입니다...</span>;
  }
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return <span key={index} className="Body_Bold_12" style={{ color: '#CC9B41' }}>{boldText}</span>;
    } else {
      return <span key={index} className="Body_Regular_12" style={{ color: '#555554' }}>{part}</span>;
    }
  });
};

const AISummaryCard: FC<{
  description: any;
  className?: string;
}> = ({ description, className = "" }) => {
  if (!description || !description.total_description) {
    return (
      <div className={`rounded-[15px] border border-[#FFC251] bg-[#FFF] px-[16px] py-[18px] ${className}`}>
        <div className="flex items-center gap-1.5 mb-[12px]">
          <SummaryIcon /> 
          <span className="Head_Bold_14 text-sub-yellow40">보고서 전체 AI 핵심 요약</span>
        </div>
        <div className="rounded-[15px] border border-[#FFEBC7] bg-[#FFF9EE] p-[14px]">
          <span className="Body_Regular_12" style={{ color: '#555554' }}>AI 요약 데이터를 불러오는 중입니다...</span>
        </div>
      </div>
    );
  }
  return (
    <div className={`rounded-[15px] border border-[#FFC251] bg-[#FFF] px-[16px] py-[18px] ${className}`}>
      <div className="flex items-center gap-1.5 mb-[12px]">
        <SummaryIcon /> 
        <span className="Head_Bold_14 text-sub-yellow40">보고서 전체 AI 핵심 요약</span>
      </div>
      <div className="rounded-[15px] border border-[#FFEBC7] bg-[#FFF9EE] p-[14px] space-y-[6px]">
        <div>{parseTextWithBold(description.total_description)}</div>
        <div className="flex items-start gap-[4px]"><Icon1 className="flex-shrink-0 mt-[3.5px]" /><div>{parseTextWithBold(description.line_1)}</div></div>
        <div className="flex items-start gap-[4px]"><Icon2 className="flex-shrink-0 mt-[3.5px]" /><div>{parseTextWithBold(description.line_2)}</div></div>
        <div className="flex items-start gap-[4px]"><Icon3 className="flex-shrink-0 mt-[3.5px] " /><div>{parseTextWithBold(description.line_3)}</div></div>
      </div>
    </div>
  );
};

const IncomeLevelBox: FC<{
  children?: ReactNode;
  incomeData: any;
}> = ({ children, incomeData }) => {
  return (
    <div className="bg-white p-[8px] rounded-[5px]">
      <h4 className="Head_Bold_14 text-primary-green">주민소득 수준</h4>
      <div className="mt-[6px]">
        <div className="flex items-center">
          <span className="Body_Bold_12 text-primary-green-80">소득구간</span>
          <span className="Sub_Regular_12 text-primary-green-80 ml-[6px]">{Number(incomeData.income_class_code)}구간</span>
        </div>
        <div className="flex items-center mt-[6px]">
          <span className="Body_Bold_12 text-primary-green-80">월평균 소득 금액</span>
          <span className="Sub_Regular_12 text-primary-green-80 ml-[6px]">{won(incomeData.monthly_income_average).substring(1)}원</span>
        </div>
      </div>
      {children}
    </div>
  );
};

const GenderRatioBar: FC<{
  malePercent: number;
  femalePercent: number;
  className?: string;
  height?: number;
}> = ({ malePercent, femalePercent, className = "", height = 30 }) => {
  const male = Number(malePercent) || 0;
  const female = Number(femalePercent) || 0;
  const primaryGreenHex = "#0DB659";
  const primaryGreenRgb = "13, 182, 89";
  const maleColor = male > female ? primaryGreenHex : `rgba(${primaryGreenRgb}, 0.6)`;
  const femaleColor = female > male ? primaryGreenHex : `rgba(${primaryGreenRgb}, 0.6)`;
  return (
    <div className={className} aria-label="성별 인구 비율">
      <div className="flex w-full rounded-full overflow-hidden" style={{ height }}>
        <div style={{ width: `${male.toFixed(1)}%`, backgroundColor: maleColor }} role="img" aria-label={`남성 ${male.toFixed(1)}%`} />
        <div style={{ width: `${female.toFixed(1)}%`, backgroundColor: femaleColor }} role="img" aria-label={`여성 ${female.toFixed(1)}%`} />
      </div>
      <div className="mt-[6px] flex items-end justify-between text-primary-green-40">
        <div className="text-left"><div className="Body_Regular_10">남성</div><div className="Body_Bold_12 leading-none">{male.toFixed(1)}%</div></div>
        <div className="text-right"><div className="Body_Regular_10">여성</div><div className="Body_Bold_12 leading-none">{female.toFixed(1)}%</div></div>
      </div>
    </div>
  );
};

const StrategyCard: React.FC<{
  title: string;
  items: string[];
  className?: string;
}> = ({ title, items, className = '' }) => {
  const formatText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<span style="font-family: 'Sub_Bold_20'; color: #086D35; font-weight: bold;">$1</span>');
  };
  return (
    <div className={`bg-[#E7F8EE] rounded-lg p-4 ${className}`}>
      <div className="Body_Regular_12 text-[#555554] mb-3" dangerouslySetInnerHTML={{ __html: formatText(title) }} />
      <div className="space-y-[6px]">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-[4px]">
            <div className="flex-shrink-0 w-[12px] h-[12px] bg-[#0DB659] rounded-full flex items-center justify-center mt-[3px]">
              <span className="text-white Sub_Bold_8">{index + 1}</span>
            </div>
            <div className="Body_Regular_12 text-[#555554] leading-[18px] flex-1" dangerouslySetInnerHTML={{ __html: formatText(item) }} />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Donut Chart and related components ---
type DonutDatum = { label: string; value: number };
type DonutChartProps = {
  data: DonutDatum[];
  colors?: string[];
  innerRadius?: number;
  outerRadius?: number;
  clockwise?: boolean;
  outerLabelSet?: Set<string>;
  center?: { title?: ReactNode; value?: ReactNode; style?: CSSProperties };
  rotateDeg?: number;
  height?: number;
  leader?: { elbow?: number; tickLen?: number; textPad?: number; textOffset?: number; };
};

const DonutChart: FC<DonutChartProps> = ({ data, colors = ["#C8F3D7", "#6DDC8E", "#22C55E", "#37C977", "#9AE8BC", "#7BDD9F"], innerRadius = 86, outerRadius = 120, clockwise = true, outerLabelSet, center, rotateDeg = 0, height = 245, leader }) => {
    const RAD = Math.PI / 180;
    const elbow = leader?.elbow ?? 6;
    const tickLen = leader?.tickLen ?? 4;
    const textPad = leader?.textPad ?? 6;
    const textOffset = leader?.textOffset ?? 3;
    const baseStart = clockwise ? 90 : 0;
    const baseEnd = clockwise ? -270 : 360;
    const startAngle = baseStart + rotateDeg;
    const endAngle = baseEnd + rotateDeg;

    const renderInnerLabel = (props: any) => {
        const { cx, cy, midAngle, innerRadius, outerRadius, percent, payload } = props;
        if (outerLabelSet && outerLabelSet.has(String(payload.label).trim())) return null;
        const r = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + r * Math.cos(-midAngle * RAD);
        const y = cy + r * Math.sin(-midAngle * RAD);
        return (
            <text x={x} y={y} fill="#032412" textAnchor="middle" dominantBaseline="central">
                <tspan x={x} dy="-0.6em" className="Body_Regular_10">{payload.label}</tspan>
                <tspan x={x} dy="1.2em" className="Body_Bold_12">{(percent * 100).toFixed(1)}%</tspan>
            </text>
        );
    };

    const renderOuterLabel = (props: any) => {
        const { cx, cy, midAngle, outerRadius, percent, payload, viewBox } = props;
        const label = String(payload.label).trim();
        if (!(outerLabelSet && outerLabelSet.has(label))) return null;
        const angle = -midAngle * RAD;
        const isLeft = Math.cos(angle) < 0;
        const ax = cx + (outerRadius + 0) * Math.cos(angle);
        const ay = cy + (outerRadius + 0) * Math.sin(angle);
        const ex = cx + (outerRadius + elbow) * Math.cos(angle);
        const ey = cy + (outerRadius + elbow) * Math.sin(angle);
        const hx = ex + (isLeft ? -tickLen : tickLen);
        const hy = ey;
        const rawTextX = hx + (isLeft ? -textPad : textPad);
        const rawTextY = hy + textOffset;
        const viewW = viewBox?.width ?? cx * 2;
        const leftEdge = 8, rightEdge = viewW - 8;
        const textX = rawTextX < leftEdge + 2 ? leftEdge + 2 : rawTextX > rightEdge - 2 ? rightEdge - 2 : rawTextX;
        const textY = rawTextY;
        const anchor: "start" | "end" = isLeft ? "end" : "start";
        return (
            <g>
                <polyline points={`${ax},${ay} ${ex},${ey} ${hx},${hy}`} stroke="#086d36" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <text x={textX} y={textY} textAnchor={anchor} dominantBaseline="ideographic" fill="#086d36">
                    <tspan x={textX} dy="-0.6em" className="Body_Regular_10">{label}</tspan>
                    <tspan x={textX} dy="1.2em" className="Body_Bold_12">{(percent * 100).toFixed(1)}%</tspan>
                </text>
                <circle cx={ax} cy={ay} r={4} fill="#086d36" />
            </g>
        );
    };

    return (
        <div style={{ width: "100%", height, position: "relative", backgroundColor: "white" }}>
            {center && (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", flexDirection: "column", lineHeight: 1.2, textAlign: "center", ...center.style }}>
                    {center.title}{center.value}
                </div>
            )}
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="value" nameKey="label" cx="50%" cy="50%" innerRadius={innerRadius} outerRadius={outerRadius} fill="transparent" isAnimationActive={false} labelLine={false} label={renderOuterLabel} startAngle={startAngle} endAngle={endAngle} paddingAngle={0} />
                    <Pie data={data} dataKey="value" nameKey="label" cx="50%" cy="50%" innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} paddingAngle={0} label={renderInnerLabel} labelLine={false} isAnimationActive={false}>
                        {data.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} strokeWidth={0} />)}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

const AgeDonutChart: FC<{ data: DonutDatum[]; totalLabel: string; }> = ({ data, totalLabel }) => {
  const opacities = [1, 0.85, 0.6, 0.45, 0.3, 0.1];
  const primaryGreenRgb = "13, 182, 89";
  const sortedData = [...data].sort((a, b) => b.value - a.value);
  const colorMap = new Map<string, string>();
  sortedData.forEach((item, index) => {
    const opacity = opacities[index % opacities.length];
    colorMap.set(item.label, `rgba(${primaryGreenRgb}, ${opacity})`);
  });
  const chartColors = data.map((item) => colorMap.get(item.label)!);
  return (
    <DonutChart
      data={data}
      colors={chartColors}
      innerRadius={40}
      outerRadius={100}
      clockwise
      center={{
        title: <div className="Sub_Bold_10 text-primary-green-80">실거주 인구수</div>,
        value: <div className="Sub_Bold_10 text-primary-green-80">{totalLabel}</div>,
      }}
    />
  );
};

const DynamicLabelDonutChart: FC<Omit<DonutChartProps, "outerLabelSet">> = (props) => {
  const { data, leader: leaderFromProps, ...rest } = props;
  const total = data.reduce((s, d) => s + (Number(d.value) || 0), 0) || 1;
  const outer = new Set<string>();
  for (const d of data) {
    const value = Number(d.value) || 0;
    if ((value / total) * 100 < 10) outer.add(String(d.label).trim());
  }
  const leader = leaderFromProps ?? { elbow: 5, tickLen: 5, textPad: 6, textOffset: 6 };
  return <DonutChart {...rest} data={data} leader={leader} outerLabelSet={outer} />;
};

// --- End of Primitives ---

// --- Start of Section Components ---

const ReportHeader = () => {
  const nav = useNavigate();
  const location = useLocation();
  const handleBack = () => {
    if (location.state?.from === 'analysis') nav('/analysis');
    else if (location.state?.from === 'my-storage') nav('/my-storage');
    else nav(-1);
  };
  const handleDownload = async () => {
    const reportContent = document.getElementById("report-content");
    if (!reportContent) return;
    try {
      const canvas = await html2canvas(reportContent, { scale: 2 });
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [canvas.width, canvas.height] });
      pdf.addImage(imageData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("report.pdf");
    } catch (error) {
      console.error("PDF 생성 중 오류가 발생했습니다.", error);
    }
  };
  return (
    <header className="sticky top-0 z-10 flex h-[60px] items-center justify-between bg-grayscale-5 px-6">
      <button onClick={handleBack} aria-label="뒤로 가기">
        <svg width="10.74" height="18.77" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5382 1.34619L1.53821 10.3462L10.5382 19.3462" stroke="#086D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <h1 className="text-sm font-bold text-primary-green">리포트 조회</h1>
      <button onClick={handleDownload} aria-label="다운로드"><DownloadIcon width="24" height="24" /></button>
    </header>
  );
};

const ReportSummary: FC<{ report: ReportRaw }> = ({ report }) => <AISummaryCard description={report.description_summary} />;

const SelectionInfo: FC<{ report: ReportRaw }> = ({ report }) => {
  return (
    <section className="bg-white rounded-[15px] px-[16px] py-[18px] shadow-sm">
      <h2 className="Head_Bold_14 text-primary-green40 mb-[12px]">선택한 업종과 지역</h2>
      <div className="flex flex-col gap-[10px]">
        <div className="inline-flex items-center bg-[#CFF0DE] rounded-[100px] px-[12px] py-[4px] w-fit">
          <span className="Sub_Bold_12 text-[#086D35] space-x-[6px]">
            <span>{report.primary || "음식점업"}</span><span>•</span><span>{report.secondary || "한식"}</span>
          </span>
        </div>
        <div className="inline-flex items-center bg-[#CFF0DE] rounded-[100px] px-[12px] py-[4px] w-fit">
          <span className="Sub_Bold_12 text-[#086D35]">
            {`서울시 ${report.district || "노원구"} ${report.sub_neighborhood || "공릉1동"}`.split(' ').map((part, index, array) => (
              <span key={index}>
                <span>{part}</span>
                {index < array.length - 1 && <><span className="inline-block w-[6px]"></span><span>•</span><span className="inline-block w-[6px]"></span></>}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};

const ReportHero: FC<{ report: ReportRaw }> = ({ report }) => {
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: true };
    return new Intl.DateTimeFormat("ko-KR", options).format(date);
  };
  const formattedDate = formatDate(report.created_at);
  return (
    <section>
      <h2 className="font-bold text-primary-green80 leading-[1.4] tracking-[-0.03em]">사장님의 데이터를 기반으로<br />지역과 상권 분석을 진행했어요.</h2>
      <p className="mt-2 Body_Regular_10 text-grayscale-45">보고서 생성일시 | {formattedDate}</p>
    </section>
  );
};

const Keywords: FC<{ report: ReportRaw }> = ({ report }) => {
  const title = `서울시 ${report.district || '노원구'} ${report.sub_neighborhood} 지역 키워드`;
  const platformTitles: { [key: string]: string } = { NAVER_BLOG: "블로그 포털", NAVER_PLACE: "지역 커뮤니티 플랫폼", YOUTUBE: "배달 플랫폼" };
  return (
    <SectionCard title={title} titleClassName="Head_Bold_14 text-primary-green-40" initialIsOpen={true}>
      <div className="mt-4 space-y-4">
        {report.keywords.filter((k:any, index:number, self:any) => index === self.findIndex((item:any) => item.platform === k.platform)).map((k:any) => (
          <InnerCard key={k.platform} title={platformTitles[k.platform]}>
            <div className="space-y-[10px]">
              <div className="flex flex-wrap gap-1.5">{k.keywords.map((w:string) => <span key={w} className="chip">#{w}</span>)}</div>
              <AIInterpretationCard>{k.descript}</AIInterpretationCard>
            </div>
          </InnerCard>
        ))}
      </div>
    </SectionCard>
  );
};

const Population: FC<{ report: ReportRaw }> = ({ report }) => {
  if (!report.population || !report.population.ages || !report.population.gender) {
    return (
      <SectionCard title="실거주 인구 통계" titleClassName="Head_Bold_14 text-primary-green-40">
        <div className="space-y-4 pt-4">
          <InnerCard title="연령대별 인구 비율" hasBorder={true} hasBackground={false}>
            <div className="mt-[8px] text-center py-8"><p className="text-gray-500">인구 데이터를 불러오는 중입니다...</p></div>
          </InnerCard>
        </div>
      </SectionCard>
    );
  }
  const a = report.population.ages;
  const ages = [
    { label: "10대 이하", value: a.percent?.age_10_percent || 0 }, { label: "20대", value: a.percent?.age_20_percent || 0 },
    { label: "30대", value: a.percent?.age_30_percent || 0 }, { label: "40대", value: a.percent?.age_40_percent || 0 },
    { label: "50대", value: a.percent?.age_50_percent || 0 }, { label: "60대 이상", value: a.percent?.age_60_plus_percent || 0 },
  ];
  const g = report.population.gender;
  const totalLabel = `${(g.resident?.female_resident + g.resident?.male_resident || 0).toLocaleString("ko-KR")}명`;
  return (
    <SectionCard title="실거주 인구 통계" titleClassName="Head_Bold_14 text-primary-green-40">
      <div className="space-y-4 pt-4">
        <InnerCard title="연령대별 인구 비율" hasBorder={true} hasBackground={false}>
          <div className="mt-[8px]">
            <AgeDonutChart data={ages} totalLabel={totalLabel} />
            <AIInterpretationCard className="mt-2"><p>{report.population.description_population?.age || '연령대별 인구 분석 데이터를 불러오는 중입니다...'}</p></AIInterpretationCard>
          </div>
        </InnerCard>
        <InnerCard title="성별 인구 비율">
          <GenderRatioBar className="mt-2" malePercent={g.percent?.male_percent || 0} femalePercent={g.percent?.female_percent || 0} />
          <AIInterpretationCard className="mt-2"><p>{report.population.description_population?.gender || '성별 인구 분석 데이터를 불러오는 중입니다...'}</p></AIInterpretationCard>
        </InnerCard>
      </div>
    </SectionCard>
  );
};

const Price: FC<{ report: ReportRaw }> = ({ report }) => {
  const humanQuarter = (k: string) => k.replace(/(\d{4})_(\d)_quarter/, "$1 Q$2");
  if (!report.price || !report.price.small || !report.price.big || !report.price.trading_volume) {
    return (
      <SectionCard title={"동네시세"} titleClassName="Head_Bold_14 text-primary-green-40" initialIsOpen={true} right={<div className="Body_Regular_10 text-grayscale-25">보고서 생성일 기준 1년 이내 거래 데이터 기반</div>}>
        <div className="flex flex-col gap-[16px]"><InnerCard2 title="부동산 평균 거래값" subtitle="거래 건별 단가 산출 후 집계"><div className="text-center py-8"><p className="text-gray-500">가격 데이터를 불러오는 중입니다...</p></div></InnerCard2></div>
      </SectionCard>
    );
  }
  const p = report.price;
  const trend = Object.entries(p.trading_volume || {}).map(([k, v]) => ({ quarter: humanQuarter(k), value: v as number }));
  return (
    <SectionCard title={"동네시세"} titleClassName="Head_Bold_14 text-primary-green-40" initialIsOpen={true} right={<div className="Body_Regular_10 text-grayscale-25">보고서 생성일 기준 1년 이내 거래 데이터 기반</div>}>
      <div className="flex flex-col gap-[16px]">
        <InnerCard2 title="부동산 평균 거래값" subtitle="거래 건별 단가 산출 후 집계">
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[6px]">
              <div className="flex-1 p-[8px]">
                <div className="flex flex-row justify-between items-center mb-[6px]"><div className="Head_Bold_14 text-primary-green">소형 업장</div><div className="Body_Regular_10 text-grayscale-25">50평 미만</div></div>
                <div className="Body_Bold_12 mb-[2px]">평균값 <span className="ml-[6px] Sub_Regular_12">{(p.small.small_average || 0).toLocaleString("ko-KR")}만원</span></div>
                <div className="Body_Bold_12 mb-[6px]">중위값 <span className="ml-[6px] Sub_Regular_12">{(p.small.small_middle || 0).toLocaleString("ko-KR")}만원</span></div>
                <div className="Body_Regular_10 text-grayscale-25">근거 거래 데이터 개수: {p.small.small_count}건</div>
              </div>
              <div className="w-[1px] bg-[#CFF0DE] my-[8px]"></div>
              <div className="flex-1 p-[8px]">
                <div className="flex flex-row justify-between items-center mb-[6px]"><div className="Head_Bold_14 text-primary-green">대형 업장</div><div className="Body_Regular_10 text-grayscale-25">50평 초과</div></div>
                <div className="Body_Bold_12 mb-[2px]">평균값 <span className="ml-[6px] Sub_Regular_12">{(p.big.big_average || 0).toLocaleString("ko-KR")}만원</span></div>
                <div className="Body_Bold_12 mb-[6px]">중위값 <span className="ml-[6px] Sub_Regular_12">{(p.big.big_middle || 0).toLocaleString("ko-KR")}만원</span></div>
                <div className="Body_Regular_10 text-grayscale-25">근거 거래 데이터 개수: {p.big.big_count}건</div>
              </div>
            </div>
            <AIInterpretationCard className="mt-[2px]"><div className="Body_Regular_12 text-grayscale-65">{p.description_price?.value_average || '부동산 평균 거래값 분석 데이터를 불러오는 중입니다...'}</div></AIInterpretationCard>
          </div>
        </InnerCard2>
        <InnerCard2 title="단위 면적당 평균 실거래가" subtitle="면적 대비 표준화">
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[6px]">
              <div className="flex-1 p-[8px]"><div className="flex flex-row justify-between items-center mb-[6px]"><div className="Head_Bold_14 text-primary-green">창업 지역 평균</div></div><div className="Body_Bold_12 mb-[2px]">㎡당 <span className="ml-[6px] Sub_Regular_12">{(p.price_per_meter || 0).toLocaleString("ko-KR")}만원</span></div><div className="Body_Bold_12 mb-[6px]">평당 <span className="ml-[6px] Sub_Regular_12">{(p.price_per_pyeong || 0).toLocaleString("ko-KR")}만원</span></div></div>
              <div className="w-[1px] bg-[#CFF0DE] my-[8px]"></div>
              <div className="flex-1 p-[8px]"><div className="flex flex-row justify-between items-center mb-[6px]"><div className="Head_Bold_14 text-primary-green">서울 평균</div></div><div className="Body_Bold_12 mb-[2px]">㎡당 <span className="ml-[6px] Sub_Regular_12">1,212만 원</span></div><div className="Body_Bold_12 mb-[6px]">평당 <span className="ml-[6px] Sub_Regular_12">4,000만 원</span></div></div>
            </div>
            <AIInterpretationCard className="mt-[2px]"><div className="Body_Regular_12 text-grayscale-65">{p.description_price?.value_pyeong || '단위 면적당 평균 실거래가 분석 데이터를 불러오는 중입니다...'}</div></AIInterpretationCard>
          </div>
        </InnerCard2>
        <InnerCard2 title="거래량 추이" subtitle="월별 / 분기별 거래 건수">
          <div className="flex flex-col gap-[10px] px-[10px]">
            <div className="relative h-[110px] w-full">
              <div className="absolute inset-0 flex flex-col justify-between">{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => <div key={i} className="border-t border-dashed border-[#F3F3F1]"/>)}</div>
              <div className="absolute left-[20px] right-[0px] top-0 bottom-0">
                <svg className="w-full h-full" viewBox="0 0 220 110" preserveAspectRatio="none">
                  {trend.length > 1 && trend.map((item, index) => {
                    if (index === 0) return null;
                    const prevItem = trend[index - 1];
                    const maxValue = Math.max(...trend.map(t => t.value));
                    const minValue = Math.min(...trend.map(t => t.value));
                    const range = maxValue - minValue || 1;
                    const x1 = (index - 1) * 55 + 20;
                    const x2 = index * 55 + 20;
                    const y1 = 110 - 20 - ((prevItem.value - minValue) / range) * 70;
                    const y2 = 110 - 20 - ((item.value - minValue) / range) * 70;
                    return <line key={`line-${index}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0DB659" strokeWidth="4" fill="none" />;
                  })}
                  {trend.map((item, index) => {
                    const maxValue = Math.max(...trend.map(t => t.value));
                    const minValue = Math.min(...trend.map(t => t.value));
                    const range = maxValue - minValue || 1;
                    const x = index * 55 + 20;
                    const y = 110 - 20 - ((item.value - minValue) / range) * 70;
                    return <circle key={`point-${index}`} cx={x} cy={y} r="5.8" fill="#0DB659" />;
                  })}
                </svg>
                <div className="absolute inset-0">
                  {trend.map((item, index) => {
                    const maxValue = Math.max(...trend.map(t => t.value));
                    const minValue = Math.min(...trend.map(t => t.value));
                    const range = maxValue - minValue || 1;
                    const y = 110 - 20 - ((item.value - minValue) / range) * 70;
                    return (
                      <div key={`label-${index}`}>
                       <span className="text-center absolute transform -translate-x-1/2 Body_Regular_10 text-[#086D35] z-0" style={{ left: `${((index * 55 + 20) / 220) * 100}%`, top: `${(y + 10) * 0.91}%`, position: 'absolute', ...(index === 3 && { left: '85%' }) }}>{item.quarter}</span>
                       <span className="text-center absolute transform -translate-x-1/2 Sub_Bold_10 text-[#086D35] z-0" style={{ left: `${((index * 55 + 20) / 220) * 100}%`, top: `${(y + 25) * 0.91}%`, position: 'absolute', ...(index === 3 && { left: '85%' }) }}>{item.value.toLocaleString()}건</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <AIInterpretationCard className="mt-[25.9px]"><div className="Body_Regular_12 text-grayscale-65">{p.description_price?.volume || '거래량 추이 분석 데이터를 불러오는 중입니다...'}</div></AIInterpretationCard>
        </InnerCard2>
      </div>
    </SectionCard>
  );
};

const IncomeConsumption: FC<{ report: ReportRaw }> = ({ report }) => {
  const i = report.income_consumption.income;
  const c = report.income_consumption.consumption;
  const labels: [any, string][] = [
    ["food", "식료품"], ["clothing_footwear", "의류"], ["living_goods", "생활용품"], ["medical", "의료"],
    ["transport", "교통"], ["education", "교육"], ["leisure_culture", "여가·문화"], ["other", "기타"], ["eating_out", "외식"],
  ];
  const donutData = labels.map(([k, name]) => ({ label: name, value: (c.percent as any)[k] as number }));
  const customColors = [
    `rgba(13, 182, 89, 1.0)`, `rgba(13, 182, 89, 0.9)`, `rgba(13, 182, 89, 0.2)`, `rgba(13, 182, 89, 0.6)`,
    `rgba(13, 182, 89, 0.4)`, `rgba(13, 182, 89, 0.7)`, `rgba(13, 182, 89, 0.1)`, `rgba(13, 182, 89, 0.5)`, `rgba(13, 182, 89, 0.3)`,
  ];
  return (
    <SectionCard title="주민 소득 수준">
      <div className="space-y-[16px]">
        <InnerCard title="주민 경제력"><IncomeLevelBox incomeData={i} /></InnerCard>
        <InnerCard title="소득 지출분류" rightContent={<span className="Body_Regular_10" style={{ color: "#B6B6B5" }}>서울시 상권 분석 서비스</span>}>
          <DynamicLabelDonutChart data={donutData} innerRadius={40} outerRadius={100} colors={customColors} />
          <AIInterpretationCard className="mt-[10px]"><p className="text-xs text-muted-foreground">총지출: {won(c.spending_total)} · {report.income_consumption.income_consumption_description}</p></AIInterpretationCard>
        </InnerCard>
      </div>
    </SectionCard>
  );
};

const Strategy: FC<{ report: ReportRaw }> = ({ report }) => {
  const s = report.description_strategy;
  if (!s || !s.review || !s.kpi || !s.improvements) {
    return (
      <SectionCard title="AI 종합 분석" titleClassName="Head_Bold_14 text-primary-green-40" initialIsOpen={true}>
        <div className="space-y-4"><InnerCard title="AI 종합 분석"><div className="text-center py-8"><p className="text-gray-500">AI 종합 분석 데이터를 불러오는 중입니다...</p></div></InnerCard></div>
      </SectionCard>
    );
  }
  return (
    <SectionCard title="AI 종합 분석" titleClassName="Head_Bold_14 text-primary-green-40" initialIsOpen={true}>
      <div className="space-y-4">
        <InnerCard title="리뷰 기반 서비스 조언"><StrategyCard title={s.review?.head || '리뷰 기반 서비스 조언'} items={s.review?.body || ['데이터를 불러오는 중입니다...']} /></InnerCard>
        <InnerCard title="핵심 성과 지표"><StrategyCard title={s.kpi?.head || '핵심 성과 지표'} items={s.kpi?.body || ['데이터를 불러오는 중입니다...']} /></InnerCard>
        <InnerCard title="보완지점"><StrategyCard title={s.improvements?.head || '보완지점'} items={s.improvements?.body || ['데이터를 불러오는 중입니다...']} /></InnerCard>
      </div>
    </SectionCard>
  );
};

const AnalysisLoading: FC<{ isOpen: boolean; onComplete?: () => void; }> = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center animate-fade-in">
      <div className="mb-[32px]">
        <div className="relative w-[76px] h-[76px] animate-spin">
          <div className="absolute w-[10.67px] h-[10.67px] rounded-full" style={{ top: '0px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#0DB659' }} />
          <div className="absolute w-[10.67px] h-[10.67px] rounded-full" style={{ top: '7.32px', right: '7.32px', backgroundColor: 'rgba(13, 182, 89, 0.7)' }} />
          <div className="absolute w-[10.67px] h-[10.67px] rounded-full" style={{ top: '50%', right: '0px', transform: 'translateY(-50%)', backgroundColor: 'rgba(13, 182, 89, 0.4)' }} />
          <div className="absolute w-[10.67px] h-[10.67px] rounded-full" style={{ bottom: '7.32px', right: '7.32px', backgroundColor: 'rgba(13, 182, 89, 0.1)' }} />
          <div className="absolute w-[10.67px] h-[10.67px] rounded-full" style={{ bottom: '0px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#FFC251' }} />
          <div className="absolute w-[10.67px] h-[10.67px] rounded-full" style={{ bottom: '7.32px', left: '7.32px', backgroundColor: 'rgba(255, 194, 81, 0.7)' }} />
          <div className="absolute w-[10.67px] h-[10.67px] rounded-full" style={{ top: '50%', left: '0px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 194, 81, 0.4)' }} />
          <div className="absolute w-[10.67px] h-[10.67px] rounded-full" style={{ top: '7.32px', left: '7.32px', backgroundColor: 'rgba(255, 194, 81, 0.1)' }} />
        </div>
      </div>
      <div className="text-center"><h2 className="Body_SemiBold_18 text-[#032412] mb-[8px]">맞춤형 리포트를 생성하고 있어요!<br/>잠시만 기다려주세요.</h2></div>
    </div>
  );
};

// --- End of Section Components ---


// --- Main ReportView Component ---
export default function ReportViewSingleFile() {
  const { id } = useParams();
  const location = useLocation();
  const [report, setReport] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const minLoadingTime = new Promise(resolve => setTimeout(resolve, 500));
        if (location.state?.reportData) {
          setReport(location.state.reportData);
          await minLoadingTime;
          setIsLoading(false);
          return;
        }
        if (id && id !== 'default') {
          const anonymousId = getAnonymousId();
          const result = await analysisApi.getReportDetail(anonymousId, id);
          if (result.data) {
            setReport(result.data);
          } else if (result.status === 'success') {
            setReport(result);
          } else {
            throw new Error('API 응답에 데이터가 없습니다.');
          }
        } else {
          throw new Error('유효하지 않은 리포트 ID입니다.');
        }
      } catch (err) {
        console.error('Failed to fetch report:', err);
        setError('리포트를 불러오는데 실패했습니다.');
      } finally {
        const minLoadingTime = new Promise(resolve => setTimeout(resolve, 500));
        await minLoadingTime;
        setIsLoading(false);
      }
    };
    fetchReport();
  }, [id, location.state]);

  if (isLoading) {
    return <AnalysisLoading isOpen={true} />;
  }

  if (error && !report) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-grayscale-5">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-primary-green text-white rounded-lg">다시 시도</button>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-grayscale-5">
        <div className="text-center"><p className="text-gray-600">리포트 데이터를 찾을 수 없습니다.</p></div>
      </div>
    );
  }

  return (
    <div className="bg-grayscale-5">
      <ReportHeader />
      <main id="report-content" className="report-view flex flex-col pt-[10px] px-6 gap-[30px] bg-grayscale-5 pb-[190px]">
        <ReportHero report={report} />
        <ReportSummary report={report} />
        <SelectionInfo report={report} />
        <Keywords report={report} />
        <Population report={report} />
        <Price report={report} />
        <IncomeConsumption report={report} />
        <Strategy report={report} />
      </main>
    </div>
  );
}