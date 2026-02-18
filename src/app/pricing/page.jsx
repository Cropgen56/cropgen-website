"use client";

import { useState, useEffect } from "react";
import { Check, X, Sprout, TrendingUp, Clock } from "lucide-react";
import { PromoSection } from "@/components";
import { useRouter } from "next/navigation";

const API_URL = "https://server.cropgenapp.com/v1/api/subscription-plans";
const ACRE_TO_HECTARE = 2.47105381;

const FEATURE_LABELS = {
  satelliteImagery: "Satellite Imagery",
  cropHealthAndYield: "Crop Health & Yield",
  soilAnalysisAndHealth: "Soil Analysis & Health",
  weatherAnalytics: "Weather Analytics",
  vegetationIndices: "Vegetation Indices",
  waterIndices: "Water Indices",
  evapotranspirationMonitoring: "Evapotranspiration Monitoring",
  agronomicInsights: "Agronomic Insights",
  weeklyAdvisoryReports: "Weekly Advisory Reports",
  cropGrowthMonitoring: "Crop Growth Monitoring",
  farmOperationsManagement: "Farm Operations Dashboard",
  diseaseDetectionAlerts: "Pest & Disease Alerts",
  smartAdvisorySystem: "Smart Advisory System",
  soilReportGeneration: "Soil Report Generation",
};

const benefits = [
  {
    icon: Sprout,
    title: "Be at the forefront of smart farming",
    description:
      "Leverage AI, remote sensing, and precision agriculture tools...",
  },
  {
    icon: TrendingUp,
    title: "Increase income from every acre",
    description:
      "Maximize yields and reduce input costs with real-time insights...",
  },
  {
    icon: Clock,
    title: "Save time, make smarter decisions",
    description: "Access all your farm data anytime, anywhere...",
  },
];

const enterpriseFeatures = [
  "Up to 5 hectares",
  "Graphs & Historical Data 10 Year Plan",
  "Satellite Crop Monitoring (zone-wide analysis)",
  "Weather Forecast (7-14 days) (multi-field)",
  "Soil Moisture & Temperature (advanced soil)",
  "Growth Stage Tracking (BBCH) (All enhanced)",
  "Fertilizer (NPK) Advisory (advanced)",
  "Irrigation Updates (ET-based) (smart irrigation)",
  "Pest & Disease Alerts (AI early-warning)",
  "Yield Prediction (farm-wide aggregation)",
  "Harvest Window Insights",
  "Soil Fertility Analysis (zone-wide analysis)",
  "SOC Analytics (Soil Organic Carbon) (regional mapping)",
  "Advisory Delivery Email + Enterprise Dashboard",
  "Weekly Reports (bulk reporting)",
  "Operations Management Dashboard (multi-user, enterprise)",
  "API/ERP Integration",
  "Enterprise Support (dedicated account manager)",
];

