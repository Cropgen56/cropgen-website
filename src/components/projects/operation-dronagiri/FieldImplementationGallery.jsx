// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import { MoveLeft, MoveRight } from "lucide-react";
// import { motion } from "framer-motion";

// const galleryImages = [
//   "/assets/image/projects/Group 589.svg",
//   "/assets/image/projects/Group 590.svg",
//   "/assets/image/projects/Group 591.svg",
//   "/assets/image/projects/Group 592.svg",
//   "/assets/image/projects/Group 593.png",
//   "/assets/image/projects/Group 594.svg",
//   "/assets/image/projects/Group 595.png",
//   "/assets/image/projects/Group 596.png",
//   "/assets/image/projects/Group 599.png",
// ];

// const FieldImplementationGallery = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const totalImages = galleryImages.length;

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
//   };

//   const getImageIndex = (offset) =>
//     (activeIndex + offset + totalImages) % totalImages;

//   return (
//     <div className="w-full max-w-7xl mx-auto mt-10 px-4">
//       <h2 className="text-lg md:text-xl font-bold text-center text-[#2AB673] mb-10">
//         Field Implementation xGallery
//       </h2>

//       <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-3">
//         <button
//           onClick={handlePrev}
//           className="hidden sm:flex p-2 rounded-full bg-[#E4FFF1] hover:bg-[#28C878] hover:text-white transition-all duration-300 outline-none"
//         >
//           <MoveLeft size={28} strokeWidth={1.5} />
//         </button>

//         {/* Previous Thumbnail (Desktop Only) */}
//         <motion.div
//           key={`prev-${getImageIndex(-1)}`}
//           layout
//           initial={{ opacity: 0.5, scale: 0.95 }}
//           animate={{ opacity: 0.8, scale: 1 }}
//           whileHover={{ scale: 1.03, opacity: 1 }}
//           transition={{ duration: 0.3 }}
//           onClick={() => setActiveIndex(getImageIndex(-1))}
//           className="hidden sm:block relative cursor-pointer aspect-[16/9] w-[calc(48rem-4rem)] max-w-[calc(100%-4rem)] rounded-xl overflow-hidden shadow-md ring-1 ring-gray-300"
//         >
//           <Image
//             src={galleryImages[getImageIndex(-1)]}
//             alt="Previous Thumbnail"
//             fill
//             className="object-cover rounded-xl"
//           />
//           <div className="absolute inset-0 bg-black/60 rounded-xl" />
//         </motion.div>

//         {/* Active Image with Mobile Arrows Overlay */}
//         <motion.div
//           key={`active-${activeIndex}`}
//           layout
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="relative aspect-[16/9] w-[48rem] max-w-full rounded-xl overflow-hidden ring-4 ring-[#2AB673] shadow-xl z-10"
//         >
//           <Image
//             src={galleryImages[activeIndex]}
//             alt={`Field Implementation ${activeIndex + 1}`}
//             fill
//             className="object-cover rounded-xl"
//           />

//           {/* Mobile-only Prev Arrow */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 sm:hidden z-20 p-2 rounded-full bg-[#E4FFF1] hover:bg-[#28C878] hover:text-white transition-all duration-300 outline-none"
//           >
//             <MoveLeft size={24} strokeWidth={1.5} />
//           </button>

//           {/* Mobile-only Next Arrow */}
//           <button
//             onClick={handleNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 sm:hidden z-20 p-2 rounded-full bg-[#2AB673] text-white hover:bg-[#24965a] transition-all duration-300 outline-none"
//           >
//             <MoveRight size={24} strokeWidth={1.5} />
//           </button>
//         </motion.div>

