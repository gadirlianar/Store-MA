"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BlueprintHotspot {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  details: { label: string; value: string }[];
  x: number; // percentage
  y: number; // percentage
}

export default function Section06() {
  const [activeHotspot, setActiveHotspot] = useState<string>("upper");

  const hotspots: BlueprintHotspot[] = [
    {
      id: "upper",
      number: "01",
      title: "UPPER CHASSIS",
      subtitle: "Full-Grain Italian Suede & High-Abrasion Knit",
      details: [
        { label: "Material", value: "1.4mm Italian Calf Suede" },
        { label: "Construction", value: "Continuous Seamless Wrap" },
        { label: "Ventilation", value: "Micro-Perforated Toe Vamp" },
      ],
      x: 70,
      y: 56,
    },
    {
      id: "laces",
      number: "02",
      title: "LACING ARCHITECTURE",
      subtitle: "Braided Waxed Cotton & Volt Aglet Finish",
      details: [
        { label: "Cord Type", value: "High-Tensile Braided Cord" },
        { label: "Hardware", value: "Laser-Engraved Gunmetal Aglet" },
        { label: "Tension", value: "Zero-Slip Eyelet Matrix" },
      ],
      x: 48,
      y: 36,
    },
    {
      id: "sole",
      number: "03",
      title: "MAV-FOAM™ MIDSOLE",
      subtitle: "Dual-Density Kinetic Core Cushioning",
      details: [
        { label: "Compound", value: "Proprietary MAV-FOAM™ Matrix" },
        { label: "Energy Return", value: "34% Rebound Elasticity" },
        { label: "Geometry", value: "8.0mm Ergonomic Offset" },
      ],
      x: 52,
      y: 72,
    },
    {
      id: "edition",
      number: "04",
      title: "MAVRIC MONOGRAM",
      subtitle: "Laser-Etched Atelier Insignia",
      details: [
        { label: "Origin", value: "Handcrafted in Civitanova, Italy" },
        { label: "Finishing", value: "Bespoke Italian Precision" },
        { label: "Standard", value: "MAVRIC Atelier Quality Certified" },
      ],
      x: 23,
      y: 52,
    },
  ];

  const currentHotspot = hotspots.find((h) => h.id === activeHotspot) || hotspots[0];

  return (
    <section
      id="anatomy"
      className="relative w-full py-28 px-6 sm:px-12 lg:px-16 bg-[#F1ECE5] select-none flex flex-col justify-between overflow-hidden"
    >
      {/* 1. Header Row */}
      <div className="w-full max-w-[1440px] mx-auto pb-8 border-b border-[#0B0905]/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-xs font-mono text-[#76746E] uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D1F744] inline-block shadow-sm" />
            <span className="font-bold text-[#0B0905]">ANATOMICAL BLUEPRINT // MAVRIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0B0905] uppercase leading-none">
            ENGINEERED LATERAL PROFILE
          </h2>
        </div>

        {/* Component Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeHotspot === spot.id
                  ? "bg-[#0B0905] text-[#D1F744] shadow-md scale-105"
                  : "bg-white/90 text-[#76746E] hover:text-[#0B0905] hover:bg-white border border-[#0B0905]/5"
              }`}
            >
              {spot.number} · {spot.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Unified Architectural Viewport + Luxury Obsidian Inspector */}
      <div className="relative w-full max-w-[1440px] mx-auto my-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Architectural Blueprint Viewport (8 Cols) */}
        <div className="lg:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-b from-[#FAF7F2] to-[#EFECE5] border border-[#0B0905]/8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] flex items-center justify-center p-4 sm:p-8">
          <div className="w-full h-full relative">
            <Image
              src="/assets/reference/anatomy_blueprint_minimal.jpg"
              alt="MAVRIC lateral profile blueprint"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-contain"
              unoptimized
              priority
            />
          </div>

          {/* Interactive Hotspot Pins */}
          {hotspots.map((spot) => {
            const isSelected = activeHotspot === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot.id)}
                onMouseEnter={() => setActiveHotspot(spot.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group/pin cursor-pointer focus:outline-none"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                aria-label={spot.title}
              >
                {/* Ping Radar Ring */}
                <span
                  className={`absolute -inset-2.5 rounded-full transition-opacity duration-300 ${
                    isSelected
                      ? "bg-[#D1F744]/70 animate-ping opacity-100"
                      : "opacity-0 group-hover/pin:opacity-100 bg-[#0B0905]/20"
                  }`}
                />

                {/* Hotspot Badge Pin */}
                <div
                  className={`relative flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-bold transition-all duration-300 shadow-md ${
                    isSelected
                      ? "bg-[#D1F744] text-[#0B0905] scale-125 ring-2 ring-[#0B0905]"
                      : "bg-[#0B0905] text-white hover:bg-[#D1F744] hover:text-[#0B0905] hover:scale-105"
                  }`}
                >
                  {spot.number}
                </div>
              </button>
            );
          })}
        </div>

        {/* Luxury Obsidian Component Inspector Card (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-[#0B0905] text-white rounded-3xl p-8 sm:p-10 border border-white/5 shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D1F744] uppercase">
                INSPECT COMPONENT
              </span>
              <span className="bg-[#D1F744] text-[#0B0905] text-[11px] font-mono font-black px-2.5 py-0.5 rounded-full">
                {currentHotspot.number} / 04
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                {currentHotspot.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-white/70 mt-2 leading-relaxed">
                {currentHotspot.subtitle}
              </p>
            </div>

            {/* Structured Specifications */}
            <div className="mt-8 flex flex-col gap-3">
              {currentHotspot.details.map((item) => (
                <div
                  key={item.label}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                >
                  <span className="text-xs font-mono font-bold text-white/60 uppercase">
                    {item.label}
                  </span>
                  <span className="text-xs font-mono font-bold text-white text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Indicator Footer */}
          <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D1F744]" />
              <strong className="text-white">HANDCRAFTED</strong>
            </span>
            <span className="text-[#D1F744] font-bold">MAVRIC ATELIER</span>
          </div>
        </div>
      </div>
    </section>
  );
}
