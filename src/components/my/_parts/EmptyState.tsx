// src/components/my/_parts/EmptyState.tsx
import React from "react";

export function EmptyState({ text }: { text: string }) {
  return <div className="py-10 text-center text-sm text-gray-500">{text}</div>;
}
