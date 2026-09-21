"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface DistanceItem {
  distance: string;
  name: string;
  time: string;
}

const corridorDistances: DistanceItem[] = [
  { distance: "103 km", name: "Dhaka Zero Point", time: "1h 15m away" },
  { distance: "72 km", name: "Padma Bridge Toll Plaza", time: "50m away" },
  { distance: "30 km", name: "Bhanga Junction", time: "25m away" },
  { distance: "41 km", name: "South Highway Junction", time: "35m away" },
  { distance: "98 km", name: "Khulna City", time: "1h 15m away" },
  { distance: "125 km", name: "Barishal City", time: "1h 35m away" },
];

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-white/10 overflow-hidden">
      {/* Background Cinematic Drone Video */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/sampan-highway.MP4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Balanced cinematic scrims - lighter overlay allowing the drone video to shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090d16]/75 via-[#090d16]/40 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/70 via-transparent to-[#090d16]/80" />
      </div>

      {/* Brand Tri-Color Ambient Lighting (Blue, Gold, Red from brand logo) */}
      <div className="absolute top-1/4 -left-32 -z-10 w-[450px] h-[450px] bg-[#0072bc]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -z-10 w-[400px] h-[400px] bg-[#fab516]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-10 w-[380px] h-[380px] bg-[#c8102e]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top highway badge with logo tri-color dots */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-[11px] font-mono tracking-tag text-stone-200 mb-8">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span className="w-2 h-2 rounded-full bg-brand-red" />
          </div>
          <span>DHAKA-KHULNA HIGHWAY, KASHIANI</span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl leading-[1.12] mb-8 drop-shadow-md">
          Your perfect stopover on the road home.
        </h1>

        {/* Stopover narrative paragraph with clean word & letter spacing */}
        <p className="editorial-spacing text-base sm:text-lg text-stone-200 max-w-2xl font-light mb-10 drop-shadow-sm">
          One turn off the highway brings you to a full stop: a grand dining hall, a banquet and party centre, a sweet shop, a super shop, fuel, LPG, and a bed for the night, all on one plot at Kashiani.
        </p>

        {/* CTA Buttons in signature brand blue and gold + Ambient Sound Toggle */}
        <div className="flex flex-wrap items-center gap-4 mb-20 sm:mb-28">
          <Link
            href="#restaurant"
            className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#0072bc] hover:bg-[#008be6] rounded shadow-lg shadow-[#0072bc]/25 border border-[#38bdf8]/30 transition-all duration-200"
          >
            RESERVE A TABLE
          </Link>
          <Link
            href="#restaurant"
            className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-stone-200 hover:text-[#fab516] bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#fab516]/50 rounded transition-all duration-200"
          >
            BOOK THE PARTY HALL
          </Link>

          {/* Sound Toggle Button */}
          {/* <button
            type="button"
            onClick={toggleMute}
            className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-mono tracking-wider text-stone-300 hover:text-white bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 hover:border-white/30 rounded transition-all duration-200 cursor-pointer"
            aria-label={isMuted ? "Turn Video Sound On" : "Mute Video Sound"}
          >
            {isMuted ? (
              <>
                <svg className="w-4 h-4 fill-current text-stone-400" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
                <span>SOUND: OFF</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 fill-current text-[#fab516]" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
                <span className="text-[#fab516]">SOUND: ON</span>
              </>
            )}
          </button> */}
        </div>

        {/* Corridor Distances Grid (6 metrics with brand accents) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-10 border-t border-white/10">
          {corridorDistances.map((item, idx) => {
            // cycle through brand accent colors
            const accentBorder =
              idx % 3 === 0
                ? "hover:border-[#0072bc]/50"
                : idx % 3 === 1
                  ? "hover:border-[#fab516]/50"
                  : "hover:border-[#c8102e]/50";
            return (
              <div
                key={item.name}
                className={`p-4 sm:p-5 rounded border border-white/15 bg-black/35 backdrop-blur-md hover:bg-black/50 transition-all duration-200 flex flex-col justify-between group ${accentBorder}`}
              >
                <div>
                  <span className="font-mono text-xl sm:text-2xl font-semibold tracking-tight text-[#fab516] group-hover:text-white transition-colors block mb-1">
                    {item.distance}
                  </span>
                  <span className="text-xs sm:text-[13px] text-stone-200 block font-normal tracking-wide leading-snug">
                    {item.name}
                  </span>
                </div>
                <span className="text-[11px] text-stone-400 font-mono tracking-wider mt-3 block">
                  {item.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
