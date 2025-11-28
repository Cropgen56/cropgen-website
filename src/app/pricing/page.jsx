"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import PricingFAQ from "@/components/pricing/Faqdata";
import { PromoSection } from "@/components";

/** Inline PlanCard component with flip functionality */
function PlanCard({ plan }) {
  const [flipped, setFlipped] = useState(false);
  const isRecommended = plan.recommended;
  const isEnterprise = plan.name === "Enterprise";

  // Split features for front and back
  const frontCount = Math.min(5, Math.ceil(plan.features.length / 2) + 1);
  const frontFeatures = plan.features.slice(0, frontCount);

  return (
    <div
      className="w-[85vw] sm:w-[320px] md:w-[280px] lg:w-[250px] h-[450px] flex-shrink-0"
      style={{ perspective: 1000 }}
    >
      <motion.div
        onClick={() => setFlipped((s) => !s)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
        className="cursor-pointer"
      >
        {/* FRONT */}
        <div
          className={`absolute inset-0 flex flex-col rounded-2xl shadow-lg p-6 transition-all duration-300 items-stretch ${
            isRecommended
              ? "bg-white text-black [border-width:8px] border-[#265A48]"
              : "bg-white text-black border border-gray-200"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {isRecommended && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#265A48] text-white text-xs font-bold px-3 py-1 rounded-full">
              Recommended
            </span>
          )}

          <h3 className="text-[22px] font-bold mt-6 mb-1">{plan.name}</h3>
          <p className="text-xs mb-2 text-gray-400">{plan.tagline}</p>

          {!isEnterprise ? (
            <p className="text-[20px] font-bold mb-4">{plan.price}</p>
          ) : (
            <p className="text-[20px] font-bold mb-4 text-[#2AB673]">
              Contact Us
            </p>
          )}

          <hr className="border-t border-gray-300 mb-4" />

          <div className="flex-1 flex flex-col gap-2 text-[12px] leading-[16px] overflow-hidden">
            {frontFeatures.map((f, i) => (
              <p key={`f-${i}`} className="flex items-start gap-2">
                <Check
                  size={14}
                  strokeWidth={3}
                  className="text-green-500 shrink-0"
                />
                {f}
              </p>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(true);
              }}
              className="w-full py-2 rounded-2xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
            >
              View All Features
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (isEnterprise) {
                  window.open("https://www.cropgenapp.com/contact", "_blank");
                } else {
                  window.open("https://app.cropgenapp.com/", "_blank");
                }
              }}
              className={`py-2 rounded-2xl font-semibold transition-colors duration-300 ${
                isEnterprise
                  ? "bg-[#265A48] text-white hover:bg-[#1E473A]"
                  : "bg-[#2AB673] text-white hover:bg-[#466657]"
              }`}
            >
              {isEnterprise ? "Contact Us" : "Get Started"}
            </button>
          </div>
        </div>

        {/* BACK */}
        <div
          className={`absolute inset-0 flex flex-col rounded-2xl shadow-lg p-6 ${
            isRecommended
              ? "bg-white text-black [border-width:8px] border-[#265A48]"
              : "bg-white text-black border border-gray-200"
          }`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-[18px] font-bold mt-2 mb-3">
            {plan.name} — All Features
          </h3>

          <div className="flex-1 flex flex-col gap-1 text-[11px] leading-[16px] overflow-auto pr-2">
            {plan.features.map((f, i) => (
              <p key={`bf-${i}`} className="flex items-start gap-2">
                <Check
                  size={14}
                  strokeWidth={3}
                  className="text-green-500 shrink-0"
                />
                {f}
              </p>
            ))}
            {plan.missing?.map((f, i) => (
              <p
                key={`bm-${i}`}
                className="flex items-start gap-2 text-gray-400"
              >
                <X
                  size={14}
                  strokeWidth={3}
                  className="text-red-500 shrink-0"
                />
                {f}
              </p>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
            className="mt-3 w-full py-2 rounded-2xl font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
          >
            Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}

const USD_TO_INR = 83;

const plans = [
  {
    name: "Free Trial",
    tagline: "Perfect for getting started",
    basePrice: 0,
    unit: "/30 days",
    features: [
      "Cost per Field Area",
      "Graphs & Historical Data",
      "Satellite Crop Monitoring (12+ indices)",
      "Weather Forecast (7–14 days)",
      "Soil Moisture & Temperature",
      "Growth Stage Tracking (BBCH)",
      "Fertilizer (NPK) Advisory",
      "Irrigation Updates (ET-based)",
    ],
    missing: [
      "Pest & Disease Alerts",
      "Yield Prediction",
      "Harvest Window Insights",
      "Soil Fertility Analysis",
      "SOC Analytics (Soil Organic Carbon)",
      "Advisory Delivery",
      "Weekly Reports",
      "Operations Management Dashboard",
      "API/ERP Integration",
      "Enterprise Support",
    ],
  },
  {
    name: "Basic",
    tagline: "For small farms",
    basePrice: 5,
    unit: "/ha/month",
    features: [
      "Cost per Field Area",
      "Graphs & Historical Data (3 yr)",
      "Satellite Crop Monitoring (12+ indices)",
      "Weather Forecast (7–14 days)",
      "Soil Moisture & Temperature (surface)",
      "Growth Stage Tracking (BBCH basic)",
      "Fertilizer (NPK) Advisor",
      "Weekly Reports (basic PDF)",
      "Advisory Delivery Email (weekly)",
    ],
    missing: [
      "Soil Fertility Analysis",
      "SOC Analytics (Soil Organic Carbon)",
      "Irrigation Updates (ET-based)",
      "Pest & Disease Alerts",
      "Yield Prediction",
      "Harvest Window Insights",
      "Operations Management Dashboard",
      "API/ERP Integration",
      "Enterprise Support",
    ],
  },
  {
    name: "Pro",
    tagline: "Most popular choice",
    basePrice: 15,
    unit: "/ha/month",
    features: [
      "Cost per Field Area",
      "Graphs & Historical Data (5 yr)",
      "Satellite Crop Monitoring (12+ indices)",
      "Weather Forecast (7–14 days)",
      "Soil Moisture & Temperature (root-soil)",
      "Growth Stage Tracking (BBCH basic)",
      "Fertilizer (NPK) Advisor",
      "Irrigation Updates (ET-based)",
      "Pest & Disease Alerts",
      "Advisory Delivery Email (detailed weekly)",
      "Weekly Reports (PDF)",
    ],
    missing: [
      "Soil Fertility Analysis",
      "Harvest Window Insights",
      "Yield Prediction",
      "SOC Analytics (Soil Organic Carbon)",
      "Operations Management Dashboard",
      "API/ERP Integration",
      "Enterprise Support",
    ],
  },
  {
    name: "Premium",
    tagline: "Advanced analytics",
    basePrice: 29,
    unit: "/ha/month",
    recommended: true,
    features: [
      "Cost per Field Area",
      "Graphs & Historical Data (7 yr)",
      "Satellite Crop Monitoring (12+ indices)",
      "Weather Forecast (7–14 days advanced)",
      "Soil Moisture & Temperature (advanced soil)",
      "Growth Stage Tracking (BBCH AI-enhanced)",
      "Fertilizer (NPK) Advisor (advanced)",
      "Irrigation Updates (ET-based smart)",
      "Pest & Disease Alerts (AI early-warning)",
      "Yield Prediction",
      "Harvest Window Insights",
      "Soil Fertility Analysis",
      "SOC Analytics (Soil Organic Carbon)",
      "Advisory Delivery Email (daily + weekly)",
      "Weekly Reports (detailed PDF)",
      "API/ERP Integration",
      "Enterprise Support (priority email)",
    ],
    missing: ["Operations Management Dashboard"],
  },
  {
    name: "Enterprise",
    tagline: "For large operations",
    basePrice: null,
    unit: null,
    features: [
      "Cost per Field Area",
      "Graphs & Historical Data (10 Year Plus)",
      "Satellite Crop Monitoring (zone-wide analysis)",
      "Weather Forecast (7–14 days) (multi-field)",
      "Soil Moisture & Temperature (advanced soil)",
      "Growth Stage Tracking (BBCH AI-enhanced)",
      "Fertilizer (NPK) Advisor (advanced)",
      "Irrigation Updates (ET-based smart)",
      "Pest & Disease Alerts (AI early-warning)",
      "Yield Prediction (farm-wide)",
      "Harvest Window Insights",
      "Soil Fertility Analysis (zone-wide analysis)",
      "SOC Analytics (regional mapping)",
      "Advisory Delivery Email (farm + Enterprise Dashboard)",
      "Weekly Reports (bulk reporting)",
      "Operations Management Dashboard (multi-user enterprise)",
      "API/ERP Integration",
      "Enterprise Support (dedicated account manager)",
    ],
  },
];

const benefits = [
  {
    id: 1,
    icon: "/assets/image/contact/Farming.png",
    title: "Be at the forefront of smart farming",
    description:
      "Leverage AI, remote sensing, and precision agriculture tools to transform the way you manage your fields.",
  },
  {
    id: 2,
    icon: "/assets/image/contact/Rocket.png",
    title: "Increase income from every acre",
    description:
      "Maximize yields and reduce input costs with real-time crop monitoring, irrigation insights, and pest alerts.",
  },
  {
    id: 3,
    icon: "/assets/image/contact/Save.png",
    title: "Save time, make smarter decisions",
    description:
      "Access all your farm data anytime, anywhere on your computer or mobile and act quickly with reliable insights.",
  },
];

export default function Page() {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("desktop"); // "mobile" | "tablet" | "desktop"

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setViewMode("mobile");
      } else if (width < 1024) {
        setViewMode("tablet");
      } else {
        setViewMode("desktop");
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const adjustedPlans = plans.map((p) => {
    if (p.name === "Enterprise") return p;

    let displayPrice = p.basePrice;
    if (p.basePrice === 0) displayPrice = 0;
    else if (billing === "yearly") displayPrice = p.basePrice * 12 * 0.8;

    let formattedPrice;
    if (displayPrice === 0) formattedPrice = "$0 /30 days";
    else if (currency === "USD")
      formattedPrice = `$${displayPrice.toFixed(2)} ${
        billing === "yearly" ? "/ha/year" : "/ha/month"
      }`;
    else
      formattedPrice = `₹${Math.round(displayPrice * 83)} ${
        billing === "yearly" ? "/ha/year" : "/ha/month"
      }`;

    return { ...p, price: formattedPrice };
  });

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? adjustedPlans.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === adjustedPlans.length - 1 ? 0 : prev + 1
    );
  };

  // Check if carousel should be shown (mobile or tablet)
  const showCarousel = viewMode === "mobile" || viewMode === "tablet";

  return (
    <div>
      <div className="min-h-screen bg-white px-4 sm:px-6 py-12 flex flex-col items-center">
        <div className="relative w-full text-center mt-10">
          <h2 className="text-[28px] sm:text-[40px] md:text-[50px] font-extrabold text-[#2AB673] mb-2 relative z-10">
            Choose the Right Plan for Your Farm
          </h2>
        </div>

        <p className="text-base sm:text-lg font-semibold text-center text-gray-700 mb-8 px-4">
          Affordable plans designed to grow with your farming needs.
        </p>

        {/* Toggle */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-4">
            <span
              className={`font-bold text-[14px] sm:text-[16px] cursor-pointer ${
                billing === "monthly" ? "text-[#2AB673]" : "text-gray-400"
              }`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </span>
            <div
              onClick={() =>
                setBilling(billing === "monthly" ? "yearly" : "monthly")
              }
              className="relative flex items-center bg-gray-200 rounded-full w-16 sm:w-20 h-8 sm:h-10 cursor-pointer"
            >
              <div
                className={`absolute top-1 w-6 sm:w-8 h-6 sm:h-8 rounded-full transition-all ${
                  billing === "monthly"
                    ? "left-1 bg-[#2AB673]"
                    : "left-8 sm:left-11 bg-[#2AB673]"
                }`}
              />
            </div>
            <span
              className={`font-bold text-[14px] sm:text-[16px] cursor-pointer ${
                billing === "yearly" ? "text-[#2AB673]" : "text-gray-400"
              }`}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </span>
            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        <div className="px-2 sm:px-3 py-4 bg-[#EEFFF9] w-full">
          {/* Mobile & Tablet View - Single Card Carousel */}
          {showCarousel ? (
            <div className="relative">
              {/* Swipe hint text */}
              <p className="text-center text-sm text-gray-500 mb-4 flex items-center justify-center gap-2">
                <ChevronLeft size={16} className="text-[#2AB673]" />
                <span>Swipe or use arrows to see more plans</span>
                <ChevronRight size={16} className="text-[#2AB673]" />
              </p>

              {/* Card Container */}
              <div className="flex justify-center items-center relative px-12">
                {/* Left Arrow */}
                <button
                  onClick={goToPrev}
                  className="absolute left-2 sm:left-4 z-10 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 shadow-lg transition-all border border-gray-200"
                  aria-label="Previous plan"
                >
                  <ChevronLeft size={24} className="text-[#2AB673]" />
                </button>

                {/* Current Card with Animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex justify-center"
                  >
                    <PlanCard plan={adjustedPlans[currentIndex]} />
                  </motion.div>
                </AnimatePresence>

                {/* Right Arrow */}
                <button
                  onClick={goToNext}
                  className="absolute right-2 sm:right-4 z-10 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 shadow-lg transition-all border border-gray-200"
                  aria-label="Next plan"
                >
                  <ChevronRight size={24} className="text-[#2AB673]" />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {adjustedPlans.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to plan ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-[#2AB673] w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Plan Counter */}
              <p className="text-center text-sm text-gray-600 mt-3 font-medium">
                <span className="text-[#2AB673] font-bold">
                  {currentIndex + 1}
                </span>{" "}
                / <span>{adjustedPlans.length} plans</span>
              </p>
            </div>
          ) : (
            /* Desktop View - All Cards */
            <div className="flex gap-4 lg:gap-6 items-stretch flex-wrap justify-center mt-5">
              {adjustedPlans.map((plan, i) => (
                <PlanCard key={i} plan={plan} />
              ))}
            </div>
          )}

          <div className="text-center text-black text-xs sm:text-sm font-bold mt-12 px-4">
            If you require an invoice to process your CropGen subscription,
            please contact our support team.
          </div>
        </div>
      </div>

      <h2 className="text-center text-[28px] sm:text-[40px] font-bold mb-10 px-4">
        Benefits of <span className="text-[#2AB673]">CropGen</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6 sm:px-10">
        {benefits.map((b) => (
          <div key={b.id} className="relative">
            <div className="absolute -top-3 -right-3 w-[70%] h-[70%] bg-[#2AB67366] rounded-2xl" />
            <div className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center h-full flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-20 sm:w-28 h-20 sm:h-28 mx-auto mb-6 bg-[#2AB673] rounded-full flex items-center justify-center">
                <Image
                  src={b.icon}
                  alt={b.title}
                  width={60}
                  height={60}
                  className="object-contain w-10 sm:w-[60px] h-10 sm:h-[60px]"
                />
              </div>
              <h3 className="font-bold text-[20px] sm:text-[26px] mb-3">
                {b.title}
              </h3>
              <p className="text-gray-600 text-xs font-bold mt-5 leading-relaxed flex-1">
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <PricingFAQ />
      <PromoSection />
    </div>
  );
}
