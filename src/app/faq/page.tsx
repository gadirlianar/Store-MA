"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import AudioToggle from "@/components/AudioToggle";

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    category: "RELEASES & ORDERS",
    q: "HOW DOES THE ORDER & ALLOCATION SYSTEM WORK?",
    a: "Every silhouette released by MAVRIC is produced in focused atelier batches in Civitanova, Italy. Once registration or ordering opens, orders are fulfilled directly with insured priority courier dispatch.",
  },
  {
    category: "RELEASES & ORDERS",
    q: "DOES MAVRIC INTRODUCE SEASONAL RUNS OR NEW SILHOUETTES?",
    a: "Yes. MAVRIC introduces signature seasonal capsules, architectural silhouettes, and core atelier staples. When a specific colorway batch concludes, future evolutions follow our official brand roadmap.",
  },
  {
    category: "SIZING & FIT",
    q: "HOW DO MAVRIC SNEAKERS FIT COMPARED TO STANDARD ATHLETIC SHOES?",
    a: "All models fit true to standard US athletic sizing (D width). If you typically take a US 10 in technical running shoes, select US 10. For runners who prefer extra forefoot clearance over ultra-marathon distances, sizing up by half a size is recommended.",
  },
  {
    category: "SIZING & FIT",
    q: "DO YOU OFFER HALF SIZES OR WIDE OPTIONS?",
    a: "MAVRIC collections span full US sizes 7 through 13. Fine-tuned fit is accommodated via the included dual-density ergonomic footbeds (2mm and 4mm EVA inserts included in every presentation box).",
  },
  {
    category: "SHIPPING",
    q: "WHAT ARE THE SHIPPING TIMES AND THRESHOLDS?",
    a: "All orders over $150 receive complimentary Standard Tracked shipping (3–5 business days). Orders under $150 ship standard for free during the introductory period. Express Priority shipping (1–2 business days) is available worldwide for $18.",
  },
  {
    category: "SHIPPING",
    q: "WHEN DOES MY ORDER SHIP AFTER CHECKOUT?",
    a: "All orders placed before 2:00 PM GMT ship the same business day within 24 hours. You will receive an automated dispatch notification with real-time tracking.",
  },
  {
    category: "RETURNS",
    q: "CAN I RETURN OR EXCHANGE A MAVRIC PAIR?",
    a: "Yes. We honor a 30-day return policy from the date of delivery. Footwear must remain in pristine, unworn condition with all original serialized tags, shoe trees, and presentation box intact.",
  },
  {
    category: "AUTHENTICITY",
    q: "HOW ARE MAVRIC SILHOUETTES NUMBERED AND VERIFIED?",
    a: "Each pair is stamped with an archival unit code and features an NFC authentication chip embedded in the left footbed that links directly to our official digital registry.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["ALL", "RELEASES & ORDERS", "SIZING & FIT", "SHIPPING", "RETURNS", "AUTHENTICITY"];

  const filteredFaqs =
    activeCategory === "ALL"
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black">
      <ShoelaceCursor />
      <AudioToggle />
      <Header />

      <main className="max-w-[1440px] mx-auto pt-36 pb-24 px-6 sm:px-12 lg:px-16">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono text-[#6B6A65] uppercase tracking-wider mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-bold">FAQ</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-4xl mb-12">
          <div className="flex items-center gap-3">
            <span className="bg-[#D4FF00] text-black font-mono font-bold text-xs px-3 py-1 rounded-full uppercase">
              KNOWLEDGE BASE
            </span>
            <span className="text-xs font-mono text-[#6B6A65]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            FREQUENT QUESTIONS
          </h1>
          <p className="text-base text-[#6B6A65] mt-2 leading-relaxed max-w-2xl font-sans">
            Clear technical answers regarding MAVRIC allocations, MAV-FOAM engineering, delivery timelines, and atelier covenants.
          </p>
        </div>

        {/* Filter Category Chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#D4FF00] text-black shadow-sm"
                    : "bg-white text-[#6B6A65] border border-black/5 hover:border-black/20 hover:text-black"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 max-w-4xl">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl sm:rounded-3xl border border-black/5 p-6 sm:p-8 transition-all shadow-sm hover:border-black/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#D4FF00] bg-black px-2 py-0.5 rounded">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight">
                      {faq.q}
                    </h3>
                  </div>
                  <span className="text-xl font-bold font-mono text-[#6B6A65] shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-black/5 text-xs sm:text-sm text-[#6B6A65] leading-relaxed font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Need Assistance CTA Card */}
        <div className="mt-16 bg-[#111111] text-white rounded-3xl p-8 sm:p-12 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-mono text-[#D4FF00] uppercase tracking-wider font-bold">
              CONCIERGE DESK
            </span>
            <h3 className="text-2xl font-black uppercase mt-1">
              HAVE A SPECIFIC TECHNICAL QUERY?
            </h3>
            <p className="text-xs text-white/70 mt-1">
              Our footwear specialists answer sizing and drop questions in real time.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#D4FF00] hover:bg-[#c3ec00] text-black font-black text-xs uppercase px-8 py-4 rounded-full tracking-wider transition-all whitespace-nowrap"
          >
            CONTACT CONCIERGE
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
