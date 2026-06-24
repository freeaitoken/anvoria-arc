import Reveal from "../Reveal";

const founders = [
  {
    name: "Lucky Varandani",
    role: "Founder & Strategic Execution Lead",
    keywords: ["Execution", "Systems Thinking", "Leadership", "Business Transformation", "Growth Strategy"],
    narrative:
      "Built his career solving execution problems inside businesses. Believes ideas fail because of weak systems, poor accountability, and inconsistent execution. Founded TurnAround Experts to help organizations bridge the gap between ambition and implementation. Operates with a philosophy centered around measurable outcomes, system design, and scalable leadership. His expertise spans growth strategy, operational efficiency, technology execution, marketing, and business transformation.",
    motto: "Ideas are cheap. Execution is everything.",
    environment: "blueprint",
    accent: "#08A6B6",
    initial: "LV",
  },
  {
    name: "Nisha Dantani",
    role: "Founder & CEO",
    keywords: ["Innovation", "Human Understanding", "Brand Building", "Minimalism", "Global Vision"],
    narrative:
      "Started her professional journey in Human Resources and developed a deep interest in entrepreneurship and consumer behavior. Founded Rare & Real with the vision of building a globally recognized Indian skincare brand centered around Neuro-Rice science. Believes modern skincare should support both the skin barrier and emotional well-being. Built the company independently and continues pursuing global expansion through thoughtful innovation and meaningful brand experiences.",
    motto: "I don't wait for opportunities. I build them.",
    environment: "neural",
    accent: "#34D2C0",
    initial: "ND",
  },
];

function BlueprintVisual() {
  return (
    <svg viewBox="0 0 400 500" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="bpGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#08A6B6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#34D2C0" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Grid */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 25} x2="400" y2={i * 25} stroke="#08A6B6" strokeOpacity="0.08" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="500" stroke="#08A6B6" strokeOpacity="0.08" strokeWidth="0.5" />
      ))}

      {/* Blueprint structure */}
      <g stroke="url(#bpGrad)" strokeWidth="1" fill="none">
        <rect x="80" y="100" width="240" height="160" />
        <rect x="120" y="140" width="80" height="80" />
        <rect x="220" y="140" width="60" height="40" />
        <rect x="220" y="200" width="60" height="20" />
        <line x1="200" y1="100" x2="200" y2="260" />
        <line x1="80" y1="180" x2="320" y2="180" />
        <circle cx="160" cy="180" r="15" />
        <path d="M 80 320 L 140 280 L 200 320 L 260 280 L 320 320 L 320 380 L 80 380 Z" />
        <line x1="80" y1="380" x2="320" y2="380" />
      </g>

      {/* Dimension lines */}
      <g stroke="#34D2C0" strokeOpacity="0.5" strokeWidth="0.8">
        <line x1="80" y1="70" x2="320" y2="70" />
        <line x1="80" y1="65" x2="80" y2="75" />
        <line x1="320" y1="65" x2="320" y2="75" />
      </g>

      {/* Floating points */}
      <g fill="#34D2C0">
        <circle cx="160" cy="180" r="3" />
        <circle cx="160" cy="180" r="6" fillOpacity="0.3" />
        <circle cx="120" cy="140" r="2" />
        <circle cx="240" cy="200" r="2" />
      </g>

      {/* Text */}
      <g fill="#08A6B6" fillOpacity="0.5" fontSize="8" fontFamily="monospace">
        <text x="180" y="65">240m</text>
        <text x="100" y="50">SYSTEM v2.4</text>
        <text x="280" y="450">SCALE 1:100</text>
      </g>
    </svg>
  );
}

