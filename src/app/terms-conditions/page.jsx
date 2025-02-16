"use client";
import { PromoSection } from "@/components";
const TermsConditions = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2AB673] text-center mb-6">
          Terms & Conditions
        </h1>

        <section className="max-w-8xl mx-auto">
          {/* 1. Acceptance of Terms */}
          <h2 className="text-lg font-bold mt-6">1. Acceptance of Terms</h2>
          <p className="mt-2 text-sm">
            By accessing CropGen and using our AI-powered remote sensing
            services, you agree to abide by these{" "}
            <strong>Terms and Conditions</strong>. If you do not agree, please
            refrain from using our platform.
          </p>

          {/* 2. Services Offered */}
          <h2 className="text-lg font-bold mt-6">2. Services Offered</h2>
          <p className="mt-2 text-sm">CropGen provides:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              AI-powered remote monitoring & advisory.
            </li>
            <li className="text-sm">Satellite-based farm analysis.</li>
            <li className="text-sm">
              SaaS-based agricultural decision support.
            </li>
          </ul>

          {/* 3. User Responsibilities */}
          <h2 className="text-lg font-bold mt-6">3. User Responsibilities</h2>
          <p className="mt-2 text-sm">By using CropGen, you agree to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              Provide accurate farm data for analysis.
            </li>
            <li className="text-sm">
              Not misuse AI-based insights for unlawful activities.
            </li>
            <li className="text-sm">
              Follow applicable regulations in your region.
            </li>
          </ul>

          {/* 4. Subscription & Payment */}
          <h2 className="text-lg font-bold mt-6">4. Subscription & Payment</h2>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              Free & Premium Plan: Users may opt for monthly or yearly
              subscriptions.
            </li>
            <li className="text-sm">
              Refund Policy: No refunds on the service unless stated in custom
              pricing.
            </li>
          </ul>

          {/* 5. Intellectual Property Rights */}
          <h2 className="text-lg font-bold mt-6">
            5. Intellectual Property Rights
          </h2>
          <p className="mt-2 text-sm">
            All content, AI models, and satellite insights on CropGen are
            protected under intellectual property laws. You may not copy,
            redistribute, or modify any part of our service without prior
            approval.
          </p>

          {/* 6. Limitation of Liability */}
          <h2 className="text-lg font-bold mt-6">6. Limitation of Liability</h2>
          <p className="mt-2 text-sm">CropGen is not liable for:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              Incorrect insights due to AI-generated risks.
            </li>
            <li className="text-sm">
              Damages or losses from agricultural decisions.
            </li>
            <li className="text-sm">
              Third-party software failures affecting our services.
            </li>
          </ul>

          {/* 7. Modifications to Terms */}
          <h2 className="text-lg font-bold mt-6">7. Modifications to Terms</h2>
          <p className="mt-2 text-sm">
            We reserve the right to modify these Terms & Conditions at any time.
            Users will be notified of significant changes via email or platform
            alerts.
          </p>

          {/* 8. Governing Law */}
          <h2 className="text-lg font-bold mt-6">8. Governing Law</h2>
          <p className="mt-2 text-sm">
            These terms are governed by Indian laws, with disputes subject to
            the jurisdiction of Indian courts.
          </p>

          {/* 9. Contact Information */}
          <h2 className="text-lg font-bold mt-6">9. Contact Information</h2>
          <p className="mt-2 text-sm">
            For any legal concerns or clarifications, reach out at{" "}
            <strong className="text-[#2AB673]">legal@cropgenapp.com</strong>
          </p>
        </section>
      </div>
      <PromoSection />
    </>
  );
};

export default TermsConditions;
