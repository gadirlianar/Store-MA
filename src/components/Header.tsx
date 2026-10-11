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
  activeSection = "hero",
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
          ? "bg-[#EDEBE4]/90 backdrop-blur-md border-b border-[#14110D]/10 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-8 md:px-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <span className="font-extrabold text-2xl tracking-tighter text-[#14110D]">
            SRIGEN
          </span>
          <span className="bg-[#DEF86F] text-[#14110D] font-bold text-[11px] px-2 py-0.5 rounded-full tracking-wider">
            001
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {isLanding ? (
            [
              { id: "hero", label: "THE DROP" },
              { id: "anatomy", label: "ANATOMY" },
              { id: "lookbook", label: "LOOKBOOK" },
              { id: "details", label: "STORY" },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative py-1 text-xs font-semibold tracking-wider text-[#14110D] transition-opacity hover:opacity-100 uppercase"
                >
                  <span className={isActive ? "opacity-100 font-bold" : "opacity-80"}>
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DEF86F]" />
                  )}
                </a>
              );
            })
          ) : (
            [
              { href: "/#hero", label: "THE DROP", active: false },
              { href: "/shop", label: "ALL SHOES", active: pathname === "/shop" || pathname.startsWith("/shop/") },
              { href: "/#lookbook", label: "LOOKBOOK", active: false },
              { href: "/story", label: "STORY", active: pathname === "/story" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-1 text-xs font-semibold tracking-wider text-[#14110D] transition-opacity hover:opacity-100 uppercase"
              >
                <span className={item.active ? "opacity-100 font-bold" : "opacity-80"}>
                  {item.label}
                </span>
                {item.active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DEF86F]" />
                )}
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
              className="flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-[#DEF86F]"
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
              <span className="bg-[#DEF86F] text-[#111111] font-mono font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            </button>
          ) : (
            <button
              onClick={onOpenNotify}
              className="bg-[#DEF86F] hover:bg-[#d5f35b] text-[#14110D] font-bold text-xs tracking-wider px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-sm uppercase"
            >
              NOTIFY ME
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
