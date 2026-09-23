"use client";

import Image from "next/image";
import {ArrowUpRight, Sparkles} from "lucide-react";
import {motion} from "framer-motion";

const CollaborationBanner = () => {
  return (
    <section className="relative flex flex-col gap-4 bg-white px-4 py-10 sm:px-6 md:px-12 md:py-16 lg:px-20">
      <motion.div
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.2}}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mb-2 text-center"
      >
        <motion.div
          initial={{opacity: 0, y: 15}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="relative z-10 mb-4 flex items-center justify-center gap-3"
        >
          <motion.span
            initial={{width: 0, opacity: 0}}
            whileInView={{width: 48, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.2}}
            className="h-px bg-green-600/30"
          />

          <div className="flex items-center gap-2">
            <motion.span
              initial={{scale: 0}}
              whileInView={{scale: 1}}
              viewport={{once: true}}
              transition={{
                duration: 0.4,
                delay: 0.25,
                type: "spring",
                stiffness: 200,
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white"
            >
              <Sparkles size={12} strokeWidth={2.5} />
            </motion.span>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-green-600 sm:text-xs">
              New Collaboration
            </span>
          </div>

          <motion.span
            initial={{width: 0, opacity: 0}}
            whileInView={{width: 48, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.2}}
            className="h-px bg-green-600/30"
          />
        </motion.div>

        <div className="relative mx-auto flex min-h-[90px] items-center justify-center sm:min-h-[100px] md:min-h-[120px]">
          <motion.div
            initial={{opacity: 0, scale: 0.92}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true, amount: 0.2}}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[48px] font-bold leading-none tracking-[-0.04em] text-green-50 sm:text-[65px] md:text-[90px] lg:text-[105px]"
          >
            COLLABORATION
          </motion.div>

          <motion.h2
            initial={{opacity: 0, y: 25}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            <span className="text-green-600">CropGen</span>

            <span className="mx-2 font-normal text-[#c99632] sm:mx-3">
              ×
            </span>

            <span>AAT CropGen SA</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{opacity: 0, scaleX: 0}}
          whileInView={{opacity: 1, scaleX: 1}}
          viewport={{once: true}}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto mt-2 flex items-center justify-center gap-1.5"
        >
          <span className="h-1 w-1 rounded-full bg-[#c99632]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#c99632]" />
          <span className="h-1 w-1 rounded-full bg-[#c99632]" />
        </motion.div>

        <motion.p
          initial={{opacity: 0, y: 15}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.2}}
          transition={{
            duration: 0.6,
            delay: 0.35,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 md:text-lg"
        >
          A new partnership bringing intelligent, sustainable and profitable
          agricultural solutions closer to farmers.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 70}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.15}}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto w-full max-w-7xl"
      >
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="pointer-events-none absolute -inset-2 rounded-2xl bg-green-600/5 blur-xl"
        />

        <motion.div
          whileHover={{
            y: -3,
            transition: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
          className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm md:rounded-xl"
        >
          <motion.div
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex items-center justify-between bg-[#123b25] px-4 py-2.5 sm:px-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c8e84a]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white sm:text-[10px] md:text-xs">
                CropGen Partnership
              </span>
            </div>

            <div className="hidden items-center gap-2 text-[10px] text-white/70 sm:flex">
              <span>Agricultural Intelligence</span>

              <ArrowUpRight size={13} strokeWidth={1.8} />
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, scale: 1.015}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true, amount: 0.1}}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full bg-white"
          >
            <Image
              src="/images/cropgen-collaboration.png"
              alt="CropGen and AAT CropGen SA collaboration"
              width={1920}
              height={768}
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="block h-auto w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 15}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{
              duration: 0.5,
              delay: 0.45,
              ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center gap-2 bg-[#f4f8ef] px-4 py-3 text-center sm:flex-row sm:gap-4 sm:px-6 sm:py-4"
          >
            <span className="text-xs font-semibold text-gray-900 sm:text-sm">
              Growing smarter.
            </span>

            <span className="hidden h-4 w-px bg-gray-300 sm:block" />

            <span className="text-xs text-gray-600 sm:text-sm">
              Together, we are shaping the future of agriculture.
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{
          duration: 0.6,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="mt-4 flex items-center justify-center gap-3 md:mt-6"
      >
        <span className="h-px w-8 bg-green-600/25 sm:w-12 md:w-16" />

        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-500 sm:text-[10px] md:text-xs">
          Smarter Agriculture • Stronger Collaboration
        </p>

        <span className="h-px w-8 bg-green-600/25 sm:w-12 md:w-16" />
      </motion.div>
    </section>
  );
};

export default CollaborationBanner;