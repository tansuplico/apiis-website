'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const TESTIMONIALS = [
  {
    quote:
      "We shifted from quarterly in-person training to always-on learning with Lumina. Course completion went from 41% to 89% in three months. Our team actually looks forward to learning now.",
    name: 'Sarah Chen',
    role: 'Head of Learning & Development',
    company: 'Rippling',
    initials: 'SC',
    gradient: 'from-brand-400 to-brand-600',
  },
  {
    quote:
      "The analytics dashboard alone was worth the switch. We can now show leadership exactly which training investments drive performance outcomes. That's a conversation-changer at the board level.",
    name: 'Marcus Osei',
    role: 'VP of People',
    company: 'Linear',
    initials: 'MO',
    gradient: 'from-violet-400 to-violet-600',
  },
  {
    quote:
      "Building our entire 30-day onboarding program took one week on Lumina. Every other tool we evaluated took months and required a dedicated instructional designer. This is genuinely different.",
    name: 'Priya Nair',
    role: 'People Operations Lead',
    company: 'Vercel',
    initials: 'PN',
    gradient: 'from-pink-400 to-rose-600',
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`py-24 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Trusted by teams building great cultures
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            L&amp;D leaders from some of the most admired companies share how Lumina
            changed how their organizations grow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role, company, initials, gradient }, i) => (
            <div
              key={name}
              className="flex flex-col bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg
                    key={j}
                    viewBox="0 0 16 16"
                    className="w-4 h-4 text-amber-400 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M8 1l1.88 4.26L14.36 6l-3.29 3.28.78 4.64L8 11.77l-3.85 2.15.78-4.64L1.64 6l4.48-.74L8 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-sm text-slate-600 leading-relaxed mb-6">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}
                  aria-hidden="true"
                >
                  <span className="text-[11px] font-bold text-white">{initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{name}</p>
                  <p className="text-xs text-slate-500">
                    {role}, <span className="font-medium">{company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
