"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import AudioToggle from "@/components/AudioToggle";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black">
      <ShoelaceCursor />
      <AudioToggle />
      <Header />

      <main className="max-w-[1440px] mx-auto pt-36 pb-24 px-6 sm:px-12 lg:px-16">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono text-[#6B6A65] uppercase tracking-wider mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-bold">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-4xl mb-12">
          <div className="flex items-center gap-3">
            <span className="bg-[#D4FF00] text-black font-mono font-bold text-xs px-3 py-1 rounded-full uppercase">
              LEGAL COMPLIANCE
            </span>
            <span className="text-xs font-mono text-[#6B6A65]">
              REVISED OCTOBER 2026
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            PRIVACY POLICY
          </h1>
          <p className="text-base text-[#6B6A65] mt-2 leading-relaxed max-w-2xl font-sans">
            Transparency regarding customer data protection, secure sessions, and privacy handling.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm max-w-4xl flex flex-col gap-10">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              1. DATA ENCRYPTION & RETENTION
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              We enforce high security standards across our commerce platform. All transactional channels are protected with 256-bit encryption. Payment processing tokens are handled through PCI-DSS Level 1 compliant infrastructure.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              2. CLIENT-SIDE LOCAL STORAGE & STATE
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              To support persistent shopping bag states across session reloads, items in your bag are stored strictly inside your browser’s local client storage (<code className="bg-black/5 px-2 py-0.5 rounded font-mono">localStorage.getItem(&apos;srigen_cart&apos;)</code>). This data is completely private to your local browser profile and can be cleared at any time via the bag controls or clearing your site cache.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              3. NO THIRD-PARTY TRACKING OR TELEMETRY
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              We do not deploy intrusive third-party advertising cookies, cross-domain behavioral tracking pixels, or fingerprinting scripts. Web Audio synthesizers and gesture listeners run purely client-side without external telemetry calls.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              4. WAITLIST & NOTIFICATION PROTOCOL
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              Email addresses provided in the &ldquo;NOTIFY ME&rdquo; waitlist modal or newsletter footer field are strictly utilized for drop announcements and order status dispatches. We never sell, lease, or share email records with third parties.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              5. CONTACT & DATA CONTROLLER
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              For any questions regarding privacy or data handling, address requests to our privacy officer at <strong className="text-black font-mono">privacy@srigen.com</strong>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
