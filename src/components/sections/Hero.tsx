import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const HeroScene = lazy(() => import("../three/HeroScene"));

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/60 via-transparent to-midnight/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 text-center">
        {/* Top live indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-mint animate-[pulse-soft_2s_ease-in-out_infinite]" />
          <span className="font-num text-[10px] tracking-[0.25em] uppercase text-soft-white/70">
            System Online · v2.4
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="section-eyebrow mx-auto justify-center mb-8"
        >
          The Operating System For Environmental Transformation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[clamp(2.5rem,7vw,5.75rem)] font-medium tracking-tight leading-[0.95] text-soft-white text-balance"
        >
          Environmental
          <br />
          <span className="bg-gradient-to-r from-mint via-aqua to-deep bg-clip-text text-transparent">
            Infrastructure
          </span>
          <br />
          For The Next Generation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-soft-white/60 leading-relaxed text-balance"
        >
          Securing, managing, and delivering sanitation systems
          <br className="hidden md:block" />
          across emerging economies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#approach" className="btn-primary">
            Explore Our Operations
            <span className="text-base">→</span>
          </a>
          <a href="#contact" className="btn-secondary text-soft-white">
            Partner With Us
          </a>
        </motion.div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute bottom-8 md:bottom-12 left-0 right-0 px-6 lg:px-10 hidden md:block"
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 backdrop-blur-md">
              {[
                { v: "12+", l: "Countries Active" },
                { v: "48", l: "Municipalities" },
                { v: "180", l: "Projects Delivered" },
                { v: "2.4M", l: "People Served" },
              ].map((s, i) => (
                <div key={i} className="bg-midnight/60 p-5 md:p-6 text-left">
                  <div className="font-num text-2xl md:text-3xl text-mint tracking-tight tabular-nums">
                    {s.v}
                  </div>
                  <div className="mt-1 font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/40">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10"
      >
        <span className="font-num text-[10px] tracking-[0.3em] uppercase text-soft-white/30 [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-mint/60 to-transparent" />
      </motion.div>
    </section>
  );
}