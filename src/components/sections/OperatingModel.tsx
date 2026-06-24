import { Suspense, lazy } from "react";
import Reveal from "../Reveal";

const OperatingModelScene = lazy(() => import("../three/OperatingModelScene"));

export default function OperatingModel() {
  return (
    <section className="relative bg-midnight py-32 lg:py-40 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-aqua/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-deep/20 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="section-eyebrow mx-auto justify-center mb-6">Our Operating System</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-soft-white text-balance">
              International Oversight.
              <br />
              <span className="text-mint">Local Execution.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-base md:text-lg text-soft-white/55 leading-relaxed max-w-xl mx-auto">
              A four-node ecosystem that connects governments, capital,
              and communities into one operational layer.
            </p>
          </Reveal>
        </div>

        {/* 3D scene */}
        <Reveal delay={300}>
          <div className="relative h-[500px] md:h-[600px] rounded-3xl border border-white/5 bg-gradient-to-b from-midnight/40 via-midnight/20 to-midnight/40 overflow-hidden">
            <Suspense fallback={null}>
              <OperatingModelScene />
            </Suspense>

            {/* Corner annotations */}
            <div className="absolute top-6 left-6 font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/30">
              Network · 04 Nodes
            </div>
            <div className="absolute top-6 right-6 font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/30">
              Hover To Inspect
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-soft-white/30 font-num">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-mint" />
                  Government
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aqua" />
                  Envoria
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-mint" />
                  Partners
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-mint" />
                  Communities
                </span>
              </div>
              <div className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/30">
                Live · Optimized
              </div>
            </div>
          </div>
        </Reveal>

        {/* Below scene - 4 node descriptions */}
        <div className="mt-12 grid md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {[
            { t: "Government", d: "Tender Issuance & Compliance Oversight", n: "01" },
            { t: "Envoria Arc", d: "International Coordination & Capital Layer", n: "02" },
            { t: "Local Partners", d: "Field Execution & Engineering Capability", n: "03" },
            { t: "Communities", d: "Long-Term Operational Outcomes", n: "04" },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 80 + 200}>
              <div className="bg-midnight/60 backdrop-blur-md p-6 group hover:bg-midnight/90 transition-colors">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-num text-[10px] tracking-[0.2em] text-mint">
                    {item.n}
                  </span>
                  <span className="font-num text-[10px] text-soft-white/20">
                    Node
                  </span>
                </div>
                <h3 className="font-heading text-base font-medium text-soft-white tracking-tight">
                  {item.t}
                </h3>
                <p className="mt-2 text-xs text-soft-white/45 leading-relaxed">
                  {item.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}