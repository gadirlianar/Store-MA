"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import AudioToggle from "@/components/AudioToggle";

export default function StoryPage() {
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
          <span className="text-black font-bold">The Story</span>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col gap-4 max-w-4xl mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-[#D4FF00] text-black font-mono font-bold text-xs px-3 py-1 rounded-full uppercase">
              PHILOSOPHY // 001
            </span>
            <span className="text-xs font-mono text-[#6B6A65]">
              EST. 2026 · NUMIX LABS
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight uppercase leading-[0.95]">
            ENGINEERED WITHOUT COMPROMISE.
          </h1>
          <p className="text-base sm:text-lg text-[#6B6A65] mt-4 leading-relaxed font-sans max-w-2xl">
            SRIGEN was founded on a singular premise: modern performance footwear has surrendered craft to mass production. We design for the extremes of street movement and architectural form.
          </p>
        </div>

        {/* Story Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#6B6A65] uppercase tracking-wider">
                01 // THE 300 PLEDGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase mt-3 mb-4">
                NO RESTOCK. EVER.
              </h2>
              <p className="text-sm text-[#6B6A65] leading-relaxed">
                Every release is produced in a strictly capped run of 300 pairs worldwide. When an edition sells out, tooling is archived and never reused for the same colorway. This preserves the authenticity, value, and identity of every numbered owner.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between text-xs font-mono">
              <span className="text-[#6B6A65]">EDITION ALLOCATION</span>
              <strong className="text-black font-bold">300 / 300 WORLDWIDE</strong>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#6B6A65] uppercase tracking-wider">
                02 // MATERIAL SCIENCES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase mt-3 mb-4">
                THE SR-FOAM CORE
              </h2>
              <p className="text-sm text-[#6B6A65] leading-relaxed">
                Developed in collaboration with specialized elastomer chemists, SR-FOAM delivers 78% energy return while maintaining structural rebound over 800+ kilometers of pavement punishment. Light enough for tempo days, dense enough for urban brutalism.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between text-xs font-mono">
              <span className="text-[#6B6A65]">ENERGY REBOUND</span>
              <strong className="text-black font-bold">78% COEFFICIENT</strong>
            </div>
          </div>
        </div>

        {/* Visual Showcase Callout */}
        <div className="w-full bg-[#111111] text-white rounded-3xl p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-xl">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold text-[#D4FF00] uppercase tracking-wider">
              HANDMADE PROTOTYPING
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase mt-2 mb-4 leading-tight">
              FROM SKELETON WIRE TO SCULPTED EVA
            </h3>
            <p className="text-sm text-white/70 leading-relaxed font-sans">
              Each pattern piece is precision cut with laser hairlines before being hand-stitched by master cordwainers. 14 distinct testing iterations went into the Aero Flux sole curvature alone.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="bg-[#D4FF00] hover:bg-[#c3ec00] text-black font-black text-xs uppercase px-8 py-4 rounded-full tracking-wider transition-all text-center"
            >
              EXPLORE ALL SHOES
            </Link>
          </div>
        </div>

        {/* Narrative Principles Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm">
          <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">
            CORE PRINCIPLES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-[#D4FF00] bg-black px-2 py-0.5 rounded-md w-fit">
                01. PURITY
              </span>
              <h4 className="font-extrabold text-base uppercase">Structural Honesty</h4>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                No decorative plastics or fake air bubbles. Every layer has a mechanical and structural purpose.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-[#D4FF00] bg-black px-2 py-0.5 rounded-md w-fit">
                02. SCARCITY
              </span>
              <h4 className="font-extrabold text-base uppercase">True Rarity</h4>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                Numbered packaging, certified provenance cards, and non-reproducible dye lots.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-[#D4FF00] bg-black px-2 py-0.5 rounded-md w-fit">
                03. UTILITY
              </span>
              <h4 className="font-extrabold text-base uppercase">Real Durability</h4>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                Built to be worn in rain, grit, and distance, not left behind display glass.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
