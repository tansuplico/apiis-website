"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InstallerModal from "@/components/InstallerModal";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={openModal} />

      <main>
        <Hero onOpenModal={openModal} />
        <Features />
        <DashboardPreview />
        <Benefits />
        <Testimonials />
        <CTASection onOpenModal={openModal} />
      </main>

      <Footer />

      <InstallerModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
