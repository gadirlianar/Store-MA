"use client";

import React from "react";
import Image from "next/image";

export default function Lookbook() {
  return (
    <section
      id="lookbook"
      className="relative w-full h-[90vh] min-h-[720px] max-h-[1080px] overflow-hidden select-none bg-[#14110D]"
    >
      {/* Full-bleed street photo background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/reference/lookbook_golden_hour.jpg"
          alt="MAVRIC IN THE WILD · Golden Hour Editorial"
          fill
          className="w-full h-full object-cover object-center"
          priority
        />
        {/* Subtle cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Floating Bottom-Left Caption */}
      <div className="absolute bottom-12 left-8 md:bottom-16 md:left-16 z-20">
        <div className="bg-[#DEF86F] text-[#14110D] font-extrabold text-xs tracking-wider px-6 py-2.5 rounded-full uppercase shadow-xl hover:scale-105 transition-transform duration-200">
          GOLDEN HOUR, GOLD PAIR
        </div>
      </div>
    </section>
  );
}
