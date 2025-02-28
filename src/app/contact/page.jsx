"use client";
import { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    additionalInfo: "",
    acceptedPrivacyPolicy: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Form submitted successfully!" });
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
    } catch (error) {
      setMessage({ type: "error", text: "Failed to submit. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-12 py-5 md:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2AB673]">
          Contact Us
        </h2>
        <p className="mt-4 text-[#000] text-sm sm:text-base">
          Need assistance? Pick the relevant department, submit the form, and
          we’ll take it from there. Want a demo? Contact our support team.
        </p>
      </div>

      <div className="mt-8 max-w-2xl mx-auto p-6 sm:p-8">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 border rounded-md w-1/2 bg-[#EEEFF7]"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 border rounded-md w-1/2 bg-[#EEEFF7]"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-md w-full bg-[#EEEFF7]"
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
            className="p-3 border rounded-md w-full h-24 bg-[#EEEFF7]"
            required
          ></textarea>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="acceptedPrivacyPolicy"
              checked={formData.acceptedPrivacyPolicy}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-sm text-gray-600">
              I understand and agree to the Privacy Policy
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#28C878] text-white py-3 font-semibold hover:bg-[#28C878] transition w-1/4 mx-auto rounded-full"
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

      <div className="mt-3 flex flex-row sm:flex-row justify-around items-center">
        <div className="text-start sm:text-left">
          <h3 className="text-xl sm:text-4xl font-bold">Head Office</h3>
          <p className="text-gray-600">
            Pune, Maharashtra,
            <br />
            411038, India
          </p>
          <p className="text-gray-600">
            Email:
            <br />
            info@cropgenapp.com
          </p>
        </div>
        <div>
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
