"use client";
import Image from "next/image";
import {
  ArrowDownToLine,
  EllipsisVertical,
  X,
  History as HistoryIcon,
  CircleChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function WelcomeScreen({ onClose, onContinue }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-[300px] h-[450px] sm:w-[400px] sm:h-[500px] rounded-2xl shadow-[0_0_30px_0_rgba(42,182,115,0.6)] bg-white overflow-hidden">
      <div
        className="bg-cover bg-center bg-no-repeat h-[280px] relative"
        style={{
          backgroundImage: "url('/assets/image/comman/welcome-banner.svg')",
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 relative z-20">
          <div className="flex items-center gap-2">
            <EllipsisVertical
              size={18}
              color="#fff"
              className="cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <span className="flex items-center gap-1">
              <Image
                src="/assets/image/comman/chatbot-logo.svg"
                alt="cropgen logo"
                width={30}
                priority
                height={30}
              />
              <span className="text-white text-[1rem] font-semibold">
                CropGen
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <X
              size={16}
              className="text-white cursor-pointer"
              onClick={onClose}
            />
          </div>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-12 left-4 bg-white shadow-lg rounded-lg p-2 w-28 z-30">
            <button className="flex items-center gap-2 w-full text-sm font-medium p-1 hover:bg-gray-100 transition-all ease-in-out duration-300 rounded">
              <HistoryIcon className="text-black" size={16} /> History
            </button>
            <button className="flex items-center gap-2 w-full text-sm font-medium p-1 hover:bg-gray-100 transition-all ease-in-out duration-300 rounded">
              <ArrowDownToLine size={16} /> Download
            </button>
          </div>
        )}

        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 text-white font-semibold pointer-events-none">
          <p className="flex items-center gap-1 text-sm md:text-lg font-bold pointer-events-none">
            <Image
              src="/assets/image/comman/leaf.png"
              alt="Leaf"
              width={18}
              height={18}
              priority
            />
            <span>Hi! Welcome to CropGen</span>
          </p>
          <p className="text-sm md:text-lg font-bold pointer-events-none">
            your AI + satellite farming guide.
          </p>
        </div>
      </div>

      {/* Ask Question card */}
      <div
        className="absolute bottom-[7.5rem] md:bottom-[11.5rem] left-1/2 transform -translate-x-1/2 w-[85%] bg-white p-3 rounded-xl shadow-lg cursor-pointer flex justify-between items-center z-30"
        onClick={onContinue}
      >
        <div>
          <p className="font-bold text-base text-[#2AB673] mb-1">
            {" "}
            Ask Question{" "}
          </p>
          <p className="text-[11px] text-[#9A9898]">
            {" "}
            Monitor crops, get accurate farm insights, and boost yields.{" "}
          </p>
        </div>
        <span className="text-xl">
          {" "}
          <CircleChevronRight color="#2AB673" size={24} />{" "}
        </span>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 w-full flex justify-around py-4">
        <button
          className="flex flex-col items-center cursor-pointer"
          onClick={onContinue}
        >
          <Image
            src="/assets/image/comman/chatbot-home.svg"
            alt="chatbot home"
            width={24}
            height={24}
            priority
          />
          <p className="text-sm font-bold text-[#2AB673]">Home</p>
        </button>
        <button
          className="flex flex-col items-center cursor-pointer group"
          onClick={onContinue}
        >
          {/* Gray icon default */}
          <Image
            src="/assets/image/comman/chatbot-msg-gray.svg"
            alt="chatbot msg gray"
            width={24}
            height={24}
            priority
            className="block group-hover:hidden transition-all duration-500 ease-in-out"
          />

          {/* Green icon on hover */}
          <Image
            src="/assets/image/comman/chatbot-msg-green.svg"
            alt="chatbot msg green"
            width={24}
            height={24}
            priority
            className="hidden group-hover:block transition-all duration-500 ease-in-out"
          />
          <p className="text-sm font-bold text-[#9A9898] group-hover:text-[#2AB673] transition-all duration-500 ease-in-out">
            Messages
          </p>
        </button>
      </div>
    </div>
  );
}
