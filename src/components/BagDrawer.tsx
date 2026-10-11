"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export default function BagDrawer() {
  const { items, isBagOpen, setIsBagOpen, updateQty, removeItem, subtotal } =
    useCart();

  const freeShippingDiff = FREE_SHIPPING_THRESHOLD - subtotal;
  const hasFreeShipping = freeShippingDiff <= 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsBagOpen(false);
    };
    if (isBagOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isBagOpen, setIsBagOpen]);

  if (!isBagOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Darkened backdrop */}
      <div
        className="absolute inset-0 bg-[#0B0B0B]/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsBagOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F4F3ED] text-[#111111] shadow-2xl flex flex-col justify-between border-l border-black/10 select-none">
          {/* Header */}
          <div className="p-6 border-b border-black/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black tracking-tight uppercase">
                YOUR BAG
              </h2>
              <span className="text-xs font-mono font-bold bg-[#D4FF00] text-black px-2 py-0.5 rounded-full">
                {items.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsBagOpen(false)}
              className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-6 py-3 bg-black/5 border-b border-black/5 text-xs font-mono">
            {hasFreeShipping ? (
              <span className="text-black font-bold">
                ✓ Free standard shipping unlocked!
              </span>
            ) : (
              <span>
                Add <strong className="text-black font-bold">${freeShippingDiff}</strong> more for free shipping
              </span>
            )}
            <div className="w-full h-1.5 bg-black/10 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-[#D4FF00] rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%`,
                }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
            {items.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center">
                <span className="text-4xl mb-3">👟</span>
                <p className="font-bold text-base">Your bag is empty</p>
                <p className="text-xs text-[#6B6A65] mt-1">
                  Explore our limited drops and performance runners.
                </p>
                <Link
                  href="/shop"
                  onClick={() => setIsBagOpen(false)}
                  className="mt-6 bg-[#111111] text-white text-xs font-bold px-6 py-3 rounded-full uppercase tracking-wider hover:bg-black transition-colors"
                >
                  DISCOVER SHOES
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="p-4 bg-white rounded-2xl border border-black/5 shadow-sm flex gap-4 items-center"
                >
                  <div className="w-20 h-20 rounded-xl bg-[#F4F3ED] flex items-center justify-center p-2 shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-extrabold text-sm tracking-tight truncate uppercase">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="text-black/40 hover:text-black text-xs font-bold cursor-pointer ml-2"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="text-[11px] font-mono text-[#6B6A65] mt-0.5">
                      US {item.size} · ${item.product.price}
                    </p>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-black/10 rounded-full overflow-hidden bg-[#F4F3ED]">
                        <button
                          onClick={() =>
                            updateQty(item.product.id, item.size, item.quantity - 1)
                          }
                          className="px-2 py-0.5 text-xs font-bold hover:bg-black/10 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-mono font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQty(item.product.id, item.size, item.quantity + 1)
                          }
                          className="px-2 py-0.5 text-xs font-bold hover:bg-black/10 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-xs ml-auto">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Bar */}
          {items.length > 0 && (
            <div className="p-6 border-t border-black/10 bg-white flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#6B6A65] font-medium">Subtotal</span>
                <span className="font-black text-lg">${subtotal}</span>
              </div>

              <Link
                href="/checkout"
                onClick={() => setIsBagOpen(false)}
                className="w-full bg-[#D4FF00] hover:bg-[#c3ec00] text-black font-black text-xs tracking-wider py-4 rounded-full text-center uppercase shadow-md transition-all active:scale-[0.99]"
              >
                CHECKOUT — ${subtotal}
              </Link>

              <Link
                href="/bag"
                onClick={() => setIsBagOpen(false)}
                className="w-full bg-[#111111] hover:bg-black text-white font-bold text-xs tracking-wider py-3 rounded-full text-center uppercase transition-all"
              >
                VIEW FULL BAG
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
