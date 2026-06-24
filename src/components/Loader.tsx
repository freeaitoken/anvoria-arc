import { useEffect, useState } from "react";
import { useLoaderStore } from "../lib/stores";

export default function Loader() {
  const isLoading = useLoaderStore((s) => s.isLoading);
  const setLoading = useLoaderStore((s) => s.setLoading);
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 12 + 3;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setHide(true);
          setTimeout(() => setLoading(false), 800);
        }, 400);
      }
      setProgress(p);
    }, 80);
    return () => clearInterval(interval);
  }, [setLoading]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-midnight transition-opacity duration-700 ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="absolute inset-0 grain" />
      <div className="relative h-full flex flex-col items-center justify-center px-8">
        {/* Animated mark */}
        <div className="relative mb-12">
          <svg width="64" height="64" viewBox="0 0 32 32" fill="none" className="animate-[pulse-soft_3s_ease-in-out_infinite]">
            <defs>
              <linearGradient id="loadGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34D2C0" />
                <stop offset="100%" stopColor="#08A6B6" />
              </linearGradient>
            </defs>
            <path
              d="M16 2 C 9 9, 6 14, 6 19 a 10 10 0 0 0 20 0 C 26 14, 23 9, 16 2 Z"
              stroke="url(#loadGrad)"
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="16" cy="19" r="2" fill="url(#loadGrad)" />
          </svg>
          {/* Orbital ring */}
          <div className="absolute inset-0 -m-8 rounded-full border border-mint/10 animate-[rotate-slow_8s_linear_infinite]" />
        </div>

        <div className="text-center max-w-md">
          <div className="font-num text-[10px] tracking-[0.3em] uppercase text-mint/60 mb-3">
            Initializing Systems
          </div>
          <h1 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-soft-white mb-2">
            Envoria Arc
          </h1>
          <p className="text-sm text-soft-white/40">
            Environmental Infrastructure Command
          </p>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 md:w-80">
          <div className="flex items-center justify-between mb-2">
            <span className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/30">
              System
            </span>
            <span className="font-num text-[10px] tracking-[0.2em] text-mint tabular-nums">
              {Math.floor(progress).toString().padStart(3, "0")}%
            </span>
          </div>
          <div className="h-px bg-white/10 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-aqua via-mint to-aqua transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}