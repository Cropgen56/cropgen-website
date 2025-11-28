"use client";
import { PromoSection } from "@/components";
import React, { useEffect, useState } from "react";
import { Search, ChevronUp, ChevronDown } from "lucide-react";
import Head from "next/head";

// ==================== FAQ Data ====================
const faqData = [
  {
    category: "General Questions",
    items: [
      {
        question: "What is CropGen?",
        answer:
          "CropGen is an AI-powered crop monitoring and LLM-based advisory platform. It combines 12+ satellite vegetation indices, farm data, and advanced AI models to provide farmers with real-time crop insights and personalized, region-specific advisory.",
      },
      {
        question: "Who can use CropGen?",
        answer:
          "Farmers, FPOs, agribusinesses, agri-input companies, exporters, cooperatives, and consultants who want smart farming, cost savings, and higher yields can benefit from CropGen.",
      },
    ],
  },
  {
    category: "How CropGen Works",
    items: [
      {
        question: "How does CropGen monitor crops?",
        answer:
          "CropGen analyzes satellite imagery and 12+ vegetation indices (NDVI, EVI, SAVI, NDWI, Chlorophyll Index, etc.) to detect crop health, stress, water status, and growth stage.",
      },
      {
        question: "How does CropGen provide advisory?",
        answer:
          "CropGen uses LLM (Large Language Models) combined with AI/ML agronomy systems. It converts raw satellite + farm data into easy-to-understand, crop- and region-wise advisory for farmers.",
      },
      {
        question: "Do I need sensors to use CropGen?",
        answer:
          "No sensors are required. CropGen primarily uses satellite + AI. But if you already use sensors (soil moisture, weather), CropGen can integrate them for higher precision.",
      },
    ],
  },
  {
    category: "Payment & Copyright",
    items: [
      {
        question: "What subscription options are available?",
        answer:
          "CropGen offers a free trial, then monthly or annual subscription plans, based on acreage and services (monitoring, advisory, yield prediction, sustainability).",
      },
      {
        question: "What is the refund policy?",
        answer:
          "If you are charged extra, activate by mistake, or cancel within 30 days, you get a full refund.",
      },
      {
        question: "Who owns the farm data?",
        answer:
          "Farmers and agribusinesses own their data. CropGen only analyzes it securely and does not sell it.",
      },
    ],
  },
  {
    category: "Crop Monitoring",
    items: [
      {
        question: "What crop indices does CropGen provide?",
        answer:
          "CropGen provides 12+ vegetation indices, including: NDVI, EVI, SAVI, MSAVI, NDWI, OSAVI, GNDVI, ARVI, VARI, Chlorophyll Index, DVI, SIPI.",
      },
      {
        question: "Can CropGen detect crop stress, pests, and diseases?",
        answer:
          "Yes. CropGen identifies stress zones early and provides preventive and curative LLM-based advisory for pest, disease, and nutrient management.",
      },
      {
        question: "Does CropGen support fertilizer and irrigation advisory?",
        answer:
          "Yes. CropGen analyzes soil and crop status to recommend NPK requirements, irrigation schedules, and water stress alerts.",
      },
    ],
  },
  {
    category: "Sustainability",
    items: [
      {
        question: "How does CropGen support sustainability?",
        answer:
          "CropGen helps reduce fertilizer, pesticide, and water usage while improving yields. It also measures CO₂ emission reduction and water savings, useful for sustainability and carbon credit projects.",
      },
    ],
  },
  {
    category: "Agri-Business",
    items: [
      {
        question: "Can FPOs and cooperatives use CropGen?",
        answer:
          "Yes. CropGen provides field-level + aggregated insights so FPOs can manage thousands of acres at once.",
      },
      {
        question: "Can agri-input companies benefit from CropGen?",
        answer:
          "Yes. Input companies use CropGen to give precision advisory, validate product performance, and engage with farmers more effectively.",
      },
      {
        question: "Can exporters and processors use CropGen?",
        answer:
          "Yes. CropGen helps exporters track crop quality, traceability, and yield forecasts across large areas.",
      },
    ],
  },
  {
    category: "Additional Services",
    items: [
      {
        question: "Does CropGen provide AI yield prediction?",
        answer:
          "Yes. CropGen predicts yields using AI and satellite data, supporting procurement, insurance, and trade planning.",
      },
      {
        question: "Can CropGen integrate with other platforms?",
        answer:
          "Yes. CropGen supports API integration with agri-business or government platforms (e.g., CROPIC).",
      },
      {
        question: "Does CropGen provide daily advisory to farmers?",
        answer:
          "Yes. CropGen delivers daily LLM-powered advisory for fertilizer, irrigation, and pest/disease management, customized by crop and growth stage.",
      },
    ],
  },
];

