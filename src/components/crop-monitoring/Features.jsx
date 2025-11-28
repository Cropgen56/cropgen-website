"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Subscrib from "../common/Subscrib";
import CropMonitoringFeaturesSkeleton from "../skeleton-loaders/crop-monitoring/CropMonitoringFeaturesSkeleton";

export default function CropMonitoringFeatures() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // List of all image URLs in this component
  const images = [
    "/assets/image/crop-monitoring/Crop-Monitoring-Features.png",
    "/assets/image/crop-monitoring/crop-analytics.webp",
    "/assets/image/crop-monitoring/npk-analytcis.webp",
    "/assets/image/crop-monitoring/automatic-agronomy.webp",
    "/assets/image/crop-monitoring/bbch.webp",
    "/assets/image/crop-monitoring/real-time-soil-moisture.webp",
    "/assets/image/crop-monitoring/weather.webp",
    "/assets/image/crop-monitoring/crop-information.webp",
    "/assets/image/crop-monitoring/soil-report.webp",
    "/assets/image/crop-monitoring/soil-analytics.webp",
    "/assets/image/crop-monitoring/disease-alert.webp",
    "/assets/image/crop-monitoring/scouting.webp",
    "/assets/image/crop-monitoring/Scouting.png",
    "/assets/image/crop-monitoring/How-the-Cropgen.png",
    "/assets/image/crop-monitoring/satellite-imagery.webp",
    "/assets/image/crop-monitoring/satellite-imagery2.webp",
    "/assets/image/crop-monitoring/crop-protection.webp",
    "/assets/image/crop-monitoring/detailed-report.webp",
    "/assets/image/crop-monitoring/customaizable-report.webp",
  ];

  useEffect(() => {
    let isMounted = true;

    images.forEach((src) => {
      const img = new window.Image(); // <-- use window.Image instead of Image
      img.src = src;
      img.onload = () => {
        if (!isMounted) return;
        setLoadedCount((prev) => prev + 1);
      };
    });

    return () => {
      isMounted = false;
    };
  }, []);


  useEffect(() => {
    if (loadedCount === images.length) {
      setImagesLoaded(true);
    }
  }, [loadedCount]);

  return (
    <section
      aria-label="Crop Monitoring Hero Section"
      className="py-4 md:py-10 bg-white"
    >
      <div className="container mx-auto px-4 relative">
        <Image
          src="/assets/image/crop-monitoring/Crop-Monitoring-Features.png"
          alt="Crop-Monitoring-Features"
          width={400}
          height={200}
          priority
          className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
        />
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#2AB673] sm:mb-8 z-10 relative">
          Crop Monitoring Features
        </h2>
        {/* Crop Health Analysis componment */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row-reverse
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/crop-analytics.webp"
                alt="Crop Health Analytics"
                width={600}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-start sm:text-center md:text-left sm:p-4 ">
              <h3 className="text-xl sm:text-3xl font-bold mt-4">
                <span className="text-[#2AB673]">Crop Health </span>Analytics
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Monitor your crop health in real-time using advanced indices
                such as <strong>NDVI</strong> (Normalized Difference Vegetation
                Index), <strong>SAVI </strong>(Soil Adjusted Vegetation Index),
                and <strong>EVI</strong> (Enhanced Vegetation Index). These
                tools provide precise diagnostics to identify areas of stress,
                nutrient deficiencies, or pest infestations, ensuring farmers
                can take timely action.
              </p>
            </div>
          </div>
        </article>
        {/* NPK Analysis */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/npk-analytcis.webp"
                alt="Crop Health Analytics"
                width={600}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-start sm:text-center md:text-right sm:p-4 ">
              <h3 className="text-xl sm:text-3xl font-bold mt-4">
                {" "}
                <span className="text-[#2AB673]">NPK</span> Analysis
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Receive detailed insights into the availability and requirements
                of <strong> Nitrogen (N)</strong>,
                <strong> Phosphorus (P)</strong>, and
                <strong>Potassium (K) </strong>in your soil. CropGen helps
                farmers understand soil fertility levels and recommend the right
                fertilizers to maintain nutrient balance.
              </p>
            </div>
          </div>
        </article>
        {/* Automatic Agronomy System */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row-reverse
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/automatic-agronomy.webp"
                alt="Crop Health Analytics"
                width={600}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-start sm:text-center md:text-left sm:p-4 ">
              <h3 className="text-xl sm:text-3xl font-bold mt-4">
                <span className="text-[#2AB673]">Automatic</span> Agronomy{" "}
                <br />
                System (AAS)
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Our <strong>Precision Agronomy System (PAS)</strong> uses over
                <strong>20+ parameters </strong> to deliver{" "}
                <strong>
                  {" "}
                  highly accurate and automated agronomic recommendations.
                </strong>{" "}
                By analysing factors like soil health, crop type, weather
                patterns, and growth stages, PAS ensures optimal decision-making
                at every stage of the crop cycle.
              </p>
            </div>
          </div>
        </article>
        {/* BBCh Stage */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/bbch.webp"
                alt="Crop Health Analytics"
                width={600}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-start sm:text-center md:text-right sm:p-4 ">
              <h3 className="text-xl sm:text-3xl font-bold mt-4">
                <span className="text-[#2AB673]">BBCH </span>
                Scale Monitoring
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Track crop growth stages with precision using the{" "}
                <strong>BBCH Scale</strong> and ,
                <strong> Growing Degree Days (GDD).</strong> This ensures
                farmers can better plan their irrigation schedules, fertilizer
                application, and pest control measures based on crop phenology.
              </p>
            </div>
          </div>
        </article>
        {/* real time soing insights */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row-reverse
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/real-time-soil-moisture.webp"
                alt="Crop Health Analytics"
                width={600}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-start sm:text-center md:text-left sm:p-4 ">
              <h3 className="text-xl sm:text-3xl font-bold mt-4">
                <span className="text-[#2AB673]">Real-Time</span> Soil Insights
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Access{" "}
                <strong> real-time soil moisture and temperature data</strong>
                to ensure optimal irrigation and prevent over- or
                under-watering. This not only conserves water but also boosts
                crop health and productivity.
              </p>
            </div>
          </div>
        </article>
        {/* weather data */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/weather.webp"
                alt="Crop Health Analytics"
                width={600}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-start smLtext-center md:text-right sm:p-4 ">
              <h3 className="text-xl sm:text-3xl font-bold mt-4">
                <span className="text-[#2AB673]">Hyper-Local </span>Weather{" "}
                <br />
                Data
              </h3>
              <p className="text-gray-600 mt-2">
                Gain access to <strong> real-time weather updates</strong>,
                <strong> forecasts</strong>, and{" "}
                <strong>historical weather data</strong> tailored to your
                specific location. CropGen’s hyper-local weather data ensures
                you’re always prepared for weather-related challenges.
              </p>
            </div>
          </div>
        </article>
        {/* Crop Information data */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row-reverse
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/crop-information.webp"
                alt="Crop Health Analytics"
                width={600}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-xl sm:text-center md:text-left sm:p-4 ">
              <h3 className="text-xl sm:text-3xl font-bold mt-4">
                <span className="text-[#2AB673]">Crop </span>Information
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Leveragestor{" "}
                <strong> comprehensive knowledge about various crops</strong>,
                including planting guidelines, disease prevention methods, and
                optimal growing conditions. This information helps farmers
                achieve better results for different crops and regions.
              </p>
            </div>
          </div>
        </article>{" "}
        {/* soil health  */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/soil-report.webp"
                alt="Crop Health Analytics"
                width={600}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-start sm:text-center md:text-right sm:p-4 ">
              <h3 className="text-xl sm:text-3xl font-bold mt-4">
                <span className="text-[#2AB673]">Soil Health </span>Reports
              </h3>
              <p className="text-gray-600 mt-2">
                Receive in-depth <strong>soil condition reports</strong>,
                including insights on pH levels, organic matter, and
                micronutrient availability. These reports are essential for
                <strong> sustainable land use </strong> and{" "}
                <strong> long-term farm productivity.</strong>
              </p>
            </div>
          </div>
        </article>
        {/* soil analytics  */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row-reverse
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/soil-analytics.webp"
                alt="Crop Health Analytics"
                width={600}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-start sm:text-center md:text-left sm:p-4 ">
              <h3 className="text-xl sm:text-3xl font-bold mt-4">
                <span className="text-[#2AB673]">Soil Data </span>Analytics
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Analyse <strong> soil texture, organic content</strong>, and
                <strong> fertility </strong>with advanced tools to optimize your
                farm’s potential. Our data-driven approach ensures that your
                soil is managed sustainably and effectively.
              </p>
            </div>
          </div>
        </article>
        {/* Disease & Pest */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/disease-alert.webp"
                alt="Crop Health Analytics"
                width={600}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-start sm:text-center md:text-right sm:p-4 ">
              <h3 className="text-xl sm:text-3xl font-bold mt-4">
                <span className="text-[#2AB673]">Disease & Pest</span> Alerts
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Stay ahead of crop diseases and pest infestations with our{" "}
                <strong> early warning system. </strong>CropGen provides
                <strong> accurate preventive solutions </strong>to safeguard
                your crops and reduce losses.
              </p>
            </div>
          </div>
        </article>
        {/* Cropgen Scouting  */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row-reverse
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/scouting.webp"
                alt="Crop Health Analytics"
                width={500}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 text-start sm:text-center md:text-left sm:p-4 relative">
              <Image
                src="/assets/image/crop-monitoring/Scouting.png"
                alt="Scouting"
                width={400}
                height={200}
                priority
                className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[300px] left-1/2 -translate-x-1/2"
              />
              <h2 className="text-[#2AB673] text-3xl sm:text-4xl font-bold z-10 relative">
                Scouting
              </h2>
              <h6 className="text-xl sm:text-3xl font-semibold mt-4">
                Discover the future of precision agriculture with CropGen’s{" "}
                <br />
                Scouting Tool
              </h6>
              <p className="text-gray-600 mt-2 text-sm">
                A cutting-edge solution designed to enhance crop management
                through the power of high-resolution satellite imagery. By
                enabling detailed field inspections remotely, our tool assists
                farmers in identifying and addressing various crop issues such
                as plant stress, pest infestations, and nutrient deficiencies.
              </p>
            </div>
          </div>
        </article>
        <article className="sm:w-1/2 sm:px-8 mt-10 sm:mt-20 relative">

          <Image
            src="/assets/image/crop-monitoring/How-the-Cropgen.png"
            alt="How-the-Cropgen"
            width={400}
            height={200}
            priority
            className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
          />
          <h2 className="text-[#2AB673] text-xl sm:text-4xl font-bold z-10 relative">
            How the CropGen{" "}
          </h2>{" "}
          <h2 className="text-[#2AB673] text-xl  sm:text-4xl font-bold sm:my-2">
            Scouting Tool Works
          </h2>
          <p className="mt-2 sm:text-left text-sm">
            CropGen’s Scouting Tool integrates state-of-the-art satellite
            technology to provide farmers with a comprehensive view of their
            fields, empowering them to make informed decisions quickly and
            efficiently. Here’s how it transforms field inspections:
          </p>
        </article>
        {/* How Scouting works  */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row-reverse
            items-start overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/satellite-imagery.webp"
                alt="Crop Health Analytics"
                width={500}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 sm:text-center md:text-left sm:p-4 ">
              <h6 className="text-xl sm:text-3xl font-bold mt-4">
                1. High-Resolution Satellite <br />
                Imagery:
              </h6>
              <p className="text-gray-600 mt-2 flex items-start text-sm">
                <Image
                  src="/assets/image/comman/dot.webp"
                  width={20}
                  height={20}
                  priority
                  alt="dot"
                  className="pt-1 me-1"
                />{" "}
                Utilizes the latest in satellite technology to capture detailed
                images of your fields, providing insights that are not visible
                to the naked eye.
              </p>
              <p className="text-gray-600 mt-2 flex items-start text-sm">
                <Image
                  src="/assets/image/comman/dot.webp"
                  width={20}
                  height={20}
                  priority
                  alt="dot"
                  className="pt-1 me-1"
                />{" "}
                Regular updates ensure that you receive the most current
                information about your crops' condition.
              </p>
            </div>
          </div>
        </article>
        {/* Advance image processing */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row
            items-start overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/satellite-imagery2.webp"
                alt="Crop Health Analytics"
                width={500}
                height={300}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 sm:text-center md:text-left sm:p-4 flex flex-col ">
              <h6 className="text-xl sm:text-3xl font-bold mt-4">
                2.Advanced Image <br />
                Processing:
              </h6>
              <p className="text-gray-600 mt-2 flex items-start text-sm">
                <Image
                  src="/assets/image/comman/dot.webp"
                  width={20}
                  height={20}
                  priority
                  alt="dot"
                  className="pt-1 me-1"
                />{" "}
                Our sophisticated algorithms analyze the satellite data to
                detect signs of plant stress, pest activity, and nutrient
                levels.
              </p>
              <p className="text-gray-600 mt-2 flex items-start text-sm">
                <Image
                  src="/assets/image/comman/dot.webp"
                  width={20}
                  height={20}
                  priority
                  alt="dot"
                  className="pt-1 me-1"
                />{" "}
                This analysis helps pinpoint specific areas of concern, allowing
                for targeted agricultural practices.
              </p>
              <div className="flex mt-5">
                <a href="https://app.cropgenapp.com/cropgen-analytics" className="bg-[#2AB673] text-white px-6 py-2 mx-auto rounded-full font-semibold hover:bg-[#2AB673] transition-all">
                  Start Analyze
                </a>
              </div>
            </div>
          </div>
        </article>
        {/* features of the scouting in the cropgen  */}
        <div className="sm:w-1/2 sm:px-8 mt-20 relative">
          <Image
            src="/assets/image/crop-monitoring/Features.png"
            alt="Features of CropGen Scouting Tool"
            width={400}
            priority
            height={200}
            className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
          />
          <h2 className="text-[#2AB673] text-2xl sm:text-4xl font-bold relative z-10">
            Features of the
          </h2>{" "}
          <h2 className="text-[#2AB673] text-2xl sm:text-4xl font-bold my-2">
            CropGen Scouting Tool
          </h2>
        </div>
        {/* Advance image processing */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row-reverse
            items-start overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/crop-protection.webp"
                alt="Crop Health Analytics"
                width={600}
                height={200}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 sm:text-center md:text-left sm:p-4 sm:px-8  ">
              <h6 className="text-xl sm:text-2xl font-bold mt-4">
                Early Detection:
              </h6>
              <p className="text-gray-600 mt-2 flex items-start text-sm">
                <Image
                  src="/assets/image/comman/dot.webp"
                  width={20}
                  height={20}
                  priority
                  alt="dot"
                  className="pt-1 me-1"
                />{" "}
                Identifies potential issues before they become visible or cause
                significant damage to crops.
              </p>
            </div>
          </div>
        </article>
        {/* Detailed report */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row
            items-start overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/detailed-report.webp"
                alt="Crop Health Analytics"
                width={500}
                height={200}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 sm:text-center md:text-left sm:p-4 sm:px-8  ">
              <h6 className="text-xl sm:text-2xl font-bold mt-4 ">
                Detailed Reports:
              </h6>
              <p className="text-gray-600 mt-2 flex items-start text-sm">
                <Image
                  src="/assets/image/comman/dot.webp"
                  width={20}
                  height={20}
                  priority
                  alt="dot"
                  className="pt-1 me-1"
                />{" "}
                Provides comprehensive reports that include vegetation indices
                like NDVI (Normalized Difference Vegetation Index), which
                assesses plant health by measuring the difference between
                near-infrared and visible light reflectance.
              </p>
            </div>
          </div>
        </article>
        {/* Customaizable report */}
        <article className="flex flex-col gap-8">
          <div
            className="flex flex-col  md:flex-row-reverse
            items-center overflow-hidden p-1"
          >
            <figure className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/image/crop-monitoring/customaizable-report.webp"
                alt="Crop Health Analytics"
                width={600}
                height={200}
                priority
                className="rounded-md object-contain"
              />
            </figure>
            <div className="w-full md:w-1/2 sm:text-center md:text-left sm:p-4 sm:px-8  ">
              <h6 className="text-xl sm:text-2xl font-bold mt-4">
                Customaizable Reports:
              </h6>
              <p className="text-gray-600 mt-2 flex items-start text-sm">
                <Image
                  src="/assets/image/comman/dot.webp"
                  width={20}
                  height={20}
                  priority
                  alt="dot"
                  className="pt-1 me-1"
                />{" "}
                Set up alerts based on specific thresholds for various
                indicators, ensuring that you receive immediate notifications
                about critical changes in your fields.
              </p>
            </div>
          </div>
        </article>
        <Subscrib
          text={<>Keep Your farm Up to Date with Cropgen Crop Monitoring</>}
        />
      </div>
    </section>
  );
}
