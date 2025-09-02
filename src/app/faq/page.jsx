"use client";
import Head from "next/head";
import { PromoSection } from "@/components";
import Image from "next/image";

const PrivacyPolicy = () => {
  //  Breadcrumb Schema
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
        name: "Privacy Policy",
        item: "https://cropgenapp.com/privacy-policy",
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

      <section className="min-h-screen text-gray-800 px-6 md:px-20 py-10 relative">
        <Image
          src="/assets/image/contact/Privacy-policy.png"
          alt="Privacy policy"
          width={400}
          height={200}
          className="absolute z-0 opacity-80 top-2 sm:top-1 md:-top-2 w-[300px] sm:w-[400px] left-1/2 -translate-x-1/2"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-[#2AB673] text-center mb-6 relative z-10">
          Privacy Policy
        </h1>

        <section className="max-w-8xl mx-auto">
          {/* Introduction */}
          <h2 className="text-lg font-bold">Introduction</h2>
          <p className="mt-2 text-sm">
            <strong>Welcome to CropGen! </strong>
            CropGen ("we," "our," or "us") respects your privacy and is
            committed to protecting it through our compliance with this policy.
            This Privacy Policy describes the types of information we collect
            from you when you use our CropGen web and mobile applications
            ("App") and outlines our practices for collecting, using,
            maintaining, protecting, and disclosing that information globally.
          </p>

          {/* Data Collection & Usage */}
          <h2 className="text-lg font-bold mt-6">Data Collection & Usage</h2>
          <p className="mt-2 text-sm">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              <strong>Personal Information:</strong> Name, email address, phone
              number, billing details, and other contact information.
            </li>
            <li className="text-sm">
              <strong>Location Data:</strong> Geospatial location and
              farm-specific coordinates.
            </li>
            <li className="text-sm">
              <strong>Device Information:</strong> IP address, device type, OS
              version, and browser details.
            </li>
            <li className="text-sm">
              <strong>Agricultural Data:</strong> Crop types, farming practices,
              satellite imagery, and other agronomic insights.
            </li>
          </ul>

          {/* Subscription & Payment */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            Subscription & Payment
          </h2>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              CropGen offers a free trial, then monthly or annual subscription
              plans, based on acreage and services (monitoring, advisory, yield
              prediction, sustainability).
            </li>
            <li className="text-sm">
              If you are charged extra, activate by mistake, or cancel within 30
              days, you get a full refund.
            </li>
          </ul>

          {/* Purpose of Data Collection */}
          <h2 className="text-lg font-bold mt-6">Purpose of Data Collection</h2>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">User registration and authentication.</li>
            <li className="text-sm">
              Providing personalized agricultural insights and recommendations.
            </li>
            <li className="text-sm">
              Analytics to enhance global service delivery and app performance.
            </li>
            <li className="text-sm">
              Secure transaction processing and billing management.
            </li>
          </ul>

          {/* How We Use Your Data */}
          <h2 className="text-lg font-bold mt-6">How We Use Your Data</h2>
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
          <h2 className="text-lg font-bold mt-6">Data Security & Protection</h2>
          <p className="mt-2 text-sm">
            We implement advanced encryption, secure cloud storage, and
            AI-driven threat detection to protect your personal and farm-related
            data. However, no online transmission is 100% secure, and we
            encourage users to take necessary precautions.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Advanced encryption standards</li>
            <li>Secure global cloud storage solutions</li>
            <li>Continuous monitoring and proactive threat detection</li>
            <li>
              Despite stringent security measures, no digital platform can
              guarantee absolute security
            </li>
          </ul>

          {/* Sharing & Third-Party Involvement */}
          <h2 className="text-lg font-bold mt-6">
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

          {/* Third-Party SDKs */}
          <h2 className="text-lg font-bold mt-6">
            Third-Party SDKs and Integrations Used
          </h2>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              <strong>Firebase:</strong> Used for analytics, crash reporting,
              and user engagement.
            </li>
            <li className="text-sm">
              <strong>Google Maps API:</strong> Used for geolocation services.
            </li>
          </ul>
          <p className="mt-2 text-sm">
            We ensure all third-party services adhere to global data protection
            standards and handle your information responsibly.
          </p>

          {/* Your Rights */}
          <h2 className="text-lg font-bold mt-6">Your Rights & Control</h2>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              <strong>Access & Correction:</strong> You can request access to
              your data and update inaccuracies within your account settings.
            </li>
            <li className="text-sm">
              <strong>Data Deletion:</strong> You can request to delete your
              personal information from our system by contacting{" "}
              <strong className="text-[#2AB673]">support@cropgenapp.com</strong>
              .
            </li>
            <li className="text-sm">
              <strong>Opt-out:</strong> You can opt out of marketing
              communications and personalized advertising at any time.
            </li>
          </ul>

          {/* Children's Privacy */}
          <h2 className="text-lg font-bold mt-6">Children’s Privacy</h2>
          <p className="mt-2 text-sm">
            CropGen does not target users under the age of 13. We do not
            knowingly collect data from children under this age.
          </p>

          {/* Contact Information */}
          <h2 className="text-lg font-bold mt-6">Contact Information</h2>
          <p className="mt-2 text-sm">
            For privacy concerns, queries, or data requests, contact us at:{" "}
            <strong className="text-[#2AB673]">support@cropgenapp.com</strong>
          </p>

          {/* Compliance */}
          <h2 className="text-lg font-bold mt-6">Compliance</h2>
          <p className="mt-2 text-sm">
            Our data handling practices comply with Google Play Developer
            Policy, GDPR, and other applicable global data protection
            regulations.
          </p>
        </section>

        <PromoSection />
      </section>
    </>
  );
};

export default PrivacyPolicy;
