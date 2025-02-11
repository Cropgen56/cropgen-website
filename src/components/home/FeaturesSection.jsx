"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
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
            className="px-8 py-8 rounded-2xl shadow-green-custom bg-white h-fit w-fit my-auto"
          >
            <h3 className="font-bold py-5">
              Crop Monitoring by{" "}
              <span className="text-[#2AB673]"> CropGen</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
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
              animate={{ scale: [1, 1.05, 1] }} // Scale up & down effect
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/image/features.png"
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
