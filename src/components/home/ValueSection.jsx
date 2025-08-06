"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ValuesSection = () => {
  return (
    <section className="relative flex flex-col gap-12 bg-white py-5 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Values Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center"
      >
        {/* Left Content */}
        <div className="flex flex-col gap-4 px-4 md:px-0">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-green-600">Values</span>
          </h2>
          <ul className=" text-gray-600 text-sm ml-2 md:ml-4 md:text-lg flex flex-col gap-2">
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <strong className="text-gray-900">Innovation:</strong> Committed
              to continuous innovation and striving to pioneer new solutions
              that drive efficiency and sustainability in agriculture.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <strong className="text-gray-900">Empowerment:</strong> Providing
              farmers with the tools and knowledge they need to succeed in an
              ever-changing agricultural landscape.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <strong className="text-gray-900">Collaboration:</strong> Foster
              collaboration and partnerships with stakeholders across the
              agricultural value chain to create shared value and drive
              collective impact.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <strong className="text-gray-900">Integrity:</strong> Upholding
              the highest standards of integrity, transparency, and ethical
              conduct in all interactions and operations.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <strong className="text-gray-900">Sustainability:</strong>{" "}
              Dedicated to promoting sustainable farming practices that preserve
              natural resources and promote environmental stewardship.
            </motion.li>
          </ul>
        </div>

        {/* Right Content - Graphics */}
        <div className="relative flex flex-row items-center justify-around">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="h-full"
          >
            <div className="float-end">
              <Image
                src="/assets/image/home/weather-card.png"
                alt="Report"
                width={150}
                height={100}
                className="pb-0 md:pb-20"
              />
            </div>
            <Image
              src="/assets/image/home/insights.png"
              alt="Report"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Image
              src="/assets/image/home/report-cards.png"
              alt="Report"
              width={600}
              height={600}
              className="ps-0"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="max-w-2xl w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-white shadow-lg rounded-lg p-3 md:p-4">
          <p className="text-md md:text-xl font-semibold text-gray-900 text-center md:text-center">
            We will bring your Farm to the next level.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className=" bg-green-500 text-white px-6 py-2 rounded-full text-sm md:text-lg font-semibold shadow-md hover:bg-green-600 transition-all ease-in-out duration-400"
          >
            Start Free Trial
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;
