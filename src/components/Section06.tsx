"use client";

import React from "react";
import Image from "next/image";

export default function Section06() {
  return (
    <section
      id="anatomy"
      className="relative w-full h-screen min-h-[1080px] py-16 px-8 md:px-16 bg-[#EDEBE4] select-none flex flex-col justify-between"
    >
      {/* 1. Eyebrow & Action Link */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#76746E] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#14110D] inline-block" />
          <span>06 — ANATOMY, TEASED</span>
        </div>

        <button className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#14110D] uppercase hover:opacity-75 transition-opacity cursor-pointer">
          <span>FULL TEARDOWN</span>
          <span>→</span>
        </button>
      </div>

      {/* 2. Central Card and Callouts */}
      <div className="relative w-full max-w-[1600px] mx-auto my-auto flex items-center justify-center">
        {/* Left Callouts */}
        <div className="hidden lg:flex flex-col justify-between h-[520px] w-[280px] text-right pr-10 z-10">
          <div>
            <h4 className="text-base font-extrabold tracking-tight text-[#14110D] uppercase">
              UPPER
            </h4>
            <p className="text-xs font-medium text-[#76746E] mt-1">
              Full-grain suede + abrasion knit
            </p>
            <div className="w-16 h-[1px] bg-[#14110D]/20 ml-auto mt-4" />
          </div>

          <div>
            <div className="w-16 h-[1px] bg-[#14110D]/20 ml-auto mb-4" />
            <h4 className="text-base font-extrabold tracking-tight text-[#14110D] uppercase">
              SR-FOAM™ SOLE
            </h4>
            <p className="text-xs font-medium text-[#76746E] mt-1">
              Dual-density · 34% rebound
            </p>
          </div>
        </div>

        {/* Center Volt Rounded Card */}
        <div className="relative w-full max-w-[990px] h-[520px] sm:h-[620px] md:h-[720px] rounded-[28px] bg-[#CBE464] overflow-hidden shadow-xl flex items-center justify-center p-6 z-0">
          <Image
            src="/assets/reference/anatomy_card.png"
            alt="FIG. 001-A — LATERAL VIEW anatomical sneaker diagram"
            width={990}
            height={718}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Right Callouts */}
        <div className="hidden lg:flex flex-col justify-between h-[520px] w-[280px] text-left pl-10 z-10">
          <div>
            <h4 className="text-base font-extrabold tracking-tight text-[#14110D] uppercase">
              LACES
            </h4>
            <p className="text-xs font-medium text-[#76746E] mt-1">
              Waxed cotton, volt dip
            </p>
            <div className="w-16 h-[1px] bg-[#14110D]/20 mr-auto mt-4" />
          </div>

          <div>
            <div className="w-16 h-[1px] bg-[#14110D]/20 mr-auto mb-4" />
            <h4 className="text-base font-extrabold tracking-tight text-[#14110D] uppercase">
              EDITION
            </h4>
            <p className="text-xs font-medium text-[#76746E] mt-1">
              001 / 300 — laser-etched
            </p>
          </div>
        </div>
      </div>

      {/* 3. Bottom Baseline */}
      <div className="w-full flex justify-between items-center text-xs font-semibold tracking-widest text-[#76746E] uppercase pt-4 border-t border-[#14110D]/5">
        <span>ARCHITECTURAL PROFILE</span>
        <span>LATERAL ANATOMY SPECIFICATION</span>
      </div>
    </section>
  );
}