export default function PricingPage() {
  const [plans, setPlans] = useState([]);
  const [billing, setBilling] = useState("monthly");
  const [flipped, setFlipped] = useState({});

  const router = useRouter();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPlans(data.data || []);
      })
      .catch(() => {});
  }, []);

  const filteredPlans = plans.filter((p) => p.platform === "web" && p.active);

  const getPrice = (plan) => {
    const priceObj = plan.pricing?.find((p) => p.billingCycle === billing);
    if (!priceObj) return { price: "$0", detail: "/month" };

    const perAcre = (priceObj.pricePerUnitMinor || 0) / 100;
    const perHectare = perAcre * ACRE_TO_HECTARE;
    return {
      price: `$${Math.round(perHectare)}`,
      detail: `/ha/${billing === "monthly" ? "month" : "year"}`,
    };
  };

  const handleRedirect = () => {
    window.open("https://app.cropgenapp.com", "_blank", "noopener,noreferrer");
  };

  const isRecommended = (name) => name?.toLowerCase().includes("premium");

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const splitFeatures = (featuresObj) => {
    const entries = Object.entries(featuresObj || {});
    const mid = Math.ceil(entries.length / 2);
    return {
      front: entries.slice(0, mid),
      back: entries.slice(mid),
    };
  };

  const splitEnterprise = () => {
    const mid = Math.ceil(enterpriseFeatures.length / 2);
    return {
      front: enterpriseFeatures.slice(0, mid),
      back: enterpriseFeatures.slice(mid),
    };
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <section className="pt-16 pb-8 px-5 md:px-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2AB673] mb-4">
          Choose the Right Plan for Your Farm
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Affordable plans designed to grow with your farming needs.
        </p>
      </section>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center gap-4 mb-10 flex-wrap px-4">
        <span
          className={`font-semibold text-sm ${billing === "monthly" ? "text-gray-900" : "text-gray-400"}`}
        >
          Monthly
        </span>
        <button
          onClick={() =>
            setBilling(billing === "monthly" ? "yearly" : "monthly")
          }
          className="relative w-14 h-7 rounded-full bg-[#2AB673] shadow-inner"
        >
          <span
            className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${
              billing === "yearly" ? "left-7" : "left-0.5"
            }`}
          />
        </button>
        <span
          className={`font-semibold text-sm ${billing === "yearly" ? "text-gray-900" : "text-gray-400"}`}
        >
          Yearly
        </span>
        {billing === "yearly" && (
          <span className="bg-[#2AB673] text-white text-xs font-bold px-3 py-1 rounded-full">
            Save 20%
          </span>
        )}
      </div>

      {/* Cards container – ~80% width on larger screens */}
      <section className="px-4 pb-16 overflow-x-auto  mx-auto sm:w-[80%]">
        <div className="mx-auto min-w-[80%] bg-['#000000']">
          <div className="flex gap-5 md:gap-7 justify-start md:justify-center min-w-max pt-6">
            {filteredPlans.map((plan) => {
              const { price, detail } = getPrice(plan);
              const recommended = isRecommended(plan.name);
              const isFlipped = !!flipped[plan._id];
              const { front: frontFeatures, back: backFeatures } =
                splitFeatures(plan.features);

              return (
                <div
                  key={plan._id}
                  className="relative w-72 sm:w-80 h-[560px] flex-shrink-0 perspective-1000 cursor-pointer group"
                  onClick={() => toggleFlip(plan._id)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* FRONT */}
                    <div
                      className={`absolute inset-0 backface-hidden rounded-2xl p-5 bg-white flex flex-col overflow-hidden ${
                        recommended
                          ? "border-2 border-[#2AB673] shadow-xl shadow-[#2AB673]/20"
                          : "border border-gray-200 shadow-lg"
                      }`}
                    >
                      {recommended && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                          <span className="bg-[#2AB673] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                            Recommended
                          </span>
                        </div>
                      )}

                      <h3 className="text-xl font-bold mb-2 text-gray-800 truncate">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-5 line-clamp-3 min-h-[4.5rem]">
                        {plan.description ||
                          "Essential satellite monitoring features..."}
                      </p>

                      <div className="mb-5">
                        <span className="text-4xl font-extrabold text-[#2AB673]">
                          {price}
                        </span>
                        <span className="text-base text-gray-600 ml-2 font-medium">
                          {detail}
                        </span>
                      </div>

                      <div className="flex-1 space-y-2 overflow-y-auto pr-1">
                        <p className="text-sm font-semibold text-gray-700 mb-2">
                          Key Features
                        </p>
                        {frontFeatures.map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-start gap-2.5 text-sm leading-snug"
                          >
                            {value ? (
                              <Check
                                size={16}
                                className="text-[#2AB673] mt-0.5 flex-shrink-0"
                              />
                            ) : (
                              <X
                                size={16}
                                className="text-red-500 mt-0.5 flex-shrink-0"
                              />
                            )}
                            <span className="text-gray-700 break-words">
                              {FEATURE_LABELS[key] || key}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRedirect();
                          }}
                          className="w-full py-3 rounded-xl font-semibold text-base bg-[#2AB673] text-white hover:bg-[#1e9c5e] transition-colors shadow-sm"
                        >
                          Get Started
                        </button>
                        <p className="text-xs text-center text-gray-500 mt-3">
                          Click card to see more →
                        </p>
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className={`absolute inset-0 backface-hidden rounded-2xl p-5 bg-white flex flex-col rotate-y-180 ${
                        recommended
                          ? "border-2 border-[#2AB673]"
                          : "border border-gray-200"
                      }`}
                    >
                      <h3 className="text-lg font-bold mb-4 text-center text-gray-800">
                        More Features
                      </h3>

                      <div className="flex-1 space-y-2 text-sm overflow-y-auto pr-1 leading-snug">
                        {backFeatures.map(([key, value]) => (
                          <div key={key} className="flex items-start gap-2.5">
                            {value ? (
                              <Check
                                size={16}
                                className="text-[#2AB673] mt-0.5 flex-shrink-0"
                              />
                            ) : (
                              <X
                                size={16}
                                className="text-red-500 mt-0.5 flex-shrink-0"
                              />
                            )}
                            <span className="text-gray-700 break-words">
                              {FEATURE_LABELS[key] || key}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-center text-gray-500 mt-4 pt-3 border-t border-gray-100">
                        Click anywhere to return
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ENTERPRISE CARD */}
            <div
              className="relative w-72 sm:w-80 h-[560px] flex-shrink-0 perspective-1000 cursor-pointer group"
              onClick={() => toggleFlip("enterprise")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flipped.enterprise ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden rounded-2xl p-5 bg-white border border-gray-200 shadow-lg flex flex-col overflow-hidden">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Enterprise
                  </h3>
                  <p className="text-sm text-gray-600 mb-5">
                    Tailored solution for large farms and teams
                  </p>

                  <div className="mb-5">
                    <span className="text-3xl font-bold text-[#2AB673]">
                      Contact
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      Custom quote based on your needs
                    </p>
                  </div>

                  <div className="flex-1 space-y-2 overflow-y-auto pr-1">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Key Features
                    </p>
                    {splitEnterprise().front.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-sm leading-snug"
                      >
                        <Check
                          size={16}
                          className="text-[#2AB673] mt-0.5 flex-shrink-0"
                        />
                        <span className="text-gray-700 break-words">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push("/contact");
                      }}
                      className="w-full py-3 rounded-xl font-semibold text-base bg-[#2AB673] text-white hover:bg-[#1e9c5e] transition-colors shadow-sm"
                    >
                      Get Started
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-3">
                      Click card to see more →
                    </p>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden rounded-2xl p-5 bg-white border border-gray-200 flex flex-col rotate-y-180">
                  <h3 className="text-lg font-bold mb-4 text-center text-gray-800">
                    Additional Features
                  </h3>

                  <div className="flex-1 space-y-2 text-sm overflow-y-auto pr-1 leading-snug">
                    {splitEnterprise().back.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          className="text-[#2AB673] mt-0.5 flex-shrink-0"
                        />
                        <span className="text-gray-700 break-words">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-center text-gray-500 mt-4 pt-3 border-t border-gray-100">
                    Click anywhere to return
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto px-6 pb-12">
        Prices exclude VAT, GST and other applicable taxes. Enterprise pricing
        is custom – contact us for a quote.
      </p>

      {/* Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">
          Benefits of <span className="text-[#2AB673]">CropGen</span>
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:shadow transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                <b.icon size={32} className="text-[#2AB673]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {b.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      <PromoSection />
    </div>
  );
}
