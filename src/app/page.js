import AboutSection from "@/components/home/AboutSection";
import AgricultureTechSection from "@/components/home/AgricultureTechSection";
import BlogCarousel from "@/components/home/BlogSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import SubscriptionSection from "@/components/home/SubscriptionSection";
import UserReviewsSection from "@/components/home/UserReviewSection";
import ValuesSection from "@/components/home/ValueSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <FeaturesSection />
      <UserReviewsSection />
      <AgricultureTechSection />
      <BlogCarousel />
      <SubscriptionSection />
    </div>
  );
}
