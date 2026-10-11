"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black flex flex-col justify-between">
      <ShoelaceCursor />
      <Header />

      <main className="max-w-[1440px] mx-auto pt-44 pb-28 px-6 sm:px-12 lg:px-16 text-center flex flex-col items-center flex-1 justify-center">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
          <span className="font-mono text-xs font-bold text-[#6B6A65] uppercase tracking-wider">
            ERROR CODE // 404
          </span>
        </div>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight leading-none mb-6">
          PAGE NOT FOUND
        </h1>

        <p className="text-sm sm:text-base text-[#6B6A65] max-w-lg mb-10 leading-relaxed font-sans">
          The requested coordinate or silhouette does not exist in the MAVRIC archive. It may have been retired or updated to another collection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/shop"
            className="bg-[#D4FF00] hover:bg-[#c3ec00] text-black font-black text-xs uppercase px-8 py-4 rounded-full tracking-wider transition-all shadow-md active:scale-95"
          >
            EXPLORE ALL SHOES
          </Link>
          <Link
            href="/"
            className="bg-[#111111] hover:bg-black text-white font-bold text-xs uppercase px-8 py-4 rounded-full tracking-wider transition-all"
          >
            RETURN HOME
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
