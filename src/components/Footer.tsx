"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DEMO_MODE } from "@/lib/constants";

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
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tighter text-[#14110D]">
                SRIGEN
              </span>
              <span className="bg-[#DEF86F] text-[#14110D] font-bold text-[11px] px-2 py-0.5 rounded-full tracking-wider">
                001
              </span>
            </Link>
            <p className="text-xs text-[#6B6A65] max-w-sm leading-relaxed">
              Ultra-limited technical footwear engineered with SR-FOAM core dampening. Handcrafted in numbered runs of 300 pairs.
            </p>

            {/* Newsletter Stub */}
            <form onSubmit={handleNewsletterSubmit} className="mt-2 flex flex-col gap-2 max-w-sm">
              <label htmlFor="newsletter-input" className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#6B6A65]">
                EXCLUSIVE DROP NOTIFICATIONS
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-input"
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="enter email address"
                  className="flex-1 bg-white border border-black/10 rounded-full px-4 py-2.5 text-xs text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#DEF86F] placeholder:text-black/30 font-mono"
                />
                <button
                  type="submit"
                  className="bg-[#111111] hover:bg-black text-[#DEF86F] font-bold text-xs uppercase px-5 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap"
                >
                  {newsletterStatus === "success" ? "JOINED ✓" : "JOIN"}
                </button>
              </div>
              <span className="text-[10px] text-[#6B6A65] font-mono">
                * Demo form stub — no marketing emails are dispatched.
              </span>
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
                <Link href="/shop/apex-trail" className="hover:text-black transition-colors">
                  Apex Trail
                </Link>
              </li>
              <li>
                <Link href="/shop/shatter" className="hover:text-black transition-colors">
                  Shatter
                </Link>
              </li>
              <li>
                <Link href="/#hero" className="hover:text-black transition-colors">
                  The 001 Drop
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
                  Drop FAQ
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
              <li>
                <span className="text-[11px] font-mono text-[#DEF86F] bg-[#111111] px-2 py-0.5 rounded-full w-fit">
                  DEMO MODE ACTIVE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Demo Mode Notice Banner */}
        {DEMO_MODE && (
          <div className="p-3.5 bg-black/5 rounded-2xl border border-black/5 text-center text-xs font-mono text-[#6B6A65]">
            <strong className="text-[#14110D]">DEMO NOTICE:</strong> This is a forensic demonstration storefront. No orders are fulfilled and no financial transactions are processed.
          </div>
        )}

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-[#14110D]/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-semibold tracking-wider text-[#76746E]">
          <div>
            <span>* SRIGEN INDUSTRIES — NO RESTOCK. EVER.</span>
          </div>

          <div className="flex items-center gap-8">
            <span className="opacity-60 font-mono">SRIGEN-001 // DROP 2026</span>
            <button
              onClick={scrollToTop}
              className="text-[#14110D] font-bold tracking-widest uppercase hover:opacity-70 transition-opacity cursor-pointer"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
