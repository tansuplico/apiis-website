'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MonitorDown, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onOpenModal: () => void;
}

export default function CTASection({ onOpenModal }: CTASectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`py-24 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-500 rounded-3xl px-8 py-16 sm:px-16 text-center overflow-hidden">

          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden="true"
          />

          {/* Soft glow blobs */}
          <div
            className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-brand-700/40 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold text-blue-200 uppercase tracking-widest mb-4">
              Get started today
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Start learning as a team today
            </h2>

            <p className="mt-5 text-lg text-blue-100 leading-relaxed">
              Free forever for up to 5 learners. No credit card required.
              Set up your first course in under an hour.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center gap-2.5 bg-white hover:bg-blue-50 text-brand-600 font-bold text-[15px] px-7 py-3.5 rounded-xl shadow-sm transition-all duration-150"
              >
                <MonitorDown className="w-4.5 h-4.5" aria-hidden="true" />
                Download for Desktop
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:text-blue-100 px-6 py-3.5 rounded-xl border border-white/25 hover:border-white/40 transition-all duration-150"
              >
                Try in browser
              </a>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-blue-200">
              {['Free plan, no credit card', '5-minute setup', 'Cancel or upgrade anytime'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <svg
                      viewBox="0 0 16 16"
                      className="w-3.5 h-3.5 text-emerald-300"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.78 6.28l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06L6.75 9.19l3.97-3.97a.75.75 0 111.06 1.06z" />
                    </svg>
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
