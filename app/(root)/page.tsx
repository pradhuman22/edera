import FeatureRoomsSection from "@/components/shared/feature-rooms-section";
import HeroSection from "@/components/shared/hero-section";
import HowItWorksSection from "@/components/shared/how-it-works";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <FeatureRoomsSection />
    </div>
  );
}
