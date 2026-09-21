"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface SlideData {
  id: number;
  image: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/images/heromain.jpeg",
    badge: "24/7 Highway Oasis & Traveler Rest Stop",
    title: "Welcome to Your",
    highlight: "Premier Highway Stop",
    description:
      "Experience unmatched comfort, delicious hot meals, serene lodging, and secure parking on your highway journey.",
    primaryCtaText: "Book Your Stay",
    primaryCtaLink: "#contact",
    secondaryCtaText: "Explore Amenities",
    secondaryCtaLink: "#amenities",
  },
  {
    id: 2,
    image: "/images/heromain2.jpg",
    badge: "Delicious Highway Dining & Refreshments",
    title: "Fresh & Authentic",
    highlight: "24/7 Dining Experience",
    description:
      "Savor freshly prepared local delicacies, continental treats, and barista coffee crafted for weary road travelers.",
    primaryCtaText: "View Our Menu",
    primaryCtaLink: "#dining",
    secondaryCtaText: "Reserve Table",
    secondaryCtaLink: "#contact",
  },
  {
    id: 3,
    image: "/images/heromain3.jpg",
    badge: "Modern Lodging & Peaceful Rest Suites",
    title: "Recharge in Pure",
    highlight: "Tranquility & Comfort",
    description:
      "Spacious executive rooms and rest suites equipped with high-speed Wi-Fi, premium bedding, and around-the-clock security.",
    primaryCtaText: "Check Availability",
    primaryCtaLink: "#contact",
    secondaryCtaText: "About Us",
    secondaryCtaLink: "#about",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Continuous Autoplay timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide(); // Swiped left -> next
    } else if (distance < -50) {
      prevSlide(); // Swiped right -> prev
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative w-full h-screen h-[100dvh] overflow-hidden select-none bg-slate-950"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Sampan Highway Inn Hero Carousel"
    >
      {/* Slides Background Images */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            aria-hidden={!isActive}
          >
            {/* Background Image with subtle Ken Burns effect */}
            <div
              className={`relative w-full h-full transform transition-transform duration-7000 ease-out ${isActive ? "scale-105" : "scale-100"
                }`}
            >
              <Image
                src={slide.image}
                alt={`${slide.title} ${slide.highlight}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Cinematic Gradient Overlays:
                - Darker top gradient for the transparent navbar
                - Mid-layer vignette for image depth
                - Dark bottom gradient for content readability
            */}
            <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/40 to-black/85" />
            <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%]" />

            {/* Slide Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium mb-4 transform transition-all duration-700 delay-100 ${isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                    }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
                  {slide.badge}
                </div>

                {/* Headline with 3-color brand accents (Blue, Gold, and Crimson Red on the last word) */}
                <h1
                  className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 transform transition-all duration-700 delay-200 ${isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                    }`}
                >
                  {slide.title}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072bc] via-[#38bdf8] to-[#f59e0b]">
                    {slide.highlight.split(" ").slice(0, -1).join(" ")}{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ef4444] to-[#c8102e]">
                    {slide.highlight.split(" ").slice(-1)[0]}
                  </span>
                </h1>

                {/* Description */}
                <p
                  className={`max-w-xl mx-auto text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed mb-6 transform transition-all duration-700 delay-300 font-normal ${isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                    }`}
                >
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-wrap items-center justify-center gap-3 transform transition-all duration-700 delay-400 ${isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                    }`}
                >
                  <Link
                    href={slide.primaryCtaLink}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0072bc] hover:bg-[#005f9e] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#0072bc]/30 hover:shadow-[#0072bc]/50 hover:scale-[1.02] active:scale-98 transition-all duration-200"
                  >
                    {slide.primaryCtaText}
                  </Link>
                  <Link
                    href={slide.secondaryCtaLink}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md border border-white/25 hover:border-white/40 hover:scale-[1.02] active:scale-98 transition-all duration-200"
                  >
                    {slide.secondaryCtaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows (Desktop & Tablet) */}
      <button
        type="button"
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/25 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-md border border-white/15 hover:border-white/30 hover:scale-110 active:scale-95 transition-all duration-200 group"
        aria-label="Previous Slide"
      >
        <svg
          className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/25 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-md border border-white/15 hover:border-white/30 hover:scale-110 active:scale-95 transition-all duration-200 group"
        aria-label="Next Slide"
      >
        <svg
          className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Bottom Controls: Slide Indicators + Numerical Counter */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-30 flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-12">
        {/* Slide Counter (e.g. 01 / 03) */}
        <div className="text-xs sm:text-sm font-semibold tracking-wider text-white/70 font-mono">
          <span className="text-white">0{current + 1}</span> / 0{slides.length}
        </div>

        {/* Bar Indicators */}
        <div className="flex items-center gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="group py-2 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-500 ${index === current
                    ? "w-8 sm:w-12 bg-gradient-to-r from-[#0284c7] to-[#f59e0b]"
                    : "w-2 sm:w-3 bg-white/30 group-hover:bg-white/60"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
