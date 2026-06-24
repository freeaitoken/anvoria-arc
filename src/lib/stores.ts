import { create } from "zustand";

interface ScrollState {
  scrollY: number;
  progress: number;
  velocity: number;
  direction: "up" | "down";
  setScroll: (y: number, progress: number, velocity: number, direction: "up" | "down") => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrollY: 0,
  progress: 0,
  velocity: 0,
  direction: "down",
  setScroll: (scrollY, progress, velocity, direction) => set({ scrollY, progress, velocity, direction }),
}));

interface LoaderState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
  isLoading: true,
  setLoading: (loading) => set({ isLoading: loading }),
}));