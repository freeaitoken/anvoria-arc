import { useEffect, useRef, useState, Suspense, lazy } from "react";
import Reveal from "../Reveal";

const GlobalImpactScene = lazy(() => import("../three/GlobalImpactScene"));

const stats = [
  { v: 180, suffix: "+", l: "Projects Delivered" },
  { v: 48, suffix: "", l: "Municipalities Served" },
  { v: 2.4, suffix: "M", l: "People Impacted", decimals: 1 },
  { v: 12, suffix: "", l: "Countries Active" },
];

function AnimatedNumber({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 2000;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 4);
              setVal(target * eased);
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="relative bg-midnight py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-aqua/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="section-eyebrow mb-6">Global Operations</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-soft-white text-balance">
                Operating across
                <br />
                <span className="text-mint">emerging economies.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-base md:text-lg text-soft-white/55 leading-relaxed max-w-md">
                Active projects across South Asia, Sub-Saharan Africa,
                and Southeast Asia — with measurable infrastructure outcomes.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex items-center gap-6">
                {[
                  { c: "#34D2C0", l: "Active" },
                  { c: "#08A6B6", l: "Growing" },
                  { c: "#0A3E87", l: "Planned" },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: s.c }} />
                    <span className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/50">{s.l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="relative aspect-square rounded-3xl border border-white/5 bg-gradient-to-b from-midnight/40 via-deep/10 to-midnight/40 overflow-hidden">
                <Suspense fallback={null}>
                  <GlobalImpactScene />
                </Suspense>

                {/* Corner labels */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/30">
                  <span>Network · Real-time</span>
                  <span>10 Active Sites</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/30">
                    Hover Cities
                  </span>
                  <span className="font-num text-[10px] tracking-[0.2em] uppercase text-mint/60">
                    Synced · {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 100} className="contents">
              <div className="bg-midnight/60 backdrop-blur-md p-8 md:p-10 group hover:bg-midnight/90 transition-all duration-500">
                <div className="font-num text-5xl md:text-6xl text-mint tracking-tighter tabular-nums">
                  <AnimatedNumber target={s.v} suffix={s.suffix} decimals={s.decimals || 0} />
                </div>
                <div className="mt-4 font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/40">
                  {s.l}
                </div>
                <div className="mt-3 h-px bg-white/5 overflow-hidden">
                  <div className="h-full bg-mint/50 w-0 group-hover:w-full transition-all duration-1000" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}