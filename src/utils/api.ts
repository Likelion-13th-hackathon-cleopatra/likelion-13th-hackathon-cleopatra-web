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
