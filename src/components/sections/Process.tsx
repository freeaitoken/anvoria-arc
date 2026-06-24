import Reveal from "../Reveal";

const steps = [
  { n: "01", t: "Identify Opportunities", d: "We monitor emerging tenders, infrastructure pipelines, and public-private partnership programs across target geographies." },
  { n: "02", t: "Secure Government Contracts", d: "Our bid engineering team crafts compliant, technically rigorous submissions — designed to win and to be executed cleanly." },
  { n: "03", t: "Mobilize Local Experts", d: "Vetted field crews, equipment vendors, and engineering partners are activated across project sites within 30 days." },
  { n: "04", t: "Manage Delivery", d: "Centralized PMO with on-ground site management ensures schedule, budget, and quality adherence at every milestone." },
  { n: "05", t: "Ensure Compliance", d: "Environmental standards, statutory requirements, and contract obligations tracked through a real-time compliance dashboard." },
  { n: "06", t: "Scale Operations", d: "Successful projects expand into district, state, and national-level frameworks — building long-term recurring infrastructure partnerships." },
];

export default function Process() {
  return (
    <section className="relative bg-midnight py-32 lg:py-40 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <Reveal>
              <div className="section-eyebrow mb-6">Mission Control</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-soft-white text-balance">
                How Envoria works.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-base md:text-lg text-soft-white/55 leading-relaxed max-w-md">
                Six discrete operational stages — engineered to move projects
                from signal to scale with predictable velocity.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 space-y-2">
                {[
                  { l: "Avg. Mobilization", v: "21 days" },
                  { l: "Tender-to-Award", v: "6–10 weeks" },
                  { l: "Contract Renewal", v: "94%" },
                ].map((row) => (
                  <div key={row.l} className="flex items-center justify-between border-b border-white/5 py-3">
                    <span className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/40">
                      {row.l}
                    </span>
                    <span className="font-num text-sm text-mint">{row.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[39px] top-3 bottom-3 w-px bg-gradient-to-b from-aqua/50 via-mint/30 to-transparent hidden md:block" />

              <div className="space-y-4">
                {steps.map((s, i) => (
                  <Reveal key={s.n} delay={i * 80}>
                    <div className="group relative grid grid-cols-[80px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-10 items-start py-4">
                      {/* Number circle */}
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-aqua/20 to-mint/10 border border-aqua/30 flex items-center justify-center font-num text-base text-mint group-hover:scale-105 transition-transform duration-500">
                          {s.n}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-2">
                        <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-soft-white group-hover:text-mint transition-colors duration-500">
                          {s.t}
                        </h3>
                        <p className="mt-3 text-sm md:text-base text-soft-white/55 leading-relaxed max-w-xl">
                          {s.d}
                        </p>
                        <div className="mt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="font-num text-[10px] tracking-[0.2em] uppercase text-mint">
                            Stage {s.n}
                          </span>
                          <span className="w-8 h-px bg-mint/50" />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}