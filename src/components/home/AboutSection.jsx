"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="relative flex flex-col gap-4 bg-white py-3 md:py-6 px-4 sm:px-6 md:px-12 lg:px-20">
            {/* Who We Are Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
            >
                {/* Left Content */}
                <div className="flex flex-col gap-1 lg:gap-2">    
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                        <span className="text-green-600">Who</span> We Are?
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm md:text-lg">
                        CropGen is dedicated to transforming the agricultural landscape
                        through innovative technology and data-driven solutions. Our mission
                        is to empower farmers, agribusinesses, and stakeholders worldwide
                        with the tools and insights they need to optimize crop management,
                        enhance productivity, and promote sustainable agricultural
                        practices.
                    </p>
                    <p className="mt-4 text-gray-600 text-sm md:text-lg">
                        We specialize in providing advanced crop monitoring services and
                        agricultural data solutions, leveraging the power of remote sensing
                        technology, artificial intelligence, and data analytics.
                    </p>
                </div>

                {/* Right Content - Image */}
                <div className="flex items-center justify-between relative p-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10" >
                        <Image
                        src="/assets/image/home/index-image.png"
                        alt="NDVI"
                        width={400}
                        height={400}
                        className="rounded-md w-[350px] h-[300px] md:w-[400px] md:h-[400px] max-w-full object-cover"
                        />
                    </motion.div>

                    {/* About Label - Infinite Animation */}
                    <motion.div
                        className="absolute top-0 right-0"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <Image
                        src="/assets/image/home/about.png"
                        width={120}
                        height={120}
                        alt="Dotted Background"
                        className="max-w-full"
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* What We Offer Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center relative bg-[url('/assets/image/curve-background.png')] bg-cover bg-center bg-no-repeat rounded-lg p-4"
            >
                {/* Left Content - Image */}
                <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative flex justify-center items-start p-0 m-0"
                >
                <Image
                    src="/assets/image/home/monitoring.png"
                    alt="Monitoring"
                    width={500}
                    height={500}
                    className="m-0 p-0 md:w-[500px] md:h-[500px] block"
                />
                </motion.div>

                {/* Right Content - What We Offer */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                        <span className="text-green-600">What</span> We Offer?
                    </h2>
                    <ul className="flex flex-col gap-2 text-gray-600 ml-2 md:ml-4 text-sm md:text-lg">
                        <li>
                        <strong className="text-gray-900">
                            Remote Sensing Technology:
                        </strong>{" "}
                        Utilize cutting-edge remote sensing technology...
                        </li>
                        <li>
                        <strong className="text-gray-900">API Integration:</strong> Offer
                        robust API integration...
                        </li>
                        <li>
                        <strong className="text-gray-900">
                            Crop Monitoring Services:
                        </strong>{" "}
                        Provide location-based crop monitoring services...
                        </li>
                        <li>
                        <strong className="text-gray-900">Actionable Insights:</strong>{" "}
                        Transform raw data into actionable insights...
                        </li>
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
