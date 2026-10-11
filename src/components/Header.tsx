"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  onOpenNotify?: () => void;
  activeSection?: string;
  showBag?: boolean;
}

export default function Header({
  onOpenNotify,
  showBag = false,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { itemCount, setIsBagOpen } = useCart();
  const isLanding = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F1ECE5]/85 backdrop-blur-md border-b border-[#0B0905]/10 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <span className="font-black text-2xl tracking-tight text-[#0B0905]">
            MAVRIC
          </span>
        </Link>

        {/* Navigation Links with Minimalist Luxury Hover Effect */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {isLanding ? (
            [
              { href: "/#hero", label: "COLLECTION" },
              { href: "/shop", label: "ALL SHOES" },
              { href: "/#anatomy", label: "ANATOMY" },
              { href: "/lookbook", label: "LOOKBOOK" },
              { href: "/story", label: "STORY" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative py-1.5 px-0.5 text-xs font-bold tracking-wider text-[#0B0905]/80 hover:text-[#0B0905] uppercase transition-colors"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#D1F744] opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  <span>{item.label}</span>
                </span>
                {/* Subtle expanding volt underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D1F744] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))
          ) : (
            [
              { href: "/#hero", label: "COLLECTION", active: false },
              { href: "/shop", label: "ALL SHOES", active: pathname === "/shop" || pathname.startsWith("/shop/") },
              { href: "/#anatomy", label: "ANATOMY", active: false },
              { href: "/lookbook", label: "LOOKBOOK", active: pathname === "/lookbook" },
              { href: "/story", label: "STORY", active: pathname === "/story" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-1.5 px-0.5 text-xs font-bold tracking-wider text-[#0B0905]/80 hover:text-[#0B0905] uppercase transition-colors"
              >
                <span className={`relative z-10 flex items-center gap-1.5 ${item.active ? "text-[#0B0905] font-black" : ""}`}>
                  <span className={`w-1 h-1 rounded-full bg-[#D1F744] transition-all duration-200 ${item.active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                  <span>{item.label}</span>
                </span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#D1F744] transition-all duration-300 ease-out ${item.active ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))
          )}
        </nav>

        {/* CTA / Action Button */}
        <div className="flex items-center gap-3">
          {!isLanding || showBag ? (
            <button
              onClick={() => setIsBagOpen(true)}
              aria-label={`Shopping bag with ${itemCount} items`}
              className="flex items-center gap-2 bg-[#0B0905] hover:bg-black text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-[#D1F744]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="uppercase font-mono text-[11px] tracking-wider">BAG</span>
              <span className="bg-[#D1F744] text-[#0B0905] font-mono font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            </button>
          ) : (
            <button
              onClick={onOpenNotify}
              className="bg-[#D1F744] hover:bg-[#c2e838] text-[#0B0905] font-black text-xs tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-sm uppercase"
            >
              NOTIFY ME
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
