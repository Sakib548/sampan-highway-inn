"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturePillar {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  title: string;
  description: string;
  accentColor: "blue" | "amber" | "red";
}

const pillars: FeaturePillar[] = [
  {
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "24/7 Hot Kitchen & Dining",
    description: "Wholesome authentic meals, fast highway bites, and fresh barista coffee prepared at all hours of the night and day.",
    accentColor: "blue",
  },
  {
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    title: "Tranquil Rest Suites & Lodging",
    description: "Sound-isolated, air-conditioned rooms designed for deep restorative sleep so you wake up revitalized for your journey.",
    accentColor: "amber",
  },
  {
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Gated Security & Roadside Care",
    description: "24/7 CCTV surveillance, guarded compound, EV & fuel proximity, dedicated prayer hall, and safe parking for all vehicle sizes.",
    accentColor: "red",
  },
];

const stats = [
  { value: "24/7", label: "Always Open", colorClass: "text-[#0072bc]" },
  { value: "100%", label: "Fresh Cuisine", colorClass: "text-[#f59e0b]" },
  { value: "50+", label: "Guarded Parking", colorClass: "text-[#c8102e]" },
  { value: "4.9 ★", label: "Traveler Satisfaction", colorClass: "text-amber-400" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#050810] via-[#090e1c] to-[#050810] text-white overflow-hidden"
    >
      {/* Three-Color Ambient Lighting (Blue, Gold, Red from brand logo) */}
      <div className="absolute top-1/4 -left-48 -z-10 w-[500px] h-[500px] bg-[#0072bc]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -z-10 w-[420px] h-[420px] bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 -right-48 -z-10 w-[500px] h-[500px] bg-[#c8102e]/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Container with generous left & right margins */}
      <div className="max-w-6xl mx-auto px-8 sm:px-14 md:px-18 lg:px-20 xl:px-24">
        {/* Quick Highlights Stats Strip - Slow Reveal */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 p-8 sm:p-10 lg:p-12 bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center py-2 ${
                index !== stats.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <span className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${item.colorClass}`}>
                {item.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content Grid: Story & Visual Composite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Narrative & 3-Color Pillars (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Badge with 3 Brand Color Dots - Stagger 1 */}
            <div
              className={`inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md transform transition-all duration-1000 ease-out delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0072bc]" title="Highway Blue" />
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]" title="Sampan Gold" />
                <span className="w-2 h-2 rounded-full bg-[#c8102e]" title="Inn Crimson Red" />
              </span>
              About Sampan Highway Inn
            </div>

            {/* Headline integrating the 3 Brand Colors - Stagger 2 */}
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6 transform transition-all duration-1000 ease-out delay-250 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              A Haven of Rest & Care for Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072bc] via-[#f59e0b] to-[#c8102e]">
                Highway Traveler
              </span>
            </h2>

            {/* Narrative text with comfortable line-height and margin - Stagger 3 */}
            <p
              className={`text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal transform transition-all duration-1000 ease-out delay-350 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Named after the iconic, resilient <em className="text-amber-300 not-italic font-medium">Sampan</em> boat that has steered travelers through historic waterways for centuries, <strong className="text-white font-semibold">Sampan Highway Inn</strong> is purpose-built to be your dependable sanctuary along the highway.
            </p>

            <p
              className={`text-sm sm:text-base text-slate-400 leading-relaxed mb-10 transform transition-all duration-1000 ease-out delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Whether you are an interstate driver, a family on vacation, or a commuter on transit, we provide restorative lodging, authentic hot food, and modern traveler conveniences designed to keep you refreshed, fueled, and safe for the road ahead.
            </p>

            {/* Core Pillars List featuring the 3 brand colors - Stagger 4 */}
            <div className="space-y-6 sm:space-y-7 mb-10">
              {pillars.map((pillar, idx) => {
                const colorConfig = {
                  blue: {
                    badge: "bg-[#0072bc]/15 border-[#0072bc]/30 text-[#38bdf8] group-hover:bg-[#0072bc] group-hover:text-white",
                    hoverTitle: "group-hover:text-[#38bdf8]",
                  },
                  amber: {
                    badge: "bg-[#f59e0b]/15 border-[#f59e0b]/30 text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-slate-950",
                    hoverTitle: "group-hover:text-[#fbbf24]",
                  },
                  red: {
                    badge: "bg-[#c8102e]/15 border-[#c8102e]/30 text-[#f87171] group-hover:bg-[#c8102e] group-hover:text-white",
                    hoverTitle: "group-hover:text-[#f87171]",
                  },
                }[pillar.accentColor];

                const delays = ["delay-500", "delay-650", "delay-800"];

                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 sm:gap-5 group transform transition-all duration-1000 ease-out ${delays[idx]} ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-13 h-13 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 ${colorConfig.badge}`}
                    >
                      <pillar.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className={`text-base sm:text-lg font-bold text-white mb-1 transition-colors ${colorConfig.hoverTitle}`}>
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons with Brand Accents - Stagger 5 */}
            <div
              className={`flex flex-wrap items-center gap-4 pt-2 transform transition-all duration-1000 ease-out delay-900 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="#amenities"
                className="px-6 sm:px-7 py-3 rounded-full bg-[#0072bc] hover:bg-[#005f9e] text-white font-semibold text-sm shadow-lg shadow-[#0072bc]/25 hover:shadow-[#0072bc]/40 hover:scale-[1.02] active:scale-98 transition-all"
              >
                Explore Amenities
              </Link>
              <Link
                href="#contact"
                className="px-6 sm:px-7 py-3 rounded-full bg-[#c8102e] hover:bg-[#a80c25] text-white font-semibold text-sm shadow-lg shadow-[#c8102e]/25 hover:shadow-[#c8102e]/40 hover:scale-[1.02] active:scale-98 transition-all"
              >
                Book a Stay
              </Link>
              <Link
                href="#location"
                className="px-5 sm:px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white font-semibold text-sm border border-white/15 backdrop-blur-md transition-all"
              >
                Find On Highway
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composite & Floating Badges - Staggered Slow Reveal */}
          <div className="lg:col-span-5 relative lg:pl-4">
            {/* Main Featured Image Card */}
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 aspect-[4/5] sm:aspect-[3/4] transform transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <Image
                src="/images/heromain2.jpg"
                alt="Sampan Highway Inn Hospitality and Dining"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Card Bottom Tag with Tri-Color Bar */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-6 h-1 rounded-full bg-[#0072bc]" />
                  <div className="w-6 h-1 rounded-full bg-[#f59e0b]" />
                  <div className="w-6 h-1 rounded-full bg-[#c8102e]" />
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#f59e0b]">
                  Comfort on Wheels
                </span>
                <p className="text-xl font-bold mt-1 text-white leading-snug">
                  Your Reliable Highway Oasis 24/7
                </p>
              </div>
            </div>

            {/* Floating Review / Rating Glass Badge (Amber Accent) */}
            <div
              className={`absolute -bottom-8 -left-4 sm:-left-8 bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/15 flex items-center gap-3.5 max-w-[280px] transform transition-all duration-800 ease-out delay-700 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-[#f59e0b] flex items-center justify-center text-xl flex-shrink-0 border border-amber-500/20">
                ⭐
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">4.9 / 5 Rating</p>
                <p className="text-xs text-slate-400 mt-1">Loved by 10,000+ highway drivers & families</p>
              </div>
            </div>

            {/* Floating Security Badge (Crimson Red Accent) */}
            <div
              className={`hidden sm:flex absolute -top-5 -right-5 bg-slate-900/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-2xl border border-white/15 items-center gap-2.5 transform transition-all duration-800 ease-out delay-850 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-90"
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-[#c8102e] animate-pulse" />
              <span className="text-xs font-bold text-white">24/7 Guarded & Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
