"use client";

import React, { useState } from "react";
import Link from "next/link";


export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterStatus("success");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#E8E6DF] border-t border-[#14110D]/10 pt-16 pb-12 px-8 md:px-16 text-[#14110D] select-none">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-12">
        {/* Top Grid: Brand & Newsletter + Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand & Newsletter Column (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="font-extrabold text-2xl tracking-tighter text-[#14110D]">
                MAVRIC
              </span>
            </Link>

            {/* Streamlined Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2 max-w-sm">
              <label htmlFor="newsletter-input" className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#6B6A65]">
                MAVRIC ALLOCATION UPDATES
              </label>
              <div className="relative flex items-center">
                <input
                  id="newsletter-input"
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="enter email address..."
                  className="w-full bg-white border border-[#14110D]/10 rounded-full pl-5 pr-24 py-2.5 text-xs text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#DEF86F] placeholder:text-black/30 font-mono shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1 bg-[#111111] hover:bg-black text-[#DEF86F] font-bold text-xs uppercase px-5 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap"
                >
                  {newsletterStatus === "success" ? "JOINED ✓" : "JOIN"}
                </button>
              </div>
            </form>
          </div>

          {/* Links Column 1: STORE */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#14110D]">
              STORE
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#6B6A65]">
              <li>
                <Link href="/shop" className="hover:text-black transition-colors">
                  All Shoes
                </Link>
              </li>
              <li>
                <Link href="/shop?collection=Runners" className="hover:text-black transition-colors">
                  Runners
                </Link>
              </li>
              <li>
                <Link href="/shop?collection=Court" className="hover:text-black transition-colors">
                  Court
                </Link>
              </li>
              <li>
                <Link href="/shop?collection=Lifestyle" className="hover:text-black transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/bag" className="hover:text-black transition-colors">
                  Shopping Bag
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: SILHOUETTES */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#14110D]">
              SILHOUETTES
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#6B6A65]">
              <li>
                <Link href="/shop/aero-flux" className="hover:text-black transition-colors">
                  Aero Flux
                </Link>
              </li>
              <li>
                <Link href="/shop/ghost-runner" className="hover:text-black transition-colors">
                  Ghost Runner
                </Link>
              </li>
              <li>
                <Link href="/shop/terra-247" className="hover:text-black transition-colors">
                  Terra 247
                </Link>
              </li>
              <li>
                <Link href="/shop/court-prime" className="hover:text-black transition-colors">
                  Court Prime
                </Link>
              </li>
              <li>
                <Link href="/#hero" className="hover:text-black transition-colors">
                  The Flagship
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: ASSISTANCE */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#14110D]">
              ASSISTANCE
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#6B6A65]">
              <li>
                <Link href="/story" className="hover:text-black transition-colors">
                  The Story
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="hover:text-black transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-black transition-colors">
                  Client FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors">
                  Concierge Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 4: LEGAL */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#14110D]">
              COMPLIANCE
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#6B6A65]">
              <li>
                <Link href="/privacy" className="hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Social Channels & Back to Top */}
        <div className="pt-8 border-t border-[#14110D]/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs">
          {/* Social Media Links with Exact Official Vector SVGs & High-Contrast Streetwear Luxury Styling */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {[
              {
                name: "Instagram",
                label: "INSTAGRAM",
                href: "https://instagram.com/mavric",
                icon: (
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
              {
                name: "X",
                label: "X",
                href: "https://x.com/mavric",
                icon: (
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                name: "TikTok",
                label: "TIKTOK",
                href: "https://tiktok.com/@mavric",
                icon: (
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06 6.34 6.34 0 1 0 6.34 6.34V8.76a8.27 8.27 0 0 0 3.77.92V6.69z" />
                  </svg>
                ),
              },
              {
                name: "YouTube",
                label: "YOUTUBE",
                href: "https://youtube.com/@mavric",
                icon: (
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#14110D] text-[#EDEBE4] hover:bg-[#D1F744] hover:text-[#0B0905] px-3.5 py-2 rounded-full text-[11px] font-mono font-bold tracking-wider transition-colors duration-150 cursor-pointer shadow-sm uppercase select-none"
              >
                {social.icon}
                <span>{social.label}</span>
                <span className="text-[10px] opacity-70">↗</span>
              </a>
            ))}
          </div>

          {/* Right: Back to top */}
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-[#14110D] text-[#D1F744] hover:bg-black hover:text-white px-5 py-2.5 rounded-full font-mono text-[11px] font-bold tracking-widest uppercase transition-colors duration-150 cursor-pointer shadow-sm select-none"
            >
              <span>BACK TO TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        {/* Creator Signature / Credit — Prominent, Prestigious & High Fashion */}
        <div className="pt-10 border-t border-[#14110D]/10 flex flex-col items-center justify-center gap-3 text-center">
          <div className="inline-flex items-center gap-3.5 bg-white/80 border border-[#14110D]/10 px-8 py-3 rounded-full shadow-sm hover:scale-105 transition-transform duration-200">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DEF86F] animate-pulse shadow-sm" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#76746E]">
              DIRECTED & CRAFTED BY
            </span>
            <span className="text-sm font-black tracking-[0.2em] text-[#14110D] uppercase">
              ANAR GADIRLI
            </span>
          </div>
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#76746E]/70 uppercase">
            MAVRIC ARCHIVES · PARIS / NEW YORK / TOKYO · ALL RIGHTS RESERVED © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
