"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="py-6 md:py-10">
      <div className="container flex flex-col gap-10 items-center px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            What Makes{" "}
            <span className="text-[#2AB673]">CropGen's Crop Monitoring </span>
            Stand Out?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-4 md:p-8 rounded-2xl shadow-green-custom bg-white h-fit w-fit my-auto"
          >
            <h3 className="font-bold p-3 md:py-5">
              Crop Monitoring by{" "}
              <span className="text-[#2AB673]"> CropGen</span>
            </h3>
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
              CropGen is a visualization software with advanced array components
              and debugged tools that help enhance productivity. Our system
              provides input tools for controlling output intelligence, job
              control security, and data-driven analysis while minimizing errors
              on MDs.
            </p>
          </motion.div>

          {/* Right Content (Infinite Animation) */}
          <div className="p-2 text-white flex justify-center items-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/image/home/features.png"
                height={500}
                width={500}
                alt="CropGen feature image"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
