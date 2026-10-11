"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import { SHIPPING_STANDARD_PRICE, SHIPPING_EXPRESS_PRICE } from "@/lib/constants";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();

  const [contactEmail, setContactEmail] = useState("alex.turner@example.com");
  const [isEditingContact, setIsEditingContact] = useState(false);

  const [activeStep, setActiveStep] = useState<"shipping" | "payment">("shipping");

  const [shippingData, setShippingData] = useState({
    firstName: "Alex",
    lastName: "Turner",
    address: "742 Evergreen Terrace",
    city: "Richmond",
    postalCode: "23219",
  });

  const [deliveryOption, setDeliveryOption] = useState<"standard" | "express">("standard");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shippingCost = deliveryOption === "standard" ? SHIPPING_STANDARD_PRICE : SHIPPING_EXPRESS_PRICE;
  const orderTotal = subtotal + shippingCost;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `SR-${Math.floor(100000 + Math.random() * 900000)}`;
      clearCart();
      router.push(`/order-confirmation?orderId=${orderId}&total=${orderTotal}`);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black">
      <ShoelaceCursor />

      {/* Minimal Checkout Header */}
      <header className="border-b border-black/10 bg-[#F4F3ED]/80 backdrop-blur-md sticky top-0 z-30 py-4 px-6 sm:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tighter text-[#111111]">
              SRIGEN
            </span>
            <span className="bg-[#D4FF00] text-black font-mono font-bold text-[11px] px-2 py-0.5 rounded-full">
              001
            </span>
          </Link>
          <span className="text-xs font-mono font-bold text-[#6B6A65] uppercase">
            SECURE CHECKOUT
          </span>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto py-12 px-6 sm:px-12 lg:px-16">
        {/* Title */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
              CHECKOUT
            </h1>
            <span className="bg-[#111111] text-[#D4FF00] font-mono font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              ENCRYPTED
            </span>
          </div>
          <p className="text-xs font-mono text-[#6B6A65] mt-1.5 uppercase tracking-wide">
            Guest checkout · under a minute · 256-bit secure dispatch
          </p>
        </div>

        {/* 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Accordion Steps */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Step 1: Contact Step */}
            <div className="p-6 bg-white rounded-3xl border border-black/5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D4FF00] text-black flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[#6B6A65] block">
                      1. CONTACT
                    </span>
                    <span className="font-mono text-sm font-bold">
                      {contactEmail}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditingContact(!isEditingContact)}
                  className="text-xs font-mono font-bold underline underline-offset-4 cursor-pointer hover:opacity-75 uppercase"
                >
                  {isEditingContact ? "DONE" : "EDIT"}
                </button>
              </div>

              {isEditingContact && (
                <div className="mt-4 pt-4 border-t border-black/5">
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              )}
            </div>

            {/* Step 2: Shipping Step */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-[#111111] text-white flex items-center justify-center font-mono font-bold text-xs">
                  2
                </div>
                <h3 className="font-black text-lg tracking-tight uppercase">
                  SHIPPING ADDRESS & DELIVERY
                </h3>
              </div>

              {activeStep === "shipping" ? (
                <div className="flex flex-col gap-4">
                  {/* Name fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-[#6B6A65] uppercase block mb-1">
                        FIRST NAME
                      </label>
                      <input
                        type="text"
                        value={shippingData.firstName}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, firstName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-black/10 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-[#6B6A65] uppercase block mb-1">
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        value={shippingData.lastName}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, lastName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-black/10 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="text-[11px] font-mono text-[#6B6A65] uppercase block mb-1">
                      ADDRESS
                    </label>
                    <input
                      type="text"
                      value={shippingData.address}
                      onChange={(e) =>
                        setShippingData({ ...shippingData, address: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  {/* City & Postal Code */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-[#6B6A65] uppercase block mb-1">
                        CITY
                      </label>
                      <input
                        type="text"
                        value={shippingData.city}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, city: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-black/10 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-[#6B6A65] uppercase block mb-1">
                        POSTAL CODE
                      </label>
                      <input
                        type="text"
                        value={shippingData.postalCode}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, postalCode: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-black/10 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  {/* Delivery Radio Options */}
                  <div className="mt-4 pt-4 border-t border-black/5">
                    <span className="text-[11px] font-mono text-[#6B6A65] uppercase block mb-3">
                      DELIVERY METHOD
                    </span>

                    <div className="flex flex-col gap-3">
                      {/* Standard Option */}
                      <div
                        onClick={() => setDeliveryOption("standard")}
                        className={`p-4 rounded-2xl cursor-pointer transition-all flex items-center justify-between border-2 ${
                          deliveryOption === "standard"
                            ? "border-[#111111] bg-black/[0.02]"
                            : "border-black/10 hover:border-black/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center">
                            {deliveryOption === "standard" && (
                              <div className="w-2 h-2 rounded-full bg-black" />
                            )}
                          </div>
                          <div>
                            <span className="font-bold text-xs uppercase block">
                              Standard
                            </span>
                            <span className="text-[11px] font-mono text-[#6B6A65]">
                              3–5 business days
                            </span>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-xs uppercase text-[#111111]">
                          FREE
                        </span>
                      </div>

                      {/* Express Option */}
                      <div
                        onClick={() => setDeliveryOption("express")}
                        className={`p-4 rounded-2xl cursor-pointer transition-all flex items-center justify-between border-2 ${
                          deliveryOption === "express"
                            ? "border-[#111111] bg-black/[0.02]"
                            : "border-black/10 hover:border-black/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center">
                            {deliveryOption === "express" && (
                              <div className="w-2 h-2 rounded-full bg-black" />
                            )}
                          </div>
                          <div>
                            <span className="font-bold text-xs uppercase block">
                              Express
                            </span>
                            <span className="text-[11px] font-mono text-[#6B6A65]">
                              1–2 business days
                            </span>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-xs">
                          ${SHIPPING_EXPRESS_PRICE}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <button
                    type="button"
                    onClick={() => setActiveStep("payment")}
                    className="w-full mt-4 bg-[#D4FF00] hover:bg-[#c3ec00] text-black font-black text-xs tracking-wider py-4 rounded-full text-center uppercase shadow-md transition-all active:scale-[0.99] cursor-pointer"
                  >
                    CONTINUE TO PAYMENT →
                  </button>
                </div>
              ) : (
                <div className="flex justify-between items-center text-xs font-mono">
                  <span>
                    {shippingData.address}, {shippingData.city} (
                    {deliveryOption === "standard" ? "Standard FREE" : "Express $18"})
                  </span>
                  <button
                    onClick={() => setActiveStep("shipping")}
                    className="font-bold underline cursor-pointer"
                  >
                    EDIT
                  </button>
                </div>
              )}
            </div>

            {/* Step 3: Payment Step */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#111111] text-white flex items-center justify-center font-mono font-bold text-xs">
                  3
                </div>
                <h3 className="font-black text-lg tracking-tight uppercase">
                  PAYMENT
                </h3>
              </div>

              {activeStep === "payment" ? (
                <form onSubmit={handlePlaceOrder} className="flex flex-col gap-4">
                  {/* Payment Method Selector */}
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="p-3.5 rounded-2xl border-2 border-black bg-black/[0.02] flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-black flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        </div>
                        <span className="font-mono font-bold text-xs">CREDIT CARD</span>
                      </div>
                      <span className="text-[10px] font-mono opacity-60">VISA / MC</span>
                    </div>

                    <div className="p-3.5 rounded-2xl border border-black/10 flex items-center justify-between cursor-pointer hover:border-black/30">
                      <div className="flex items-center gap-2.5">
                        <div className="w-3.5 h-3.5 rounded-full border border-black/30" />
                        <span className="font-mono font-bold text-xs">APPLE PAY</span>
                      </div>
                      <span className="text-[10px] font-mono opacity-60">1-CLICK</span>
                    </div>
                  </div>

                  {/* Card Inputs */}
                  <div className="flex flex-col gap-3 p-4 bg-[#F4F3ED] rounded-2xl border border-black/10">
                    <div>
                      <label className="text-[10px] font-mono text-[#6B6A65] uppercase block mb-1">
                        CARD NUMBER
                      </label>
                      <input
                        type="text"
                        defaultValue="•••• •••• •••• 4242"
                        readOnly
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-2 text-xs font-mono tracking-widest text-[#111111] focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-mono text-[#6B6A65] uppercase block mb-1">
                          EXPIRY DATE
                        </label>
                        <input
                          type="text"
                          defaultValue="12 / 28"
                          readOnly
                          className="w-full bg-white border border-black/10 rounded-xl px-4 py-2 text-xs font-mono text-[#111111] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-[#6B6A65] uppercase block mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          defaultValue="•••"
                          readOnly
                          className="w-full bg-white border border-black/10 rounded-xl px-4 py-2 text-xs font-mono text-[#111111] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4FF00] hover:bg-[#c3ec00] text-black font-black text-xs tracking-wider py-4.5 rounded-full text-center uppercase shadow-[0_8px_24px_rgba(212,255,0,0.4)] transition-all cursor-pointer disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? "PROCESSING..." : `COMPLETE ORDER — $${orderTotal}`}
                  </button>
                </form>
              ) : (
                <p className="text-xs font-mono text-[#6B6A65]">
                  Complete shipping to proceed to payment.
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary Card matching Reference */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm sticky top-28">
            <h3 className="font-black text-base tracking-tight uppercase pb-4 border-b border-black/10">
              ORDER SUMMARY
            </h3>

            {/* Items */}
            <div className="py-4 flex flex-col gap-4 border-b border-black/10">
              {items.length === 0 ? (
                <p className="text-xs text-[#6B6A65] py-4 text-center">
                  No items in bag.
                </p>
              ) : (
                items.map((it) => (
                  <div
                    key={`${it.product.id}-${it.size}`}
                    className="flex items-center gap-4 text-xs font-mono"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#F4F3ED] p-1 shrink-0 flex items-center justify-center">
                      <Image
                        src={it.product.image}
                        alt={it.product.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold uppercase truncate">
                        {it.product.name}
                      </h5>
                      <span className="text-[#6B6A65] text-[11px]">
                        US {it.size} · Qty {it.quantity}
                      </span>
                    </div>
                    <span className="font-bold">
                      ${it.product.price * it.quantity}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Financial Totals */}
            <div className="py-4 flex flex-col gap-2 text-xs font-mono border-b border-black/10">
              <div className="flex justify-between text-[#6B6A65]">
                <span>Subtotal</span>
                <span className="font-bold text-black">${subtotal}</span>
              </div>
              <div className="flex justify-between text-[#6B6A65]">
                <span>Shipping</span>
                <span className="font-bold text-black">
                  {shippingCost === 0 ? "FREE" : `$${shippingCost}`}
                </span>
              </div>
            </div>

            {/* Total */}
            <div className="pt-4 flex justify-between items-center font-mono">
              <span className="font-black text-base uppercase">TOTAL</span>
              <span className="font-black text-xl">${orderTotal}</span>
            </div>
          </div>
        </div>
      </main>

      {/* Checkout Footer */}
      <footer className="mt-24 py-8 border-t border-black/10 text-center text-xs font-mono text-[#6B6A65]">
        256-BIT ENCRYPTED CHECKOUT // SRIGEN INDUSTRIES
      </footer>
    </div>
  );
}
