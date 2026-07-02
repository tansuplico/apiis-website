'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TrendingUp, Clock, DollarSign, Scale } from 'lucide-react';

const STATS = [
  {
    value: '89%',
    label: 'average completion rate',
    sub: "Industry average sits at 15%. Lumina's structured paths and progress nudges keep learners engaged start to finish.",
    icon: TrendingUp,
    accent: 'text-brand-500',
    bg: 'bg-brand-50',
    border: 'border-brand-100',
  },
  {
    value: '3h',
    label: 'to build a complete course',
    sub: 'What used to take weeks with a production crew now takes hours. Publish, iterate, and update without a content team.',
    icon: Clock,
    accent: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    value: '$3,200',
    label: 'saved per employee annually',
    sub: 'Replace expensive in-person sessions with always-on learning. The ROI speaks for itself on your first quarter.',
    icon: DollarSign,
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    value: '∞',
    label: 'learners without infrastructure changes',
    sub: 'Start with 5 learners, scale to 50,000. No performance degradation, no re-platforming, no new servers to manage.',
    icon: Scale,
    accent: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="benefits"
      ref={ref}
      className={`py-24 bg-slate-50 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">
            The numbers
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Real impact, measurable results
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Join thousands of L&amp;D teams who've transformed how their
            organizations learn — with outcomes they can show to leadership.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {STATS.map(({ value, label, sub, icon: Icon, accent, bg, border }, i) => (
            <div
              key={label}
              className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-card-hover transition-all duration-200"
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="flex items-start gap-5">
                <div className={`shrink-0 w-12 h-12 rounded-xl ${bg} ${border} border flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${accent}`} aria-hidden="true" />
                </div>
                <div>
                  <div className={`text-4xl font-black tracking-tight ${accent}`}>
                    {value}
                  </div>
                  <div className="text-base font-semibold text-slate-700 mt-0.5 capitalize">
                    {label}
                  </div>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting callout */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900">
              Recognized by G2 and Capterra as a top-rated LMS
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Lumina Learn holds a 4.9/5 rating across 1,200+ verified reviews.
              Named a G2 Leader in Learning Management for four consecutive quarters.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            {[
              { score: '4.9', platform: 'G2', count: '740+ reviews' },
              { score: '4.8', platform: 'Capterra', count: '490+ reviews' },
            ].map(({ score, platform, count }) => (
              <div key={platform} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} viewBox="0 0 16 16" className="w-3.5 h-3.5 text-amber-400 fill-current">
                      <path d="M8 1l1.88 4.26L14.36 6l-3.29 3.28.78 4.64L8 11.77l-3.85 2.15.78-4.64L1.64 6l4.48-.74L8 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl font-black text-slate-900">{score}</p>
                <p className="text-[11px] font-semibold text-slate-500">{platform}</p>
                <p className="text-[10px] text-slate-400">{count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
