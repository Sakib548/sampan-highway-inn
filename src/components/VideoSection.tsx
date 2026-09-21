"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePlayClick = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 0;
    setCurrentTime(curr);
    setDuration(dur);
    setProgress(dur > 0 ? (curr / dur) * 100 : 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newFraction = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = newFraction * (videoRef.current.duration || 0);
    videoRef.current.currentTime = newTime;
    setProgress(newFraction * 100);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section
      id="video"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#04060b] text-white overflow-hidden"
    >
      {/* Cinematic Ambient Glow Behind Frame */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#0072bc]/20 via-[#f59e0b]/10 to-[#c8102e]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-8 sm:px-14 md:px-18 lg:px-20 xl:px-24">
        {/* Sleek Minimal Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Aerial Cinema • 4K Drone Tour
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Highway Oasis, <span className="text-[#0072bc]">From Above</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-400 font-normal">
            Take flight over our expansive grounds, dedicated coach parking bays,
            and prime frontage directly on the national expressway.
          </p>
        </div>

        {/* Theater Video Frame */}
        <div
          className={`relative rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl shadow-black/90 group transition-all duration-1000 delay-150 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          {/* 16:9 Video Canvas */}
          <div className="relative aspect-video w-full flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              src="/videos/sampan-highway.mp4"
              preload="none"
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => {
                setIsPlaying(false);
                setShowControls(true);
              }}
              className="w-full h-full object-cover"
              onClick={handlePlayClick}
            />

            {/* Poster / Play Overlay (when not yet playing) */}
            {!isPlaying && (
              <div
                onClick={handlePlayClick}
                className="absolute inset-0 z-20 cursor-pointer flex flex-col items-center justify-center transition-all duration-500"
              >
                {/* Poster Background Image */}
                <Image
                  src="/images/gallery/DJI_20251001114325_0185_D.jpg"
                  alt="Sampan Highway Inn Drone Overview Poster"
                  fill
                  priority
                  className="object-cover object-center scale-100 group-hover:scale-103 transition-transform duration-1000 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 backdrop-blur-[1px] group-hover:via-black/30 transition-all" />

                {/* Center Glowing Play Button */}
                <div className="relative z-30 flex flex-col items-center group/btn">
                  <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white shadow-2xl group-hover/btn:scale-110 group-hover/btn:bg-white/25 transition-all duration-300">
                    {/* Outer Pulse Ring */}
                    <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-40 pointer-events-none" />

                    {/* Play Triangle */}
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  <span className="mt-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-white uppercase group-hover/btn:border-white/40 transition-colors">
                    Play Aerial Tour
                  </span>
                </div>

                {/* Corner Badges */}
                <div className="absolute top-5 left-5 z-30 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 text-white/90 backdrop-blur-md border border-white/15">
                    Aerial View
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 z-30 hidden sm:block">
                  <p className="text-xs text-white/80 font-medium tracking-wide drop-shadow-md">
                    Direct Highway Frontage • Kashiani Junction
                  </p>
                </div>
              </div>
            )}

            {/* Custom Video Control Bar (when playing) */}
            {isPlaying && (
              <div
                className={`absolute bottom-0 left-0 right-0 z-30 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
                  showControls ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {/* Progress Scrubber */}
                <div
                  onClick={handleSeek}
                  className="group/scrub relative w-full h-1.5 hover:h-2.5 bg-white/20 rounded-full cursor-pointer transition-all mb-4"
                >
                  <div
                    className="absolute top-0 left-0 bottom-0 bg-[#0072bc] rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md opacity-0 group-hover/scrub:opacity-100 transition-opacity"
                    style={{ left: `calc(${progress}% - 7px)` }}
                  />
                </div>

                {/* Controls Row */}
                <div className="flex items-center justify-between text-white text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-4">
                    {/* Play/Pause Button */}
                    <button
                      onClick={handlePlayClick}
                      className="hover:text-blue-400 transition-colors cursor-pointer"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>

                    {/* Mute Button */}
                    <button
                      onClick={toggleMute}
                      className="hover:text-blue-400 transition-colors cursor-pointer"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </button>

                    {/* Timestamp */}
                    <span className="text-slate-300 font-mono text-xs">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xs hidden md:inline">
                      Sampan Highway Inn Drone Flight
                    </span>

                    {/* Fullscreen Button */}
                    <button
                      onClick={toggleFullscreen}
                      className="hover:text-blue-400 transition-colors cursor-pointer"
                      aria-label="Fullscreen"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlights Strip Underneath */}
        <div
          className={`mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-center transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-xs">
            <span className="block text-xs uppercase tracking-wider text-slate-400">Footprint</span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">Expansive Grounds</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-xs">
            <span className="block text-xs uppercase tracking-wider text-slate-400">Parking Capacity</span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">100+ Buses & Cars</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-xs">
            <span className="block text-xs uppercase tracking-wider text-slate-400">Corridor</span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">Dhaka–Khulna Highway</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-xs">
            <span className="block text-xs uppercase tracking-wider text-slate-400">Operation</span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">24/7 Illumination</span>
          </div>
        </div>
      </div>
    </section>
  );
}
