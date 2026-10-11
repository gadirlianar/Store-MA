"use client";

import React, { useEffect, useState } from "react";

export default function OpeningSequence({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  // Phases:
  // 1: eyelets & lacing (0 - 800ms)
  // 2: staggered SRIGEN wordmark + expanding lime underline (800ms - 1400ms)
  // 3: loader group moves up ~115px (1400ms - 1900ms)
  // 4: full curtain wipe exit (1900ms - 2500ms)
  const [stage, setStage] = useState<"lacing" | "wordmark" | "shiftUp" | "exit">("lacing");

  useEffect(() => {
    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    const t1 = setTimeout(() => {
      setStage("wordmark");
    }, 850);

    const t2 = setTimeout(() => {
      setStage("shiftUp");
    }, 1450);

    const t3 = setTimeout(() => {
      setStage("exit");
    }, 2000);

    const t4 = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  // Forensic eyelets: 2 columns, 5 rows.
  // 87px horizontal spacing: x = 56.5 and x = 143.5 (diff = 87px)
  // 41px vertical spacing: y = 30, 71, 112, 153, 194 (diff = 41px)
  const eyeletRows = [30, 71, 112, 153, 194];
  const leftX = 56.5;
  const rightX = 143.5;

  // Lacing path:
  // Starts hanging below bottom-left (x: 42, y: 240)
  // Enters left row 5 (56.5, 194)
  // Crosses to right row 4 (143.5, 153)
  // Crosses to left row 4 (56.5, 153)
  // Crosses to right row 3 (143.5, 112)
  // Crosses to left row 3 (56.5, 112)
  // Crosses to right row 2 (143.5, 71)
  // Crosses to left row 2 (56.5, 71)
  // Crosses to right row 1 (143.5, 30)
  // Loops across top to left row 1 (56.5, 30)
  // NOTE: (rightX, 194) - bottom-right eyelet - is never connected (EV-01)!
  const lacingPath = `
    M 42 240
    L ${leftX} 194
    L ${rightX} 153
    L ${leftX} 153
    L ${rightX} 112
    L ${leftX} 112
    L ${rightX} 71
    L ${leftX} 71
    L ${rightX} 30
    C 120 12, 80 12, ${leftX} 30
  `;

  // Staggered letters for SRIGEN per EV-02
  const letters = [
    { char: "S", offset: "translate-y-0" },
    { char: "R", offset: "-translate-y-1" },
    { char: "I", offset: "translate-y-1.5" },
    { char: "G", offset: "-translate-y-0.5" },
    { char: "E", offset: "translate-y-1" },
    { char: "N", offset: "translate-y-0" },
  ];

  return (
    <div
      className={`fixed inset-0 bg-[#0B0905] z-[9999] flex items-center justify-center pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        stage === "exit" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Loader Group: Shifts up ~115px at stage "shiftUp" per EV-03 */}
      <div
        className={`relative flex flex-col items-center justify-center transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          stage === "shiftUp" || stage === "exit" ? "-translate-y-[115px]" : "translate-y-0"
        }`}
      >
        {/* Eyelets & Lace SVG: 200x240 box */}
        <div className="relative w-[200px] h-[240px]">
          <svg
            viewBox="0 0 200 240"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            {/* Eyelet Rings (5 left, 5 right) */}
            {eyeletRows.map((y, idx) => (
              <g key={idx}>
                {/* Left Column Eyelet */}
                <circle
                  cx={leftX}
                  cy={y}
                  r="6.5"
                  stroke="#D1F744"
                  strokeWidth="2.4"
                  fill="#0B0905"
                />
                <circle cx={leftX} cy={y} r="2.5" fill="#0B0905" />

                {/* Right Column Eyelet (row 5 remains unconnected) */}
                <circle
                  cx={rightX}
                  cy={y}
                  r="6.5"
                  stroke="#D1F744"
                  strokeWidth="2.4"
                  fill="#0B0905"
                />
                <circle cx={rightX} cy={y} r="2.5" fill="#0B0905" />
              </g>
            ))}

            {/* Zig-zag Shoelace Thread */}
            <path
              d={lacingPath}
              stroke="#D1F744"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 920,
                animation: "laceDraw 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards",
              }}
            />
          </svg>
        </div>

        {/* Off-White SRIGEN Wordmark with Staggered Heights (EV-02) */}
        <div
          className={`mt-4 flex flex-col items-center transition-all duration-500 ${
            stage !== "lacing" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="flex items-center tracking-tighter text-[#F1ECE5] font-black text-3xl sm:text-4xl">
            {letters.map((item, idx) => (
              <span
                key={idx}
                className={`inline-block transition-transform duration-300 ${item.offset}`}
              >
                {item.char}
              </span>
            ))}
          </div>

          {/* Growing Lime Underline per EV-02 & EV-03 */}
          <div className="mt-1 h-[2.5px] bg-[#D1F744] rounded-full transition-all duration-500 ease-out"
            style={{
              width: stage === "wordmark" ? "36px" : "130px",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes laceDraw {
          from {
            stroke-dashoffset: 920;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
