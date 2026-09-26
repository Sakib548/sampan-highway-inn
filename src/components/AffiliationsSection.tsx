"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

/* ── Data (Kept outside component to prevent re-renders) ── */
const affiliations = [
  { num: "01", name: "Real Estate & Housing Association of Bangladesh", logo: "/affiliation/rehab.png" },
  { num: "02", name: "Federation of Bangladesh Chambers of Commerce & Industry (FBCCI)", logo: "/affiliation/fbcci.png" },
  { num: "03", name: "Bangladesh Reconditioned Vehicles Importers & Dealers Assoc. (BARVIDA)", logo: "/affiliation/barvia.png" },
  { num: "04", name: "Bangladesh Arm's Dealer and Importer Association", logo: "/affiliation/bad.png" },
  { num: "05", name: "Bangladesh PABX Association", logo: "/affiliation/pabx.png" },
  { num: "06", name: "Bangladesh LPG Autogas Station Owner’s Association", logo: "/affiliation/lpg.png" },
  { num: "07", name: "Bangladesh Volleyball Federation (AD-Hoc Community)", logo: "/affiliation/bvf.png" },
  { num: "08", name: "Barisal Bulls", logo: "/affiliation/barishalbulls.png" },
  { num: "09", name: "Barisal Club (1864)", logo: "/affiliation/lis.png" },
  { num: "10", name: "Bangladesh Premier League (BPL)", logo: "/affiliation/bpl.png" },
  { num: "11", name: "Mercedes-Benz", logo: "/affiliation/mercedes.png" },
  { num: "12", name: "Chartered Institute of Procurement & Supply UK (CIPS)", logo: "/affiliation/cips.png" },
  { num: "13", name: "Directorate General Defence Purchase (DGDP)", logo: "/affiliation/dgdp.png" },
  { num: "14", name: "Shooter's Shooting Club", logo: "/affiliation/shoot.png" },
  { num: "15", name: "Express Highway Club And Lounge", logo: "/affiliation/EHCl.png" },
  { num: "16", name: "Bangladesh Archery Federation", logo: "/affiliation/Archery.png" },
  { num: "17", name: "Sampan Golf Academy", logo: "/affiliation/Sampan Golf Academy.png" },
];

export default function AffiliationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const q = gsap.utils.selector(containerRef);

      if (prefersReducedMotion) {
        gsap.set(q(".affil-header-anim, .affil-card"), { opacity: 1, y: 0 });
        return;
      }

      /* Header Animation */
      gsap.from(q(".affil-header-anim"), {
        opacity: 0,
        y: 35,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: q(".affil-header")[0],
          start: "top 85%",
        },
      });

      /* Grid Items Cinematic Reveal */
      gsap.fromTo(
        q(".affil-card"),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: q(".affil-grid")[0],
            start: "top 85%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="affiliations"
      ref={containerRef}
      className="relative w-full bg-[#f8f9fb] pt-20 pb-16 md:pt-28 md:pb-20 border-t border-stone-200 overflow-hidden text-stone-900"
    >
      {/* Brand Tri-Color Ambient Lighting (Gentle Blue & Gold Tints) */}
      <div 
        className="pointer-events-none absolute top-1/3 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(0,114,188,0.06) 0%, transparent 70%)" }}
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-0 w-[550px] h-[550px] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(250,181,22,0.05) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* ─── Section Header ─── */}
        <div className="affil-header flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="max-w-2xl">
            {/* Tri-Color Badge matching site design system */}
            <div className="affil-header-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-300 bg-white shadow-2xs text-[10px] font-mono tracking-tag uppercase text-stone-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#fab516]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
              <span className="text-[#0072bc] font-semibold ml-1">Governance & Trust</span>
            </div>
            <h2 className="affil-header-anim font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-stone-900 leading-[1.08] tracking-tight">
              Affiliations &<br />
              <span className="italic text-[#0072bc]">Accreditations.</span>
            </h2>
          </div>
          <div className="max-w-sm md:text-right">
            <div className="hidden md:block w-16 h-[2px] bg-gradient-to-r from-[#0072bc] via-[#fab516] to-[#c8102e] mb-6 ml-auto rounded-full" />
            <p className="affil-header-anim text-sm md:text-base font-light text-stone-600 leading-[1.8] editorial-spacing">
              Our commitment to excellence is recognized by leading national and international bodies. We partner with the best to ensure unparalleled standards.
            </p>
          </div>
        </div>

        {/* ─── Architectural Logo Cards Grid ─── */}
        <div className="affil-grid flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
          {affiliations.map((item, i) => (
            <div
              key={`${item.num}-${i}`}
              className="affil-card group relative bg-white hover:bg-stone-50/80 rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-xl hover:shadow-stone-200/70 hover:border-[#0072bc]/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 w-[calc(50%-0.4rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-1rem)] aspect-[5/4] sm:aspect-[4/3] overflow-hidden flex flex-col items-center justify-center p-5 sm:p-6 md:p-7 transform-gpu"
            >
              {/* Top Accent Gradient Line on Hover */}
              <span className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0072bc] via-[#0ea5e9] to-[#0072bc] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />

              {/* Ghost Architectural Index */}
              <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 text-[10px] font-mono tracking-[0.25em] text-stone-400 font-medium transition-colors duration-300 group-hover:text-[#0072bc] z-10">
                {item.num}
              </span>

              {/* Radial Brand Glow Behind Logo on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(circle, rgba(0,114,188,0.06) 0%, transparent 70%)" }}
              />

              {/* Logo Wrapper */}
              <div className="relative w-full h-12 sm:h-14 md:h-16 flex items-center justify-center mb-3 sm:mb-4 px-2">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  quality={85}
                  className="object-contain relative z-10 transition-all duration-500 ease-out grayscale-0 group-hover:scale-108 filter drop-shadow-2xs"
                />
              </div>

              {/* Name & Animated Accent Indicator */}
              <div className="mt-auto w-full text-center px-1">
                <p className="text-[11px] sm:text-xs leading-snug font-medium text-stone-600 group-hover:text-stone-900 transition-colors duration-300 line-clamp-2">
                  {item.name}
                </p>
                <div className="h-[1.5px] w-6 bg-stone-200 mt-2.5 mx-auto transition-all duration-500 ease-out group-hover:w-12 group-hover:bg-[#0072bc]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