// ==================== Accordion Item ====================
function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b">
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center py-4 text-left font-bold md:text-[20px] text-[#265A48] transition-colors ${
          isOpen ? "text-[#2AB673]" : "text-gray-800 hover:text-green-700"
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src={
              isOpen
                ? "/assets/image/faq/bookopen.png"
                : "/assets/image/faq/bookclose.png"
            }
            alt="book icon"
            className="w-5 h-5"
          />
          {question}
        </div>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <p className="pl-8 pr-4 pb-4 text-gray-600 text-[16px] font-[400]">
          {answer}
        </p>
      )}
    </div>
  );
}

// ==================== FAQ Component ====================
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    additionalInfo: "",
    acceptedPrivacyPolicy: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitMsg, setSubmitMsg] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqData = faqData
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6Lfne50rAAAAAPFY9qWeskY_qE3mX1DS5sbG3o10";
    script.async = true;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  // ✅ Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cropgenapp.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://cropgenapp.com/faq",
      },
    ],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMsg(null);

    try {
      if (!window.grecaptcha) throw new Error("reCAPTCHA failed");

      const token = await window.grecaptcha.execute(
        "6Lfne50rAAAAAPFY9qWeskY_qE3mX1DS5sbG3o10",
        { action: "contact_form" }
      );

      // Name split
      const nameParts = formData.name.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      // Final payload backend ke format me
      const payload = {
        firstName,
        lastName,
        email: formData.email,
        additionalInfo: formData.additionalInfo,
        acceptedPrivacyPolicy: true,
        token,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMsg({ type: "success", text: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          additionalInfo: "",
          acceptedPrivacyPolicy: true,
        });
      } else {
        setSubmitMsg({ type: "error", text: data.error || "Failed to send!" });
      }
    } catch (err) {
      setSubmitMsg({ type: "error", text: "Something went wrong! Try again." });
    }

    setLoading(false);
  };

  return (
    <div>
      {/* ✅ Add Breadcrumb Schema for SEO */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      {/* ===== Hero Section ===== */}
      <section
        className="relative bg-cover bg-center min-h-[700px]"
        style={{ backgroundImage: "url('/assets/image/faq/faq2.png')" }}
      >
        <div className="bg-black bg-opacity-10 w-full h-full">
          <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-10 text-white">
            {/* Left Section */}
            <div className="flex-1">
              <h1 className="text-5xl font-[700] md:text-[100px] faq-font leading-tight mb-6">
                Frequently Ask <br /> Questions
              </h1>
              <img src="/assets/image/faq/line.png" alt="line" />
              <p className="text-lg md:text-[32px] font-[400] md:leading-[1.2] mt-6">
                Discover answers to the most common questions <br />
                about CropGen’s crop monitoring and precision <br />
                farming tools.
              </p>

              {/* Search */}
              <div className="flex-1 flex flex-col items-start md:items-end mt-20 md:mt-0">
                <div className="flex flex-col justify-end gap-2">
                  <h2 className="text-xl md:text-[30px] font-bold faq-font mb-4">
                    How Can we Help you?
                  </h2>
                  <div className="w-full max-w-md flex items-center bg-white rounded-md shadow-lg overflow-hidden">
                    <input
                      type="text"
                      placeholder="Type in your search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-grow px-4 py-3 text-gray-700 outline-none md:w-[600px] w-auto"
                    />
                    <button className="px-4 py-3 bg-green-500 text-white hover:bg-green-600 ">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Accordion + Contact Form Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left scrollable Q&A */}
        <div className="md:col-span-2 h-[65vh] overflow-y-auto pr-2 scrollbar-hide">
          <div className="space-y-6">
            {filteredFaqData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                {/* Category Heading */}
                <h2 className="text-xl md:text-[36px] font-bold text-[#265A48] mb-4">
                  {section.category}
                </h2>

                {/* Questions in Category */}
                <div className="bg-white rounded-lg divide-y">
                  {section.items.map((item, itemIndex) => {
                    const index = `${sectionIndex}-${itemIndex}`;
                    return (
                      <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sticky form */}
        <aside className="md:sticky md:top-10 self-start h-fit">
          <div className="bg-green-50 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              Still Have Questions? Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email*"
                  className="w-full border rounded-lg px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="additionalInfo"
                  placeholder="Additional Info*"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>

            {submitMsg && (
              <p
                className={`mt-4 text-center ${
                  submitMsg.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {submitMsg.text}
              </p>
            )}
          </div>
        </aside>
      </section>

      {/* ===== Promo Section ===== */}
      <PromoSection />
    </div>
  );
}
