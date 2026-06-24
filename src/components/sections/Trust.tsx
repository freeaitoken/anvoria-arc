import Reveal from "../Reveal";

const trustItems = [
  {
    category: "Compliance",
    items: ["ISO 9001:2015 Quality", "ISO 14001 Environmental", "ISO 45001 Safety", "Local Statutory Filings"],
  },
  {
    category: "Operational Standards",
    items: ["Project Mgmt Framework", "Field Crew Vetting", "Vendor Quality Audits", "Monthly Performance Reports"],
  },
  {
    category: "Environmental Metrics",
    items: ["Effluent Quality Index", "Energy Per Capita", "Water Reuse Rate", "Carbon Intensity Tracking"],
  },
  {
    category: "Governance",
    items: ["Independent Audit Trail", "Conflict-of-Interest Policy", "Anti-Bribery Controls", "Whistleblower Channel"],
  },
];

const certifications = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "MSME Registered",
  "NSIC Certified",
  "Govt. Approved",
];

export default function Trust() {
  return (
    <section className="relative bg-soft-white py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <Reveal>
            <div className="section-eyebrow !text-aqua mb-6">Accountability</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-midnight text-balance">
              Built on
              <br />
              <span className="text-aqua">accountability & execution.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-base md:text-lg text-charcoal/65 leading-relaxed max-w-xl">
              Infrastructure is a long-cycle commitment. Our standards are
              engineered for transparency across every layer of operation.
            </p>
          </Reveal>
        </div>

        {/* Data wall grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-midnight/8 rounded-3xl overflow-hidden border border-midnight/10">
          {trustItems.map((item, i) => (
            <Reveal key={item.category} delay={i * 100} className="contents">
              <div className="bg-soft-white p-7 group hover:bg-mist/40 transition-colors">
                <div className="font-num text-[10px] tracking-[0.25em] uppercase text-aqua mb-4">
                  {item.category}
                </div>
                <div className="space-y-3">
                  {item.items.map((it) => (
                    <div key={it} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-aqua flex-shrink-0" />
                      <span className="text-sm text-charcoal/75 leading-snug">{it}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-midnight/10 flex items-center justify-between">
                  <span className="font-num text-[10px] tracking-[0.2em] uppercase text-charcoal/40">
                    Verified
                  </span>
                  <span className="w-5 h-5 rounded-full border border-aqua/40 flex items-center justify-center text-aqua text-[10px]">✓</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications strip */}
        <Reveal delay={400}>
          <div className="mt-20">
            <div className="font-num text-[10px] tracking-[0.25em] uppercase text-charcoal/40 mb-6 text-center">
              Certifications & Registrations
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-midnight/8 rounded-2xl overflow-hidden border border-midnight/10">
              {certifications.map((c) => (
                <div key={c} className="bg-soft-white p-6 flex items-center justify-center hover:bg-mist/40 transition-colors">
                  <span className="font-heading text-sm md:text-base font-medium text-midnight tracking-tight text-center">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}