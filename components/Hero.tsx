"use client";

import { motion } from "framer-motion";
import { ArrowRight, MonitorDown, Play, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

const TRUST_LOGOS = ["Philippines", "Malaysia", "Singapore"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Optional badge */}
          <motion.div
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            The only offline LMS
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tighter leading-[1.05] text-slate-900"
          >
            The LMS your community
            <span className="text-brand-500 block">will actually love</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed"
          >
            Build, deliver, and measure world-class learning programs in days,
            not months. Powerful yet beautifully simple.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
          >
            <button
              onClick={onOpenModal}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-brand-500/30 transition-all duration-200"
            >
              <MonitorDown className="w-5 h-5" />
              Download for Desktop
            </button>
          </motion.div>

          {/* Free note */}
          <motion.p {...fadeUp(0.35)} className="mt-6 text-sm text-slate-500">
            All contents are completely free to use
          </motion.p>

          {/* Trust logos */}
          <motion.div
            {...fadeUp(0.45)}
            className=" pt-8 border-t border-slate-200 w-full"
          >
            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-4">
              Trusted in
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-75">
              {TRUST_LOGOS.map((name) => (
                <span
                  key={name}
                  className="text-xl font-semibold text-slate-400 tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
