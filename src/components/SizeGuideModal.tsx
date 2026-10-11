"use client";

import React, { useEffect } from "react";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeTable = [
    { us: "7.0", uk: "6.0", eu: "40.0", cm: "25.0" },
    { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
    { us: "8.0", uk: "7.0", eu: "41.0", cm: "26.0" },
    { us: "8.5", uk: "7.5", eu: "42.0", cm: "26.5" },
    { us: "9.0", uk: "8.0", eu: "42.5", cm: "27.0" },
    { us: "9.5", uk: "8.5", eu: "43.0", cm: "27.5" },
    { us: "10.0", uk: "9.0", eu: "44.0", cm: "28.0" },
    { us: "10.5", uk: "9.5", eu: "44.5", cm: "28.5" },
    { us: "11.0", uk: "10.0", eu: "45.0", cm: "29.0" },
    { us: "11.5", uk: "10.5", eu: "45.5", cm: "29.5" },
    { us: "12.0", uk: "11.0", eu: "46.0", cm: "30.0" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Darkened backdrop */}
      <div
        className="fixed inset-0 bg-[#0B0B0B]/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-[#F4F3ED] border border-black/10 rounded-[28px] p-8 md:p-10 shadow-2xl z-10 select-none text-[#111111]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#6B6A65] uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
          <span>FITTING SPECIFICATION</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">
          SIZE GUIDE — UNISEX
        </h3>
        <p className="text-xs text-[#6B6A65] mt-1">
          MAVRIC shoes are engineered with true-to-size standard performance width (D).
        </p>

        {/* Conversion Table */}
        <div className="mt-6 border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#111111] text-white font-mono text-[11px] uppercase">
              <tr>
                <th className="py-3 px-4">US MENS</th>
                <th className="py-3 px-4">UK</th>
                <th className="py-3 px-4">EU</th>
                <th className="py-3 px-4">LENGTH (CM)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 font-mono">
              {sizeTable.map((row, idx) => (
                <tr
                  key={row.us}
                  className={idx % 2 === 0 ? "bg-white" : "bg-black/[0.02]"}
                >
                  <td className="py-2.5 px-4 font-bold">{row.us}</td>
                  <td className="py-2.5 px-4 text-[#6B6A65]">{row.uk}</td>
                  <td className="py-2.5 px-4 text-[#6B6A65]">{row.eu}</td>
                  <td className="py-2.5 px-4 text-[#6B6A65]">{row.cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-black/5 border border-black/5 text-xs text-[#6B6A65] leading-relaxed">
          <strong className="text-black font-bold">Fit Recommendation:</strong> If you are between sizes or prefer a relaxed forefoot fit for long-distance runs, we recommend taking a half size larger.
        </div>
      </div>
    </div>
  );
}
