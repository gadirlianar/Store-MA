"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const rawOrderId = searchParams.get("orderId");
  const total = searchParams.get("total") || "330";

  if (!rawOrderId || rawOrderId === "not-found") {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-black/5 text-[#111111] font-black text-2xl flex items-center justify-center mx-auto mb-6">
          ✕
        </div>

        <span className="text-xs font-mono font-bold tracking-widest text-[#6B6A65] uppercase block mb-1">
          RECORD UNRESOLVED
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
          ORDER NOT FOUND
        </h1>
        <p className="text-xs text-[#6B6A65] mt-2 max-w-md mx-auto leading-relaxed">
          No active order record matches this reference number. Please check your order confirmation email or contact our concierge support team.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-[#D4FF00] hover:bg-[#c3ec00] text-black font-black text-xs tracking-wider px-8 py-4 rounded-full uppercase shadow-md transition-all active:scale-[0.99]"
          >
            DISCOVER ALL SHOES
          </Link>
          <Link
            href="/bag"
            className="bg-[#111111] hover:bg-black text-white font-bold text-xs tracking-wider px-8 py-4 rounded-full uppercase transition-all"
          >
            REVIEW BAG
          </Link>
        </div>
      </div>
    );
  }

  const orderId = rawOrderId;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm text-center">
      <div className="w-16 h-16 rounded-full bg-[#D4FF00] text-black font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
        ✓
      </div>

      <span className="text-xs font-mono font-bold tracking-widest text-[#6B6A65] uppercase block mb-1">
        ORDER CONFIRMED
      </span>
      <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
        THANK YOU FOR YOUR ORDER
      </h1>
      <p className="text-xs text-[#6B6A65] mt-2 max-w-md mx-auto leading-relaxed">
        Your order has been placed and is being prepared for dispatch. A confirmation receipt and courier tracking details will be dispatched to your email.
      </p>

      {/* Order Info Card */}
      <div className="my-8 p-6 rounded-2xl bg-[#F4F3ED] border border-black/5 text-xs font-mono flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-[#6B6A65]">ORDER IDENTIFIER:</span>
          <span className="font-bold text-black">{orderId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B6A65]">TOTAL AMOUNT:</span>
          <span className="font-bold text-black">${total}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B6A65]">ESTIMATED DISPATCH:</span>
          <span className="font-bold text-black">Within 24 Hours</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B6A65]">DELIVERY METHOD:</span>
          <span className="font-bold text-black">Standard Tracked (3–5 Business Days)</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/shop"
          className="bg-[#D4FF00] hover:bg-[#c3ec00] text-black font-black text-xs tracking-wider px-8 py-4 rounded-full uppercase shadow-md transition-all active:scale-[0.99]"
        >
          CONTINUE SHOPPING
        </Link>
        <Link
          href="/"
          className="bg-[#111111] hover:bg-black text-white font-bold text-xs tracking-wider px-8 py-4 rounded-full uppercase transition-all"
        >
          RETURN TO HOME
        </Link>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black">
      <ShoelaceCursor />
      <Header />

      <main className="max-w-[1440px] mx-auto pt-36 pb-24 px-6 sm:px-12 lg:px-16">
        <Suspense fallback={<div className="text-center py-24 font-mono text-xs">Loading order confirmation...</div>}>
          <OrderConfirmationContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
