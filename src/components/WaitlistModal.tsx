"use client";

import React, { useState, useEffect } from "react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blurred darkened backdrop */}
      <div
        className="fixed inset-0 bg-[#14110D]/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-[#EDEBE4] border border-[#14110D]/10 rounded-[28px] p-8 md:p-10 shadow-2xl z-10 select-none">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#14110D]/5 hover:bg-[#14110D]/10 flex items-center justify-center text-[#14110D] font-bold text-sm cursor-pointer transition-colors"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-[#DEF86F] text-[#14110D] font-black text-xl rounded-full flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-2xl font-black tracking-tight text-[#14110D] uppercase">
              CONFIRMED
            </h3>
            <p className="text-sm font-medium text-[#76746E] mt-2">
              You are registered for Drop 001. We will alert you 10 minutes before the window opens.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-[#14110D] text-white font-bold text-xs tracking-wider px-6 py-3 rounded-full uppercase"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#76746E] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#DEF86F] inline-block" />
              <span>DROP NOTIFICATION</span>
            </div>

            <h3 className="text-3xl font-black tracking-tight text-[#14110D] uppercase">
              BE FIRST IN LINE
            </h3>
            <p className="text-sm font-medium text-[#76746E] mt-2 leading-relaxed">
              Only 300 numbered pairs worldwide. Enter your email for drop access.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-5 py-4 rounded-xl bg-white border border-[#14110D]/10 text-[#14110D] placeholder-[#76746E]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#DEF86F]"
              />

              <button
                type="submit"
                className="w-full bg-[#DEF86F] hover:bg-[#d5f35b] text-[#14110D] font-extrabold text-xs tracking-wider py-4 rounded-full transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-sm uppercase"
              >
                JOIN WAITLIST
              </button>

              <p className="text-[11px] text-[#76746E] text-center mt-2 leading-tight">
                By joining, you agree to drop notifications. No spam. One email on drop day.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
