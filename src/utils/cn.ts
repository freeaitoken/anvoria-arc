import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function clamp(n: number, min = 0, max = 1) {
  return Math.min(Math.max(n, min), max);
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}