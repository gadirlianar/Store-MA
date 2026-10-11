"use client";

import React, { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}

export default function ShoelaceCursor() {
  const canvasRef = useRef<SVGSVGElement>(null);
  const baseLaceRef = useRef<SVGPathElement>(null);
  const segmentedLaceRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGGElement>(null);
  const tailRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // Only activate on desktop pointer devices
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    // Slightly increased length (14 segments at 3.6px distance = ~50px total arc)
    const NUM_SEGMENTS = 14;
    const SEGMENT_DISTANCE = 3.6;
    const points: Point[] = Array.from({ length: NUM_SEGMENTS }, () => ({
      x: -100,
      y: -100,
    }));

    let targetX = -100;
    let targetY = -100;
    let isVisible = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        for (let i = 0; i < NUM_SEGMENTS; i++) {
          points[i].x = targetX;
          points[i].y = targetY;
        }
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (baseLaceRef.current) baseLaceRef.current.setAttribute("d", "");
      if (segmentedLaceRef.current) segmentedLaceRef.current.setAttribute("d", "");
      if (headRef.current) headRef.current.style.opacity = "0";
      if (tailRef.current) tailRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const updatePhysics = () => {
      if (isVisible) {
        // Point 0 (Aglet tip) locks directly onto cursor coordinates for instant responsiveness (zero lag)
        points[0].x = targetX;
        points[0].y = targetY;

        // Kinematic trailing chain: snappy 0.84 pull for fluid response without sluggish drag
        for (let i = 1; i < NUM_SEGMENTS; i++) {
          const dx = points[i - 1].x - points[i].x;
          const dy = points[i - 1].y - points[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          points[i].x += dx * 0.84;
          points[i].y += dy * 0.84;

          if (dist > SEGMENT_DISTANCE) {
            const angle = Math.atan2(dy, dx);
            points[i].x = points[i - 1].x - Math.cos(angle) * SEGMENT_DISTANCE;
            points[i].y = points[i - 1].y - Math.sin(angle) * SEGMENT_DISTANCE;
          }
        }

        // Build smooth bezier curve path
        if (baseLaceRef.current && points[0].x > -50) {
          let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
          for (let i = 1; i < NUM_SEGMENTS - 1; i++) {
            const midX = ((points[i].x + points[i + 1].x) / 2).toFixed(1);
            const midY = ((points[i].y + points[i + 1].y) / 2).toFixed(1);
            d += ` Q ${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)}, ${midX} ${midY}`;
          }
          const last = points[NUM_SEGMENTS - 1];
          d += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;

          // Update base lime filament and black braided tick segment lines
          baseLaceRef.current.setAttribute("d", d);
          if (segmentedLaceRef.current) {
            segmentedLaceRef.current.setAttribute("d", d);
          }

          // Orient Aglet Head matching User Reference Image 1
          if (headRef.current) {
            const dx = points[0].x - points[1].x;
            const dy = points[0].y - points[1].y;
            const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

            headRef.current.setAttribute(
              "transform",
              `translate(${points[0].x.toFixed(1)}, ${points[0].y.toFixed(1)}) rotate(${angle.toFixed(1)})`
            );
            headRef.current.style.opacity = "1";
          }

          // Tail tip
          if (tailRef.current) {
            tailRef.current.setAttribute("cx", last.x.toFixed(1));
            tailRef.current.setAttribute("cy", last.y.toFixed(1));
            tailRef.current.style.opacity = "0.9";
          }
        }
      }

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9998] overflow-hidden select-none">
      <svg
        ref={canvasRef}
        className="w-full h-full pointer-events-none overflow-visible"
        style={{
          filter: "drop-shadow(0 1.5px 3.5px rgba(0,0,0,0.22))",
        }}
      >
        {/* Layer 1: Solid Volt-Lime Shoelace Base Ribbon (Image 1) */}
        <path
          ref={baseLaceRef}
          fill="none"
          stroke="#D1F744"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Layer 2: Black Segment Dividers / Ticks (Exact Braided Shoelace Weave from Image 1) */}
        <path
          ref={segmentedLaceRef}
          fill="none"
          stroke="#0B0905"
          strokeWidth="3.2"
          strokeDasharray="1.0 4.8"
          strokeLinecap="butt"
          strokeLinejoin="round"
          opacity="0.9"
        />

        {/* Lead Aglet Head: Sleek proportion matching User Reference Image 1 */}
        {/* Structure: [Volt Cap] [Black Aglet Collar Sleeve] */}
        <g ref={headRef} style={{ opacity: 0, transition: "opacity 0.12s" }}>
          {/* Black Collar Sleeve */}
          <rect
            x="-3"
            y="-2.1"
            width="6.6"
            height="4.2"
            rx="1.0"
            fill="#0B0905"
            stroke="#0B0905"
            strokeWidth="0.4"
          />
          {/* Volt Tip Cap */}
          <rect
            x="3.6"
            y="-2.1"
            width="2.6"
            height="4.2"
            rx="0.9"
            fill="#D1F744"
          />
        </g>

        {/* Rounded Tail Tip */}
        <circle
          ref={tailRef}
          r="1.6"
          fill="#D1F744"
          style={{ opacity: 0, transition: "opacity 0.12s" }}
        />
      </svg>
    </div>
  );
}
