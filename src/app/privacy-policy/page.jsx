"use client";
import { PromoSection } from "@/components";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="min-h-screen text-gray-800 px-6 md:px-20 py-10">
        {" "}
        <h1 className="text-3xl md:text-4xl font-bold text-[#2AB673] text-center mb-6">
          Privacy Policy
        </h1>
        <section className="max-w-8xl mx-auto">
          {/* Introduction */}
          <h2 className="text-xl font-bold">Introduction</h2>
          <p className="mt-2 text-sm">
            <strong>Welcome to CropGen!</strong> We are an AI-powered remote
            sensing company registered in India, delivering SaaS-based
            agricultural solutions to customers worldwide. Your privacy is
            important to us, and this Privacy Policy outlines how we collect,
            use, and protect your data when you use our platform.
          </p>

          {/* Information We Collect */}
          <h2 className="text-xl font-bold mt-6">Information We Collect</h2>
          <p className="mt-2 text-sm">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              <strong>Personal Information:</strong> Name, email, phone number,
              billing details, and other contact information.
            </li>
            <li className="text-sm">
              <strong>Usage Data:</strong> IP addresses, device details, and
              browsing behavior.
            </li>
            <li className="text-sm">
              <strong>Geospatial & Agricultural Data:</strong> Farm locations,
              crop details, satellite imagery, and other agronomic insights.
            </li>
          </ul>

          {/* How We Use Your Data */}
          <h2 className="text-xl font-bold mt-6">How We Use Your Data</h2>
          <p className="mt-2 text-sm">Your data is used to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              Provide and improve our AI-based crop monitoring services.
            </li>
            <li className="text-sm">
              Customize advisory and insights based on your farm data.
            </li>
            <li className="text-sm">
              Ensure platform security and prevent unauthorized access.
            </li>
            <li className="text-sm">
              Communicate updates, promotions, or technical support.
            </li>
          </ul>

          {/* Data Security */}
          <h2 className="text-xl font-bold mt-6">Data Security & Protection</h2>
          <p className="mt-2 text-sm">
            We implement advanced encryption, secure cloud storage, and
            AI-driven threat detection to protect your personal and farm-related
            data. However, no online transmission is 100% secure, and we
            encourage users to take necessary precautions.
          </p>

          {/* Third-Party Sharing */}
          <h2 className="text-xl font-bold mt-6">
            Sharing & Third-Party Involvement
          </h2>
          <p className="mt-2 text-sm">
            <strong>We do not sell your personal data</strong> to third parties.
            However, we may share data with:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              Government agencies for compliance purposes.
            </li>
            <li className="text-sm">
              Trusted third-party analytics or payment processing partners.
            </li>
            <li className="text-sm">
              Research institutions working on sustainable farming solutions.
            </li>
          </ul>

          {/* International Data Transfers */}
          <h2 className="text-xl font-bold mt-6">
            International Data Transfers
          </h2>
          <p className="mt-2 text-sm">
            Since we provide SaaS-based solutions globally, your data may be
            processed outside of India in compliance with international data
            protection laws.
          </p>

          {/* Rights & Choices */}
          <h2 className="text-xl font-bold mt-6">Your Rights & Choices</h2>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              <strong>Access & Correction:</strong> You can request access to
              your data and update inaccuracies.
            </li>
            <li className="text-sm">
              <strong>Data Deletion:</strong> You can request to delete your
              personal information from our system.
            </li>
            <li className="text-sm">
              <strong>Opt-out:</strong> You can opt out of marketing
              communications at any time.
            </li>
          </ul>

          {/* Contact */}
          <h2 className="text-xl font-bold mt-6">Contact Us</h2>
          <p className="mt-2 text-sm">
            For any privacy-related concerns, contact us at{" "}
            <strong className="text-[#2AB673]">support@cropgenapp.com</strong>
          </p>
        </section>
        <PromoSection />
      </div>
    </>
  );
};

export default PrivacyPolicy;
