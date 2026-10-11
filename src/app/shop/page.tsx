"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import AudioToggle from "@/components/AudioToggle";
import { PRODUCTS, Product } from "@/data/products";

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCollection = searchParams.get("collection") || "All";
  const initialSize = searchParams.get("size") ? Number(searchParams.get("size")) : null;
  const initialColor = searchParams.get("color") || "All colours";
  const initialPrice = searchParams.get("price") || "Any price";
  const initialSort = searchParams.get("sort") || "Featured";

  const [collectionFilter, setCollectionFilter] = useState<string>(initialCollection);
  const [sizeFilter, setSizeFilter] = useState<number | null>(initialSize);
  const [colorFilter, setColorFilter] = useState<string>(initialColor);
  const [priceFilter, setPriceFilter] = useState<string>(initialPrice);
  const [sortOption, setSortOption] = useState<string>(initialSort);

  // Sync state to URL params cleanly
  useEffect(() => {
    const params = new URLSearchParams();
    if (collectionFilter !== "All") params.set("collection", collectionFilter);
    if (sizeFilter !== null) params.set("size", sizeFilter.toString());
    if (colorFilter !== "All colours") params.set("color", colorFilter);
    if (priceFilter !== "Any price") params.set("price", priceFilter);
    if (sortOption !== "Featured") params.set("sort", sortOption);

    const queryString = params.toString();
    const targetUrl = queryString ? `/shop?${queryString}` : "/shop";
    router.replace(targetUrl, { scroll: false });
  }, [collectionFilter, sizeFilter, colorFilter, priceFilter, sortOption, router]);

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (collectionFilter !== "All") {
      list = list.filter((p) => p.collection === collectionFilter);
    }

    if (sizeFilter !== null) {
      list = list.filter((p) =>
        p.sizes.some((s) => s.size === sizeFilter && s.available)
      );
    }

    if (colorFilter !== "All colours") {
      list = list.filter((p) => p.colorCategory === colorFilter);
    }

    if (priceFilter === "Under $120") {
      list = list.filter((p) => p.price < 120);
    } else if (priceFilter === "$120 – 150") {
      list = list.filter((p) => p.price >= 120 && p.price <= 150);
    } else if (priceFilter === "Over $150") {
      list = list.filter((p) => p.price > 150);
    }

    if (sortOption === "Price: Low to High") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [collectionFilter, sizeFilter, colorFilter, priceFilter, sortOption]);

  const clearFilters = () => {
    setCollectionFilter("All");
    setSizeFilter(null);
    setColorFilter("All colours");
    setPriceFilter("Any price");
    setSortOption("Featured");
  };

  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black">
      <ShoelaceCursor />
      <AudioToggle />
      <Header />

      <main className="max-w-[1440px] mx-auto pt-32 pb-24 px-6 sm:px-12 lg:px-16">
        {/* 1. Header with "N OF 9" Volt Badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase">
                ALL SHOES
              </h1>
              <span className="bg-[#D4FF00] text-black font-mono font-black text-xs px-3 py-1 rounded-full uppercase shadow-sm">
                {filteredProducts.length} OF 9
              </span>
            </div>
            <p className="text-xs font-mono text-[#6B6A65] mt-2 uppercase tracking-widest">
              Performance Running & Archival Silhouettes
            </p>
          </div>
        </div>

        {/* 2. White Filter Card matching Reference */}
        <div className="p-6 md:p-8 bg-white rounded-3xl border border-black/5 shadow-sm mb-12 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {/* Collection Filter */}
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#6B6A65] uppercase block mb-2.5">
                COLLECTION
              </span>
              <div className="flex flex-wrap gap-2">
                {["All", "Runners", "Court", "Lifestyle"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCollectionFilter(c)}
                    className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      collectionFilter === c
                        ? "bg-[#D4FF00] text-black font-bold shadow-sm"
                        : "bg-black/5 text-black hover:bg-black/10"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#6B6A65] uppercase block mb-2.5">
                SIZE — US
              </span>
              <div className="flex flex-wrap gap-2">
                {[7, 8, 9, 10, 11, 12].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSizeFilter(sizeFilter === sz ? null : sz)}
                    className={`w-8 h-8 rounded-full text-xs font-mono flex items-center justify-center transition-all cursor-pointer ${
                      sizeFilter === sz
                        ? "bg-[#D4FF00] text-black font-bold shadow-sm"
                        : "bg-black/5 text-black hover:bg-black/10"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Colour Filter */}
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#6B6A65] uppercase block mb-2.5">
                COLOUR
              </span>
              <div className="flex flex-wrap gap-2">
                {["All colours", "Black", "White", "Colour"].map((col) => (
                  <button
                    key={col}
                    onClick={() => setColorFilter(col)}
                    className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      colorFilter === col
                        ? "bg-[#D4FF00] text-black font-bold shadow-sm"
                        : "bg-black/5 text-black hover:bg-black/10"
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter & Sort Dropdown */}
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#6B6A65] uppercase block mb-2.5">
                PRICE & SORT
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {["Any price", "Under $120", "$120 – 150", "Over $150"].map((pr) => (
                    <button
                      key={pr}
                      onClick={() => setPriceFilter(pr)}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                        priceFilter === pr
                          ? "bg-[#D4FF00] text-black font-bold"
                          : "bg-black/5 text-black hover:bg-black/10"
                      }`}
                    >
                      {pr}
                    </button>
                  ))}
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#6B6A65] uppercase">
                    SORT:
                  </span>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="text-xs font-mono bg-black/5 border-none rounded-lg px-2.5 py-1 text-black focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                  >
                    <option value="Featured">Featured</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 3-Column Grid of Tall Rounded Bone Tiles */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-black/5 p-8 flex flex-col items-center">
            <span className="text-4xl mb-3">🔍</span>
            <h3 className="text-xl font-black uppercase">No matching silhouettes</h3>
            <p className="text-xs text-[#6B6A65] mt-1 max-w-sm">
              We couldn&apos;t find any shoes matching your specific filter combinations.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 bg-[#111111] text-white text-xs font-bold px-6 py-3 rounded-full uppercase tracking-wider hover:bg-black transition-colors"
            >
              CLEAR ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductTile key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F4F3ED] flex items-center justify-center font-mono text-xs text-[#6B6A65]">
          INITIALIZING SHOP ARCHIVE...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}

