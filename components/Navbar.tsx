"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#benefits" },
  { label: "Resources", href: "#" },
];

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-nav" : "bg-white"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              aria-label="APIIS LMS"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-[7px] bg-brand-500 shadow-sm group-hover:bg-brand-600 transition-colors">
                <Zap
                  className="w-4 h-4 text-white fill-white"
                  aria-hidden="true"
                />
              </span>
              <span className="font-bold text-[17px] tracking-tight text-slate-900">
                APIIS LMS
              </span>
            </a>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-7" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                Download Desktop App
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-slate-200 bg-white"
            >
              <div className="px-4 py-5 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-slate-200 mt-2 pt-4 flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-sm font-medium text-slate-600 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Log in
                  </a>
                  <button
                    onClick={() => {
                      onOpenModal();
                      handleLinkClick();
                    }}
                    className="w-full bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Download Desktop App
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
