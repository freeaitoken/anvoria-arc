import Reveal from "../Reveal";

export default function CTA() {
  return (
    <section className="relative bg-midnight py-32 lg:py-40 overflow-hidden">
      {/* Sunrise gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-[#0A2A5E] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-t from-aqua/20 via-aqua/5 to-transparent blur-[80px] pointer-events-none" />

      {/* Water silhouette lines */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-48 opacity-30 pointer-events-none" viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none">
        <path d="M 0 100 Q 360 60 720 100 T 1440 100 L 1440 200 L 0 200 Z" fill="url(#ctaGrad)" />
        <defs>
          <linearGradient id="ctaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34D2C0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#071F4E" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Infrastructure silhouette */}
      <svg className="absolute bottom-12 left-0 right-0 w-full h-32 opacity-20 pointer-events-none" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="none">
        <g fill="#08A6B6" fillOpacity="0.4">
          <rect x="100" y="50" width="40" height="50" />
          <rect x="150" y="40" width="20" height="60" />
          <rect x="180" y="60" width="30" height="40" />
          <rect x="220" y="30" width="25" height="70" />
          <rect x="1200" y="40" width="35" height="60" />
          <rect x="1245" y="55" width="20" height="45" />
          <rect x="1275" y="35" width="30" height="65" />
        </g>
        <line x1="0" y1="100" x2="1440" y2="100" stroke="#34D2C0" strokeOpacity="0.5" strokeWidth="0.5" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <div className="section-eyebrow mx-auto justify-center mb-8">The Future of Environmental Infrastructure</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-soft-white text-balance">
            Building cleaner cities through
            <br />
            <span className="bg-gradient-to-r from-mint via-aqua to-mint bg-clip-text text-transparent">
              intelligent environmental execution.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-base md:text-lg text-soft-white/60 leading-relaxed max-w-2xl mx-auto">
            Connecting governments, infrastructure partners, and communities
            to deliver sanitation systems responsibly and at scale.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Partner With Envoria Arc
              <span>→</span>
            </a>
            <a href="#contact" className="btn-secondary text-soft-white">
              Start A Conversation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}