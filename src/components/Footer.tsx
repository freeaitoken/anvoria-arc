export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-midnight border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="footGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#34D2C0" />
                    <stop offset="100%" stopColor="#08A6B6" />
                  </linearGradient>
                </defs>
                <path d="M16 2 C 9 9, 6 14, 6 19 a 10 10 0 0 0 20 0 C 26 14, 23 9, 16 2 Z" stroke="url(#footGrad)" strokeWidth="1.4" fill="none" />
                <circle cx="16" cy="19" r="2.5" fill="url(#footGrad)" />
              </svg>
              <span className="font-heading text-base font-semibold tracking-tight text-soft-white">
                Envoria <span className="text-mint">Arc</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-soft-white/50 leading-relaxed max-w-sm">
              The operating system behind environmental transformation.
              Delivering sanitation infrastructure across emerging economies.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["LinkedIn", "Twitter", "Email"].map((s) => (
                <a key={s} href="#" className="px-3 py-1.5 text-[11px] font-num tracking-[0.15em] uppercase border border-white/10 rounded-full text-soft-white/50 hover:text-mint hover:border-mint/40 transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-num text-[10px] tracking-[0.25em] uppercase text-soft-white/40 mb-4">
              Navigate
            </div>
            <ul className="space-y-2.5 text-sm text-soft-white/70">
              {["Home", "Approach", "Services", "Impact", "Founders", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-mint transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-num text-[10px] tracking-[0.25em] uppercase text-soft-white/40 mb-4">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-sm text-soft-white/70">
              <li>Sewage Treatment</li>
              <li>Wastewater Mgmt</li>
              <li>Municipal Cleaning</li>
              <li>Sanitation Programs</li>
              <li>PMO Services</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-num text-[10px] tracking-[0.25em] uppercase text-soft-white/40 mb-4">
              Headquarters
            </div>
            <div className="text-sm text-soft-white/70 leading-relaxed">
              Envoria Arc<br />
              Global Operations Center<br />
              India · UAE · Singapore
            </div>
            <div className="mt-4 text-sm">
              <a href="mailto:hello@envoriaarc.com" className="text-mint hover:underline">
                hello@envoriaarc.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/30">
            © {year} Envoria Arc · All rights reserved
          </div>
          <div className="flex items-center gap-6 font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/30">
            <a href="#" className="hover:text-soft-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-soft-white transition-colors">Terms</a>
            <span>v 2.4 · Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}