function NeuralVisual() {
  return (
    <svg viewBox="0 0 400 500" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="neGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D2C0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#08A6B6" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="riceGrad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#34D2C0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#08A6B6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Organic rice grain shape */}
      <g transform="translate(200, 250)">
        <ellipse cx="0" cy="0" rx="60" ry="100" fill="url(#riceGrad)" stroke="#34D2C0" strokeOpacity="0.3" strokeWidth="1" />
      </g>

      {/* Neural network nodes */}
      {[
        { x: 80, y: 100 }, { x: 200, y: 80 }, { x: 320, y: 110 },
        { x: 60, y: 250 }, { x: 340, y: 250 },
        { x: 80, y: 400 }, { x: 200, y: 420 }, { x: 320, y: 390 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="6" fill="#34D2C0" />
          <circle cx={n.x} cy={n.y} r="12" fill="#34D2C0" fillOpacity="0.15" />
        </g>
      ))}

      {/* Connections */}
      <g stroke="#34D2C0" strokeOpacity="0.3" strokeWidth="0.6">
        <line x1="80" y1="100" x2="200" y2="80" />
        <line x1="200" y1="80" x2="320" y2="110" />
        <line x1="80" y1="100" x2="60" y2="250" />
        <line x1="320" y1="110" x2="340" y2="250" />
        <line x1="60" y1="250" x2="80" y2="400" />
        <line x1="340" y1="250" x2="320" y2="390" />
        <line x1="200" y1="80" x2="200" y2="420" />
        <line x1="80" y1="400" x2="200" y2="420" />
        <line x1="200" y1="420" x2="320" y2="390" />
        <line x1="80" y1="100" x2="340" y2="250" />
        <line x1="320" y1="110" x2="60" y2="250" />
      </g>

      {/* Pathways radiating from rice */}
      <g stroke="#34D2C0" strokeOpacity="0.4" strokeWidth="0.5" strokeDasharray="2,3">
        <path d="M 200 150 Q 100 150 80 100" />
        <path d="M 200 150 Q 300 150 320 110" />
        <path d="M 200 350 Q 100 350 80 400" />
        <path d="M 200 350 Q 300 350 320 390" />
      </g>

      {/* Micro labels */}
      <g fill="#34D2C0" fillOpacity="0.4" fontSize="7" fontFamily="monospace">
        <text x="90" y="90">N.01</text>
        <text x="210" y="70">N.02</text>
        <text x="330" y="105">N.03</text>
        <text x="40" y="245">N.04</text>
        <text x="345" y="245">N.05</text>
        <text x="90" y="425">N.06</text>
        <text x="210" y="445">N.07</text>
        <text x="330" y="415">N.08</text>
      </g>
    </svg>
  );
}

export default function Founders() {
  return (
    <section id="founders" className="relative bg-midnight py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Reveal>
            <div className="section-eyebrow mx-auto justify-center mb-6">The Architects</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-soft-white text-balance">
              Two operators.
              <br />
              <span className="text-mint">One operating system.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-base md:text-lg text-soft-white/55 leading-relaxed max-w-xl mx-auto">
              Complementary disciplines — execution and innovation —
              composed into a single decision-making layer.
            </p>
          </Reveal>
        </div>

        <div className="space-y-32 lg:space-y-48">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={200}>
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Visual */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] rounded-3xl border border-white/10 bg-gradient-to-br from-midnight via-deep/10 to-midnight overflow-hidden group">
                    {f.environment === "blueprint" ? <BlueprintVisual /> : <NeuralVisual />}

                    {/* Initial mark */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div>
                        <div className="font-num text-[10px] tracking-[0.3em] uppercase text-soft-white/40 mb-2">
                          Founder · 0{i + 1}
                        </div>
                        <div
                          className="font-heading text-6xl md:text-7xl font-medium tracking-tighter"
                          style={{ color: f.accent, opacity: 0.15 }}
                        >
                          {f.initial}
                        </div>
                      </div>
                      <div className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/30 text-right">
                        {f.environment === "blueprint" ? "System Design" : "Neural Pathways"}
                      </div>
                    </div>

                    {/* Decorative top tag */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/30">
                      <span>Envoria · Founders</span>
                      <span>·</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="font-num text-[10px] tracking-[0.3em] uppercase text-mint mb-4">
                    0{i + 1} / 02
                  </div>
                  <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-soft-white leading-[1.05]">
                    {f.name}
                  </h3>
                  <div className="mt-3 font-num text-xs tracking-[0.2em] uppercase text-soft-white/40">
                    {f.role}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {f.keywords.map((k) => (
                      <span
                        key={k}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium tracking-tight border border-white/10 bg-white/5 text-soft-white/80"
                      >
                        {k}
                      </span>
                    ))}
                  </div>

                  <p className="mt-8 text-base md:text-lg text-soft-white/65 leading-relaxed">
                    {f.narrative}
                  </p>

                  {/* Motto */}
                  <div className="mt-10 relative pl-6 border-l-2" style={{ borderColor: f.accent }}>
                    <div className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/40 mb-2">
                      Personal Motto
                    </div>
                    <blockquote className="font-heading text-xl md:text-2xl font-medium tracking-tight text-soft-white italic leading-snug">
                      "{f.motto}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}