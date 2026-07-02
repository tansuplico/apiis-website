import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LayoutDashboard, Wand2, BarChart3, ChevronRight } from "lucide-react";
import course from "../images/course.png";

const TABS = [
  {
    id: "dashboard",
    label: "Learning Dashboard",
    icon: LayoutDashboard,
    description:
      "Track every learner's progress, completion rates, and streaks in one place.",
    image: course,
  },
  {
    id: "builder",
    label: "Course Builder",
    icon: Wand2,
    description:
      "Drag and drop videos, quizzes, and resources to build a course in minutes.",
    image: course,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    description:
      "Measure engagement, scores, and ROI with real-time reporting across your org.",
    image: course,
  },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <section
      id="dashboard"
      ref={ref}
      className={`py-24 bg-white transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: text + tabs */}
          <div className="flex-1 max-w-[380px]">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">
              Product Preview
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              One platform, every workflow
            </h2>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              From building your first course to tracking org-wide learning
              trends, Lumina gives every stakeholder the right view at the right
              time.
            </p>

            <div className="mt-8 flex flex-col gap-2">
              {TABS.map(({ id, label, icon: Icon, description }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-start gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-150 ${
                    activeTab === id
                      ? "bg-brand-50 border border-brand-200"
                      : "border border-transparent hover:bg-slate-50"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      activeTab === id ? "text-brand-500" : "text-slate-400"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <span
                      className={`text-sm font-semibold block ${activeTab === id ? "text-brand-700" : "text-slate-600"}`}
                    >
                      {label}
                    </span>
                    {activeTab === id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-xs text-brand-600/70 mt-1 leading-relaxed"
                      >
                        {description}
                      </motion.p>
                    )}
                  </div>
                  {activeTab === id && (
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-brand-400" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="flex-1 w-full min-w-0">
            <div className="relative rounded-2xl border border-slate-200 shadow-card overflow-hidden bg-slate-100 aspect-[5/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={`${active.label} screenshot`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={activeTab === "dashboard"}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image caption */}
            <p className="mt-3 text-xs text-slate-400 text-center">
              {active.label} - APIIS Learning Management System Desktop App
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
