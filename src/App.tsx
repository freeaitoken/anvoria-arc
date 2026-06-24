import { useEffect, useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Approach from "./components/sections/Approach";
import OperatingModel from "./components/sections/OperatingModel";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Impact from "./components/sections/Impact";
import Trust from "./components/sections/Trust";
import Founders from "./components/sections/Founders";
import Contact from "./components/sections/Contact";
import CTA from "./components/sections/CTA";
import Footer from "./components/Footer";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const circumference = 2 * Math.PI * 22;
  const offset = circumference - progress * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-3 pointer-events-none">
      <div className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/40">
        {Math.round(progress * 100).toString().padStart(2, "0")}%
      </div>
      <div className="relative w-12 h-12">
        <svg width="48" height="48" viewBox="0 0 48 48" className="rotate-[-90deg]">
          <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="#34D2C0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.2s linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-mint" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SmoothScroll>
      <Loader />
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <Approach />
        <OperatingModel />
        <Services />
        <Process />
        <Impact />
        <Trust />
        <Founders />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}