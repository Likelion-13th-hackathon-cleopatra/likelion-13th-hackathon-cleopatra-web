import { getAnonymousId } from "./anonymousId";

const API_BASE_URL = "https://api.guseokguseok.site"; // Replace with actual API base URL

export async function authenticatedFetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> {
  const anonymousId = getAnonymousId();
  const headers = new Headers(init?.headers);

  headers.set("primary_key", anonymousId);

  const response = await fetch(input, {
    ...init,
    headers,
  });

  // Optional: Handle global errors or responses here
  if (!response.ok) {
    console.error("API request failed:", response.status, response.statusText);
    // You might want to throw an error or handle it based on your app's needs
  }

  return response;
}

// Example usage:
// authenticatedFetch(`${API_BASE_URL}/data`, { method: 'GET' });

export const userApi = {
  registerUser: async (primaryKey: string) => {
    const response = await fetch(`${API_BASE_URL}/api/member/${primaryKey}`, {
      method: "POST",
    });
    return response.json();
  },
};

// 상권 분석 API
export const analysisApi = {
  // 상권 분석 요청 (보고서 생성)
  requestAnalysis: async (analysisData: {
    industry: string;
    subCategory: string;
    city: string;
    district: string;
    dong: string;
  }) => {
    const anonymousId = getAnonymousId();
    
    // API 문서에 맞는 형식으로 데이터 변환
    const requestBody = {
      primary: analysisData.industry,
      secondary: analysisData.subCategory,
      district: analysisData.district,
      neighborhood: analysisData.dong.replace(/\d+동$/, '동'), // 숫자 제거 (예: 공릉1동 → 공릉동)
      sub_neighborhood: analysisData.dong // 원본 그대로 (예: 공릉1동)
    };
    
    console.log('=== API 요청 정보 ===');
    console.log('URL:', `${API_BASE_URL}/api/report/${anonymousId}`);
    console.log('Method: POST');
    console.log('Request Body:', requestBody);
    console.log('====================');
    
    const response = await authenticatedFetch(`${API_BASE_URL}/api/report/${anonymousId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    
    console.log('=== API 응답 정보 ===');
    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);
    console.log('Headers:', Object.fromEntries(response.headers.entries()));
    console.log('====================');
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('서버 응답 상세:', errorText);
      throw new Error(`Analysis request failed: ${response.status}: ${errorText}`);
    }
    
    const responseData = await response.json();
    console.log('=== API 응답 데이터 ===');
    console.log('Response Data:', responseData);
    console.log('====================');
    
    return responseData;
  },

  // 분석 결과 조회
  getAnalysisResult: async (analysisId: string) => {
    const anonymousId = getAnonymousId();
    const response = await authenticatedFetch(`${API_BASE_URL}/api/report/${analysisId}?primary_key=${anonymousId}`, {
      method: "GET",
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('서버 응답 상세:', errorText);
      throw new Error(`Failed to get analysis result: ${response.status}: ${errorText}`);
    }
    
    return response.json();
  },

  // 리포트 목록 조회
  getReportList: async (primaryKey: string) => {
    const response = await authenticatedFetch(`${API_BASE_URL}/api/report/${primaryKey}`, {
      method: "GET",
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('서버 응답 상세:', errorText);
      throw new Error(`Failed to get report list: ${response.status}: ${errorText}`);
    }
    
    return response.json();
  },

  // 리포트 상세 조회
  getReportDetail: async (primaryKey: string, reportId: string) => {
    const response = await authenticatedFetch(`${API_BASE_URL}/api/report/${primaryKey}/${reportId}`, {
      method: "GET",
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('서버 응답 상세:', errorText);
      throw new Error(`Failed to get report detail: ${response.status}: ${errorText}`);
    }
    
    return response.json();
  },
};
