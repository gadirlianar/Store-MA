"use client";

import React, { useEffect, useState } from "react";

export default function OpeningSequence({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      return !(urlParams.get("freeze") === "1" || urlParams.get("skipIntro") === "1");
    }
    return true;
  });

  const [phase, setPhase] = useState<"eyelets" | "lacing" | "decode" | "exit">("eyelets");
  const [displayText, setDisplayText] = useState("SRIGE..");

  useEffect(() => {
    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    // Phase 1: Eyelets appear (0 - 300ms)
    // Phase 2: Dynamic Lacing begins (300ms - 1500ms)
    const t1 = setTimeout(() => {
      setPhase("lacing");
    }, 300);

    // Phase 3: Decrypt "SRIGE.." -> "SRIGEN" (1500ms - 2200ms)
    const t2 = setTimeout(() => {
      setPhase("decode");
      setDisplayText("SRIGEN");
    }, 1500);

    // Phase 4: Curtain rolls up (2300ms)
    const t3 = setTimeout(() => {
      setPhase("exit");
    }, 2300);

    // Cleanup and complete (3000ms)
    const t4 = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#0B0B0B] z-[9999] flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        phase === "exit" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative w-[340px] h-[380px] flex flex-col items-center justify-center">
        {/* Eyelets Grid & Lacing Animation */}
        <div className="relative w-[240px] h-[280px]">
          <svg
            viewBox="0 0 240 280"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            {/* 10 Eyelet Rings (2 Columns x 5 Rows) */}
            {[
              { l: [50, 30], r: [190, 30] },
              { l: [50, 85], r: [190, 85] },
              { l: [50, 140], r: [190, 140] },
              { l: [50, 195], r: [190, 195] },
              { l: [50, 250], r: [190, 250] },
            ].map((pair, idx) => (
              <g key={idx}>
                {/* Left Eyelet */}
                <circle
                  cx={pair.l[0]}
                  cy={pair.l[1]}
                  r="7"
                  className="stroke-[#D4FF00] stroke-2 fill-[#0B0B0B]"
                />
                <circle cx={pair.l[0]} cy={pair.l[1]} r="3" fill="#D4FF00" />

                {/* Right Eyelet */}
                <circle
                  cx={pair.r[0]}
                  cy={pair.r[1]}
                  r="7"
                  className="stroke-[#D4FF00] stroke-2 fill-[#0B0B0B]"
                />
                <circle cx={pair.r[0]} cy={pair.r[1]} r="3" fill="#D4FF00" />
              </g>
            ))}

            {/* Zigzag Lacing Path */}
            <path
              d="M 50 30 L 190 85 L 50 140 L 190 195 L 50 250 M 190 30 L 50 85 L 190 140 L 50 195 L 190 250"
              stroke="#D4FF00"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 900,
                strokeDashoffset: phase === "eyelets" ? 900 : 0,
                transition: "stroke-dashoffset 1.2s cubic-bezier(0.45, 0, 0.55, 1)",
              }}
            />
          </svg>
        </div>

        {/* Brand Decoding & Volt Underline */}
        <div className="mt-6 flex flex-col items-center">
          <span className="font-mono text-3xl font-black tracking-widest text-white uppercase">
            {displayText}
          </span>
          <div
            className="h-[3px] bg-[#D4FF00] rounded-full transition-all duration-500 ease-out mt-2"
            style={{
              width: phase === "decode" || phase === "exit" ? "80px" : "0px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
