import { useState } from "react";
import Reveal from "../Reveal";
import { cn } from "../../utils/cn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-soft-white py-32 lg:py-40 overflow-hidden">
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="section-eyebrow !text-aqua mb-6">Start A Conversation</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-midnight text-balance">
                Let's discuss
                <br />
                <span className="text-aqua">your infrastructure.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-base md:text-lg text-charcoal/65 leading-relaxed max-w-md">
                Whether you're a municipality, infrastructure partner,
                or investor — we welcome structured conversations
                around long-cycle environmental projects.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 space-y-6">
                {[
                  { l: "General", v: "hello@envoriaarc.com" },
                  { l: "Partnerships", v: "partners@envoriaarc.com" },
                  { l: "Tenders", v: "tenders@envoriaarc.com" },
                ].map((r) => (
                  <div key={r.l} className="flex items-baseline justify-between border-b border-midnight/10 pb-3">
                    <span className="font-num text-[10px] tracking-[0.2em] uppercase text-charcoal/40">
                      {r.l}
                    </span>
                    <a href={`mailto:${r.v}`} className="text-sm text-midnight font-medium hover:text-aqua transition-colors">
                      {r.v}
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-midnight/5 border border-midnight/10">
                <span className="w-2 h-2 rounded-full bg-mint animate-[pulse-soft_2s_ease-in-out_infinite]" />
                <span className="font-num text-xs tracking-[0.15em] uppercase text-midnight">
                  Currently accepting Q1 engagements
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <form onSubmit={handleSubmit} className="bg-midnight text-soft-white rounded-3xl p-8 md:p-10">
                <div className="font-num text-[10px] tracking-[0.3em] uppercase text-mint mb-2">
                  Project Inquiry
                </div>
                <div className="font-heading text-2xl font-medium mb-8">
                  Tell us about your project
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" type="text" required />
                  <Field label="Organization" name="org" type="text" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Country" name="country" type="text" />
                </div>

                <div className="mt-5">
                  <label className="block">
                    <span className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/40">
                      Project Details
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Briefly describe the project, geography, and timeline..."
                      className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-mint transition-colors py-3 text-sm placeholder:text-soft-white/25 focus:outline-none resize-none"
                    />
                  </label>
                </div>

                <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
                  <div className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/40">
                    Response within 48 hours
                  </div>
                  <button
                    type="submit"
                    className={cn(
                      "btn-primary",
                      submitted && "bg-mint"
                    )}
                  >
                    {submitted ? "✓ Inquiry Sent" : "Send Inquiry"}
                    {!submitted && <span>→</span>}
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 text-[11px] text-soft-white/30 leading-relaxed">
                  Your information is treated with strict confidentiality.
                  We respond to serious infrastructure inquiries only.
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-num text-[10px] tracking-[0.2em] uppercase text-soft-white/40">
        {label} {required && <span className="text-mint">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-mint transition-colors py-3 text-sm focus:outline-none"
      />
    </label>
  );
}