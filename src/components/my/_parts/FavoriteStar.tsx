// src/components/my/_parts/FavoriteStar.tsx
import React from "react";

export function FavoriteStar({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={`text-xl ${active ? "text-yellow-500" : "text-gray-300"}`}
    >
      {active ? "★" : "☆"}
    </span>
  );
}
