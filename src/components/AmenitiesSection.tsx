"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FacilityItem {
  id: string;
  title: string;
  category: string;
  categoryGroup: "all" | "dining" | "rest" | "specialty";
  badge: string;
  image: string;
  description: string;
  hours: string;
  tags: string[];
  accent: "blue" | "amber" | "red";
  iconType: "suite" | "lounge" | "fastfood" | "sweet" | "juice" | "achar" | "mosque";
}

const facilitiesData: FacilityItem[] = [
  {
    id: "vvip-suites",
    title: "VVIP Rest Suites",
    category: "Rest & Accommodations",
    categoryGroup: "rest",
    badge: "Premium Comfort",
    image: "/images/facilities/vvip-lounge.jpeg",
    description:
      "Acoustically engineered private suites with plush king beds, en-suite rain showers, IPTV, and climate control for quiet respite from highway rumble.",
    hours: "24/7 Available",
    tags: ["King Bed", "Private Shower", "Sound Isolated"],
    accent: "amber",
    iconType: "suite",
  },
  {
    id: "vip-lounge",
    title: "VIP Executive Lounge",
    category: "Executive & Leisure",
    categoryGroup: "rest",
    badge: "Exclusive Lounge",
    image: "/images/facilities/lounge.jpg",
    description:
      "Lavish seating with quiet ambiance, complimentary refreshments, and upscale amenities tailored for executives and traveling families.",
    hours: "24/7 Open",
    tags: ["Quiet Ambiance", "Complimentary Refreshments", "Plush Seating"],
    accent: "blue",
    iconType: "lounge",
  },
  {
    id: "fast-food",
    title: "Sampan Fast Food",
    category: "Quick Bites & Dining",
    categoryGroup: "dining",
    badge: "Piping Hot",
    image: "/images/facilities/fast-food.jpeg",
    description:
      "Serving juicy grilled burgers, crispy fried chicken, savory wraps, and hot traveler meals freshly prepared around the clock.",
    hours: "24/7 Service",
    tags: ["Hot & Crispy", "Fast Prep", "Family Favorites"],
    accent: "red",
    iconType: "fastfood",
  },
  {
    id: "sweet-shop",
    title: "Sampan Sweet Shop",
    category: "Traditional Delights",
    categoryGroup: "dining",
    badge: "Authentic Sweets",
    image: "/images/facilities/sweet-shop.jpg",
    description:
      "Artisanal Bengali sweets, freshly baked delicacies, and gourmet treats crafted daily using 100% pure chhana and premium ghee.",
    hours: "7:00 AM – 11:30 PM",
    tags: ["Pure Chhana", "Traditional Ghee", "Fresh Daily"],
    accent: "amber",
    iconType: "sweet",
  },
  {
    id: "juice-bar",
    title: "Sampan Juice Bar",
    category: "Fresh & Healthy",
    categoryGroup: "dining",
    badge: "Cold Pressed",
    image: "/images/facilities/sampan-juicebar.jpg",
    description:
      "Rehydrate with freshly squeezed citrus, seasonal fruit smoothies, and detox blends made with zero artificial preservatives.",
    hours: "8:00 AM – 12:00 AM",
    tags: ["Cold Pressed", "100% Natural", "Detox Smoothies"],
    accent: "blue",
    iconType: "juice",
  },
  {
    id: "sampan-achar",
    title: "Sampan Achar & Delicacies",
    category: "Artisanal Specialty",
    categoryGroup: "specialty",
    badge: "Artisanal Spices",
    image: "/images/facilities/sampan-achar.jpg",
    description:
      "Signature heritage pickles, specialty gourmet chutneys, and regional culinary treasures packaged fresh to take home.",
    hours: "24/7 Available",
    tags: ["Heritage Recipes", "Pure Mustard Oil", "Gift Jars"],
    accent: "red",
    iconType: "achar",
  },
  {
    id: "sampan-mosque",
    title: "Dedicated Mosque & Prayer Hall",
    category: "Spiritual Peace",
    categoryGroup: "specialty",
    badge: "Serene Space",
    image: "/images/facilities/sampan-mosque.jpeg",
    description:
      "Tranquil, air-conditioned prayer hall with carpeted floors and separate clean ablution (wudu) spaces for ladies and gentlemen.",
    hours: "24/7 Open",
    tags: ["Separate Wudu", "Air Conditioned", "Peaceful Sanctuary"],
    accent: "blue",
    iconType: "mosque",
  },
];

const categories = [
  { key: "all", label: "All Facilities" },
  { key: "dining", label: "Dining & Treats" },
  { key: "rest", label: "Suites & Lounges" },
  { key: "specialty", label: "Specialty & Prayer" },
];

