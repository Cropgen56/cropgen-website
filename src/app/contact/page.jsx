"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "87/3b/1c, Shree Colony, Azad Nagar, Kothrud, Pune, Maharashtra 411038, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@cropgenapp.com",
    href: "mailto:info@cropgenapp.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96659 35570",
    href: "tel:+919665935570",
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "Mon–Sat, 9 AM – 6 PM IST",
  },
];

const TOPICS = [
  "Product Demo Request",
  "Sales Inquiry",
  "Technical Support",
  "FPO / Enterprise Partnership",
  "Government / Research Collaboration",
  "General Inquiry",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  topic: "",
  message: "",
};

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
      name: "Contact",
      item: "https://cropgenapp.com/contact",
    },
  ],
};

function splitName(fullName) {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts[0] || "";
  const lastName = parts.slice(1).join(" ") || "";
  return { firstName, lastName };
}

export default function ContactUs() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = "Name must be at least 2 characters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address";
    }
    if (!form.phone.trim() || form.phone.trim().length < 8) {
      next.phone = "Please enter a valid phone number";
    }
    if (!form.organization.trim() || form.organization.trim().length < 2) {
      next.organization = "Please enter your organisation or farm name";
    }
    if (!form.topic.trim()) {
      next.topic = "Please select a topic";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = "Please provide more details (10+ characters)";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setToast(null);

    try {
      const apiBaseUrl = (
        process.env.NEXT_PUBLIC_API_BASE_URL ||
        process.env.NEXT_PUBLIC_CROPGEN_SERVER_URL ||
        "https://server.cropgenapp.com"
      ).replace(/\/+$/, "");

      const { firstName, lastName } = splitName(form.name);

      const response = await fetch(`${apiBaseUrl}/v1/api/common/contact-us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "cropgen",
          name: form.name.trim(),
          firstName,
          lastName,
          email: form.email.trim(),
          phone: form.phone.trim(),
          organization: form.organization.trim(),
          topic: form.topic,
          message: form.message.trim(),
          content: form.message.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message ||
            `Failed to send your message (${response.status}). Please try again.`,
        );
      }

      setToast({
        type: "success",
        text: "Message sent! We'll get back to you within 24 hours.",
      });
      setForm(initialForm);
    } catch (err) {
      setToast({
        type: "error",
        text: err.message || "Submission failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "h-12 w-full rounded-xl border border-gray-200 bg-[#F4F5F9] px-4 text-sm text-gray-800 transition focus:border-[#2AB673] focus:outline-none focus:ring-2 focus:ring-[#2AB673]/20";

  return (
    <>
      <Head>
        <title>Contact Us | CropGen</title>
        <meta
          name="description"
          content="Get in touch with the CropGen team for demos, sales inquiries, technical support, or partnership discussions."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-6 py-3 text-sm font-medium shadow-lg ${
            toast.type === "success"
              ? "bg-[#2AB673] text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {toast.text}
        </div>
      )}

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E8F8EF] to-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#2AB673]">
            Contact
          </p>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Talk to Our Team
          </h1>
          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Share your precision farming goals and we&apos;ll help you get started
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-md md:p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={inputClass}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Farm / Organisation Name"
                  className={inputClass}
                />
                {errors.organization && (
                  <p className="mt-1 text-xs text-red-500">{errors.organization}</p>
                )}
              </div>
            </div>

            <div>
              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className={`${inputClass} text-gray-600`}
              >
                <option value="">Select a topic</option>
                {TOPICS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.topic && (
                <p className="mt-1 text-xs text-red-500">{errors.topic}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your farm, how many hectares you manage, and what you're hoping to achieve..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-[#F4F5F9] p-4 text-sm text-gray-800 transition focus:border-[#2AB673] focus:outline-none focus:ring-2 focus:ring-[#2AB673]/20"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-xl bg-[#2AB673] text-sm font-semibold text-white transition hover:bg-[#249a65] disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Message"}
            </button>

            <p className="text-center text-xs text-gray-400">
              We respond within 1 business day. Your data is never shared.
            </p>
          </form>

          {/* Contact info column */}
          <div className="space-y-6">
            <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md md:p-7">
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <p className="text-sm text-gray-500">
                Our team is available to help with demos, onboarding, and support.
              </p>

              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2AB673]/10 text-[#2AB673]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-gray-700 transition hover:text-[#2AB673]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-700">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <a
              href="https://wa.me/919665935570"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-5 transition hover:bg-[#25D366]/10"
            >
              <FaWhatsapp className="h-8 w-8 text-[#25D366]" />
              <div>
                <p className="font-semibold text-gray-900">WhatsApp Us</p>
                <p className="text-sm text-gray-500">
                  Quick support available on WhatsApp
                </p>
              </div>
            </a>

            <div className="rounded-2xl border border-gray-200 bg-[#F4F5F9] p-6 text-center">
              <p className="text-sm font-semibold text-gray-900">
                Ready to see CropGen in action?
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Start monitoring your farm with AI-powered satellite insights
              </p>
              <Link
                href="https://app.cropgenapp.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-[#2AB673] px-6 text-sm font-semibold text-white transition hover:bg-[#249a65]"
              >
                Launch Platform →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
