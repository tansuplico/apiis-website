'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, ArrowRight, Zap } from 'lucide-react';

const TIERS = [
  {
    id: 'free',
    name: 'Free',
    price: { monthly: 0, annual: 0 },
    description: 'For small teams getting started with structured learning.',
    highlight: false,
    cta: 'Get started free',
    ctaStyle: 'border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50',
    features: [
      'Up to 5 active learners',
      '3 published courses',
      '1 GB file storage',
      'Basic quiz & assessments',
      'Completion certificates',
      'Community support',
    ],
    unavailable: ['Analytics dashboard', 'Team workspaces', 'SSO / SAML', 'Custom branding', 'Priority support'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: { monthly: 29, annual: 22 },
    description: 'For growing L&D teams that need analytics and scale.',
    highlight: true,
    badge: 'Most popular',
    cta: 'Start free trial',
    ctaStyle: 'bg-brand-500 hover:bg-brand-600 text-white shadow-sm',
    features: [
      'Up to 50 active learners',
      'Unlimited published courses',
      '50 GB file storage',
      'Full analytics dashboard',
      'Team workspaces & cohorts',
      'AI-powered learning paths',
      'Priority email support',
      'Custom certificate templates',
    ],
    unavailable: ['SSO / SAML', 'Custom branding', 'Dedicated CSM'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: { monthly: null, annual: null },
    description: 'For large organizations with compliance and customization needs.',
    highlight: false,
    cta: 'Talk to sales',
    ctaStyle: 'border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50',
    features: [
      'Unlimited learners',
      'Unlimited courses & storage',
      'Full analytics + custom reports',
      'SSO / SAML integration',
      'Custom branding & white-label',
      'Dedicated Customer Success Manager',
      'SLA guarantee (99.9% uptime)',
      'Compliance exports & audit logs',
      'Advanced role-based permissions',
      'On-premise deployment option',
    ],
    unavailable: [],
  },
];

export default function Pricing({ onOpenModal }: { onOpenModal: () => void }) {
  const [isAnnual, setIsAnnual] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="pricing"
      ref={ref}
      className={`py-24 bg-slate-50 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Start free and scale as your team grows. No hidden fees, no surprises.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual((v) => !v)}
            className={`relative w-10 h-6 rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
              isAnnual ? 'bg-brand-500' : 'bg-slate-200'
            }`}
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                isAnnual ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
            Annual
          </span>
          {isAnnual && (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full">
              Save 25%
            </span>
          )}
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {TIERS.map(({ id, name, price, description, highlight, badge, cta, ctaStyle, features, unavailable }) => (
            <div
              key={id}
              className={`rounded-2xl border p-7 flex flex-col relative ${
                highlight
                  ? 'bg-brand-500 border-brand-600 shadow-xl text-white'
                  : 'bg-white border-slate-200'
              }`}
            >
              {highlight && badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold bg-white text-brand-600 px-3 py-1 rounded-full shadow-sm border border-brand-100">
                    <Zap className="w-3 h-3" />
                    {badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3
                  className={`text-lg font-bold mb-1 ${
                    highlight ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    highlight ? 'text-blue-100' : 'text-slate-500'
                  }`}
                >
                  {description}
                </p>
              </div>

              <div className="mb-6">
                {price.monthly !== null ? (
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-4xl font-black tracking-tight ${
                        highlight ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      ${isAnnual ? price.annual : price.monthly}
                    </span>
                    <span
                      className={`text-sm pb-1 ${
                        highlight ? 'text-blue-200' : 'text-slate-400'
                      }`}
                    >
                      / mo
                      {price.monthly! > 0 && isAnnual && (
                        <span className="ml-1 text-[10px]">billed annually</span>
                      )}
                    </span>
                  </div>
                ) : (
                  <div className="text-3xl font-black text-slate-900">Custom</div>
                )}
              </div>

              <button
                onClick={id === 'free' || id === 'pro' ? onOpenModal : undefined}
                className={`w-full flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-150 mb-7 ${ctaStyle}`}
              >
                {cta}
                <ArrowRight className="w-4 h-4" />
              </button>

              <ul className="flex flex-col gap-2.5 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        highlight ? 'text-blue-200' : 'text-emerald-500'
                      }`}
                      aria-hidden="true"
                    />
                    <span className={highlight ? 'text-blue-50' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
                {unavailable.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      viewBox="0 0 16 16"
                      className="w-4 h-4 mt-0.5 shrink-0 text-slate-300"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-slate-400">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          All paid plans include a 14-day free trial · No credit card required to start
        </p>
      </div>
    </section>
  );
}
