"use client";

// Existing content helpers; the site always renders in English.
export type Lang = "en" | "pt";
export type L = { en: string; pt: string };
export const tx = (value: L, lang: Lang) => value[lang];

export function useLang(): { lang: Lang } {
  return { lang: "en" };
}
