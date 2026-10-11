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
        { label: "Material", value: "1.4mm Premium Calf Suede" },
        { label: "Construction", value: "Continuous Seamless Wrap" },
        { label: "Ventilation", value: "Zonal Micro-Perforated Vamp" },
      ],
      x: 34,
      y: 54,
    },
    {
      id: "laces",
      number: "02",
      title: "LACING ARCHITECTURE",
      subtitle: "Braided Waxed Cotton & Volt Aglet Finish",
      details: [
        { label: "Cord Type", value: "High-Tensile Braided Cord" },
        { label: "Hardware", value: "Laser-Engraved Gunmetal Aglet" },
        { label: "Tension", value: "Zero-Slip Eyelet Anchor Matrix" },
      ],
      x: 50,
      y: 33,
    },
    {
      id: "sole",
      number: "03",
      title: "SR-FOAM™ MIDSOLE",
      subtitle: "Dual-Density Kinetic Core Cushioning",
      details: [
        { label: "Compound", value: "Proprietary SR-FOAM™ Matrix" },
        { label: "Energy Return", value: "34% Rebound Elasticity" },
        { label: "Geometry", value: "8.0mm Ergonomic Heel Offset" },
      ],
      x: 56,
      y: 72,
    },
    {
      id: "edition",
      number: "04",
      title: "MAVRIC MONOGRAM",
      subtitle: "Laser-Etched Atelier Production Stamp",
      details: [
        { label: "Origin", value: "Handcrafted in Civitanova, Italy" },
        { label: "Authentication", value: "Individually Laser-Etched" },
        { label: "Standard", value: "MAVRIC Atelier Quality Certified" },
      ],
      x: 75,
      y: 50,
    },
  ];

  const currentHotspot = hotspots.find((h) => h.id === activeHotspot) || hotspots[0];

  return (
    <section
      id="anatomy"
      className="relative w-full py-20 px-6 sm:px-12 lg:px-16 bg-[#F1ECE5] select-none flex flex-col justify-between overflow-hidden"
    >
      {/* 1. Header (Clean, without FIG 001-A / SCALE REF bar) */}
      <div className="w-full max-w-[1440px] mx-auto pb-8 border-b border-[#0B0905]/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-[#76746E] uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#D1F744] inline-block shadow-sm" />
            <span className="font-bold text-[#0B0905]">ANATOMICAL BLUEPRINT // MAVRIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0B0905] uppercase leading-none">
            ENGINEERED LATERAL PROFILE
          </h2>
        </div>

        {/* Component Selector Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeHotspot === spot.id
                  ? "bg-[#0B0905] text-[#D1F744] shadow-md scale-105"
                  : "bg-white/80 text-[#76746E] hover:text-[#0B0905] hover:bg-white border border-[#0B0905]/5"
              }`}
            >
              {spot.number} · {spot.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Central Blueprint Canvas + Redesigned Component Inspector */}
      <div className="relative w-full max-w-[1440px] mx-auto my-10 flex flex-col lg:flex-row items-stretch gap-8">
        {/* Main Architectural Blueprint Viewport */}
        <div className="relative w-full lg:w-2/3 aspect-[16/10] rounded-3xl overflow-hidden bg-[#FAF7F2] border border-[#0B0905]/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex items-center justify-center p-4 sm:p-8">
          <div className="w-full h-full relative">
            <Image
              src="/assets/reference/anatomy_blueprint_minimal.jpg"
              alt="MAVRIC lateral profile blueprint"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-contain"
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
                  className={`absolute -inset-2 rounded-full transition-opacity duration-300 ${
                    isSelected
                      ? "bg-[#D1F744]/60 animate-ping opacity-100"
                      : "opacity-0 group-hover/pin:opacity-100 bg-[#0B0905]/20"
                  }`}
                />

                {/* Hotspot Badge Pin */}
                <div
                  className={`relative flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-bold transition-all duration-300 shadow-lg ${
                    isSelected
                      ? "bg-[#D1F744] text-[#0B0905] scale-115 ring-2 ring-[#0B0905]"
                      : "bg-[#0B0905] text-white hover:bg-[#D1F744] hover:text-[#0B0905] hover:scale-105"
                  }`}
                >
                  {spot.number}
                </div>
              </button>
            );
          })}
        </div>

        {/* Redesigned Luxury Component Inspector Card */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between bg-white rounded-3xl p-8 border border-[#0B0905]/10 shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#0B0905]/10">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#76746E] uppercase">
                INSPECT COMPONENT
              </span>
              <span className="bg-[#D1F744] text-[#0B0905] text-[11px] font-mono font-black px-2.5 py-0.5 rounded-full">
                {currentHotspot.number} / 04
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0B0905] uppercase">
                {currentHotspot.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#76746E] mt-2 leading-relaxed">
                {currentHotspot.subtitle}
              </p>
            </div>

            {/* Structured Specifications */}
            <div className="mt-8 flex flex-col gap-3">
              {currentHotspot.details.map((item) => (
                <div
                  key={item.label}
                  className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#0B0905]/5 flex items-center justify-between"
                >
                  <span className="text-xs font-mono font-bold text-[#76746E] uppercase">
                    {item.label}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0B0905] text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Indicator Footer */}
          <div className="mt-8 pt-5 border-t border-[#0B0905]/10 flex items-center justify-between text-xs font-mono text-[#76746E]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D1F744]" />
              <strong className="text-[#0B0905]">HANDCRAFTED</strong>
            </span>
            <span>MAVRIC ATELIER</span>
          </div>
        </div>
      </div>
    </section>
  );
}
