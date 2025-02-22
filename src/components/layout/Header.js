"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Crop Monitoring", path: "/crop-monitoring" },
    { name: "Agri Business", path: "/agri-business" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className="bg-white shadow-md px-6 py-3 fixed top-0 right-0 left-0 z-40"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* ✅ Logo with SEO-Friendly h1 */}
        <h1 className="text-[#075A53] text-xl font-semibold flex items-center gap-2 cursor-pointer">
          <Link href="/" aria-label="CropGen Home">
            <Image
              src="/assets/image/logo.png"
              width={50}
              height={50}
              alt="CropGen Logo"
              priority={false} // Lazy load
            />
          </Link>
          <Link href="/">CropGen</Link>
        </h1>

        {/* ✅ Desktop Menu with <ul> for better SEO */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`font-medium ${
                  pathname === link.path
                    ? "text-[#075A53] font-semibold"
                    : "text-[#797979]"
                } hover:text-[#075A53] transition`}
                aria-current={pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Contact Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="px-4 py-2 font-semibold rounded-full bg-[#075A53] text-white transition">
              Contact us
            </button>
          </Link>
        </div>

        {/* ✅ Hamburger Menu - Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* ✅ Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform z-50`}
        aria-hidden={!isOpen}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="text-[#075A53] text-xl font-bold">CropGen</span>
          <button
            className="text-gray-700"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* ✅ Sidebar Links with <ul> for SEO */}
        <ul className="flex flex-col p-5 space-y-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`font-medium ${
                  pathname === link.path
                    ? "text-[#075A53] font-semibold"
                    : "text-[#797979]"
                } hover:text-[#075A53] transition`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* ✅ Contact Button - Mobile */}
          <li>
            <Link href="/contact">
              <button className="mt-4 bg-[#265A48] text-white px-4 py-2 rounded-full hover:bg-[#1E4A3A] transition">
                Contact us
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
