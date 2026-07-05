"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, FolderOpen, Download } from "lucide-react";

interface InstallerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "info" | "started";

const WINDOWS_DOWNLOAD_URL =
  "https://github.com/tansuplico/apiis-lms/releases/download/v0.2.5/APIIS.LMS_0.2.5_x64-setup.exe";
const WINDOWS_SIZE = "5.57 MB";
const WINDOWS_VERSION = "Windows 10 / 11";
const WINDOWS_INSTRUCTIONS =
  "Open the .exe file from your Downloads folder and follow the setup prompts.";

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" aria-hidden="true">
    <path d="M3 5.5L11.5 4.5V12H3V5.5Z" fill="#00ADEF" />
    <path d="M12.5 4.35L21 3V12H12.5V4.35Z" fill="#00ADEF" />
    <path d="M3 13H11.5V20.5L3 19.5V13Z" fill="#00ADEF" />
    <path d="M12.5 13H21V21.5L12.5 20.65V13Z" fill="#00ADEF" />
  </svg>
);

export default function InstallerModal({
  isOpen,
  onClose,
}: InstallerModalProps) {
  const [step, setStep] = useState<Step>("info");

  const resetModal = useCallback(() => {
    setStep("info");
  }, []);

  const handleClose = () => {
    onClose();
    setTimeout(resetModal, 400);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = WINDOWS_DOWNLOAD_URL;
    link.download = link.href.split("/").pop() ?? "apiis-lms-installer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setStep("started");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Download APIIS LMS"
        >
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 bg-white rounded-2xl shadow-modal w-full max-w-md overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-[5px] bg-brand-500">
                  <span className="text-white text-[10px] font-bold">A</span>
                </span>
                <span className="text-sm font-bold text-slate-900">
                  APIIS LMS
                </span>
                <span className="text-xs text-slate-400 ml-1">v0.2.5</span>
              </div>
              <button
                onClick={handleClose}
                className="flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              <AnimatePresence mode="wait">
                {/* Step 1 — Windows info + download */}
                {step === "info" && (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-lg font-bold text-slate-900 mb-1">
                      Download APIIS LMS
                    </h2>
                    <p className="text-sm text-slate-500 mb-6">
                      Available for Windows. macOS support is coming soon.
                    </p>

                    <div className="flex flex-col items-center gap-3 py-6 px-4 rounded-xl border-2 border-slate-200 bg-white mb-6">
                      <WindowsIcon />
                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-900">
                          Windows
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {WINDOWS_VERSION}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {WINDOWS_SIZE}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleDownload}
                      className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download for Windows
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {/* Step 2 — Download started */}
                {step === "started" && (
                  <motion.div
                    key="started"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-center py-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                      <FolderOpen className="w-7 h-7 text-emerald-500" />
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 mb-2">
                      Your download has started
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs mx-auto">
                      {WINDOWS_INSTRUCTIONS}
                    </p>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-left mb-6">
                      <p className="text-xs font-semibold text-slate-600 mb-1">
                        Downloading
                      </p>
                      <p className="text-sm font-medium text-slate-800">
                        {WINDOWS_DOWNLOAD_URL.split("/").pop()}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {WINDOWS_SIZE} · Windows
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={handleClose}
                        className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
                      >
                        Done
                      </button>
                      <button
                        onClick={handleDownload}
                        className="text-sm text-slate-400 hover:text-slate-600 transition-colors py-1"
                      >
                        Download didn't start? Click to retry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
