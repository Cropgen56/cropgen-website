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
            By using the CropGen web and mobile applications, you agree to these
            Terms & Conditions. If you disagree, please refrain from using our
            services.
          </p>

          {/* 2. Services Offered */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            2. Services Offered
          </h2>
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
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            3. User Responsibilities
          </h2>
          <p className="mt-2 text-sm">By using CropGen, you agree to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              Provide accurate and truthful information.
            </li>
            <li className="text-sm">Use insights responsibly and ethically.</li>
            <li className="text-sm">
              Comply with applicable local and international laws.
            </li>
          </ul>

          {/* 4. Subscription & Payment */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            4. Subscription & Payment
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

          {/* 5. Intellectual Property Rights */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            5. Intellectual Property Rights
          </h2>
          <p className="mt-2 text-sm">
            All AI models, algorithms, content, and satellite-generated insights
            remain the exclusive intellectual property of CropGen. Unauthorized
            copying, redistribution, or modification is prohibited.
          </p>

          {/* 6. Limitation of Liability */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            6. Limitation of Liability
          </h2>
          <p className="mt-2 text-sm">CropGen is not liable for:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-sm">
              Losses due to inaccuracies in AI-driven insights.
            </li>
            <li className="text-sm">
              Damage arising from agricultural decisions based on provided
              analytics.
            </li>
            <li className="text-sm">
              Third-party service interruptions or malfunctions.
            </li>
          </ul>

          {/* 7. Modifications to Terms */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            7. Changes to Terms
          </h2>
          <p className="mt-2 text-sm">
            We may modify these Terms at any time. Users will receive
            notifications through app alerts or email updates. Continued use
            after any change signifies acceptance.
          </p>

          {/* 8. Governing Law */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">8. Governing Law</h2>
          <p className="mt-2 text-sm">
            These Terms shall be governed by Indian law, with disputes subject
            to the jurisdiction of Indian courts
          </p>

          {/* 9. Contact Information */}
          <h2 className="text-lg font-bold mt-4 md:mt-6">
            9. Contact Information
          </h2>
          <p className="mt-2 text-sm">
            For legal inquiries or clarifications, please contact:{" "}
            <strong className="text-[#2AB673]">legal@cropgenapp.com</strong>
          </p>
        </section>

        <PromoSection />
      </section>
    </>
  );
};

export default TermsConditions;
