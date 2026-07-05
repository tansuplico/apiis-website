"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../app/icon.png";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <Image
                src={logo}
                alt="APIIS LMS logo"
                width={32}
                height={32}
                className="rounded-[7px]"
              />
              <span className="font-bold text-[17px] tracking-tight text-slate-900">
                APIIS LMS
              </span>
            </a>

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
      </nav>
    </>
  );
}
