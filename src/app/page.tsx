import HeroSection from "@/components/HeroSection";
import RestaurantSection from "@/components/RestaurantSection";
import StaySection from "@/components/StaySection";
import SweetBoxSection from "@/components/SweetBoxSection";
import RetailSection from "@/components/RetailSection";
import FuelSection from "@/components/FuelSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import PlanStopSection from "@/components/PlanStopSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <RestaurantSection />
      <StaySection />
      <SweetBoxSection />
      <RetailSection />
      <FuelSection />
      <GallerySection />
      <LocationSection />
      <PlanStopSection />
      <Footer />
    </main>
  );
}

