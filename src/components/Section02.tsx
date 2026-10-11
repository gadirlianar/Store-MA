"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CardSpec {
  id: string;
  title: string;
  subtitle: string;
  meta: string;
  isAccent?: boolean;
  popupBadge?: string;
  imageSrc?: string;
}

export default function Section02() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const leftCards: CardSpec[] = [
    {
      id: "sr-foam",
      title: "SR-FOAM™",
      subtitle: "Dual-density · 34% rebound",
      meta: "HOVER ⤢",
      popupBadge: "MIDSOLE CORE",
      imageSrc: "/assets/reference/anatomy_card.png",
    },
    {
      id: "full-grain",
      title: "FULL-GRAIN",
      subtitle: "Suede over abrasion knit",
      meta: "HOVER ⤢",
      popupBadge: "UPPER",
      imageSrc: "/assets/reference/details_card_1.png",
    },
    {
      id: "300-pairs",
      title: "300 PAIRS",
      subtitle: "Numbered. Then never again.",
      meta: "HOVER ⤢",
      isAccent: true, // Defolt olaraq bg-[#D4FF00] text-black
      popupBadge: "EDITION 001/300",
      imageSrc: "/assets/reference/details_card_2.png",
    },
  ];

  const rightCards: CardSpec[] = [
    {
      id: "312-g",
      title: "312 G",
      subtitle: "Featherweight at a US 9",
      meta: "HOVER ⤢",
      popupBadge: "LIGHTWEIGHT SPEC",
      imageSrc: "/assets/reference/hero_shoe_left.png",
    },
    {
      id: "8-mm-drop",
      title: "8 MM DROP",
      subtitle: "Tuned for all-day wear",
      meta: "HOVER ⤢",
      popupBadge: "HEEL STACK",
      imageSrc: "/assets/reference/anatomy_card.png",
    },
    {
      id: "waxed-laces",
      title: "WAXED LACES",
      subtitle: "Volt dip-finish",
      meta: "HOVER ⤢",
      popupBadge: "LACE UNIT",
      imageSrc: "/assets/reference/details_card_1.png",
    },
  ];

  return (
    <section
      id="section02"
      className="relative w-full min-h-screen py-24 px-6 sm:px-12 lg:px-16 bg-[#F4F3ED] select-none flex flex-col justify-between"
    >
      {/* 1. Header Typography */}
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="text-xs font-mono text-[#6B6A65] uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#111111]" />
          <span>02 — THE 001</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] mt-3 leading-tight">
          ONE SHOE. ONE DROP.{" "}
          <span className="bg-[#D4FF00] px-4 py-1 rounded-full text-black inline-block mt-2 sm:mt-0 font-extrabold shadow-sm">
            NO RESTOCK.
          </span>
        </h2>
      </div>

      {/* 2. Main 3-Column Asymmetric Grid */}
      <div className="relative w-full max-w-[1440px] mx-auto my-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: 3 Spec Cards */}
        <div className="lg:col-span-3 flex flex-col gap-6 z-20">
          {leftCards.map((card) => {
            const isHovered = hoveredCard === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 border border-black/5 ${
                  card.isAccent
                    ? "bg-[#D4FF00] text-black"
                    : "bg-white text-[#111111]"
                }`}
              >
                <div className="flex justify-between items-start">
                  <h4 className="text-lg sm:text-xl font-black tracking-tight uppercase">
                    {card.title}
                  </h4>
                  <span className="text-[10px] font-mono font-bold tracking-wider opacity-60">
                    {card.meta}
                  </span>
                </div>
                <p className="text-xs font-medium opacity-80 mt-2">
                  {card.subtitle}
                </p>

                {/* Pop-up Thumbnail Graphic */}
                {card.imageSrc && (
                  <div
                    className={`absolute z-30 pointer-events-none rounded-xl overflow-hidden shadow-2xl border-2 border-[#111111] bg-white transition-all duration-200 ${
                      isHovered
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-90 translate-y-2 pointer-events-none"
                    }`}
                    style={{
                      width: "220px",
                      height: "150px",
                      top: "-20px",
                      right: "-240px",
                    }}
                  >
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      width={220}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                    {card.popupBadge && (
                      <div className="absolute bottom-2 left-2 bg-[#111111] text-[#D4FF00] text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase">
                        {card.popupBadge}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Center Column: 35° Angled Volt-Green Sneaker */}
        <div className="lg:col-span-6 relative flex items-center justify-center py-6 z-10">
          <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
            <Image
              src="/assets/reference/section2_shoe.png"
              alt="SRIGEN 001 angled 3D sneaker presentation"
              width={600}
              height={700}
              className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
              priority
            />
          </div>
        </div>

        {/* Right Column: 3 Spec Cards */}
        <div className="lg:col-span-3 flex flex-col gap-6 z-20">
          {rightCards.map((card) => {
            const isHovered = hoveredCard === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 border border-black/5 ${
                  card.isAccent
                    ? "bg-[#D4FF00] text-black"
                    : "bg-white text-[#111111]"
                }`}
              >
                <div className="flex justify-between items-start">
                  <h4 className="text-lg sm:text-xl font-black tracking-tight uppercase">
                    {card.title}
                  </h4>
                  <span className="text-[10px] font-mono font-bold tracking-wider opacity-60">
                    {card.meta}
                  </span>
                </div>
                <p className="text-xs font-medium opacity-80 mt-2">
                  {card.subtitle}
                </p>

                {/* Pop-up Thumbnail Graphic */}
                {card.imageSrc && (
                  <div
                    className={`absolute z-30 pointer-events-none rounded-xl overflow-hidden shadow-2xl border-2 border-[#111111] bg-white transition-all duration-200 ${
                      isHovered
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-90 translate-y-2 pointer-events-none"
                    }`}
                    style={{
                      width: "220px",
                      height: "150px",
                      top: "-20px",
                      left: "-240px",
                    }}
                  >
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      width={220}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                    {card.popupBadge && (
                      <div className="absolute bottom-2 left-2 bg-[#111111] text-[#D4FF00] text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase">
                        {card.popupBadge}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Bottom Baseline Note */}
      <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center text-xs font-mono text-[#6B6A65] uppercase pt-6 border-t border-[#111111]/10">
        <span>• DUAL-DENSITY REBOUND 34%</span>
        <span>HOVER CARDS FOR DETAILED SUBSYSTEMS ⤢</span>
      </div>
    </section>
  );
}
