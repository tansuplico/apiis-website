"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InstallerModal from "@/components/InstallerModal";
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
      </main>

      <InstallerModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
