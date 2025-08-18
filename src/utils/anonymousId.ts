import { v4 as uuidv4 } from "uuid";

const ANONYMOUS_ID_KEY = "userid"; // Key for localStorage

export function getAnonymousId(): string {
  let anonymousId = localStorage.getItem(ANONYMOUS_ID_KEY);

  if (!anonymousId) {
    anonymousId = uuidv4();
    localStorage.setItem(ANONYMOUS_ID_KEY, anonymousId);
    console.log("Generated new Anonymous ID:", anonymousId); // For debugging
  } else {
    console.log("Using existing Anonymous ID:", anonymousId); // For debugging
  }

  return anonymousId;
}

// Optional: for completeness or specific use cases
export function setAnonymousId(id: string): void {
  localStorage.setItem(ANONYMOUS_ID_KEY, id);
}

export function clearAnonymousId(): void {
  localStorage.removeItem(ANONYMOUS_ID_KEY);
  console.log("Anonymous ID cleared."); // For debugging
}
