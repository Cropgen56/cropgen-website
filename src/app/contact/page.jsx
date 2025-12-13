"use client";
import { useEffect, useState } from "react";
import Head from "next/head"; // 👈 Add Head for schema injection
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    additionalInfo: "",
    acceptedPrivacyPolicy: true,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6Lfne50rAAAAAPFY9qWeskY_qE3mX1DS5sbG3o10";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Breadcrumb Schema
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

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (!window.grecaptcha) throw new Error("reCAPTCHA not loaded");

      const token = await window.grecaptcha.execute(
        "6Lfne50rAAAAAPFY9qWeskY_qE3mX1DS5sbG3o10",
        {
          action: "contact_form",
        }
      );

      const body = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        content: formData.additionalInfo,
      };

      const response = await fetch(
        "https://server.cropgenapp.com/v1/api/common/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: data.message || "Message sent successfully!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          additionalInfo: "",
          acceptedPrivacyPolicy: false,
        });
      } else {
        setMessage({
          type: "error",
          text: data.error || "Something went wrong!",
        });
      }
    } catch (err) {
      console.error("reCAPTCHA or submission error:", err);
      setMessage({ type: "error", text: "Submission failed. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-4 md:gap-8 container mx-auto px-4 sm:px-6 md:px-12 py-5 md:py-20">
      {/* Inject Breadcrumb Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </Head>

      <div className="max-w-2xl mx-auto text-center relative">
        <Image
          src="/assets/image/contact/Contact-Us.png"
          alt="Contact Us"
          width={400}
          height={200}
          className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[400px] left-1/2 -translate-x-1/2"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2AB673] relative z-10">
          Contact Us
        </h1>
        <p className="text-[#000] text-sm sm:text-base">
          Need assistance? Pick the relevant department, submit the form, and
          we'll take it from there. Want a demo? Contact our support team.
        </p>
      </div>

      <div className="max-w-2xl mx-auto p-2 md:p-6">
        <form
          className="flex flex-col gap-3 md:gap-4 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              className="h-10 md:h-14 px-3 border rounded-md w-1/2 bg-[#EEEFF7]"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              className="h-10 md:h-14 px-3 border rounded-md w-1/2 bg-[#EEEFF7]"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            value={formData.email}
            onChange={handleChange}
            className="h-10 md:h-14 px-3 border rounded-md w-full bg-[#EEEFF7]"
            required
          />
          <p className="text-start text-sm">
            Fill in your goals, must-have features, contact preferences, and any
            additional information to help us serve you better.
          </p>
          <textarea
            name="additionalInfo"
            placeholder="Additional Info*"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="p-3 border rounded-md w-full resize-none h-24 bg-[#EEEFF7]"
            required
          ></textarea>
          {/* <div className="flex items-center">
            <input
              type="checkbox"
              name="acceptedPrivacyPolicy"
              checked={formData.acceptedPrivacyPolicy}
              onChange={handleChange}
              className="mr-2 cursor-pointer"
              required
            />
            <label className="text-sm text-gray-600">
              I understand and agree to the Privacy Policy*
            </label>
          </div> */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#28C878] text-white py-3 font-semibold cursor-pointer hover:bg-[#28c878d5] transition-all duration-400 ease-in-out  w-1/3 md:w-1/4 mx-auto rounded-full"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </div>

      <div className="flex flex-row items-center justify-between gap-2 md:gap-16 md:px-20">
        <div className="text-left w-full md:w-auto">
          <h3 className="text-md md:text-3xl font-bold">Head Office</h3>
          <p className="text-sm md:text-md text-gray-600">
            Pune, Maharashtra, 411038, India
          </p>
          <p className="text-sm md:text-md text-gray-600">
            Email: info@cropgenapp.com
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Image
            src="/assets/image/comman/farm-satellite.webp"
            width={300}
            height={300}
            alt="farm with tractor and satellite"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
