"use client";
import React from "react";
import Image from "next/image";

export default function BusinessSolution() {
  return (
    <div className="px-6 sm:px-10 mt-8 md:mt-2">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-center sm:mt-10 text-[#2AB673]">
        CropGen's Agribusiness Solutions
      </h2>

      {/* surveying and land maping */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/agri-business/land-mapping.webp"
            alt="Crop Health Analytics"
            width={500}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">Surveying & Land </span>Use Mapping
          </h2>
          <p className="sm:leading-1 text-sm">
            We provide high-precision surveying services to assess agricultural
            land use, helping agribusinesses and policymakers make informed
            decisions.
          </p>
          {[
            {
              title: "Remote Sensing & GIS Mapping",
              description: "for accurate land use planning.",
            },
            {
              title: "Farm Boundary & Sowing Area Mapping",
              description: "for precise agricultural insights.",
            },
            {
              title: "Land Parcel Monitoring",
              description: "to track land development and utilization.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 sm:leading-10"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="sm:mt-3"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Crop classificationn and delinatieation */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/agri-business/crop-classification.webp"
            alt="Crop Health Analytics"
            width={500}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">Crop </span>
            Classification & Delineation
          </h2>
          <p className="sm:leading-1 text-sm">
            Accurately classify and analyze crop types and field
            boundaries using AI and satellite imagery.
          </p>
          {[
            {
              title: "AI-Based Crop Classification",
              description: "to differentiate between various crop species.",
            },
            {
              title: "Field Boundary Identification ",
              description:
                "for efficient land management and farm optimization.",
            },
            {
              title: "Yield Estimation & Crop Growth Analysis ",
              description: "for accurate production forecasting.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 sm:leading-10"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="sm:mt-3"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* GHG Emission Monitoring & Carbon Credit Solutions */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/crop-monitoring/crop-analytics.webp"
            alt="Crop Health Analytics"
            width={500}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">GHG </span>
            Emission Monitoring & Carbon Credit Solutions
          </h2>
          <p className="sm:leading-1 text-sm">
            Sustainability is at the core of modern agribusiness. CropGen
            enables agribusinesses to monitor Greenhouse Gas (GHG) emissions and
            unlock carbon credit opportunities.
          </p>
          {[
            {
              title: "Measure CO₂, CH₄, and N₂O emissions",
              description: " to meet sustainability goals.",
            },
            {
              title: "Track Carbon Sequestration Potential ",
              description: " using remote sensing & AI models.",
            },
            {
              title: "Sell Verified Carbon Credits",
              description: " through accurate emissions data.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 sm:leading-10"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="sm:mt-3"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Forest Area Mapping & Conservation Monitoring */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/agri-business/forest-area.webp"
            alt="Crop Health Analytics"
            width={500}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]"> Forest Area </span>
            Mapping & Conservation Monitoring
          </h2>
          <p className="sm:leading-1 text-sm">
            Monitor and manage forested areas for environmental conservation and
            agroforestry projects.
          </p>
          {[
            {
              title: "Track Deforestation & Reforestation Trends",
              description: "  using satellite analytics.",
            },
            {
              title: "Assess Forest Health & Biomass Productivity ",
              description: "for sustainable development.",
            },
            {
              title: " Geospatial Analysis of Land Degradation ",
              description: "to prevent biodiversity loss.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 sm:leading-10"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="sm:mt-3"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Support for Insurance Companies & Risk Assessment */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/agri-business/support.webp"
            alt="Crop Health Analytics"
            width={500}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">Support </span>
            for Insurance Companies & Risk Assessment
          </h2>
          <p className="sm:leading-1 text-sm">
            We provide highly accurate crop health data and predictive yield
            analytics to insurance companies for risk assessment and claims
            processing.
          </p>
          {[
            {
              title: "Remote Damage Assessment",
              description: " to verify insurance claims.",
            },
            {
              title: "Crop Growth Stage Analysis  ",
              description: "to determine potential risks.",
            },
            {
              title: "Pest & Disease Alerts ",
              description: "for proactive risk management.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 sm:leading-10"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="sm:mt-3"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FPO (Farmer Producer Organizations) Support */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/agri-business/fpo.webp"
            alt="Crop Health Analytics"
            width={500}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">FPO </span>
            (Farmer Producer Organizations) Support
          </h2>
          <p className="sm:leading-1 text-sm">
            We empower Farmer Producer Organizations (FPOs) with smart
            agriculture tools for efficient management, financial growth, and
            market linkage.
          </p>
          {[
            {
              title: " Group Farm Monitoring",
              description: " for productivity tracking.",
            },
            {
              title: "Data-Driven Decision Making ",
              description: " for improved bargaining power.",
            },
            {
              title: "Access to Digital Advisory & Inputs ",
              description: " for better financial returns.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 sm:leading-10"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="sm:mt-3"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Farming Solutions*/}
      <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/agri-business/corporate-solution.webp"
            alt="corporate farming solution by cropgen"
            width={500}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">Corporate </span>
            Farming Solutions
          </h2>
          <p className="sm:leading-1 text-sm">
            For large-scale corporate farming, CropGen provides real-time
            analytics and customized farm monitoring solutions to improve
            efficiency and yield management.
          </p>
          {[
            {
              title: "Precision Agriculture Solutions ",
              description: "for large agribusinesses.",
            },
            {
              title: "Water & Fertilizer Optimization",
              description: "to reduce input costs.",
            },
            {
              title: "Predictive Yield Analytics",
              description: "for better crop production planning.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 sm:leading-10"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="sm:mt-3"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* White Label Solutions for Enterprises*/}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/agri-business/white-label.webp"
            alt="White label solution by cropgen"
            width={500}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">White </span>
            Label Solutions for Enterprises
          </h2>
          <p className="sm:leading-1 text-sm">
            Looking for a custom-branded agricultural intelligence platform?
            CropGen offers White Label solutions tailored for enterprises.
          </p>
          {[
            {
              title: "Custom Farm Monitoring Dashboards ",
              description: " under your brand.",
            },
            {
              title: "Tailored Data Insights & Reports ",
              description: "for enterprise clients.",
            },
            {
              title:
                "End-to-End Integration with Existing Agri-Tech Platforms.",
              description: "",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 sm:leading-10"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="sm:mt-3"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*API Integrations for Seamless Data Flow*/}
      <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/agri-business/api-integration.webp"
            alt="api integration by cropgen"
            width={500}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">API </span>
            Integrations for Seamless Data Flow
          </h2>
          <p className="sm:leading-1 text-sm">
            Integrate CropGen’s remote sensing analytics with your existing farm
            management system to get real-time insights and optimize your
            agribusiness processes.
          </p>
          {[
            {
              title: "Weather Data API  ",
              description: "for real-time & historical weather insights.",
            },
            {
              title: "Soil & Crop Health API ",
              description: "for precision farming.",
            },
            {
              title: "Predictive Analytics API",
              description: " to forecast crop productivity & risks.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 sm:leading-10"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="sm:mt-3"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
