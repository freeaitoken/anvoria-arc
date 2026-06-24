import { Suspense, lazy } from "react";
import Reveal from "../Reveal";

const PipelineScene = lazy(() => import("../three/PipelineScene"));

export default function Approach() {
  return (
    <section id="approach" className="relative bg-midnight py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <Suspense fallback={null}>
          <PipelineScene />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <div className="section-eyebrow mb-6">The Journey</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-soft-white text-balance">
                From waste to
                <br />
                <span className="text-mint">sustainable infrastructure</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-base md:text-lg text-soft-white/60 leading-relaxed max-w-md">
                We secure opportunities, coordinate execution, and deliver
                environmental projects at scale — turning sanitation challenges
                into long-term civic infrastructure.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 grid grid-cols-2 gap-6 max-w-sm">
                {[
                  { v: "98%", l: "Contract Win Rate" },
                  { v: "100%", l: "On-Time Delivery" },
                  { v: "40+", l: "Active Pipelines" },
                  { v: "ISO", l: "Certified Operations" },
                ].map((s) => (
                  <div key={s.l} className="border-l border-mint/30 pl-4">
                    <div className="font-num text-2xl text-soft-white">{s.v}</div>
                    <div className="font-num text-[10px] tracking-[0.15em] uppercase text-soft-white/40 mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {[
              {
                n: "01",
                t: "Identify Critical Tenders",
                d: "Our intelligence layer continuously maps emerging municipal and federal tenders across sanitation, sewage, and wastewater sectors.",
              },
              {
                n: "02",
                t: "Secure Government Contracts",
                d: "Through compliant bid engineering, compliance documentation, and technical capability narratives that resonate with evaluation committees.",
              },
              {
                n: "03",
                t: "Coordinate Multi-Stakeholder Delivery",
                d: "Government bodies, local engineers, equipment vendors, and field crews — orchestrated from a single operations command.",
              },
              {
                n: "04",
                t: "Hand Over Operational Systems",
                d: "Beyond construction: we deliver functional infrastructure with documentation, training, and long-term performance accountability.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="card-soft rounded-2xl p-6 md:p-8 group cursor-default">
                  <div className="flex items-start gap-6">
                    <div className="font-num text-[11px] tracking-[0.2em] text-mint pt-1">
                      {step.n}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-soft-white group-hover:text-mint transition-colors">
                        {step.t}
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-soft-white/55 leading-relaxed">
                        {step.d}
                      </p>
                    </div>
                    <div className="hidden md:block opacity-20 group-hover:opacity-100 group-hover:text-mint transition-all">
                      →
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}