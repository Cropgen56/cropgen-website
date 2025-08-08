import Subscrib from "@/components/common/Subscrib";
import AboutSection from "@/components/home/AboutSection";
import AgricultureTechSection from "@/components/home/AgricultureTechSection";
import BlogCarousel from "@/components/home/BlogSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import UserReviewsSection from "@/components/home/UserReviewSection";
import ValuesSection from "@/components/home/ValueSection";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <FeaturesSection />
      {/* <UserReviewsSection /> */}
      <AgricultureTechSection />
      <BlogCarousel />
      <Subscrib
        text={
          <>
            Start Monitoring your Farm <br /> Easily Now
          </>
        }
      />
    </div>
  );
}
