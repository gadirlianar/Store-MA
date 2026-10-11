"use client";

import React from "react";
import Image from "next/image";

export default function Section10() {
  return (
    <section
      id="details"
      className="relative w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#EDEBE4] select-none flex flex-col justify-between overflow-hidden"
    >
      {/* 1. Eyebrow & Headline */}
      <div className="w-full max-w-[1440px] mx-auto mb-12">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#76746E] uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#14110D] inline-block" />
          <span>MATERIAL ARCHIVE // 001</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#14110D] leading-[1.05] uppercase">
          EVERY PART, CONSIDERED.
        </h2>
      </div>

      {/* 2. Bento Architecture Showcase (4 Balanced Editorial Cards) */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Card 1: Macro Heel Detail Photography */}
        <div className="relative group overflow-hidden rounded-3xl bg-[#E2DFD6] aspect-[4/3] shadow-md border border-black/5 hover:-translate-y-1 transition-all duration-300">
          <Image
            src="/assets/reference/detail_heel_macro.jpg"
            alt="SRIGEN 001 macro heel counter showing laser-etched 001/300 and volt pull tab"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Floating Pill Caption */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
            <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-white/10">
              01 · HEEL COUNTER // 001/300
            </span>
            <span className="text-[11px] font-mono text-white/80 uppercase tracking-widest hidden sm:inline">
              ITALIAN CALF SUEDE
            </span>
          </div>
        </div>

        {/* Card 2: CUT ONCE (Obsidian Luxury Card) */}
        <div className="relative rounded-3xl bg-[#0B0905] text-white p-8 sm:p-12 flex flex-col justify-between aspect-[4/3] shadow-xl border border-white/5 hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-center text-xs font-mono text-white/50 pb-4 border-b border-white/10">
            <span className="text-[#DEF86F] font-bold">PATTERN SPEC // 01</span>
            <span>ZERO WASTE PATTERNING</span>
          </div>

          <div>
            <h3 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
              CUT ONCE.
            </h3>
            <p className="text-sm sm:text-base font-medium text-white/70 mt-4 leading-relaxed max-w-md">
              Single continuous suede paneling wraps the heel counter with zero unnecessary seams. Pure architectural geometry designed to eliminate friction points.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-white/60">
            <span>TOLERANCE: ±0.2 MM</span>
            <span className="text-[#DEF86F] font-bold">DOUBLE-NEEDLE STITCH</span>
          </div>
        </div>

        {/* Card 3: EDITION 001–300 (Neon Volt Signature Card) */}
        <div className="relative rounded-3xl bg-[#DEF86F] text-[#0B0905] p-8 sm:p-12 flex flex-col justify-between aspect-[4/3] shadow-md hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-center text-xs font-mono text-[#0B0905]/70 pb-4 border-b border-[#0B0905]/15">
            <span className="font-extrabold uppercase tracking-wider">ALLOCATION // 300 PAIRS</span>
            <span className="font-bold">ARCHIVAL DROP</span>
          </div>

          <div>
            <div className="text-3xl font-black mb-1">—</div>
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
              EDITION 001–300
            </h3>
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mt-4 text-[#0B0905]/80">
              INDIVIDUALLY NUMBERED · NEVER REISSUED
            </p>
            <p className="text-xs font-mono text-[#0B0905]/70 mt-2 leading-relaxed max-w-sm">
              Each pair stamped with its unique serial coordinate. When the 300th pair is claimed, tooling is permanently retired.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#0B0905]/15 text-xs font-mono font-bold">
            <span>NO RESTOCK. EVER.</span>
            <span>VERIFIED ARCHIVE</span>
          </div>
        </div>

        {/* Card 4: Macro Toe Vamp Detail Photography */}
        <div className="relative group overflow-hidden rounded-3xl bg-[#E2DFD6] aspect-[4/3] shadow-md border border-black/5 hover:-translate-y-1 transition-all duration-300">
          <Image
            src="/assets/reference/detail_toe_macro.jpg"
            alt="SRIGEN 001 macro toe vamp and custom engraved aglet"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Floating Pill Caption */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
            <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-white/10">
              02 · CONTINUOUS VAMP & AGLET
            </span>
            <span className="text-[11px] font-mono text-white/80 uppercase tracking-widest hidden sm:inline">
              GUNMETAL HARDWARE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
