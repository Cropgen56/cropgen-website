"use client";
import Head from "next/head";
import { PromoSection } from "@/components";
import Image from "next/image";

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
          <h2 className="text-lg font-bold mt-6">1. Acceptance of Terms</h2>
          <p className="mt-2 text-sm">
            By using CropGen's platform, you confirm that you have read,
            understood, and agreed to these Terms. If you do not accept these
            Terms, please discontinue use of our services.
          </p>

          {/* 2. Services Offered */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">2. Our Services</h2>
          <p className="mt-2 text-sm">
            CropGen provides digital agriculture solutions, including:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">AI-powered crop advisorys.</li>
            <li className="text-sm">Satellite-based crop monitoring</li>
            <li className="text-sm">Yield prediction & analysis</li>
            <li className="text-sm">Soil, weather & moisture insights</li>
            <li className="text-sm">Remote farm management</li>
            <li className="text-sm">
              Sustainability & carbon impact assessment
            </li>
            <li className="text-sm">SaaS-based dashboards & alerts</li>
          </ul>
          <p className="mt-2 text-sm">
            CropGen may update or add new features from time to time.
          </p>

          {/* 3. User Responsibilities */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            3. User Obligations
          </h2>
          <p className="mt-2 text-sm">Users agree to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              Provide accurate farm and personal information.
            </li>
            <li className="text-sm">
              Use the platform responsibly and legally.
            </li>
            <li className="text-sm">
              Not misuse, copy, or manipulate CropGen's insights or systems.
            </li>
            <li className="text-sm">Keep login credentials secure</li>
          </ul>
          <p className="mt-2 text-sm">
            Users are responsible for any activity performed under their
            account.
          </p>

          {/* 4. Subscription & Payment */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            4. Subscription, Billing & Refunds
          </h2>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              CropGen offers monthly and annual subscription plans.
            </li>
            <li className="text-sm">
              Plans are based on acreage and selected modules.
            </li>
            <li>All subscriptions auto-renew unless cancelled</li>
            <li>Users can cancel anytime from the app or by emailing us.</li>
            <li>
              Mistaken charges or activation errors are refundable within{" "}
              <strong>30 days.</strong>
            </li>
            <li>
              Refunds (where applicable) are processed within{" "}
              <strong>7-10 business days.</strong>
            </li>
          </ul>

          {/* 5. Intellectual Property Rights */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            5. Data Collection & Privacy
          </h2>
          <p className="mt-2 text-sm">CropGen may collect:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">Farm location & boundaries</li>
            <li className="text-sm">Satellite data related to crops</li>
            <li>Device information for security</li>
            <li>User contact details</li>
            <li>Field photos uploaded by the user</li>
          </ul>
          <p className="mt-2 text-sm">Data is used to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">Improve AI predictions</li>
            <li className="text-sm">Provide personalized advisory</li>
            <li>Develop crop analytics</li>
            <li>Enhance user experience</li>
          </ul>
          <p className="mt-2 text-sm">
            CropGen <strong>does not sell</strong> user data to third parties.
            <br />
            Data is shared only when legally required or with user permission.
            <br />
            For full details, please refer to our{" "}
            <strong>Privacy Policy</strong>.
          </p>

          {/* 6. Limitation of Liability */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            6. Intellectual Property
          </h2>
          <p className="mt-2 text-sm">
            All AI models, algorithms, dashboards, satellite insights, content,
            and designs are <strong>exclusive property of CropGen.</strong>
          </p>
          <p className="mt-2 text-sm">Users may not:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">Copy</li>
            <li className="text-sm">Reproduce</li>
            <li className="text-sm">Modify</li>
            <li className="text-sm">Redistribute</li>
            <li className="text-sm">Reverse-engineer</li>
          </ul>
          <p className="mt-2 text-sm">
            any part of the platform without written consent.
          </p>

          {/* 7. Modifications to Terms */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            7. Satellite & AI Disclaimer
          </h2>
          <p className="mt-2 text-sm">
            CropGen insights are based on satellite data, weather inputs, and AI
            predictions. Due to natural conditions:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">Cloud cover</li>
            <li className="text-sm">Atmospheric interference</li>
            <li className="text-sm">Third-party data delays</li>
          </ul>
          <p className="mt-2 text-sm">
            CropGen does <strong>not guarantee 100% accuracy</strong>.<br />
            AI advisory is predictive and should be used responsibly.
            <br />
            Final agricultural decisions remain the responsibility of the user.
          </p>

          {/* 8. Governing Law */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            8. Service Availability
          </h2>
          <p className="mt-2 text-sm">
            CropGen services may face downtime due to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">Maintenance</li>
            <li className="text-sm">Satellite delays</li>
            <li className="text-sm">Third-party outages</li>
            <li className="text-sm">System upgrades</li>
          </ul>
          <p className="mt-2 text-sm">
            CropGen is not liable for temporary unavailability.
          </p>

          <h2 className="text-lg font-bold mt-4 md:mt-6">
            9. Limitation of Liability
          </h2>
          <p className="mt-2 text-sm">CropGen is not responsible for:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              Losses resulting from reliance on AI insights
            </li>
            <li className="text-sm">
              Crop damage due to weather, pests, or incorrect input use
            </li>
            <li className="text-sm">
              Financial losses or operational mistakes
            </li>
            <li className="text-sm">Third-party service interruptions</li>
          </ul>
          <p className="mt-2 text-sm">
            Users agree to use the service at their own risk.
          </p>

          <h2 className="text-lg font-bold mt-4 md:mt-6">
            10. Indemnification
          </h2>
          <p className="mt-2 text-sm">
            Users agree to indemnify and hold harmless CropGen from claims,
            damages, liabilities, or losses arising from:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">Misuse of the platform</li>
            <li className="text-sm">Incorrect interpretation of insights</li>
            <li className="text-sm">Violation of Terms & Conditions</li>
          </ul>

          <h2 className="text-lg font-bold mt-4 md:mt-6">11. Modifications</h2>
          <p className="mt-2 text-sm">
            CropGen may update these Terms at any time. <br />
            Continued use of the platform indicates acceptance of updated Terms.{" "}
            <br />
            Users will be notified through email or in-app notifications.
          </p>

          <h2 className="text-lg font-bold mt-4 md:mt-6">12. Governing Law</h2>
          <p className="mt-2 text-sm">
            These Terms shall be governed by Indian law, with disputes subject
            to the jurisdiction of Indian courts
          </p>

          {/* 13. Contact Information */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            13. Contact Information
          </h2>
          <p className="mt-2 text-sm">
            For questions or legal support: <br />
            <span className="pl-6">
              📧{" "}
              <a
                href="mailto:legal@cropgenapp.com"
                className="text-[#2AB673] font-bold"
              >
                legal@cropgenapp.com
              </a>{" "}
            </span>
            <br />
            <span className="pl-6">📍 Pune, Maharashtra, India </span>
            <br />
            <span className="pl-6">
              📞{" "}
              <a href="tel:+919665935570" className="text-[#2AB673] font-bold">
                +91 9665935570
              </a>
            </span>
          </p>

          <p className="mt-6 text-xs text-gray-500">
            Last updated: November 24, 2025
          </p>
        </section>

        <PromoSection />
      </section>
    </>
  );
};

export default TermsConditions;
