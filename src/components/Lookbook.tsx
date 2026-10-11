"use client";

import React from "react";
import Image from "next/image";

export default function Lookbook() {
  return (
    <section
      id="lookbook"
      className="relative w-full h-screen min-h-[1080px] overflow-hidden select-none"
    >
      {/* Full-bleed street photo background matching reference */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/reference/lookbook_photo.png"
          alt="001 IN THE WILD · FRAME 02 street lookbook photography"
          fill
          className="w-full h-full object-cover object-center"
          priority
        />
        {/* Subtle vignette gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Bottom-Left Caption */}
      <div className="absolute bottom-16 left-16 z-20 flex flex-col items-start">
        <div className="bg-[#DEF86F] text-[#14110D] font-extrabold text-xs tracking-wider px-6 py-2.5 rounded-full uppercase shadow-lg">
          GOLDEN HOUR, GOLD PAIR
        </div>
        <p className="text-white text-xs font-bold tracking-widest uppercase mt-4 drop-shadow-md">
          001 IN THE WILD · FRAME 02
        </p>
      </div>

      {/* Top Right Lookbook Marker */}
      <div className="absolute top-16 right-16 z-20 text-white/80 text-xs font-semibold tracking-widest uppercase">
        <span>LOOKBOOK · VOL. 01</span>
      </div>
    </section>
  );
}