// Subcomponent: Tall Rounded Bone Tile with Hanging Price Tag
function ProductTile({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group relative flex flex-col justify-between h-[480px] bg-[#EBE8E1] rounded-[28px] p-8 border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Hanging Price Tag (Top Right Assembly) */}
      <div className="absolute top-6 right-6 flex flex-col items-end z-20 pointer-events-none">
        {/* Black Peg Dot */}
        <div className="w-2 h-2 rounded-full bg-[#111111] mr-4 shadow-sm" />

        {/* Angled Hanging String */}
        <div
          className="w-[1px] h-4 bg-[#6B6A65] mr-4 origin-top"
          style={{ transform: "rotate(-12deg)" }}
        />

        {/* Volt Price Tag with Ring Punch Hole */}
        <div className="relative bg-[#D4FF00] text-black px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-black/10 group-hover:scale-105 transition-transform">
          {/* Punch Hole */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#EBE8E1] border border-black/20" />

          {/* Condensed Price */}
          <span className="font-mono font-black text-xs tracking-tight">
            ${product.price}
          </span>

          {/* Tiny Barcode Ticks */}
          <div className="flex gap-[1.5px] h-3 items-end opacity-60">
            <div className="w-[1.5px] h-full bg-black" />
            <div className="w-[1px] h-full bg-black" />
            <div className="w-[2px] h-full bg-black" />
            <div className="w-[1px] h-full bg-black" />
          </div>
        </div>
      </div>

      {/* Top Metadata */}
      <div className="z-10">
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B6A65] uppercase">
          {product.collection}
        </span>
        <h3 className="text-2xl font-black tracking-tight text-[#111111] uppercase mt-0.5 group-hover:text-black">
          {product.name}
        </h3>
        <p className="text-xs font-mono text-[#6B6A65] mt-1">
          {product.colorway}
        </p>
      </div>

      {/* Centered Side-View Sneaker Photo */}
      <div className="relative w-full h-[240px] flex items-center justify-center my-auto z-10">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={240}
          className="w-full h-full object-contain drop-shadow-xl group-hover:scale-108 transition-transform duration-500 ease-out"
          priority
        />
      </div>

      {/* Bottom Action Hint */}
      <div className="flex justify-between items-center text-xs font-mono text-[#6B6A65] z-10 pt-4 border-t border-black/5">
        <span>VIEW SILHOUETTE</span>
        <span className="font-bold text-black group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </Link>
  );
}
