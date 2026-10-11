"use client";

import React from "react";
import Image from "next/image";

export default function Section10() {
  return (
    <section
      id="details"
      className="relative w-full h-screen min-h-[1080px] py-12 px-8 md:px-16 bg-[#EDEBE4] select-none flex flex-col justify-between overflow-hidden"
    >
      {/* 1. Eyebrow & Headline */}
      <div className="w-full z-10">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#76746E] uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-[#14110D] inline-block" />
          <span>10 — THE DETAILS</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#14110D] leading-[1.05]">
          EVERY PART, CONSIDERED.
        </h2>
      </div>

      {/* 2. Four Scattered Detail Cards */}
      <div className="relative w-full max-w-[1720px] mx-auto flex-1 my-4">
        {/* Card 1: Top Left Rear Pair View */}
        <div
          className="absolute rounded-[28px] bg-[#CBE464] overflow-hidden shadow-md flex items-center justify-center p-4 hover:-translate-y-1 transition-transform duration-300"
          style={{
            left: "14%",
            top: "4%",
            width: "440px",
            height: "380px",
          }}
        >
          <Image
            src="/assets/reference/details_card_1.png"
            alt="SRIGEN 001 rear heel view with pull tab"
            width={474}
            height={404}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Card 2: Top Right CUT ONCE (Solid Black Card) */}
        <div
          className="absolute rounded-[28px] bg-[#121212] text-white p-8 flex flex-col justify-between shadow-xl hover:-translate-y-1 transition-transform duration-300"
          style={{
            left: "62%",
            top: "6%",
            width: "400px",
            height: "350px",
          }}
        >
          <div className="flex justify-between items-center text-xs font-mono text-white/50">
            <span>PATTERN SPEC // 01</span>
            <span>ZERO WASTE</span>
          </div>
          <div>
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-white">
              CUT ONCE.
            </h3>
            <p className="text-xs sm:text-sm font-medium text-white/70 mt-2 max-w-xs leading-relaxed">
              Single continuous suede paneling wraps the heel counter. No excess seams.
            </p>
          </div>
        </div>

        {/* Card 3: Bottom Left EDITION 001–300 (Volt Card) */}
        <div
          className="absolute rounded-[28px] bg-[#DEF86F] text-[#14110D] p-8 flex flex-col justify-between shadow-md hover:-translate-y-1 transition-transform duration-300"
          style={{
            left: "20%",
            top: "52%",
            width: "360px",
            height: "320px",
          }}
        >
          <div className="text-2xl font-black">—</div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tighter">
              EDITION 001–300
            </h3>
            <p className="text-[11px] font-bold tracking-widest uppercase mt-2 opacity-80">
              INDIVIDUALLY NUMBERED · NEVER REISSUED
            </p>
          </div>
        </div>

        {/* Card 4: Bottom Right Front 3/4 View */}
        <div
          className="absolute rounded-[28px] bg-[#CBE464] overflow-hidden shadow-md flex items-center justify-center p-4 hover:-translate-y-1 transition-transform duration-300"
          style={{
            left: "60%",
            top: "46%",
            width: "480px",
            height: "410px",
          }}
        >
          <Image
            src="/assets/reference/details_card_2.png"
            alt="SRIGEN 001 front three-quarter view"
            width={506}
            height={427}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* 3. Bottom Baseline */}
      <div className="w-full flex justify-between items-center text-xs font-semibold tracking-widest text-[#76746E] uppercase pt-4 border-t border-[#14110D]/5 z-10">
        <span>● CRAFT & ASSEMBLY</span>
        <span>ARCHIVAL REVISION 1.0</span>
      </div>
    </section>
  );
}
