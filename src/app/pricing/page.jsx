"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import PricingFAQ from "@/components/pricing/Faqdata";
import { PromoSection } from "@/components";

/** Inline PlanCard component */
function PlanCard({ plan }) {
  const isRecommended = plan.recommended;
  const isEnterprise = plan.name === "Enterprise";

  return (
    <div
      className={`relative flex flex-col rounded-2xl shadow-lg p-6 w-[250px] transition-all duration-300 items-stretch
      ${
        isRecommended
          ? "bg-white text-black [border-width:8px] border-[#265A48]"
          : "bg-white text-black border border-gray-200"
      }
      hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03]`}
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
        <p className="text-[20px] font-bold mb-4 text-[#2AB673]">Contact Us</p>
      )}

      <hr className="border-t border-gray-300 mb-4" />

      <div className="flex-1 flex flex-col gap-2 text-[12px] leading-[16px]">
        {plan.features.map((f, i) => (
          <p key={`f-${i}`} className="flex items-start gap-2">
            <Check
              size={14}
              strokeWidth={3}
              className="text-green-500 shrink-0"
            />
            {f}
          </p>
        ))}
        {plan.missing?.map((f, i) => (
          <p key={`m-${i}`} className="flex items-start gap-2 text-gray-400">
            <X size={14} strokeWidth={3} className="text-red-500 shrink-0" />
            {f}
          </p>
        ))}
      </div>

      <button
        className={`mt-6 py-2 rounded-2xl font-semibold transition-colors duration-300 ${
          isEnterprise
            ? "bg-[#265A48] text-white hover:bg-[#1E473A]"
            : "bg-[#2AB673] text-white hover:bg-[#466657]"
        }`}
      >
        {isEnterprise ? "Contact Us" : "Get Started"}
      </button>
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
      "Up to 5 hectares",
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
      "Up to 5 hectares",
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
      "Up to 5 hectares",
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
      "Up to 5 hectares",
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
      "Up to 5 hectares",
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

// Remaining component code (unchanged)
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

  return (
    <div>
      <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center">
        <div className="relative w-full text-center mt-10">
          <h2 className="text-[50px] font-extrabold text-[#2AB673] mb-2 relative z-10">
            Choose the Right Plan for Your Farm
          </h2>
        </div>

        <p className="text-lg font-semibold text-center text-gray-700 mb-8">
          Affordable plans designed to grow with your farming needs.
        </p>

        {/* Toggle */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-4">
            <span
              className={`font-bold text-[16px] cursor-pointer ${
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
              className="relative flex items-center bg-gray-200 rounded-full w-20 h-10 cursor-pointer"
            >
              <div
                className={`absolute top-1 w-8 h-8 rounded-full transition-all ${
                  billing === "monthly"
                    ? "left-1 bg-[#2AB673]"
                    : "left-11 bg-[#2AB673]"
                }`}
              />
            </div>
            <span
              className={`font-bold text-[16px] cursor-pointer ${
                billing === "yearly" ? "text-[#2AB673]" : "text-gray-400"
              }`}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </span>
            <span className="ml-2 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        <div className="px-3 py-4 bg-[#EEFFF9] w-full">
          <div className="flex gap-6 items-stretch flex-wrap justify-center mt-5">
            {adjustedPlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>

          <div className="text-center text-black text-sm font-bold mt-12">
            Prices are exclusive of VAT, GST, or other applicable taxes in your
            region.
            <br />
            If you require an invoice to process your CropGen subscription,
            please contact our support team.
          </div>
        </div>
      </div>

      <h2 className="text-center text-[40px] font-bold mb-10">
        Benefits of <span className="text-[#2AB673]">CropGen</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-10">
        {benefits.map((b) => (
          <div key={b.id} className="relative">
            <div className="absolute -top-3 -right-3 w-[70%] h-[70%] bg-[#2AB67366] rounded-2xl" />
            <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center h-full flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-28 h-28 mx-auto mb-6 bg-[#2AB673] rounded-full flex items-center justify-center">
                <Image
                  src={b.icon}
                  alt={b.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-[26px] mb-3">{b.title}</h3>
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
