"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface SpecCardData {
  id: string;
  title: string;
  subtitle: string;
  tileChip: string;
  isAccent?: boolean; // 300 PAIRS is lime filled
  photoSrc: string;
}

export default function Section02() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leftCards: SpecCardData[] = [
    {
      id: "sr-foam",
      title: "SR-FOAM™",
      subtitle: "Dual-density · 34% rebound",
      tileChip: "MIDSOLE CORE",
      photoSrc: "/assets/specs/spec_sr_foam.jpg",
    },
    {
      id: "full-grain",
      title: "FULL-GRAIN",
      subtitle: "Suede over abrasion knit",
      tileChip: "ABRASION KNIT",
      photoSrc: "/assets/specs/spec_fullgrain.jpg",
    },
    {
      id: "atelier-craft",
      title: "ATELIER CRAFT",
      subtitle: "Bespoke Italian precision",
      tileChip: "MAVRIC ATELIER",
      isAccent: true, // Only filled-lime card with black dash & text (EV-11, §6)
      photoSrc: "/assets/specs/spec_300pairs.jpg",
    },
  ];

  const rightCards: SpecCardData[] = [
    {
      id: "312-g",
      title: "312 G",
      subtitle: "Featherweight at a US 9",
      tileChip: "TOE BOX",
      photoSrc: "/assets/specs/spec_312g.jpg",
    },
    {
      id: "8-mm-drop",
      title: "8 MM DROP",
      subtitle: "Tuned for all-day wear",
      tileChip: "HEEL STOCK",
      photoSrc: "/assets/specs/spec_8mmdrop.jpg",
    },
    {
      id: "waxed-laces",
      title: "WAXED LACES",
      subtitle: "Volt dip finish",
      tileChip: "VOLT DIP AGLET",
      photoSrc: "/assets/specs/spec_waxedlaces.jpg",
    },
  ];

  const handleMouseEnter = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: false }));
  };

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="section02"
      ref={sectionRef}
      className="relative w-full min-h-screen py-24 px-6 sm:px-12 lg:px-16 bg-[#F1ECE5] select-none flex flex-col justify-between overflow-hidden"
    >
      {/* 1. Headline without redundant eyebrow */}
      <div
        className={`w-full max-w-[1440px] mx-auto transition-all duration-700 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Headline: ONE SHOE. ONE DROP. NO RESTOCK. (with square-cornered lime highlight) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0B0905] leading-tight uppercase">
          ONE SHOE. ONE DROP.{" "}
          <span className="bg-[#D1F744] text-[#0B0905] px-3 py-0.5 rounded-none inline-block font-black shadow-sm">
            NO RESTOCK.
          </span>
        </h2>
      </div>

      {/* 2. Main 3-Column Display: Left 3 Cards | Center 3/4 Sneaker | Right 3 Cards */}
      <div className="relative w-full max-w-[1440px] mx-auto my-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left 3 Spec Cards (staggered in x by ~20px per EV-11) */}
        <div className="lg:col-span-3 flex flex-col gap-6 z-20">
          {leftCards.map((card, idx) => {
            const isFlipped = !!flippedCards[card.id];
            // Staggered horizontal offset as seen in V2
            const staggerX = idx === 1 ? "lg:translate-x-5" : "";

            return (
              <div
                key={card.id}
                className={`relative w-full h-[126px] ${staggerX} [perspective:1000px] cursor-pointer`}
                onMouseEnter={() => handleMouseEnter(card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
                onClick={() => toggleFlip(card.id)}
              >
                {/* 3D Flipping Card Container (≤ 0.5s rotateY flip per EV-12, INT-04) */}
                <div
                  className={`w-full h-full relative rounded-[8px] transition-transform duration-500 [transform-style:preserve-3d] shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-xl ${
                    isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
                  }`}
                >
                  {/* FRONT FACE: Spec Card (~143x75px aspect, cream #FBF6F3, radius 8px) */}
                  <div
                    className={`absolute inset-0 rounded-[8px] p-5 flex flex-col justify-between [backface-visibility:hidden] border border-black/5 ${
                      card.isAccent
                        ? "bg-[#D1F744] text-[#0B0905]"
                        : "bg-[#FBF6F3] text-[#0B0905]"
                    }`}
                  >
                    {/* Top: Lime or Black Dash & Title */}
                    <div>
                      <div
                        className={`w-3.5 h-[2px] rounded-full mb-2.5 ${
                          card.isAccent ? "bg-[#0B0905]" : "bg-[#D1F744]"
                        }`}
                      />
                      <h4 className="text-lg sm:text-xl font-black tracking-tight uppercase leading-none">
                        {card.title}
                      </h4>
                    </div>

                    {/* Bottom: Grey Subtitle & HOVER ? */}
                    <div className="flex justify-between items-end">
                      <p
                        className={`text-xs font-medium max-w-[170px] leading-snug ${
                          card.isAccent ? "text-[#0B0905]/85" : "text-[#76746E]"
                        }`}
                      >
                        {card.subtitle}
                      </p>
                      <span className="text-[10px] font-mono font-bold tracking-wider opacity-60">
                        HOVER ?
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE: Photo Tile */}
                  <div className="absolute inset-0 rounded-[8px] overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] border-2 border-[#0B0905] shadow-xl bg-black">
                    <Image
                      src={card.photoSrc}
                      alt={card.tileChip}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                    {/* Chip Label Overlay */}
                    <div className="absolute bottom-2 left-2 bg-[#0B0905] text-[#D1F744] text-[9px] font-mono font-black px-2.5 py-1 rounded-[3px] uppercase tracking-wider shadow-md">
                      {card.tileChip}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center: 3/4 View Lime Sneaker with Soft Ground Shadow */}
        <div className="lg:col-span-6 relative flex items-center justify-center py-6 z-10">
          <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.12)] bg-[#F1ECE5]">
            <Image
              src="/assets/reference/mavric_center_34.jpg"
              alt="MAVRIC uncropped three-quarter luxury volt sneaker"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
          </div>
        </div>

        {/* Right 3 Spec Cards (staggered in x by ~20px per EV-11) */}
        <div className="lg:col-span-3 flex flex-col gap-6 z-20">
          {rightCards.map((card, idx) => {
            const isFlipped = !!flippedCards[card.id];
            // Staggered horizontal offset as seen in V2
            const staggerX = idx === 1 ? "lg:-translate-x-5" : "";

            return (
              <div
                key={card.id}
                className={`relative w-full h-[126px] ${staggerX} [perspective:1000px] cursor-pointer`}
                onMouseEnter={() => handleMouseEnter(card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
                onClick={() => toggleFlip(card.id)}
              >
                {/* 3D Flipping Card Container */}
                <div
                  className={`w-full h-full relative rounded-[8px] transition-transform duration-500 [transform-style:preserve-3d] shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-xl ${
                    isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
                  }`}
                >
                  {/* FRONT FACE: Spec Card */}
                  <div
                    className={`absolute inset-0 rounded-[8px] p-5 flex flex-col justify-between [backface-visibility:hidden] border border-black/5 ${
                      card.isAccent
                        ? "bg-[#D1F744] text-[#0B0905]"
                        : "bg-[#FBF6F3] text-[#0B0905]"
                    }`}
                  >
                    {/* Top: Lime Dash & Title */}
                    <div>
                      <div
                        className={`w-3.5 h-[2px] rounded-full mb-2.5 ${
                          card.isAccent ? "bg-[#0B0905]" : "bg-[#D1F744]"
                        }`}
                      />
                      <h4 className="text-lg sm:text-xl font-black tracking-tight uppercase leading-none">
                        {card.title}
                      </h4>
                    </div>

                    {/* Bottom: Grey Subtitle & HOVER ? */}
                    <div className="flex justify-between items-end">
                      <p
                        className={`text-xs font-medium max-w-[170px] leading-snug ${
                          card.isAccent ? "text-[#0B0905]/85" : "text-[#76746E]"
                        }`}
                      >
                        {card.subtitle}
                      </p>
                      <span className="text-[10px] font-mono font-bold tracking-wider opacity-60">
                        HOVER ?
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE: Photo Tile */}
                  <div className="absolute inset-0 rounded-[8px] overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] border-2 border-[#0B0905] shadow-xl bg-black">
                    <Image
                      src={card.photoSrc}
                      alt={card.tileChip}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                    {/* Chip Label Overlay */}
                    <div className="absolute bottom-2 left-2 bg-[#0B0905] text-[#D1F744] text-[9px] font-mono font-black px-2.5 py-1 rounded-[3px] uppercase tracking-wider shadow-md">
                      {card.tileChip}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
