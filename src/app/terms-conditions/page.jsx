"use client";
import Head from "next/head";
import { PromoSection } from "@/components";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const TermsConditions = () => {
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
        name: "Terms & Conditions",
        item: "https://cropgenapp.com/terms-conditions",
      },
    ],
  };

  return (
    <>
      {/* Inject Breadcrumb Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <section className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-10 relative">
        <Image
          src="/assets/image/contact/Terms-&-Conditions.png"
          alt="Terms & Conditions"
          width={400}
          height={200}
          className="absolute z-0 opacity-80 top-2 sm:top-1 md:-top-2 w-[350px] md:w-[600px] left-1/2 -translate-x-1/2"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-[#2AB673] text-center mb-6 relative z-10">
          Terms & Conditions
        </h1>

        <section className="max-w-8xl mx-auto">
          {/* 1. Acceptance of Terms */}
          <h2 className="text-xl font-bold mt-6">1. Acceptance of Terms</h2>
          <p className="mt-2 text-base">
            By using CropGen's platform, you confirm that you have read,
            understood, and agreed to these Terms. If you do not accept these
            Terms, please discontinue use of our services.
          </p>

          {/* 2. Services Offered */}
          <h2 className="text-xl font-bold mt-4 md:mt-6">2. Our Services</h2>
          <p className="mt-2 text-base">
            CropGen provides digital agriculture solutions, including:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-base">AI-powered crop advisorys.</li>
            <li className="text-base">Satellite-based crop monitoring</li>
            <li className="text-base">Yield prediction & analysis</li>
            <li className="text-base">Soil, weather & moisture insights</li>
            <li className="text-base">Remote farm management</li>
            <li className="text-base">
              Sustainability & carbon impact assessment
            </li>
            <li className="text-base">SaaS-based dashboards & alerts</li>
          </ul>
          <p className="mt-2 text-base">
            CropGen may update or add new features from time to time.
          </p>

          {/* 3. User Responsibilities */}
          <h2 className="text-xl font-bold mt-4 md:mt-6">
            3. User Obligations
          </h2>
          <p className="mt-2 text-base">Users agree to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-base">
              Provide accurate farm and personal information.
            </li>
            <li className="text-base">
              Use the platform responsibly and legally.
            </li>
            <li className="text-base">
              Not misuse, copy, or manipulate CropGen's insights or systems.
            </li>
            <li className="text-base">Keep login credentials secure</li>
          </ul>
          <p className="mt-2 text-base">
            Users are responsible for any activity performed under their
            account.
          </p>

          {/* 4. Subscription & Payment */}
          <h2 className="text-xl font-bold mt-4 md:mt-6">
            4. Subscription, Billing & Refunds
          </h2>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-base">
              CropGen offers monthly and annual subscription plans.
            </li>
            <li className="text-base">
              Plans are based on acreage and selected modules.
            </li>
            <li className="text-base">
              All subscriptions auto-renew unless cancelled
            </li>
            <li className="text-base">
              Users can cancel anytime from the app or by emailing us.
            </li>
            <li className="text-base">
              Mistaken charges or activation errors are refundable within{" "}
              <strong>30 days.</strong>
            </li>
            <li className="text-base">
              Refunds (where applicable) are processed within{" "}
              <strong>7-10 business days.</strong>
            </li>
          </ul>

          {/* 5. Intellectual Property Rights */}
          <h2 className="text-xl font-bold mt-4 md:mt-6">
            5. Data Collection & Privacy
          </h2>
          <p className="mt-2 text-base">CropGen may collect:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-base">Farm location & boundaries</li>
            <li className="text-base">Satellite data related to crops</li>
            <li className="text-base">Device information for security</li>
            <li className="text-base">User contact details</li>
            <li className="text-base">Field photos uploaded by the user</li>
          </ul>
          <p className="mt-2 text-base">Data is used to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-base">Improve AI predictions</li>
            <li className="text-base">Provide personalized advisory</li>
            <li className="text-base">Develop crop analytics</li>
            <li className="text-base">Enhance user experience</li>
          </ul>
          <p className="mt-2 text-base">
            CropGen <strong>does not sell</strong> user data to third parties.
            <br />
            Data is shared only when legally required or with user permission.
            <br />
            For full details, please refer to our{" "}
            <strong>Privacy Policy</strong>.
          </p>

          {/* 6. Limitation of Liability */}
          <h2 className="text-xl font-bold mt-4 md:mt-6">
            6. Intellectual Property
          </h2>
          <p className="mt-2 text-base">
            All AI models, algorithms, dashboards, satellite insights, content,
            and designs are <strong>exclusive property of CropGen.</strong>
          </p>
          <p className="mt-2 text-base">Users may not:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-base">Copy</li>
            <li className="text-base">Reproduce</li>
            <li className="text-base">Modify</li>
            <li className="text-base">Redistribute</li>
            <li className="text-base">Reverse-engineer</li>
          </ul>
          <p className="mt-2 text-base">
            any part of the platform without written consent.
          </p>

          {/* 7. Modifications to Terms */}
          <h2 className="text-xl font-bold mt-4 md:mt-6">
            7. Satellite & AI Disclaimer
          </h2>
          <p className="mt-2 text-base">
            CropGen insights are based on satellite data, weather inputs, and AI
            predictions. Due to natural conditions:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-base">Cloud cover</li>
            <li className="text-base">Atmospheric interference</li>
            <li className="text-base">Third-party data delays</li>
          </ul>
          <p className="mt-2 text-base">
            CropGen does <strong>not guarantee 100% accuracy</strong>.<br />
            AI advisory is predictive and should be used responsibly.
            <br />
            Final agricultural decisions remain the responsibility of the user.
          </p>

          {/* 8. Governing Law */}
          <h2 className="text-xl font-bold mt-4 md:mt-6">
            8. Service Availability
          </h2>
          <p className="mt-2 text-base">
            CropGen services may face downtime due to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-base">Maintenance</li>
            <li className="text-base">Satellite delays</li>
            <li className="text-base">Third-party outages</li>
            <li className="text-base">System upgrades</li>
          </ul>
          <p className="mt-2 text-base">
            CropGen is not liable for temporary unavailability.
          </p>

          <h2 className="text-xl font-bold mt-4 md:mt-6">
            9. Limitation of Liability
          </h2>
          <p className="mt-2 text-base">CropGen is not responsible for:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-base">
              Losses resulting from reliance on AI insights
            </li>
            <li className="text-base">
              Crop damage due to weather, pests, or incorrect input use
            </li>
            <li className="text-base">
              Financial losses or operational mistakes
            </li>
            <li className="text-base">Third-party service interruptions</li>
          </ul>
          <p className="mt-2 text-base">
            Users agree to use the service at their own risk.
          </p>

          <h2 className="text-xl font-bold mt-4 md:mt-6">
            10. Indemnification
          </h2>
          <p className="mt-2 text-base">
            Users agree to indemnify and hold harmless CropGen from claims,
            damages, liabilities, or losses arising from:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-base">Misuse of the platform</li>
            <li className="text-base">Incorrect interpretation of insights</li>
            <li className="text-base">Violation of Terms & Conditions</li>
          </ul>

          <h2 className="text-xl font-bold mt-4 md:mt-6">11. Modifications</h2>
          <p className="mt-2 text-base">
            CropGen may update these Terms at any time. <br />
            Continued use of the platform indicates acceptance of updated Terms.{" "}
            <br />
            Users will be notified through email or in-app notifications.
          </p>

          <h2 className="text-xl font-bold mt-4 md:mt-6">12. Governing Law</h2>
          <p className="mt-2 text-base">
            These Terms shall be governed by Indian law, with disputes subject
            to the jurisdiction of Indian courts.
          </p>

          {/* 13. Contact Information */}
          {/* 13. Contact Information */}
          <section className="mt-6 bg-[#F8FFF8] p-6 rounded-lg shadow-md">
            {/* <h2 className="text-xl md:text-2xl font-bold text-[#265A48] mb-4">
              13.
              Contact Information
  </h2> */}
            <p className="text-sm mb-4">
              For questions, support, or legal inquiries, reach out to us:
            </p>

            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 space-y-2 lg:space-y-0">
              {/* Email */}
              <a
                href="mailto:legal@cropgenapp.com"
                className="flex items-center gap-2 text-[#265A48] font-semibold"
              >
                <Mail size={20} /> legal@cropgenapp.com
              </a>

              {/* Location */}
              <div className="flex items-center gap-2 text-[#265A48] font-semibold">
                <MapPin size={20} /> Pune, Maharashtra, India
              </div>

              {/* Phone */}
              <a
                href="tel:+919665935570"
                className="flex items-center gap-2 text-[#265A48] font-semibold"
              >
                <Phone size={20} /> +91 9665935570
              </a>
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Last updated: November 24, 2025
            </p>
          </section>
        </section>

        <PromoSection />
      </section>
    </>
  );
};

export default TermsConditions;
