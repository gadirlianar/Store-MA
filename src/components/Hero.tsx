"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface HeroProps {
  onOpenNotify?: () => void;
}

export default function Hero({ onOpenNotify }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 340, y: 220 });
  const [isInsideBox, setIsInsideBox] = useState(false);
  const [pointerNorm, setPointerNorm] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth) * 2 - 1;
      const ny = (e.clientY / innerHeight) * 2 - 1;
      setPointerNorm({ x: nx, y: ny });

      if (boxRef.current) {
        const rect = boxRef.current.getBoundingClientRect();
        const bx = e.clientX - rect.left;
        const by = e.clientY - rect.top;

        if (bx >= 0 && bx <= rect.width && by >= 0 && by <= rect.height) {
          setIsInsideBox(true);
          setMousePos({ x: bx, y: by });
        } else {
          setIsInsideBox(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxX = pointerNorm.x * 16;
  const parallaxY = pointerNorm.y * 12;

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen pt-28 pb-12 px-6 sm:px-12 lg:px-16 flex flex-col justify-between overflow-hidden select-none bg-[#F4F3ED]"
    >
      {/* 1. Top Metadata / Eyebrows */}
      <div className="w-full flex items-center justify-between text-xs font-mono font-medium tracking-widest text-[#6B6A65] uppercase z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#111111] inline-block" />
          <span>• LIMITED — 300 PAIRS</span>
        </div>
        <div>
          <span>REL. 09.20.2026</span>
        </div>
      </div>

      {/* 2. Massive Background Brand Display Typography */}
      <div className="absolute top-[8%] left-0 w-full flex justify-center pointer-events-none z-0">
        <h1 className="text-[18vw] font-black tracking-tighter text-[#111111] leading-none select-none opacity-90">
          SRIGEN
        </h1>
      </div>

      {/* 3. Floating Mirrored Sneakers at Edges */}
      <div
        className="absolute left-0 top-[52%] -translate-y-1/2 -translate-x-12 sm:-translate-x-6 w-[340px] md:w-[480px] lg:w-[560px] pointer-events-none z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${parallaxX}px, calc(-50% + ${parallaxY}px))`,
        }}
      >
        <Image
          src="/assets/reference/hero_shoe_left.png"
          alt="SRIGEN 001 lateral profile left"
          width={590}
          height={350}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      <div
        className="absolute right-0 top-[52%] -translate-y-1/2 translate-x-12 sm:translate-x-6 w-[340px] md:w-[480px] lg:w-[560px] pointer-events-none z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${-parallaxX}px, calc(-50% + ${-parallaxY}px))`,
        }}
      >
        <Image
          src="/assets/reference/hero_shoe_right.png"
          alt="SRIGEN 001 lateral profile right"
          width={664}
          height={350}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* 4. Center Interactive Packaging Box with X-Ray Lens Mask */}
      <div className="relative w-full flex justify-center items-center my-auto py-8 z-20">
        <div
          ref={boxRef}
          className="relative w-[340px] sm:w-[520px] md:w-[680px] h-[360px] sm:h-[400px] md:h-[440px] bg-[#E3E1D8] rounded-3xl overflow-hidden shadow-2xl cursor-crosshair border border-black/5"
        >
          {/* Vertical Volt Stripe on Left Edge */}
          <div className="w-3 h-full bg-[#D4FF00] absolute left-0 top-0 z-20" />

          {/* Exterior Box Graphics Layer */}
          <div className="absolute inset-0 pl-8 pr-8 py-8 flex flex-col justify-between text-[#111111] z-10">
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#111111]/70 ml-2">
                SR-2026-DROP
              </span>
              <span className="text-xs font-mono font-bold tracking-widest uppercase bg-[#111111] text-[#D4FF00] px-3 py-1 rounded-full">
                HANDLE WITH HYPE
              </span>
            </div>

            {/* Center Monogram Typography */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#111111]">
                SRIGEN
              </h2>
              <p className="text-xs font-mono font-bold tracking-widest text-[#6B6A65] mt-1 uppercase">
                001 — FIRST DROP
              </p>
            </div>

            {/* Bottom Row: Barcode + Size */}
            <div className="flex justify-between items-end">
              {/* Barcode SVG */}
              <div className="flex items-end gap-[3px] h-8 ml-2">
                {[3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 1, 2, 4, 1, 3].map(
                  (w, i) => (
                    <div
                      key={i}
                      className="bg-[#111111]"
                      style={{ width: `${w}px`, height: "100%" }}
                    />
                  )
                )}
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#111111]">
                US 4–13 / UNISEX
              </span>
            </div>
          </div>

          {/* Interior X-Ray Revealed Sneaker Layer (Dinamik CSS Mask) */}
          <div
            className="absolute inset-0 z-30 pointer-events-none transition-opacity duration-200"
            style={{
              opacity: isInsideBox ? 1 : 0,
              maskImage: `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 0%)`,
              WebkitMaskImage: `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 0%)`,
              background: "radial-gradient(circle at center, #26241E 0%, #111111 100%)",
            }}
          >
            <div className="w-full h-full relative flex items-center justify-center p-6">
              <Image
                src="/assets/reference/hero_card_full.png"
                alt="SRIGEN 001 sneakers x-ray interior reveal"
                width={960}
                height={600}
                className="w-full h-auto object-contain max-h-[380px]"
                priority
              />
            </div>
          </div>

          {/* Reticle Ring & Volt Halo around X-Ray Lens */}
          {isInsideBox && (
            <div
              className="absolute pointer-events-none rounded-full border-2 border-[#D4FF00] shadow-[0_0_30px_#D4FF00] transition-transform duration-75 ease-out z-40"
              style={{
                width: "280px",
                height: "280px",
                left: `${mousePos.x - 140}px`,
                top: `${mousePos.y - 140}px`,
              }}
            >
              {/* Crosshair Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                <div className="absolute top-1/2 left-0 w-4 h-[1px] bg-[#D4FF00]" />
                <div className="absolute top-0 left-1/2 h-4 w-[1px] bg-[#D4FF00]" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5. Prompt Capsule, CTA Button, and Baseline */}
      <div className="w-full flex flex-col items-center gap-4 z-20">
        <div className="bg-[#111111]/5 px-4 py-1.5 rounded-full border border-black/5">
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#6B6A65] uppercase">
            RUN YOUR CURSOR OVER THE BOX
          </p>
        </div>

        <button
          onClick={onOpenNotify}
          className="bg-[#D4FF00] hover:bg-[#c3ec00] text-[#111111] font-black text-xs tracking-wider px-10 py-4 rounded-full transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] cursor-pointer shadow-[0_8px_24px_rgba(212,255,0,0.4)] uppercase"
        >
          NOTIFY ME
        </button>

        <div className="w-full flex justify-between items-center text-[11px] font-mono text-[#6B6A65] pt-6 border-t border-[#111111]/10">
          <span>• SRIGEN INDUSTRIES — NO RESTOCK, EVER.</span>
          <span className="opacity-70">MADE IN FRAMER · CLONE</span>
        </div>
      </div>
    </section>
  );
}
