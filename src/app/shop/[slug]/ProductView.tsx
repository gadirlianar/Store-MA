"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SizeGuideModal from "@/components/SizeGuideModal";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import AudioToggle from "@/components/AudioToggle";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductView({ product }: { product: Product }) {
  const { addItem, justAdded } = useCart();
  const [selectedSize, setSelectedSize] = useState<number>(() => {
    const firstAvail = product.sizes.find((s) => s.available);
    return firstAvail ? firstAvail.size : 9;
  });
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image);

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToBag = () => {
    addItem(product, selectedSize, 1);
  };

  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black">
      <ShoelaceCursor />
      <AudioToggle />
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
      <Header />

      <main className="max-w-[1440px] mx-auto pt-32 pb-24 px-6 sm:px-12 lg:px-16">
        {/* 1. Breadcrumbs */}
        <nav className="text-xs font-mono text-[#6B6A65] uppercase tracking-wider mb-8 flex items-center gap-2">
          <Link href="/shop" className="hover:text-black transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/shop?collection=${product.collection}`}
            className="hover:text-black transition-colors"
          >
            {product.collection}
          </Link>
          <span>/</span>
          <span className="text-black font-bold">{product.name}</span>
        </nav>

        {/* 2. Main Product Grid: Left Gallery | Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Large Image Panel */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full h-[520px] sm:h-[620px] bg-[#EBE8E1] rounded-[32px] p-8 sm:p-12 border border-black/5 flex items-center justify-center overflow-hidden shadow-sm">
              {/* Collection Badge Top Left */}
              <div className="absolute top-8 left-8 z-20">
                <span className="bg-[#D4FF00] text-black font-mono font-black text-xs px-3.5 py-1.5 rounded-full uppercase shadow-sm">
                  {product.collection}
                </span>
              </div>

              {/* Main Shoe Photo */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={activeImage}
                  alt={product.name}
                  width={640}
                  height={420}
                  className="w-full h-auto object-contain max-h-[460px] drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
                  priority
                />
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-3">
              {Array.from(new Set([product.image, ...product.extraImages])).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-2xl bg-[#EBE8E1] p-2 border-2 cursor-pointer transition-all ${
                    activeImage === img
                      ? "border-black shadow-sm"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Specifications, Sizing, CTA */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Title & Price */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-2xl font-black font-mono">
                  ${product.price}
                </span>
                <span className="text-sm font-mono text-[#6B6A65]">
                  {product.colorway}
                </span>
              </div>
              <p className="text-xs text-[#6B6A65] mt-4 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono font-bold tracking-widest uppercase">
                  SELECT SIZE — US
                </span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-xs font-mono font-bold text-black underline underline-offset-4 hover:opacity-75 cursor-pointer"
                >
                  Size guide
                </button>
              </div>

              {/* Size Boxes Grid */}
              <div className="grid grid-cols-6 gap-2.5">
                {product.sizes.map((s) => {
                  const isSelected = selectedSize === s.size;
                  if (!s.available) {
                    return (
                      <div
                        key={s.size}
                        title="Sold out"
                        className="relative h-12 rounded-xl bg-black/5 text-black/30 font-mono font-bold text-sm flex items-center justify-center cursor-not-allowed select-none overflow-hidden"
                      >
                        <span>{s.size}</span>
                        {/* Strikethrough diagonal line */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-12 h-[1.5px] bg-black/40 rotate-45" />
                        </div>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={s.size}
                      onClick={() => setSelectedSize(s.size)}
                      className={`h-12 rounded-xl font-mono font-bold text-sm flex items-center justify-center transition-all cursor-pointer border ${
                        isSelected
                          ? "bg-[#D4FF00] text-black border-black shadow-md scale-102"
                          : "bg-white text-black border-black/10 hover:border-black"
                      }`}
                    >
                      {s.size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add to Bag CTA Button */}
            <div>
              <button
                onClick={handleAddToBag}
                className={`w-full py-4.5 rounded-full font-black text-xs tracking-wider flex items-center justify-center gap-3 transition-all cursor-pointer uppercase shadow-[0_8px_24px_rgba(212,255,0,0.4)] ${
                  justAdded
                    ? "bg-[#111111] text-[#D4FF00] scale-98"
                    : "bg-[#D4FF00] hover:bg-[#c3ec00] text-black hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {justAdded ? (
                  <span>ADDED ✓</span>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span>ADD TO BAG – ${product.price}</span>
                  </>
                )}
              </button>

              {/* 3 Core Value Props */}
              <div className="grid grid-cols-3 gap-2 mt-4 text-[11px] font-mono text-[#6B6A65] text-center border-t border-black/10 pt-4">
                <div>✓ Ships in 24h</div>
                <div>✓ Free 30-day returns</div>
                <div>✓ Free shipping &gt;$150</div>
              </div>
            </div>

            {/* Reviews Card */}
            <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-sm">
                    ★ {product.rating}
                  </span>
                  <span className="text-xs text-[#6B6A65]">
                    · {product.reviewsCount} verified reviews
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#D4FF00] bg-[#111111] px-2 py-0.5 rounded uppercase">
                  VERIFIED BUYERS
                </span>
              </div>

              {product.reviews.length > 0 && (
                <div className="mt-3 flex flex-col gap-3">
                  {product.reviews.slice(0, 2).map((rev) => (
                    <div key={rev.id} className="text-xs">
                      <div className="flex justify-between items-center font-bold">
                        <span>{rev.author}</span>
                        <span className="text-[10px] text-[#6B6A65] font-normal">
                          {rev.date}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#6B6A65] mt-1 leading-relaxed">
                        &quot;{rev.comment}&quot;
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SPECS Table */}
            <div className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm">
              <div className="p-4 bg-black/5 border-b border-black/10 font-mono font-bold text-xs uppercase tracking-wider">
                SPECS & CONSTRUCTION
              </div>
              <div className="divide-y divide-black/5 text-xs font-mono">
                {product.specs.map((sp, idx) => (
                  <div key={idx} className="p-3.5 flex justify-between">
                    <span className="text-[#6B6A65]">{sp.label}</span>
                    <span className="font-bold text-right max-w-[60%]">
                      {sp.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. You May Also Like Section */}
        <div className="mt-24 pt-12 border-t border-black/10">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-mono text-[#6B6A65] uppercase tracking-widest">
                RECOMMENDED PAIRS
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight mt-1">
                YOU MAY ALSO LIKE
              </h3>
            </div>
            <Link
              href="/shop"
              className="text-xs font-mono font-bold uppercase underline underline-offset-4 hover:opacity-75"
            >
              View all 9 shoes →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/shop/${rel.slug}`}
                className="group flex flex-col justify-between h-[420px] bg-[#EBE8E1] rounded-[28px] p-6 border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#6B6A65] uppercase">
                    {rel.collection}
                  </span>
                  <h4 className="text-xl font-black uppercase tracking-tight mt-0.5">
                    {rel.name}
                  </h4>
                  <span className="font-mono font-bold text-xs mt-1 block">
                    ${rel.price}
                  </span>
                </div>

                <div className="relative w-full h-[200px] flex items-center justify-center">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    width={320}
                    height={180}
                    className="w-full h-full object-contain drop-shadow-md group-hover:scale-108 transition-transform duration-300"
                  />
                </div>

                <div className="text-xs font-mono text-[#6B6A65] flex justify-between pt-3 border-t border-black/5">
                  <span>{rel.colorway}</span>
                  <span className="font-bold text-black group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
