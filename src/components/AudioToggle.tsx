"use client";

import React, { useState, useRef, useEffect } from "react";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          const ctx = new AudioCtx();
          audioCtxRef.current = ctx;

          const masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
          masterGain.connect(ctx.destination);
          gainNodeRef.current = masterGain;

          // Minimalist ambient chord (C minor sub-drone & air)
          const freqs = [65.41, 130.81, 196.0, 311.13];
          const oscs = freqs.map((f) => {
            const osc = ctx.createOscillator();
            osc.type = "sine";
            osc.frequency.setValueAtTime(f, ctx.currentTime);
            osc.connect(masterGain);
            osc.start();
            return osc;
          });
          oscNodesRef.current = oscs;
        } else if (audioCtxRef.current.state === "suspended") {
          audioCtxRef.current.resume();
        }
        setIsPlaying(true);
      } catch (e) {
        console.error("Audio error:", e);
      }
    } else {
      if (audioCtxRef.current && audioCtxRef.current.state === "running") {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40">
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Mute audio" : "Unmute audio"}
        title={isPlaying ? "Audio playing" : "Audio muted"}
        className="w-11 h-11 rounded-full bg-[#0B0B0B] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-white/10"
      >
        {isPlaying ? (
          /* Volume Playing Icon */
          <svg
            className="w-4 h-4 text-[#D4FF00] animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        ) : (
          /* Volume Muted Icon */
          <svg
            className="w-4 h-4 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </div>
  );
}
