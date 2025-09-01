import Head from "next/head";
import Subscrib from "@/components/common/Subscrib";
import AboutSection from "@/components/home/AboutSection";
import AgricultureTechSection from "@/components/home/AgricultureTechSection";
import BlogCarousel from "@/components/home/BlogSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import UserReviewsSection from "@/components/home/UserReviewSection";
import ValuesSection from "@/components/home/ValueSection";

export default function Home() {

  // const faqSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "FAQPage",
  //   "mainEntity": [
  //     {
  //       "@type": "Question",
  //       "name": "Does CropGen work without field sensors?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "Yes. CropGen uses satellite indices (e.g., NDVI/EVI/MSAVI) and AI to deliver monitoring and advisory without mandatory hardware."
  //       }
  //     },
  //     {
  //       "@type": "Question",
  //       "name": "Which crops and regions are supported?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "Global coverage with a focus on India; supports major field and horticulture crops. Localized advisories vary by region."
  //       }
  //     },
  //     {
  //       "@type": "Question",
  //       "name": "Is there a free trial?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "Yes, a free trial is available before moving to the monthly subscription."
  //       }
  //     },
  //     {
  //       "@type": "Question",
  //       "name": "How does CropGen predict crop yield?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "CropGen uses AI and satellite-based vegetation indices (NDVI, EVI, MSAVI) combined with weather data and crop models to provide accurate yield predictions."
  //       }
  //     },
  //     {
  //       "@type": "Question",
  //       "name": "Can I use CropGen without internet connectivity?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "Some features like offline checklists are available, but satellite insights and AI predictions require an internet connection."
  //       }
  //     },
  //     {
  //       "@type": "Question",
  //       "name": "Which languages does CropGen support?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "CropGen currently supports English and Hindi, with more regional languages being added to help farmers across India and globally."
  //       }
  //     },
  //     {
  //       "@type": "Question",
  //       "name": "Does CropGen integrate with farm equipment or IoT devices?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "Yes, CropGen can integrate with IoT sensors, drones, and weather stations for enhanced monitoring and advisory."
  //       }
  //     },
  //     {
  //       "@type": "Question",
  //       "name": "How often are satellite insights updated in CropGen?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "Satellite imagery is updated every 3–5 days depending on cloud cover and region, ensuring near real-time monitoring."
  //       }
  //     },
  //     {
  //       "@type": "Question",
  //       "name": "Can CropGen be used for all types of crops?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "CropGen supports a wide range of field crops, vegetables, and fruits. The advisory adapts to crop type, growth stage, and local climate."
  //       }
  //     },
  //     {
  //       "@type": "Question",
  //       "name": "Is my farm data secure with CropGen?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "Yes, all farm data is encrypted and stored securely. CropGen follows strict privacy guidelines and does not share personal farm data without consent."
  //       }
  //     },
  //     {
  //       "@type": "Question",
  //       "name": "Does CropGen work globally?",
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": "Yes, CropGen provides global coverage with localized advisory, though certain recommendations are optimized for Indian farming practices."
  //       }
  //     }
  //   ]
  // };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CropGen",
    url: "https://cropgenapp.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cropgenapp.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  

  return (
    <div className="relative">
      <Head>

          {/* <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>

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
