"use client";

import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Award,
  Users,
  Settings,
  Bell,
  Search,
  ChevronRight,
  Play,
  Flame,
  Clock,
} from "lucide-react";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BookOpen, label: "Courses", active: false },
  { icon: TrendingUp, label: "Centers", active: false },
  { icon: Award, label: "Attendance", active: false },
];

const stats = [
  {
    label: "Completed",
    value: "8",
    sub: "courses",
    color: "text-brand-500",
    bg: "bg-blue-50",
  },
  {
    label: "Hours",
    value: "47",
    sub: "learned",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    label: "Certificates",
    value: "3",
    sub: "earned",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Streak",
    value: "14",
    sub: "day streak",
    color: "text-orange-500",
    bg: "bg-orange-50",
    icon: Flame,
  },
];

const courses = [
  {
    title: "Advanced TypeScript Patterns",
    instructor: "James Park",
    progress: 78,
    tag: "Engineering",
    color: "from-brand-500 to-brand-700",
    timeLeft: "2h left",
  },
  {
    title: "UX Research Methods",
    instructor: "Amara Lin",
    progress: 42,
    tag: "Design",
    color: "from-violet-500 to-violet-700",
    timeLeft: "4h left",
  },
];

export default function DashboardMockup() {
  return (
    <div
      className="w-full max-w-[600px] rounded-xl overflow-hidden border border-slate-200 shadow-2xl bg-white select-none"
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full border border-slate-300 inline-block shrink-0" />
          <span className="text-[10px] text-slate-400 font-mono truncate">
            app.apiis-lms.com/dashboard
          </span>
        </div>
        <div className="w-4 h-4 rounded bg-slate-200" />
      </div>

      {/* App layout */}
      <div className="flex h-[360px]">
        {/* Sidebar */}
        <aside className="w-[136px] bg-slate-900 flex flex-col shrink-0">
          {/* Logo */}
          <div className="px-3 py-3 flex items-center gap-1.5 border-b border-slate-700/60">
            <span className="w-5 h-5 rounded-[5px] bg-brand-500 flex items-center justify-center shrink-0">
              <span className="text-white text-[9px] font-bold">L</span>
            </span>
            <span className="text-[11px] font-semibold text-white">
              APIIS LMS
            </span>
          </div>
          {/* Nav links */}
          <nav className="flex-1 px-2 py-2 flex flex-col gap-0.5">
            {sidebarLinks.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer ${
                  active
                    ? "bg-brand-500/20 text-brand-300"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[10px] font-medium">{label}</span>
              </div>
            ))}
          </nav>
          {/* User avatar */}
          <div className="px-3 py-3 border-t border-slate-700/60 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 shrink-0 flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">S</span>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-medium text-white truncate">
                Sarah K.
              </p>
              <p className="text-[9px] text-slate-400">Pro Plan</p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
          {/* Top bar */}
          <div className="px-4 py-2 bg-white border-b border-slate-200 flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-1.5 bg-slate-100 rounded-md px-2 py-1 flex-1 max-w-[160px]">
              <Search className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="text-[10px] text-slate-400">
                Search courses…
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bell className="w-4 h-4 text-slate-400" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-brand-500" />
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">S</span>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 overflow-y-auto mockup-scroll px-4 py-3 flex flex-col gap-3">
            {/* Greeting */}
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Good morning, Sarah 👋
              </h2>
              <p className="text-[10px] text-slate-500 mt-0.5">
                You have 2 courses to continue today.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2">
              {stats.map(({ label, value, sub, color, bg, icon: Icon }) => (
                <div
                  key={label}
                  className={`${bg} rounded-lg p-2 flex flex-col items-center text-center`}
                >
                  <div
                    className={`text-base font-black ${color} leading-none flex items-center gap-0.5`}
                  >
                    {value}
                    {Icon && <Icon className="w-3 h-3" />}
                  </div>
                  <div className="text-[8.5px] text-slate-500 mt-0.5 leading-tight">
                    {sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Learning */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-800">
                  Continue Learning
                </span>
                <span className="text-[9px] text-brand-500 flex items-center gap-0.5 cursor-pointer">
                  View all <ChevronRight className="w-2.5 h-2.5" />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {courses.map((course) => (
                  <div
                    key={course.title}
                    className="bg-white rounded-lg border border-slate-200 overflow-hidden group cursor-pointer"
                  >
                    {/* Course banner */}
                    <div
                      className={`h-14 bg-gradient-to-br ${course.color} relative flex items-end p-2`}
                    >
                      <span className="text-[9px] font-semibold text-white/80 bg-white/20 rounded px-1.5 py-0.5">
                        {course.tag}
                      </span>
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 text-white fill-white" />
                      </div>
                    </div>
                    {/* Course info */}
                    <div className="p-2">
                      <p className="text-[10px] font-semibold text-slate-800 leading-tight line-clamp-1">
                        {course.title}
                      </p>
                      <p className="text-[9px] text-slate-400 mt-0.5">
                        {course.instructor}
                      </p>
                      <div className="mt-1.5">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[8.5px] text-slate-500 flex items-center gap-0.5">
                            <Clock className="w-2 h-2" /> {course.timeLeft}
                          </span>
                          <span className="text-[8.5px] font-semibold text-slate-700">
                            {course.progress}%
                          </span>
                        </div>
                        {/* Progress bar */}
                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <span className="text-[11px] font-bold text-slate-800 mb-2 block">
                Recommended for You
              </span>
              <div className="flex flex-col gap-1.5">
                {[
                  {
                    title: "Product-Led Growth",
                    tag: "Marketing",
                    dot: "bg-pink-400",
                  },
                  {
                    title: "Figma for Developers",
                    tag: "Design",
                    dot: "bg-violet-400",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-lg border border-slate-200 px-3 py-2 flex items-center gap-2.5 cursor-pointer hover:border-brand-300 transition-colors"
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${item.dot} shrink-0`}
                    />
                    <span className="text-[10px] font-medium text-slate-700 flex-1">
                      {item.title}
                    </span>
                    <span className="text-[9px] text-slate-400">
                      {item.tag}
                    </span>
                    <ChevronRight className="w-2.5 h-2.5 text-slate-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
