"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AgricultureTechSection() {
  return (
    <section className="relative p-6 md:py-12 px-6 bg-white flex flex-col gap-6 md:gap-8 items-center">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-bold text-center"
      >
        <span className="text-green-500">Enhancing</span> Agriculture with
        Technology
      </motion.h2>

      {/* Image Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-5xl w-full flex flex-col md:flex-row items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/assets/image/home/technology.png"
            width={1000}
            height={1000}
            alt="agriculture technology image"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