export default function AmenitiesSection() {
  const [activeFilter, setActiveFilter] = useState("all");
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
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredItems =
    activeFilter === "all"
      ? facilitiesData
      : facilitiesData.filter((item) => item.categoryGroup === activeFilter);

  const renderIcon = (type: FacilityItem["iconType"], colorClass: string) => {
    switch (type) {
      case "suite":
        return (
          <svg className={`w-5 h-5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case "lounge":
        return (
          <svg className={`w-5 h-5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case "fastfood":
        return (
          <svg className={`w-5 h-5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "sweet":
        return (
          <svg className={`w-5 h-5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M3 21h18a2 2 0 002-2v-5a2 2 0 00-2-2H3a2 2 0 00-2 2v5a2 2 0 002 2z" />
          </svg>
        );
      case "juice":
        return (
          <svg className={`w-5 h-5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case "achar":
        return (
          <svg className={`w-5 h-5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case "mosque":
        return (
          <svg className={`w-5 h-5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        );
    }
  };

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#f7f6f2] via-[#faf9f5] to-[#f3f1eb] text-slate-900 overflow-hidden border-t border-slate-200/70"
    >
      {/* Refined Ambient Glow & Geometry */}
      <div className="absolute top-1/4 -right-48 -z-10 w-[550px] h-[550px] bg-[#0072bc]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-48 -z-10 w-[500px] h-[500px] bg-[#f59e0b]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 sm:px-14 md:px-18 lg:px-20 xl:px-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            {/* Elegant Tri-Color Pill */}
            <div
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-xs backdrop-blur-md text-slate-700 text-xs font-semibold uppercase tracking-wider mb-5 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0072bc]" />
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              </span>
              <span>Resort-Grade Highway Facilities</span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18] transition-all duration-1000 ease-out delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Crafted for Your Ultimate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072bc] via-[#d97706] to-[#c8102e]">
                Comfort & Taste
              </span>
            </h2>
          </div>

          <p
            className={`max-w-md text-sm sm:text-base text-slate-600 leading-relaxed font-normal transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            From quiet acoustic rest suites and an executive VIP lounge to authentic sweet shops and fresh juice bars, every corner is designed to turn your expressway pause into pure delight.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          className={`flex flex-wrap items-center gap-2 sm:gap-2.5 mb-12 sm:mb-14 transition-all duration-1000 ease-out delay-250 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/15 scale-[1.02]"
                    : "bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 shadow-xs"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => {
            const accentConfig = {
              blue: {
                bar: "bg-[#0072bc]",
                iconBg: "bg-blue-50 text-[#0072bc] border-blue-100",
                badge: "bg-[#0072bc]/90 text-white",
                tagBg: "bg-blue-50/70 text-[#0072bc] border-blue-100/80",
                hoverBorder: "group-hover:border-blue-200",
                hoverGlow: "group-hover:shadow-[0_20px_45px_-12px_rgba(0,114,188,0.14)]",
                textColor: "text-[#0072bc]",
              },
              amber: {
                bar: "bg-[#f59e0b]",
                iconBg: "bg-amber-50 text-[#b45309] border-amber-100",
                badge: "bg-[#f59e0b]/95 text-white",
                tagBg: "bg-amber-50/70 text-[#b45309] border-amber-100/80",
                hoverBorder: "group-hover:border-amber-200",
                hoverGlow: "group-hover:shadow-[0_20px_45px_-12px_rgba(245,158,11,0.14)]",
                textColor: "text-[#b45309]",
              },
              red: {
                bar: "bg-[#c8102e]",
                iconBg: "bg-red-50 text-[#c8102e] border-red-100",
                badge: "bg-[#c8102e]/90 text-white",
                tagBg: "bg-red-50/70 text-[#c8102e] border-red-100/80",
                hoverBorder: "group-hover:border-red-200",
                hoverGlow: "group-hover:shadow-[0_20px_45px_-12px_rgba(200,16,46,0.14)]",
                textColor: "text-[#c8102e]",
              },
            }[item.accent];

            return (
              <article
                key={item.id}
                className={`group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200/80 ${accentConfig.hoverBorder} ${accentConfig.hoverGlow} transition-all duration-500 hover:-translate-y-1.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${300 + idx * 80}ms`,
                  transitionDuration: "850ms",
                }}
              >
                {/* Brand Color Indicator Bar (expands smoothly on hover) */}
                <div
                  className={`absolute top-0 left-0 h-[3px] w-12 ${accentConfig.bar} transition-all duration-500 group-hover:w-full z-20`}
                />

                {/* Card Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Top Left Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs ${accentConfig.badge}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Top Right Operating Hours Pill */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide bg-black/60 text-white/95 backdrop-blur-md border border-white/20">
                      {item.hours}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 bg-white">
                  {/* Category Header with Dedicated Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform ${accentConfig.iconBg}`}
                    >
                      {renderIcon(item.iconType, accentConfig.textColor)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-slate-950 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Feature Tags (Micro-Pills) */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md border ${accentConfig.tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Subtle Bottom Trust Bar */}
        <div
          className={`mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center transition-all duration-1000 delay-350 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="p-3">
            <span className="text-xl font-extrabold text-[#0072bc] block">24/7</span>
            <span className="text-xs text-slate-500 font-medium">Non-Stop Highway Service</span>
          </div>
          <div className="p-3">
            <span className="text-xl font-extrabold text-[#f59e0b] block">100% Pure</span>
            <span className="text-xs text-slate-500 font-medium">Chhana & Artisanal Sweets</span>
          </div>
          <div className="p-3">
            <span className="text-xl font-extrabold text-[#c8102e] block">VIP Comfort</span>
            <span className="text-xs text-slate-500 font-medium">Acoustically Isolated Suites</span>
          </div>
          <div className="p-3">
            <span className="text-xl font-extrabold text-slate-800 block">Expressway</span>
            <span className="text-xs text-slate-500 font-medium">Direct Roadside Access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
