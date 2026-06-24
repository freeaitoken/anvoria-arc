import { useEffect, useState } from "react";
import { useScrollStore } from "../lib/stores";
import { cn } from "../utils/cn";

const links = [
  { label: "Home", href: "#home" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useScrollStore((s) => s.progress);
  const direction = useScrollStore((s) => s.direction);
  const velocity = useScrollStore((s) => s.velocity);

  useEffect(() => {
    setScrolled(progress > 0.02);
    if (progress < 0.02) {
      setHidden(false);
      return;
    }
    if (direction === "down" && velocity > 4) {
      setHidden(true);
    } else if (direction === "up") {
      setHidden(false);
    }
  }, [progress, direction, velocity]);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: "-40% 0px -55% 0px" }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "translate-y-0" : "-translate-y-2",
          hidden && scrolled ? "-translate-y-full" : "",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className={cn(
          "mx-auto max-w-7xl px-6 lg:px-10 transition-all duration-500",
          scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <div className={cn(
            "flex items-center justify-between rounded-full border border-white/10 px-6 py-2.5 backdrop-blur-xl transition-all duration-500",
            scrolled ? "bg-[rgba(7,31,78,0.72)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]" : ""
          )}>
            <a href="#home" className="flex items-center gap-2.5 group">
              <Logo />
              <span className="font-heading text-[15px] font-semibold tracking-tight text-soft-white">
                Envoria <span className="text-mint">Arc</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {links.slice(1).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative px-4 py-2 text-[13px] font-medium tracking-tight transition-colors",
                    activeSection === l.href.slice(1) ? "text-mint" : "text-soft-white/70 hover:text-soft-white"
                  )}
                >
                  {l.label}
                  {activeSection === l.href.slice(1) && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-1 rounded-full bg-mint" />
                  )}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-mint/10 border border-mint/30 px-4 py-2 text-[13px] font-medium text-mint hover:bg-mint/20 transition-colors"
            >
              Start Conversation
              <span className="text-base leading-none">→</span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={cn("w-5 h-px bg-soft-white transition-transform", mobileOpen && "rotate-45 translate-y-[3px]")} />
              <span className={cn("w-5 h-px bg-soft-white transition-opacity", mobileOpen && "opacity-0")} />
              <span className={cn("w-5 h-px bg-soft-white transition-transform", mobileOpen && "-rotate-45 -translate-y-[3px]")} />
            </button>
          </div>
        </div>

        {/* Top brand badge (always visible before scroll) */}
        <div className={cn(
          "absolute top-5 left-1/2 -translate-x-1/2 transition-opacity duration-500",
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          <a href="#home" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-heading text-[15px] font-semibold tracking-tight text-soft-white">
              Envoria <span className="text-mint">Arc</span>
            </span>
          </a>
        </div>

        {/* Top right - Start Conversation (before scroll) */}
        <div className={cn(
          "absolute top-5 right-6 lg:right-10 transition-opacity duration-500",
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-soft-white/15 px-4 py-2 text-[13px] font-medium text-soft-white/80 hover:text-soft-white hover:border-soft-white/30 transition-colors backdrop-blur-sm"
          >
            Start Conversation
            <span className="text-base leading-none">→</span>
          </a>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-aqua to-mint transition-transform duration-300 origin-left"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-midnight/95 backdrop-blur-2xl" onClick={() => setMobileOpen(false)} />
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-8 transition-transform duration-500",
          mobileOpen ? "translate-y-0" : "translate-y-full"
        )}>
          <div className="flex flex-col gap-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center justify-between border-b border-white/5 py-4 text-2xl font-heading font-medium tracking-tight",
                  activeSection === l.href.slice(1) ? "text-mint" : "text-soft-white"
                )}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {l.label}
                <span className="font-num text-xs text-soft-white/30">0{i + 1}</span>
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between text-xs text-soft-white/40 font-num">
            <span>Envoria Arc</span>
            <span>Est. Global</span>
          </div>
        </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D2C0" />
          <stop offset="100%" stopColor="#08A6B6" />
        </linearGradient>
      </defs>
      <path
        d="M16 2 C 9 9, 6 14, 6 19 a 10 10 0 0 0 20 0 C 26 14, 23 9, 16 2 Z"
        fill="url(#logoGrad)"
        opacity="0.18"
      />
      <path
        d="M16 2 C 9 9, 6 14, 6 19 a 10 10 0 0 0 20 0 C 26 14, 23 9, 16 2 Z"
        stroke="url(#logoGrad)"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="16" cy="19" r="2.5" fill="url(#logoGrad)" />
      <path d="M11 22 Q 16 25, 21 22" stroke="url(#logoGrad)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}