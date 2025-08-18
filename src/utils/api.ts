import { getAnonymousId } from "./anonymousId";

const API_BASE_URL = "YOUR_API_BASE_URL"; // Replace with actual API base URL

export async function authenticatedFetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> {
  const anonymousId = getAnonymousId();
  const headers = new Headers(init?.headers);

  headers.set("X-Anonymous-Id", anonymousId);

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
