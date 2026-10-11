"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import AudioToggle from "@/components/AudioToggle";

export default function TermsPage() {
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
          <span className="text-black font-bold">Terms of Service</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-4xl mb-12">
          <div className="flex items-center gap-3">
            <span className="bg-[#D4FF00] text-black font-mono font-bold text-xs px-3 py-1 rounded-full uppercase">
              TERMS & CONDITIONS
            </span>
            <span className="text-xs font-mono text-[#6B6A65]">
              SRIGEN FOOTWEAR COVENANT
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            TERMS OF SERVICE
          </h1>
          <p className="text-base text-[#6B6A65] mt-2 leading-relaxed max-w-2xl font-sans">
            Drop mechanics, allocation rules, and official purchase terms.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm max-w-4xl flex flex-col gap-10">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              1. OFFICIAL DROP PROTOCOL & ALLOCATIONS
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              All releases on SRIGEN are conducted according to strict allocation rules. Each silhouette is limited to a verified production batch. Orders are finalized upon successful verification of identity and delivery coordinates.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              2. DROP RULES & ALLOCATION LIMITS
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              Under the SRIGEN drop protocol:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-[#6B6A65] flex flex-col gap-2 pl-2">
              <li>Purchases are strictly capped at 1 pair per silhouette per household.</li>
              <li>Botting, headless script submissions, and automated address tampering result in automated cancellation.</li>
              <li>Edition numbering (001 through 300) is assigned sequentially at order confirmation timestamp.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              3. NO RESTOCK GUARANTEE
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              The company guarantees that no retired or sold-out 001 colorway will ever be re-manufactured or re-released. Colorways are retired permanently once the 300th pair is confirmed.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              4. INTELLECTUAL PROPERTY & DESIGN ARCHIVE
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              SRIGEN, SR-FOAM, and all associated graphic assets, typography lockups, and proprietary materials are protected trademarks and proprietary property of SRIGEN Industries.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              5. JURISDICTION
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              Any claims arising out of orders placed on this platform are governed by the laws of England and Wales, with exclusive jurisdiction in the courts of London, UK.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
