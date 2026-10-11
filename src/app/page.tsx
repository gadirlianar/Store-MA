"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import OpeningSequence from "@/components/OpeningSequence";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import Hero from "@/components/Hero";
import Section02 from "@/components/Section02";
import Section06 from "@/components/Section06";
import Lookbook from "@/components/Lookbook";
import Section10 from "@/components/Section10";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Check if ?freeze=1 is passed in query params
    const urlParams = new URLSearchParams(window.location.search);
    const isFrozen = urlParams.get("freeze") === "1";

    let lenis: Lenis | null = null;
    if (!isFrozen) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Expose window.__setTime for Playwright test harness
    (window as unknown as { __setTime?: (ms: number) => void }).__setTime = (ms: number) => {
      console.log(`[Deterministic Harness] Setting time to ${ms}ms`);
    };

    // ScrollSpy observer for navigation underline
    const sections = ["hero", "section02", "anatomy", "lookbook", "details"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      if (lenis) lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#F1ECE5] text-[#0B0905] font-sans selection:bg-[#D1F744] selection:text-[#0B0905]">
      {/* 1. Custom Shoelace Aglet Cursor Follower */}
      <ShoelaceCursor />

      {/* 2. Opening Lacing Preloader Curtain */}
      <OpeningSequence />

      {/* 4. Global Sticky Header */}
      <Header
        activeSection={activeSection}
        onOpenNotify={() => setIsNotifyOpen(true)}
      />

      {/* 5. Main Narrative Showcase */}
      <main id="main-content">
        {/* Section 01: Hero ("THE DROP") with X-Ray Lens Mask */}
        <Hero onOpenNotify={() => setIsNotifyOpen(true)} />

        {/* Section 02: Specifications ("02 — THE 001") with Pop-up details */}
        <Section02 />

        {/* Section 06: Anatomy Teased ("06 — ANATOMY, TEASED") */}
        <Section06 />

        {/* Lookbook: In Situ ("001 IN THE WILD") */}
        <Lookbook />

        {/* Section 10: Details ("10 — THE DETAILS") */}
        <Section10 />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* 7. Waitlist / Drop Notification Modal */}
      <WaitlistModal
        isOpen={isNotifyOpen}
        onClose={() => setIsNotifyOpen(false)}
      />
    </div>
  );
}
