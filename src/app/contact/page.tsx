"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoelaceCursor from "@/components/ShoelaceCursor";
import AudioToggle from "@/components/AudioToggle";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "DROP INQUIRY",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Full name is required for drop correspondence.";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please supply a valid contact email address.";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = "Message must contain at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "DROP INQUIRY",
        message: "",
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#111111] font-sans selection:bg-[#D4FF00] selection:text-black">
      <ShoelaceCursor />
      <AudioToggle />
      <Header />

      <main className="max-w-[1440px] mx-auto pt-36 pb-24 px-6 sm:px-12 lg:px-16">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono text-[#6B6A65] uppercase tracking-wider mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-bold">Contact Concierge</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-4xl mb-16">
          <div className="flex items-center gap-3">
            <span className="bg-[#D4FF00] text-black font-mono font-bold text-xs px-3 py-1 rounded-full uppercase">
              CLIENT SERVICES
            </span>
            <span className="text-xs font-mono text-[#6B6A65]">
              SRIGEN CONCIERGE DESK · LONDON HQ
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            CONCIERGE & SUPPORT
          </h1>
          <p className="text-base text-[#6B6A65] mt-2 leading-relaxed max-w-2xl font-sans">
            Direct communication line for sizing verification, private drop allocation inquiries, and logistics requests.
          </p>
        </div>

        {/* Content Grid: Form (Left) | Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm">
            <h2 className="text-2xl font-black uppercase mb-2 tracking-tight">
              TRANSMIT DISPATCH
            </h2>
            <p className="text-xs text-[#6B6A65] mb-8 font-mono">
              * NOTE: This contact form operates as a live demonstration stub. Submissions are verified locally.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#F4F3ED] rounded-2xl border border-black/10 flex flex-col items-center text-center">
                <span className="text-4xl mb-3">✓</span>
                <h3 className="text-xl font-black uppercase">
                  DISPATCH LOGGED SUCCESSFULLY
                </h3>
                <p className="text-xs text-[#6B6A65] mt-2 max-w-md">
                  Thank you for your transmission. In production, our concierge responds within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-[#111111] text-white text-xs font-bold uppercase px-6 py-3 rounded-full hover:bg-black transition-colors"
                >
                  TRANSMIT ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono font-bold uppercase text-[#111111]"
                  >
                    FULL NAME <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Marcus Thorne"
                    className={`w-full bg-[#F4F3ED] border rounded-2xl px-5 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#D4FF00] ${
                      errors.name ? "border-red-600" : "border-black/10"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-600 font-mono" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-mono font-bold uppercase text-[#111111]"
                  >
                    EMAIL ADDRESS <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. client@example.com"
                    className={`w-full bg-[#F4F3ED] border rounded-2xl px-5 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#D4FF00] ${
                      errors.email ? "border-red-600" : "border-black/10"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-600 font-mono" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Inquiry Category */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-mono font-bold uppercase text-[#111111]"
                  >
                    INQUIRY CLASSIFICATION
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-[#F4F3ED] border border-black/10 rounded-2xl px-5 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#D4FF00] cursor-pointer"
                  >
                    <option value="DROP INQUIRY">Drop Allocation & Waitlist</option>
                    <option value="SIZING">Sizing & Ergo Fit Advisory</option>
                    <option value="SHIPPING">Global Logistics & Tracking</option>
                    <option value="RETURNS">Returns & Exchange Protocol</option>
                    <option value="PRESS">Press & Editorial Archival</option>
                  </select>
                </div>

                {/* Message Body */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-mono font-bold uppercase text-[#111111]"
                  >
                    TRANSMISSION DETAILS <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="State your technical request or drop verification query..."
                    className={`w-full bg-[#F4F3ED] border rounded-2xl p-5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#D4FF00] resize-none ${
                      errors.message ? "border-red-600" : "border-black/10"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-600 font-mono" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4FF00] hover:bg-[#c3ec00] text-black font-black text-xs tracking-wider py-4 rounded-full uppercase shadow-md transition-all active:scale-[0.99] cursor-pointer mt-2"
                >
                  {isSubmitting ? "TRANSMITTING..." : "DISPATCH MESSAGE →"}
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#D4FF00] bg-black px-2 py-0.5 rounded uppercase">
                HQ LOCATION
              </span>
              <h3 className="text-xl font-black uppercase mt-3 mb-2">
                LONDON ATELIER
              </h3>
              <p className="text-xs text-[#6B6A65] font-mono leading-relaxed">
                SRIGEN FOOTWEAR LABS<br />
                12 Volt Lane, Shoreditch<br />
                London, E1 6AN<br />
                United Kingdom
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#D4FF00] bg-black px-2 py-0.5 rounded uppercase">
                CHANNELS
              </span>
              <h3 className="text-xl font-black uppercase mt-3 mb-2">
                DIRECT COMMUNICATON
              </h3>
              <ul className="text-xs font-mono text-[#6B6A65] flex flex-col gap-3 mt-4">
                <li className="flex justify-between py-2 border-b border-black/5">
                  <span>Concierge Email:</span>
                  <strong className="text-black">concierge@example.com</strong>
                </li>
                <li className="flex justify-between py-2 border-b border-black/5">
                  <span>Editorial Desk:</span>
                  <strong className="text-black">press@example.com</strong>
                </li>
                <li className="flex justify-between py-2">
                  <span>Operating Hours:</span>
                  <strong className="text-black">09:00 – 18:00 GMT</strong>
                </li>
              </ul>
            </div>

            <div className="bg-[#111111] text-white rounded-3xl p-8 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#D4FF00] uppercase tracking-wider">
                RAPID ACCESS
              </span>
              <h4 className="text-lg font-black uppercase mt-2 mb-2">
                NEED IMMEDIATE SIZING?
              </h4>
              <p className="text-xs text-white/70 leading-relaxed mb-6 font-sans">
                Review our full international sizing translation matrix with millimeter measurements.
              </p>
              <Link
                href="/shop/aero-flux"
                className="bg-[#D4FF00] text-black font-black text-xs uppercase px-6 py-3 rounded-full tracking-wider hover:bg-[#c3ec00] transition-colors"
              >
                VIEW AERO FLUX SPECS
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
