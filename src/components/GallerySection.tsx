"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface GalleryPhoto {
  id: string;
  number: string;
  title: string;
  category: "architecture" | "dining" | "suites" | "retail";
  tag: string;
  image: string;
  location: string;
  featured?: boolean; // spans 2 columns in the editorial bento grid
}

const photos: GalleryPhoto[] = [
  {
    id: "aerial-night",
    number: "01",
    title: "Night Illumination & Expressway Frontage",
    category: "architecture",
    tag: "Aerial Panorama",
    image: "/images/gallery/DJI_20251001033110_0143_D.JPG",
    location: "National Expressway Frontage",
    featured: true,
  },
  {
    id: "royal-dining",
    number: "02",
    title: "Royal VIP Dining Lounge",
    category: "dining",
    tag: "Fine Dining",
    image: "/images/gallery/IMG_20250916_070236.jpg",
    location: "Main Dining Pavilion",
  },
  {
    id: "vvip-suite",
    number: "03",
    title: "VVIP King Executive Suite",
    category: "suites",
    tag: "Accommodations",
    image: "/images/gallery/WhatsApp Image 2025-06-25 at 6.12.08 PM (4).jpeg",
    location: "Executive Rest Wing",
  },
  {
    id: "aerial-day",
    number: "04",
    title: "Expansive Highway Estate Panorama",
    category: "architecture",
    tag: "Day Drone Flight",
    image: "/images/gallery/DJI_20251001114325_0185_D.jpg",
    location: "Estate Grounds",
    featured: true,
  },
  {
    id: "banquet-hall",
    number: "05",
    title: "Executive Long Table Banquet Hall",
    category: "dining",
    tag: "Banquet & Events",
    image: "/images/gallery/IMG_20250916_070313.jpg",
    location: "Banquet Wing",
  },
  {
    id: "modern-facade",
    number: "06",
    title: "Modern Brick & Structural Glazing Facade",
    category: "architecture",
    tag: "Architecture",
    image: "/images/gallery/IMG_4234.JPG",
    location: "Main Entrance Portico",
  },
  {
    id: "family-dining",
    number: "07",
    title: "Lakeside Family Dining Veranda",
    category: "dining",
    tag: "Family Veranda",
    image: "/images/gallery/WhatsApp Image 2025-06-25 at 6.12.08 PM (8).jpeg",
    location: "East Veranda",
  },
  {
    id: "super-shop",
    number: "08",
    title: "24/7 Super Shop & Belgian Waffle Bar",
    category: "retail",
    tag: "Retail & Cafe",
    image: "/images/gallery/IMG_20250916_065033.jpg",
    location: "Traveler Retail Hub",
  },
  {
    id: "bakery-counter",
    number: "09",
    title: "Artisanal Bakery & Gourmet Confectionery",
    category: "retail",
    tag: "Gourmet Treats",
    image: "/images/gallery/IMG_20250916_065230.jpg",
    location: "Sweet & Pastry Gallery",
  },
];

