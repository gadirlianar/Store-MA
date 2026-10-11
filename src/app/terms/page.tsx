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
              MAVRIC FOOTWEAR COVENANT
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            TERMS OF SERVICE
          </h1>
          <p className="text-base text-[#6B6A65] mt-2 leading-relaxed max-w-2xl font-sans">
            Atelier mechanics, allocation standards, and official purchase terms.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm max-w-4xl flex flex-col gap-10">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              1. OFFICIAL PURCHASING & ALLOCATIONS
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              All releases on MAVRIC are conducted according to strict authentic atelier standards. Each silhouette is produced to high-craft specifications. Orders are finalized upon successful verification of identity and delivery coordinates.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              2. PURCHASE INTEGRITY & POLICIES
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              Under MAVRIC official store policies:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-[#6B6A65] flex flex-col gap-2 pl-2">
              <li>Purchases are intended for genuine private clients and enthusiasts.</li>
              <li>Botting, fraudulent activity, and unauthorized scraping are strictly prohibited and result in order cancellation.</li>
              <li>All footwear packages include authenticated serial cards and bespoke packaging.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              3. ATELIER QUALITY GUARANTEE
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              The company guarantees authentic craftsmanship, premium materials, and master finishing on every product bearing the MAVRIC brand mark.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              4. INTELLECTUAL PROPERTY & DESIGN ARCHIVE
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6A65] leading-relaxed">
              MAVRIC, MAV-FOAM, and all associated graphic assets, typography lockups, and proprietary materials are protected trademarks and proprietary property of MAVRIC Atelier.
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
