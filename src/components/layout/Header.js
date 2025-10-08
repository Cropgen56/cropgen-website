"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Crop Monitoring", path: "/crop-monitoring" },
    { name: "Agri Business", path: "/agri-business" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Projects", dropdown: true },
    { name: "Blog", path: "/blog" },
  ];

  const projectDropdown = [
    { name: "Operation Dronagiri", path: "/projects/operation-dronagiri" },
    { name: "Upcoming...", path: "#" },
  ];

  return (
    <nav className="bg-white shadow-md px-2 py-1 fixed top-0 right-0 left-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/image/home/logo.png"
            width={65}
            height={65}
            alt="CropGen Logo"
            priority={false}
          />
          <span className="text-xl font-bold text-[#075A53]">CropGen</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-3 xl:gap-5">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => setShowProjects(true)}
                onMouseLeave={() => setShowProjects(false)}
              >
                <div className="flex items-center gap-1 font-medium text-[#797979] hover:text-[#075A53] cursor-pointer">
                  {link.name}
                  {/* <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      showProjects ? "rotate-180 text-[#075A53]" : ""
                    }`}
                  /> */}
                </div>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {showProjects && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 mt-3 w-40 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50"
                    >
                      {projectDropdown.map((proj, i) => (
                        <li key={proj.name}>
                          <Link
                            href={proj.path}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#EEFFF9] hover:text-[#075A53] rounded-md"
                          >
                            {proj.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`font-medium ${
                    pathname === link.path
                      ? "text-[#075A53] font-semibold"
                      : "text-[#797979]"
                  } hover:text-[#075A53]`}
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <Link href="https://app.cropgenapp.com/login" target="_blank">
            <button
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                pathname === "/"
                  ? "bg-[#00AA64] text-white border-2 border-[#00AA64] hover:bg-[#EEFFF9] hover:text-[#00AA64]"
                  : "bg-white text-[#075A53] border-2 border-[#075A53] hover:bg-[#075A53] hover:text-white"
              }`}
            >
              Start Demo
            </button>
          </Link>

          <Link href="/contact">
            <button
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                pathname === "/"
                  ? "bg-[#EEFFF9] text-[#00AA64] border-2 border-[#00AA64] hover:bg-[#00AA64] hover:text-white"
                  : "bg-white text-[#075A53] border-2 border-[#075A53] hover:bg-[#075A53] hover:text-white"
              }`}
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="text-[#075A53] text-xl font-bold">CropGen</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col p-5 space-y-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.name}>
                <button
                  onClick={() => setShowProjects(!showProjects)}
                  className="flex justify-between items-center w-full text-left text-[#797979] font-medium"
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      showProjects ? "rotate-180 text-[#075A53]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {showProjects && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-2 space-y-2 overflow-hidden"
                    >
                      {projectDropdown.map((proj) => (
                        <li key={proj.name}>
                          <Link
                            href={proj.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-[#797979] transition-all ease-in-out duration-300 hover:text-[#075A53]"
                          >
                            {proj.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium ${
                    pathname === link.path
                      ? "text-[#075A53] font-semibold"
                      : "text-[#797979]"
                  } hover:text-[#075A53] transition-all ease-in-out duration-300`}
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="mt-4 bg-[#265A48] text-white px-4 py-2 rounded-full transition-all ease-in-out duration-300 hover:bg-[#1E4A3A] w-full">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
