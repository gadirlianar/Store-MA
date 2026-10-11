"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface HeroProps {
  onOpenNotify?: () => void;
}

export default function Hero({ onOpenNotify }: HeroProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const [mousePos, setMousePos] = useState({ x: 280, y: 190 });
  const [isInsideBox, setIsInsideBox] = useState(false);
  const [isHeroActive, setIsHeroActive] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mouseNorm, setMouseNorm] = useState({ x: 0, y: 0 });
  const [boxNorm, setBoxNorm] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth) * 2 - 1;
      const ny = (e.clientY / innerHeight) * 2 - 1;
      setMouseNorm({ x: nx, y: ny });

      // Check if mouse is within hero viewport section
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        if (
          e.clientY >= heroRect.top &&
          e.clientY <= heroRect.bottom &&
          e.clientX >= heroRect.left &&
          e.clientX <= heroRect.right
        ) {
          setIsHeroActive(true);
        } else {
          setIsHeroActive(false);
        }
      }

      if (boxRef.current) {
        const rect = boxRef.current.getBoundingClientRect();
        const bx = e.clientX - rect.left;
        const by = e.clientY - rect.top;

        // Pointer normalized inside box [-1, 1]
        const boxNormX = (bx / rect.width) * 2 - 1;
        const boxNormY = (by / rect.height) * 2 - 1;
        setBoxNorm({ x: boxNormX, y: boxNormY });

        // Subtle dynamic 3D tilt responding to cursor
        setTilt({
          x: Math.max(-2.5, Math.min(2.5, -boxNormY * 2.5)),
          y: Math.max(-2.5, Math.min(2.5, boxNormX * 2.5)),
        });

        if (bx >= 0 && bx <= rect.width && by >= 0 && by <= rect.height) {
          setIsInsideBox(true);
          setMousePos({ x: bx, y: by });
        } else {
          setIsInsideBox(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHeroActive(false);
      setIsInsideBox(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const parallaxX = mouseNorm.x * 14;
  const parallaxY = mouseNorm.y * 10;

  // Responsive shoe appearance matching user reference states:
  // - Cursor on left side (boxNorm.x < -0.28): ONLY left shoe visible, right shoe smoothly disappears (User Image 2)
  // - Cursor on right side (boxNorm.x > 0.28): ONLY right shoe visible, left shoe smoothly disappears (User Image 3)
  // - Cursor in center area (Math.abs(boxNorm.x) <= 0.35): BOTH shoes visible (User Image 4)
  // - Mouse outside box / resting: BOTH shoes retracted (User Image 1)
  const showLeftShoe = isInsideBox && boxNorm.x <= 0.32;
  const showRightShoe = isInsideBox && boxNorm.x >= -0.32;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen pt-24 pb-12 px-6 sm:px-10 lg:px-16 flex flex-col justify-between overflow-hidden select-none bg-[#F1ECE5]"
    >
      {/* 1. Top Meta Row: Clean, vital, no fake dates */}
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between text-[11px] font-mono font-medium tracking-widest uppercase z-30">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0B0905] inline-block" />
          <span className="text-[#0B0905] font-bold">MAVRIC // FLAGSHIP SILHOUETTE</span>
        </div>
        <div className="flex items-center gap-2 text-[#0B0905]">
          <span className="w-2 h-2 rounded-full bg-[#D1F744] animate-pulse inline-block" />
          <span className="font-semibold tracking-wider">ONLINE ALLOCATION ACTIVE</span>
        </div>
      </div>

      {/* 2. Main Centerpiece: Giant Wordmark + Centered Tilted Box + Fluid Side Sneakers (Image 2) */}
      <div className="relative w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center my-auto py-4">
        {/* Massive Background Brand Display Typography "MAVRIC" */}
        <div className="absolute -top-6 sm:-top-8 lg:-top-10 left-0 w-full flex justify-center pointer-events-none z-0">
          <h1
            className="text-[19vw] lg:text-[18vw] font-black tracking-[-0.04em] text-[#0B0905] leading-none select-none"
            style={{
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            MAVRIC
          </h1>
        </div>

        {/* Left Side Sneaker: Glides in & reacts to mouse parallax (User Image 2) */}
        <div
          className={`absolute -left-8 sm:-left-4 lg:left-0 top-[52%] -translate-y-1/2 pointer-events-none z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            showLeftShoe
              ? "translate-x-0 opacity-100 scale-100"
              : "-translate-x-36 opacity-0 scale-95"
          }`}
        >
          <div
            className="w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0) rotate(${-parallaxX * 0.12}deg)`,
            }}
          >
            <Image
              src="/assets/reference/hero_shoe_left.png"
              alt="MAVRIC lateral profile left"
              width={568}
              height={520}
              className="w-full h-auto drop-shadow-[0_26px_40px_rgba(0,0,0,0.15)]"
              unoptimized
              priority
            />
          </div>
        </div>

        {/* Right Side Sneaker: Glides in & reacts to mouse parallax (User Image 2) */}
        <div
          className={`absolute -right-8 sm:-right-4 lg:right-0 top-[52%] -translate-y-1/2 pointer-events-none z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            showRightShoe
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-36 opacity-0 scale-95"
          }`}
        >
          <div
            className="w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${-parallaxX}px, ${-parallaxY}px, 0) rotate(${parallaxX * 0.12}deg)`,
            }}
          >
            <Image
              src="/assets/reference/hero_shoe_right.png"
              alt="MAVRIC lateral profile right"
              width={600}
              height={520}
              className="w-full h-auto drop-shadow-[0_26px_40px_rgba(0,0,0,0.15)]"
              unoptimized
              priority
            />
          </div>
        </div>

        {/* Center Interactive Packaging Box with Base Tilt (~ -2.2deg) */}
        <div
          ref={boxRef}
          className="relative w-[340px] sm:w-[480px] md:w-[560px] lg:w-[620px] h-[230px] sm:h-[320px] md:h-[370px] lg:h-[400px] rounded-2xl overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.14)] z-20 mt-14 sm:mt-18 transition-transform duration-200 ease-out"
          style={{
            background: "linear-gradient(145deg, #EAE4D7 0%, #DDD3C3 100%)",
            transform: `perspective(1000px) rotate(-2.2deg) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Vertical Volt Stripe on Left Edge (~12px, z-30) */}
          <div className="w-3 sm:w-3.5 h-full bg-[#D1F744] absolute left-0 top-0 z-30" />

          {/* Interior Spotlight Revealed Sneaker Layer (z-10, revealed beneath typography) */}
          <div
            className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 overflow-hidden rounded-2xl"
            style={{
              opacity: isInsideBox ? 1 : 0,
              maskImage: `radial-gradient(circle 225px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 28%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.3) 78%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle 225px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 28%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.3) 78%, transparent 100%)`,
            }}
          >
            <div className="w-full h-full relative">
              <Image
                src="/assets/reference/box_interior_luxury.jpg"
                alt="MAVRIC sneakers luxury unboxing spotlight reveal"
                fill
                className="object-cover object-center"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Soft Diffuse Volt Glow Aura (z-15, organic blurry halo with NO hard border stroke) */}
          {isInsideBox && (
            <div
              className="absolute pointer-events-none rounded-full transition-transform duration-75 ease-out z-15"
              style={{
                width: "450px",
                height: "450px",
                left: `${mousePos.x - 225}px`,
                top: `${mousePos.y - 225}px`,
                background: "radial-gradient(circle at center, transparent 36%, rgba(209,247,68,0.36) 62%, rgba(209,247,68,0.08) 82%, transparent 100%)",
                filter: "blur(18px)",
              }}
            />
          )}

          {/* Exterior Box Typography Layer (z-25, positioned cleanly OVER the revealed shoe) */}
          <div className="absolute inset-0 pl-8 pr-7 py-6 sm:py-8 flex flex-col justify-between text-[#0B0905] z-25 pointer-events-none">
            {/* Top Row: HANDLE WITH HYPE at top-right */}
            <div className="flex justify-end items-start w-full">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.2em] text-[#76746E] uppercase">
                HANDLE WITH HYPE
              </span>
            </div>

            {/* Center Monogram Typography */}
            <div className="text-center my-auto">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B0905] uppercase leading-none">
                MAVRIC
              </h2>
              {/* Hairlines Flanking Flagship Collection */}
              <div className="flex items-center justify-center gap-3 mt-3 text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-[#0B0905] uppercase">
                <span className="w-8 sm:w-14 h-[1px] bg-[#0B0905]/40" />
                <span>FLAGSHIP COLLECTION</span>
                <span className="w-8 sm:w-14 h-[1px] bg-[#0B0905]/40" />
              </div>
            </div>

            {/* Bottom Row: Barcode (~28 bars) & US 4–13 · UNISEX */}
            <div className="flex justify-between items-end">
              {/* Barcode Graphic */}
              <div className="flex items-end gap-[2px] h-5 sm:h-6">
                {[
                  2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 2,
                  1, 1, 2, 3, 1,
                ].map((w, i) => (
                  <div
                    key={i}
                    className="bg-[#0B0905]"
                    style={{ width: `${w * 1.3}px`, height: "100%" }}
                  />
                ))}
              </div>

              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#0B0905]">
                US 4–13 · UNISEX
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Controls: Prompt Text + NOTIFY ME Button */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-3 z-30 mt-2">
        {/* Clean Grey Monospace Prompt Text */}
        <p className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.24em] text-[#76746E] uppercase">
          RUN YOUR CURSOR OVER THE BOX
        </p>

        {/* Lime Pill CTA Button */}
        <button
          onClick={onOpenNotify}
          className="bg-[#D1F744] hover:bg-[#c3ec37] text-[#0B0905] font-black text-xs tracking-wider px-9 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-[0_6px_22px_rgba(209,247,68,0.4)] uppercase"
        >
          NOTIFY ME
        </button>
      </div>
    </section>
  );
}
