import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroCarousel />
      <AboutSection />
      <AmenitiesSection />
      <LocationSection />
      <GallerySection />
      <VideoSection />
    </main>
  );
}

