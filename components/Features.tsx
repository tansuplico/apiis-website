"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Smartphone,
  Zap,
  Download,
  Upload,
  ShoppingCart,
  UserCog,
} from "lucide-react";

const FEATURES = [
  {
    icon: Smartphone,
    iconBg: "bg-blue-50",
    iconColor: "text-brand-500",
    title: "Offline Course Access",
    description:
      "Download courses and continue learning anywhere — even without an internet connection. Perfect for field teams and travel.",
  },
  {
    icon: Zap,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Incredibly Easy to Use",
    description:
      "Beautiful, intuitive interface designed for both administrators and learners. No training required — just sign in and start learning.",
  },
  {
    icon: Download,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Files & Video Downloads",
    description:
      "Easily download videos, PDFs, slides, and other materials for offline viewing and future reference.",
  },
  {
    icon: Upload,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    title: "Student File Submissions",
    description:
      "Learners can submit assignments, projects, and documents directly within the course for instructor review.",
  },
  {
    icon: ShoppingCart,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    title: "Shop for Accessories",
    description:
      "Browse and purchase official merchandise, learning materials, and branded accessories directly from the platform.",
  },
  {
    icon: UserCog,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    title: "Profile Customization",
    description:
      "Personalize your learning profile with custom avatars, themes, bios, and preferences to make the experience truly yours.",
  },
];

export default function Features() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="features"
      ref={ref}
      className={`py-24 bg-slate-50 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-xl mb-14">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">
            Everything you need
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Simple, powerful, and learner-friendly
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            APIIS LMS focuses on the features that actually matter — giving you
            everything your team needs without the unnecessary complexity.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(
            ({ icon: Icon, iconBg, iconColor, title, description }, i) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
                style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${iconBg} mb-4`}
                >
                  <Icon className={`w-5 h-5 ${iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
