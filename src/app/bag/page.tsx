"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import AudioToggle from "@/components/AudioToggle";
import { useCart } from "@/context/CartContext";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export default function BagPage() {
  const { items, updateQty, removeItem, subtotal } = useCart();
  const freeShippingDiff = FREE_SHIPPING_THRESHOLD - subtotal;
  const hasFreeShipping = freeShippingDiff <= 0;

  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black">
      <ShoelaceCursor />
      <AudioToggle />
      <Header />

      <main className="max-w-[1440px] mx-auto pt-32 pb-24 px-6 sm:px-12 lg:px-16">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">
            SHOPPING BAG
          </h1>
          <span className="bg-[#D4FF00] text-black font-mono font-black text-xs px-3 py-1 rounded-full uppercase shadow-sm">
            {items.reduce((sum, i) => sum + i.quantity, 0)} ITEMS
          </span>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-black/5 p-8 flex flex-col items-center max-w-xl mx-auto shadow-sm">
            <span className="text-5xl mb-4">👟</span>
            <h2 className="text-2xl font-black uppercase">Your bag is empty</h2>
            <p className="text-xs text-[#6B6A65] mt-1">
              Explore our performance running lineup and limited release silhouettes.
            </p>
            <Link
              href="/shop"
              className="mt-8 bg-[#111111] text-white text-xs font-bold px-8 py-3.5 rounded-full uppercase tracking-wider hover:bg-black transition-colors"
            >
              BROWSE ALL SHOES
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Items Column */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Free Shipping Alert */}
              <div className="p-4 bg-white rounded-2xl border border-black/5 text-xs font-mono">
                {hasFreeShipping ? (
                  <span className="font-bold text-black">
                    ✓ You have qualified for FREE standard delivery!
                  </span>
                ) : (
                  <span>
                    Add <strong className="font-bold text-black">${freeShippingDiff}</strong> more for free standard delivery.
                  </span>
                )}
                <div className="w-full h-1.5 bg-black/5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-[#D4FF00] rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="bg-white rounded-3xl border border-black/5 p-6 sm:p-8 flex flex-col divide-y divide-black/5 shadow-sm">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-center gap-6"
                  >
                    <div className="w-28 h-28 rounded-2xl bg-[#F4F3ED] p-3 shrink-0 flex items-center justify-center">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <h3 className="font-black text-lg tracking-tight uppercase">
                        {item.product.name}
                      </h3>
                      <p className="text-xs font-mono text-[#6B6A65] mt-1">
                        Size: US {item.size} · Color: {item.product.colorway}
                      </p>
                      <span className="font-mono font-bold text-sm block mt-2">
                        ${item.product.price}
                      </span>
                    </div>

                    {/* Stepper & Total */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center border border-black/10 rounded-full overflow-hidden bg-[#F4F3ED]">
                        <button
                          onClick={() =>
                            updateQty(item.product.id, item.size, item.quantity - 1)
                          }
                          className="px-3 py-1 text-xs font-bold hover:bg-black/10"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-mono font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQty(item.product.id, item.size, item.quantity + 1)
                          }
                          className="px-3 py-1 text-xs font-bold hover:bg-black/10"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-mono font-black text-base w-16 text-right">
                        ${item.product.price * item.quantity}
                      </span>

                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="text-black/40 hover:text-black font-bold text-sm cursor-pointer p-1"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Column */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm sticky top-32 flex flex-col gap-4">
              <h3 className="font-black text-lg tracking-tight uppercase pb-4 border-b border-black/10">
                SUMMARY
              </h3>

              <div className="flex justify-between text-xs font-mono text-[#6B6A65]">
                <span>Subtotal</span>
                <span className="font-bold text-black">${subtotal}</span>
              </div>

              <div className="flex justify-between text-xs font-mono text-[#6B6A65]">
                <span>Standard Shipping</span>
                <span className="font-bold text-black">
                  {hasFreeShipping ? "FREE" : "$0 (Calculated at checkout)"}
                </span>
              </div>

              <div className="pt-4 border-t border-black/10 flex justify-between items-center font-mono">
                <span className="font-black text-base uppercase">TOTAL</span>
                <span className="font-black text-2xl">${subtotal}</span>
              </div>

              <Link
                href="/checkout"
                className="w-full mt-2 bg-[#D4FF00] hover:bg-[#c3ec00] text-black font-black text-xs tracking-wider py-4 rounded-full text-center uppercase shadow-md transition-all active:scale-[0.99]"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
