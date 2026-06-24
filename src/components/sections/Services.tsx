import { useState } from "react";
import Reveal from "../Reveal";
import { cn } from "../../utils/cn";

const services = [
  {
    id: 1,
    icon: "M3 21h18M5 21V8l7-5 7 5v13M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01",
    title: "Government Sewage Treatment Tenders",
    short: "Tender Strategy",
    desc: "End-to-end bid engineering for municipal and federal-level sewage treatment contracts — from capability profiling to technical submission.",
  },
  {
    id: 2,
    icon: "M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4",
    title: "Wastewater Management Projects",
    short: "Treatment Operations",
    desc: "Design, commissioning, and operational oversight of wastewater treatment infrastructure serving urban and peri-urban populations.",
  },
  {
    id: 3,
    icon: "M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18",
    title: "Municipal Cleaning Contracts",
    short: "City Sanitation",
    desc: "Long-cycle municipal cleanliness programs — drainage, public infrastructure, and waste logistics — under measurable performance KPIs.",
  },
  {
    id: 4,
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Environmental Sanitation Programs",
    short: "Public Health",
    desc: "Integrated sanitation frameworks that combine behavior, infrastructure, and policy — designed to scale across districts.",
  },
  {
    id: 5,
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    title: "Public Infrastructure Maintenance",
    short: "Lifecycle Ops",
    desc: "Multi-year maintenance contracts covering STP plants, pumping stations, and underground sewer networks.",
  },
  {
    id: 6,
    icon: "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    title: "Project Management & Administration",
    short: "PMO Services",
    desc: "Dedicated PMO functions — scheduling, contract administration, vendor coordination, and statutory compliance tracking.",
  },
  {
    id: 7,
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    title: "Local Partner Coordination",
    short: "Field Network",
    desc: "On-ground partner ecosystems — local contractors, equipment vendors, and labor pools — vetted, trained, and performance-tracked.",
  },
  {
    id: 8,
    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
    title: "Environmental Operations Support",
    short: "Performance Layer",
    desc: "Continuous monitoring, environmental compliance reporting, and optimization services across the operational lifecycle.",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-soft-white py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="section-eyebrow !text-aqua mb-6">Core Capabilities</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-midnight text-balance">
              Eight infrastructure
              <br />
              <span className="text-aqua">operating modules.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-base md:text-lg text-charcoal/65 leading-relaxed max-w-xl">
              Each capability is a self-contained operating layer — composed
              together, they form a complete environmental delivery system.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-midnight/8 rounded-3xl overflow-hidden border border-midnight/10">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 50} className="contents">
              <button
                onMouseEnter={() => setActive(s.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === s.id ? null : s.id)}
                className={cn(
                  "group relative bg-soft-white p-7 text-left transition-all duration-500 min-h-[260px] flex flex-col",
                  active === s.id ? "bg-midnight text-soft-white" : "hover:bg-mist/40"
                )}
              >
                {/* Module index */}
                <div className="flex items-center justify-between mb-6">
                  <span className={cn(
                    "font-num text-[10px] tracking-[0.25em] uppercase",
                    active === s.id ? "text-mint" : "text-aqua/70"
                  )}>
                    M.{s.id.toString().padStart(2, "0")}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                    active === s.id ? "bg-mint/20 text-mint rotate-45" : "bg-midnight/5 text-midnight/60"
                  )}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Icon */}
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 mb-5",
                  active === s.id ? "bg-mint/10 text-mint" : "bg-midnight/5 text-aqua"
                )}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </div>

                {/* Title */}
                <h3 className={cn(
                  "font-heading text-lg font-medium tracking-tight leading-tight mb-2 transition-colors",
                  active === s.id ? "text-soft-white" : "text-midnight"
                )}>
                  {s.title}
                </h3>

                {/* Short label */}
                <div className={cn(
                  "font-num text-[10px] tracking-[0.2em] uppercase mb-4",
                  active === s.id ? "text-mint" : "text-charcoal/40"
                )}>
                  {s.short}
                </div>

                {/* Description (expandable) */}
                <p className={cn(
                  "text-sm leading-relaxed transition-all duration-500",
                  active === s.id ? "text-soft-white/70 opacity-100 max-h-40" : "text-charcoal/55 max-h-0 opacity-0 overflow-hidden"
                )}>
                  {s.desc}
                </p>

                {/* Bottom reveal */}
                <div className={cn(
                  "mt-auto pt-4 font-num text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 transition-all duration-500",
                  active === s.id ? "text-mint opacity-100" : "text-aqua opacity-0"
                )}>
                  Expand
                  <span>→</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={400}>
          <div className="mt-12 flex items-center justify-between flex-wrap gap-4 text-sm text-charcoal/50">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
              <span>Capabilities composed per project — never one-size-fits-all.</span>
            </div>
            <a href="#contact" className="text-aqua font-medium hover:text-midnight transition-colors flex items-center gap-2">
              Discuss your project
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}