"use client";

import { useState } from "react";
import { X } from "lucide-react";
import PlanCard from "@/components/pricing/plancard";
import Image from "next/image";
import PricingFAQ from "@/components/pricing/Faqdata";
import { PromoSection } from "@/components";

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
    // recommended: true,
    // recommended:true,
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
    basePrice: 2.5,
    unit: "/ha/month",
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

const benefits = [
  {
    id: 1,
    icon: "/assets/image/contact/Farming.png", // replace with your image path
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
    let displayPrice = p.basePrice;

    if (p.basePrice === 0) {
      displayPrice = 0;
    } else if (billing === "yearly") {
      displayPrice = p.basePrice * 12 * 0.8; // yearly discount
    }

    let formattedPrice;
    if (displayPrice === 0) {
      formattedPrice = "$0 /30 days";
    } else {
      if (currency === "USD") {
        formattedPrice = `$${displayPrice.toFixed(2)} ${
          billing === "yearly" ? "/ha/year" : "/ha/month"
        }`;
      } else {
        formattedPrice = `₹${Math.round(displayPrice * USD_TO_INR)} ${
          billing === "yearly" ? "/ha/year" : "/ha/month"
        }`;
      }
    }

    return { ...p, price: formattedPrice };
  });

  return (
    <div>
      <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center ">
        {/* Left side - Back link */}
        <div className="absolute top-6 left-6 mt-16 flex items-center gap-2 cursor-pointer text-gray-700 hover:text-[#2AB673] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-semibold text-md text-gray-400"> Go Back</span>
        </div>

        <div className="relative w-full text-center mt-10">
          <Image
            src="/assets/image/contact/Pricing.png"
            alt="pricing"
            width={800} // bigger width
            height={400}
            className="absolute z-0 opacity-100 top-0 sm:-top-2 md:-top-4 w-[500px] md:w-[800px] left-1/2 -translate-x-1/2"
          />
          <h2 className="text-[50px] font-extrabold text-[#2AB673] mb-2 relative z-10">
            Choose the Right Plan for Your Farm
          </h2>
        </div>

        <p className="text-lg font-semibold text-center text-gray-700 mb-8">
          Affordable plans designed to grow with your farming needs.
        </p>

        {/* Toggles */}
        <div className="flex flex-col items-center gap-4 mb-12">
          {/* Billing */}
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

        <div className="px-3 py-4 bg-[#EEFFF9]">
          {/* Cards */}
          <div className="flex gap-6 items-stretch flex-wrap justify-center mt-5">
            {adjustedPlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>

          {/* Footer */}
          <div className="text-center text-black text-sm font-bold mt-12">
            Prices are exclusive of VAT, GST, or other applicable taxes in your
            region. <br />
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
            {/* Green background box (top-right) */}
            <div className="absolute -top-3 -right-3 w-[70%] h-[70%] bg-[#2AB67366] rounded-2xl"></div>

            {/* White card in front (equal height) */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center h-full flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
              {/* Green Circle with Icon */}
              <div className="w-28 h-28 mx-auto mb-6 bg-[#2AB673] rounded-full flex items-center justify-center">
                <Image
                  src={b.icon}
                  alt={b.title}
                  width={60} // bigger icon
                  height={60} // bigger icon
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-bold text-[26px] mb-3">{b.title}</h3>

              {/* Description (fills remaining space to keep equal height) */}
              <p className="text-gray-600 text-xs  font-bold  mt-5 leading-relaxed flex-1">
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
