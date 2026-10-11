"use client";

import React, { useEffect, useRef } from "react";

export default function ShoelaceCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktop)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
        // Check if hovering clickable element
        const target = e.target as HTMLElement | null;
        const isClickable =
          target &&
          (target.tagName === "BUTTON" ||
            target.tagName === "A" ||
            target.closest("button") ||
            target.closest("a") ||
            target.classList.contains("cursor-pointer"));

        const scale = isClickable ? "scale(1.6)" : "scale(1)";
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) ${scale}`;
      }

      if (followerRef.current) {
        followerRef.current.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
      if (followerRef.current) followerRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // 60 FPS inertia spring loop for trailing filament
    const updateTrail = () => {
      trailRef.current.x += (posRef.current.x - trailRef.current.x) * 0.22;
      trailRef.current.y += (posRef.current.y - trailRef.current.y) * 0.22;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0)`;
      }

      animFrameRef.current = requestAnimationFrame(updateTrail);
    };
    animFrameRef.current = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Aglet / Lacing Tip Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#D4FF00] shadow-[0_0_12px_#D4FF00] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150"
      >
        <div className="absolute inset-1 rounded-full bg-[#111111]" />
      </div>

      {/* Trailing Shoelace Filament / Aglet Follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D4FF00]/60 pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150"
      />
    </div>
  );
}
