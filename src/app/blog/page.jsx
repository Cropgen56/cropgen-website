import BlogGrid from "@/components/blog/BlogGrid";
import HeroSection from "@/components/blog/HeroSection";
import SubscriptionBanner from "@/components/blog/SubscriptionBanner";
import Subscrib from "@/components/common/Subscrib";

export default function About() {
  return (
    <div>
      <HeroSection />
      <SubscriptionBanner />
      <BlogGrid />
      <Subscrib
        text={
          <>
            Start Monitoring your Farm <br />
            Easily Now
          </>
        }
      />
    </div>
  );
}