//         {/* Next Thumbnail (Desktop Only) */}
//         <motion.div
//           key={`next-${getImageIndex(1)}`}
//           layout
//           initial={{ opacity: 0.5, scale: 0.95 }}
//           animate={{ opacity: 0.8, scale: 1 }}
//           whileHover={{ scale: 1.03, opacity: 1 }}
//           transition={{ duration: 0.3 }}
//           onClick={() => setActiveIndex(getImageIndex(1))}
//           className="hidden sm:block relative cursor-pointer aspect-[16/9] w-[calc(48rem-4rem)] max-w-[calc(100%-4rem)] rounded-xl overflow-hidden shadow-md ring-1 ring-gray-300"
//         >
//           <Image
//             src={galleryImages[getImageIndex(1)]}
//             alt="Next Thumbnail"
//             fill
//             className="object-cover rounded-xl"
//           />
//           <div className="absolute inset-0 bg-black/60 rounded-xl" />
//         </motion.div>

//         {/* Next Button (Desktop Only) */}
//         <button
//           onClick={handleNext}
//           className="hidden sm:flex p-2 rounded-full bg-[#2AB673] text-white hover:bg-[#24965a] transition-all duration-300 outline-none"
//         >
//           <MoveRight size={28} strokeWidth={1.5} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FieldImplementationGallery;


"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";

const crops = ["Soyabean", "Turmeric", "Black Gram"];

const cropImages = {
  Soyabean: [
    "/assets/image/projects/Group 591.svg",
    "/assets/image/projects/Group 595.png",
    "/assets/image/projects/Group 589.svg",
    "/assets/image/projects/Group 590.svg",
    "/assets/image/projects/Group 593.png",
    "/assets/image/projects/Group 592.svg",
    "/assets/image/projects/Group 594.svg",
  ],
  Turmeric: [
    "/assets/image/projects/Group 592.svg",
    "/assets/image/projects/Group 594.svg",
    "/assets/image/projects/Group 589.svg",
    "/assets/image/projects/Group 591.svg",
    "/assets/image/projects/Group 593.png",
    "/assets/image/projects/Group 590.svg",
    "/assets/image/projects/Group 595.png",
  ],
  "Black Gram": [
    "/assets/image/projects/Group 594.svg",
    "/assets/image/projects/Group 591.svg",
    "/assets/image/projects/Group 595.png",
    "/assets/image/projects/Group 589.svg",
    "/assets/image/projects/Group 593.png",
    "/assets/image/projects/Group 590.svg",
    "/assets/image/projects/Group 592.svg",
  ],
};

const FieldImplementationGallery = () => {
  const [activeCropIndex, setActiveCropIndex] = useState(0);
  const cropName = crops[activeCropIndex];
  const images = cropImages[cropName];

  const handlePrev = () => {
    setActiveCropIndex((prev) => (prev === 0 ? crops.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCropIndex((prev) => (prev === crops.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl md:text-2xl font-bold text-center text-[#2AB673] mb-8">
        Field Implementation Gallery
      </h2>

      <div className="flex items-center justify-between mb-6">
        <span className="text-lg md:text-2xl font-bold text-[#000]">
          {cropName}
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-[#E4FFF1] hover:bg-[#28C878] hover:text-white transition"
          >
            <MoveLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-[#2AB673] text-white hover:bg-[#24965a] transition"
          >
            <MoveRight size={24} />
          </button>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-10 gap-4 h-[600px]">
        <div className="col-span-3 grid grid-rows-[2fr_4fr] gap-4">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow">
            <Image src={images[0]} alt="img-0" fill className="object-cover" />
          </div>
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow">
            <Image src={images[1]} alt="img-1" fill className="object-cover" />
          </div>
        </div>

        <div className="col-span-4 grid grid-rows-2 gap-4">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow">
            <Image src={images[2]} alt="img-2" fill className="object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow">
              <Image
                src={images[3]}
                alt="img-3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow">
              <Image
                src={images[4]}
                alt="img-4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 grid grid-rows-[4fr_2fr] gap-4">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow">
            <Image src={images[5]} alt="img-5" fill className="object-cover" />
          </div>
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow">
            <Image src={images[6]} alt="img-6" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="md:hidden grid grid-cols-1 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-video rounded-xl overflow-hidden shadow"
          >
            <Image src={src} alt={`img-${idx}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FieldImplementationGallery;
