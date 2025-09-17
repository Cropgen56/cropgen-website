"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// ==================== FAQ Data ====================
const faqData = [
    {
        category: "FAQ's",
        items: [
            {
                question: "What payment methods do you accept?",
                answer:
                    "You can try CropGen free for 30 days with limited features to explore how the platform works.",
            },
            {
                question: "Is my payment information secure?",
                answer:
                    "Yes, you can upgrade or downgrade your subscription plan anytime in your account settings.",
            },
            {
                question: "Can I cancel my subscription anytime?",
                answer:
                    "We support major credit cards, debit cards, and enterprise invoicing for large operations.",
            },
            {
                question: "Do you offer refunds?",
                answer:
                    "Yes! All paid plans come with support. Enterprise users get priority and dedicated support.",
            },
        ],
    },
];

// ==================== Accordion Item ====================
function AccordionItem({ question, answer, isOpen, onClick }) {
    return (
        <div className="border-b border-gray-200 text-[#265A48]">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center py-4 text-left font-bold text-[#265A48] md:text-[20px] text-[16px] sm:text-[18px] transition-colors"
            >
                <div className="flex items-center gap-2">
                    <img
                        src={
                            isOpen
                                ? "/assets/image/faq/bookopen.png"
                                : "/assets/image/faq/bookclose.png"
                        }
                        alt="book icon"
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300"
                    />
                    {question}
                </div>
                <span className="transition-transform duration-300">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="pl-8 pr-4 pb-4 text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] font-[400] leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
}

// ==================== Pricing FAQ Component ====================
export default function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="flex flex-col mt-12 md:mt-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-60 text-[#265A48] gap-6">
            {faqData.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <div className="flex flex-col bg-white rounded-xl divide-y">
                        {/* Category Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10">
                            {section.category}
                        </h2>

                        {/* Accordion Items */}
                        <div className="flex flex-col px-4 sm:px-6 md:px-10 pb-6">
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
                </div>
            ))}
        </div>
    );
}
