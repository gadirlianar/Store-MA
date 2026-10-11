"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import AudioToggle from "@/components/AudioToggle";

interface LookbookItem {
  id: string;
  category: "URBAN PACE" | "MONOCHROME" | "NIGHT RUN";
  title: string;
  location: string;
  silhouette: string;
  slug: string;
  image: string;
  aspect: "tall" | "wide" | "square";
}

const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: "look-1",
    category: "URBAN PACE",
    title: "EAST LONDON CONCRETE CADENCE",
    location: "LONDON, E1 // 07:14 GMT",
    silhouette: "AERO FLUX",
    slug: "aero-flux",
    image: "/assets/products/aero-flux.jpg",
    aspect: "tall",
  },
  {
    id: "look-2",
    category: "NIGHT RUN",
    title: "TRIPLE BLACK DAMPENING OVER ASPHALT",
    location: "SHOREDITCH HIGH ST // 23:40 GMT",
    silhouette: "GHOST RUNNER",
    slug: "ghost-runner",
    image: "/assets/products/ghost-runner.jpg",
    aspect: "tall",
  },
  {
    id: "look-3",
    category: "MONOCHROME",
    title: "DESERT SAND TEXTURE DISSECTION",
    location: "ATELIER ARCHIVE // 14:00 GMT",
    silhouette: "TERRA 247",
    slug: "terra-247",
    image: "/assets/products/terra-247.jpg",
    aspect: "tall",
  },
  {
    id: "look-4",
    category: "URBAN PACE",
    title: "GUM SOLE ARCHIVAL TRACTION",
    location: "BARBICAN COMPLEX // 11:30 GMT",
    silhouette: "COURT PRIME",
    slug: "court-prime",
    image: "/assets/products/court-prime.jpg",
    aspect: "tall",
  },
  {
    id: "look-5",
    category: "MONOCHROME",
    title: "SUEDE PANELING OVER NATURAL GRAIN",
    location: "HACKNEY ARCHES // 16:20 GMT",
    silhouette: "BASELINE 88",
    slug: "baseline-88",
    image: "/assets/products/baseline-88.jpg",
    aspect: "tall",
  },
  {
    id: "look-6",
    category: "NIGHT RUN",
    title: "VOLT POP UNDER REAR DIFFUSER",
    location: "CANARY WHARF UNDERPASS // 02:10 GMT",
    silhouette: "SHATTER",
    slug: "shatter",
    image: "/assets/products/shatter.jpg",
    aspect: "tall",
  },
  {
    id: "look-7",
    category: "URBAN PACE",
    title: "MUTED STONE DAILY RIGOR",
    location: "BERMONDSEY WALL // 09:45 GMT",
    silhouette: "DRIFT",
    slug: "drift",
    image: "/assets/products/drift.jpg",
    aspect: "tall",
  },
  {
    id: "look-8",
    category: "MONOCHROME",
    title: "PITCH BLACK LOW-TOP ARCHITECTURE",
    location: "WHITECHAPEL GALLERY // 18:00 GMT",
    silhouette: "BLACKOUT LOW",
    slug: "blackout-low",
    image: "/assets/products/blackout-low.jpg",
    aspect: "tall",
  },
  {
    id: "look-9",
    category: "URBAN PACE",
    title: "HEAVY CANVAS PATINA STUDY",
    location: "REGENT CANAL TOWPATH // 15:10 GMT",
    silhouette: "CANVAS LOW",
    slug: "canvas-ember",
    image: "/assets/products/canvas-ember.jpg",
    aspect: "tall",
  },
];

export default function LookbookPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filteredItems =
    activeFilter === "ALL"
      ? LOOKBOOK_ITEMS
      : LOOKBOOK_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black">
      <ShoelaceCursor />
      <AudioToggle />
      <Header />

      <main className="max-w-[1520px] mx-auto pt-36 pb-24 px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#6B6A65] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span>CAMPAIGN ARCHIVE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase">
              EDITORIAL LOOKBOOK
            </h1>
            <p className="text-xs font-mono text-[#6B6A65] mt-2 uppercase tracking-widest max-w-xl">
              Nine silhouettes documented in movement across the asphalt, concrete, and subways of London.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "URBAN PACE", "MONOCHROME", "NIGHT RUN"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono px-4 py-2 rounded-full transition-all cursor-pointer uppercase ${
                  activeFilter === cat
                    ? "bg-[#D4FF00] text-black font-bold shadow-sm"
                    : "bg-white text-black/70 hover:bg-black/5 border border-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`/shop/${item.slug}`}
              className="group relative flex flex-col bg-[#EBE8E1] rounded-[28px] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] bg-[#E3E1D8] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Volt Silhouette Pill Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#D4FF00] text-black font-mono font-black text-[11px] px-3 py-1 rounded-full uppercase shadow-md group-hover:scale-105 transition-transform">
                    {item.silhouette}
                  </span>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="p-6 bg-white flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B6A65] uppercase block mb-1">
                    {item.location}
                  </span>
                  <h3 className="text-lg font-black tracking-tight text-[#111111] uppercase group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-mono text-[#6B6A65]">
                  <span>SHOP SILHOUETTE</span>
                  <span className="font-bold text-black group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
