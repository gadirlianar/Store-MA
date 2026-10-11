"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import AudioToggle from "@/components/AudioToggle";
import {
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_STANDARD_PRICE,
  SHIPPING_EXPRESS_PRICE,
} from "@/lib/constants";

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black">
      <ShoelaceCursor />
      <AudioToggle />
      <Header />

      <main className="max-w-[1440px] mx-auto pt-36 pb-24 px-6 sm:px-12 lg:px-16">
        {/* Breadcrumbs */}
        <nav className="text-xs font-mono text-[#6B6A65] uppercase tracking-wider mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-bold">Shipping & Returns</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-4xl mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-[#D4FF00] text-black font-mono font-bold text-xs px-3 py-1 rounded-full uppercase">
              FULFILLMENT POLICY
            </span>
            <span className="text-xs font-mono text-[#6B6A65]">
              SHIPS WORLDWIDE FROM LONDON HUB
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            SHIPPING & RETURNS
          </h1>
          <p className="text-base text-[#6B6A65] mt-2 leading-relaxed max-w-2xl font-sans">
            Every SRIGEN pair is individually packed in custom protective double-boxed packaging with tamper-evident serial tape.
          </p>
        </div>

        {/* 3 Core Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl mb-3 block">⚡</span>
              <h3 className="font-black text-xl uppercase mb-2">SHIPS IN 24H</h3>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                All confirmed drop orders are dispatched from our fulfillment center within 24 hours of drop closure.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/5 text-xs font-mono text-black font-bold">
              SAME-DAY DISPATCH BEFORE 2PM
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl mb-3 block">📦</span>
              <h3 className="font-black text-xl uppercase mb-2">FREE SHIPPING OVER ${FREE_SHIPPING_THRESHOLD}</h3>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                Complimentary standard tracked delivery on all orders exceeding ${FREE_SHIPPING_THRESHOLD}.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/5 text-xs font-mono text-black font-bold">
              AUTOMATICALLY APPLIED AT CHECKOUT
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-3xl mb-3 block">🔄</span>
              <h3 className="font-black text-xl uppercase mb-2">FREE 30-DAY RETURNS</h3>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                Hassle-free 30-day return policy for unworn sneakers with intact numbered certificates and original packaging.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/5 text-xs font-mono text-black font-bold">
              PREPAID RETURN LABELS INCLUDED
            </div>
          </div>
        </div>

        {/* Delivery Rates Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm mb-16">
          <h2 className="text-2xl font-black uppercase mb-6 tracking-tight">
            DELIVERY TIERS & TIMELINES
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left font-mono">
              <thead className="bg-[#111111] text-white uppercase text-[11px]">
                <tr>
                  <th className="py-4 px-6 rounded-l-2xl">SERVICE TIER</th>
                  <th className="py-4 px-6">TRANSIT TIME</th>
                  <th className="py-4 px-6">ORDER VALUE &lt; ${FREE_SHIPPING_THRESHOLD}</th>
                  <th className="py-4 px-6">ORDER VALUE ≥ ${FREE_SHIPPING_THRESHOLD}</th>
                  <th className="py-4 px-6 rounded-r-2xl">CARRIER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                <tr className="hover:bg-black/[0.02]">
                  <td className="py-4 px-6 font-bold text-black uppercase">
                    Standard Delivery
                  </td>
                  <td className="py-4 px-6 text-[#6B6A65]">3–5 business days</td>
                  <td className="py-4 px-6 font-bold">${SHIPPING_STANDARD_PRICE}</td>
                  <td className="py-4 px-6 font-bold text-[#111111] bg-[#D4FF00]/20">
                    FREE
                  </td>
                  <td className="py-4 px-6 text-[#6B6A65]">Royal Mail / DHL Tracked</td>
                </tr>
                <tr className="hover:bg-black/[0.02]">
                  <td className="py-4 px-6 font-bold text-black uppercase">
                    Express Priority
                  </td>
                  <td className="py-4 px-6 text-[#6B6A65]">1–2 business days</td>
                  <td className="py-4 px-6 font-bold">${SHIPPING_EXPRESS_PRICE}</td>
                  <td className="py-4 px-6 font-bold">${SHIPPING_EXPRESS_PRICE}</td>
                  <td className="py-4 px-6 text-[#6B6A65]">FedEx Air Express</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Returns Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm">
          <h2 className="text-2xl font-black uppercase mb-6 tracking-tight">
            HOW TO INITIATE A RETURN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2 p-5 bg-[#F4F3ED] rounded-2xl border border-black/5">
              <span className="font-mono font-bold text-xs bg-[#111111] text-[#D4FF00] px-2 py-0.5 rounded-full w-fit">
                STEP 01
              </span>
              <h4 className="font-black text-sm uppercase mt-2">Check Condition</h4>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                Ensure shoes are in brand-new, unworn condition with all original laces, tags, and box intact.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 bg-[#F4F3ED] rounded-2xl border border-black/5">
              <span className="font-mono font-bold text-xs bg-[#111111] text-[#D4FF00] px-2 py-0.5 rounded-full w-fit">
                STEP 02
              </span>
              <h4 className="font-black text-sm uppercase mt-2">Print Label</h4>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                Access your demo portal or concierge email to generate your prepaid digital return waybill.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 bg-[#F4F3ED] rounded-2xl border border-black/5">
              <span className="font-mono font-bold text-xs bg-[#111111] text-[#D4FF00] px-2 py-0.5 rounded-full w-fit">
                STEP 03
              </span>
              <h4 className="font-black text-sm uppercase mt-2">Drop Off</h4>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                Affix the label to outer packaging and hand over to any authorized carrier depot or drop point.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 bg-[#F4F3ED] rounded-2xl border border-black/5">
              <span className="font-mono font-bold text-xs bg-[#111111] text-[#D4FF00] px-2 py-0.5 rounded-full w-fit">
                STEP 04
              </span>
              <h4 className="font-black text-sm uppercase mt-2">Fast Refund</h4>
              <p className="text-xs text-[#6B6A65] leading-relaxed">
                Refunds are initiated within 48 hours of warehouse inspection back to the original method.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