const categories = [
  { id: "all", label: "All Spaces", count: photos.length },
  { id: "architecture", label: "Aerial & Architecture", count: 3 },
  { id: "dining", label: "Dining & Banquets", count: 3 },
  { id: "suites", label: "VVIP Rest Suites", count: 1 },
  { id: "retail", label: "Super Shop & Cafe", count: 2 },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredPhotos =
    activeTab === "all"
      ? photos
      : photos.filter((p) => p.category === activeTab);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[#faf9f6] text-stone-900 border-t border-b border-stone-200 overflow-hidden"
    >
      {/* Subtle Atmosphere Lighting */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#0072bc]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-gradient-to-tl from-[#fab516]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            {/* Top Kicker with brand colors */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0072bc]" />
                <span className="w-2 h-2 rounded-full bg-[#fab516]" />
                <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              </div>
              <span className="text-[11px] font-mono tracking-tag uppercase text-stone-700 font-semibold">
                Photo Gallery & Spaces
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-950 leading-tight">
              Estate, Suites & Dining
            </h2>

            <p className="editorial-spacing mt-3 text-sm sm:text-base text-stone-600 font-light max-w-xl">
              A photographic tour through our highway oasis — from the illuminated expressway frontage to the private acoustic rest suites.
            </p>
          </div>

          {/* Floating Tab Switcher with Brand Blue Active */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-stone-200 shadow-2xs shrink-0">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setLightboxIndex(null);
                  }}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0072bc] text-white shadow-sm shadow-[#0072bc]/25"
                      : "text-stone-600 hover:text-stone-950 hover:bg-stone-100"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Bento Masonry Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-1000 delay-150 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filteredPhotos.map((photo, index) => {
            const isFeatured = photo.featured && activeTab === "all";

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative rounded-3xl overflow-hidden bg-slate-900 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-1 ring-1 ring-black/5 ${
                  isFeatured
                    ? "md:col-span-2 lg:col-span-2 h-80 sm:h-96 md:h-[440px]"
                    : "col-span-1 h-72 sm:h-80 md:h-[440px]"
                }`}
              >
                {/* Image Container with Ken Burns Hover */}
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes={
                    isFeatured
                      ? "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  }
                  className="object-cover object-center transform duration-1000 ease-out group-hover:scale-108"
                />

                {/* Always-on Subtle Vignette + Deep Film Scrim on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Top Corner Meta Bar */}
                <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between pointer-events-none">
                  {/* Category Pill */}
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/45 text-white/95 backdrop-blur-md border border-white/20 shadow-xs">
                    {photo.tag}
                  </span>

                  {/* Watermark Index Number */}
                  <span className="font-mono text-xs font-semibold text-white/60 tracking-widest group-hover:text-white transition-colors">
                    #{photo.number}
                  </span>
                </div>

                {/* Center Hover Magnifying Glass Indicator */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/35 flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Editorial Caption Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-10 transform duration-300">
                  <div className="flex items-center gap-2 mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="w-2 h-0.5 bg-[#f59e0b]" />
                    <span className="text-[11px] font-semibold text-amber-300 tracking-wider uppercase">
                      {photo.location}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-white drop-shadow-md">
                    {photo.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Footnote Strip */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-white/70 backdrop-blur-xs border border-slate-200/80 text-xs text-slate-500 font-medium transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 text-slate-700">
            <svg className="w-4 h-4 text-[#0072bc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>Click any photograph to enter the full-screen cinematic viewer</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span>ESTATE OVERVIEW</span>
            <span>•</span>
            <span>HIGHWAY LUXURY</span>
          </div>
        </div>
      </div>

      {/* Ultra-Sleek Cinematic Lightbox with Quick Filmstrip */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/96 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-in fade-in duration-300 select-none"
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between text-white/90 z-20 max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white backdrop-blur-md border border-white/15">
                {activePhoto.tag}
              </span>
              <span className="text-xs text-white/40">•</span>
              <span className="text-xs font-mono text-white/70">
                {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15 hover:scale-105"
              aria-label="Close Lightbox"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Lightbox Main Stage */}
          <div className="relative flex-1 my-2 flex items-center justify-center max-w-6xl mx-auto w-full">
            {/* Prev Chevron */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                )
              }
              className="absolute left-2 sm:left-4 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer hover:scale-108"
              aria-label="Previous Photo"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* High-Resolution Main Image */}
            <div className="relative w-full h-full max-h-[72vh] flex items-center justify-center">
              <Image
                src={activePhoto.image}
                alt={activePhoto.title}
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1280px) 95vw, 1200px"
              />
            </div>

            {/* Next Chevron */}
            <button
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)
              }
              className="absolute right-2 sm:right-4 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer hover:scale-108"
              aria-label="Next Photo"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Lightbox Bottom Details & Quick Filmstrip */}
          <div className="max-w-4xl mx-auto w-full text-center z-20 flex flex-col items-center gap-3">
            {/* Title & Location */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-0.5">
                {activePhoto.location}
              </p>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {activePhoto.title}
              </h3>
            </div>

            {/* Quick Filmstrip Thumbnails */}
            <div className="flex items-center gap-2 max-w-full overflow-x-auto py-1 px-2 scrollbar-none">
              {filteredPhotos.map((thumb, tIdx) => (
                <button
                  key={thumb.id}
                  onClick={() => setLightboxIndex(tIdx)}
                  className={`relative w-12 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    tIdx === lightboxIndex
                      ? "border-[#0072bc] scale-110 shadow-lg shadow-blue-500/40 opacity-100"
                      : "border-white/20 opacity-50 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={thumb.image}
                    alt={thumb.title}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
