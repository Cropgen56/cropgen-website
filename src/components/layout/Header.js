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
        <nav className="bg-white shadow-md px-4 py-3 fixed top-0 right-0 left-0 z-40">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-[#075A53] text-lg sm:text-xl font-semibold flex items-center gap-2 cursor-pointer">
                    <Link href="/" aria-label="CropGen Home">
                        <Image
                        src="/assets/image/home/logo.png"
                        width={45}
                        height={45}
                        alt="CropGen Logo"
                        priority={false} 
                        />
                    </Link>
                    <Link href="/">CropGen</Link>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex  space-x-4 lg:space-x-5">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                        <Link
                            href={link.path}
                            className={`font-medium ${
                            pathname === link.path
                                ? "text-[#075A53] font-semibold"
                                : "text-[#797979]"
                            } hover:text-[#075A53] transition-all ease-in-out duration-400`}
                            aria-current={pathname === link.path ? "page" : undefined}
                        >
                            {link.name}
                        </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex  gap-3">
                    <Link
                        href="https://app.cropgenapp.com/login"
                        target="_blank" >
                        <button className={`px-3 lg:px-4 py-2 font-semibold rounded-full transition-all duration-300 ${
                                pathname === "/"
                                ? "bg-[#075A53] text-white hover:bg-[#054a44]"
                                : "bg-white text-[#075A53] border-2 border-[#075A53] hover:bg-[#075A53] hover:text-white"
                            }`}
                        >
                        Get Started
                        </button>
                    </Link>

                    <Link href="/contact">
                        <button className={`px-3 lg:px-4 py-2 font-semibold rounded-full transition-all duration-300 ${
                                pathname === "/"
                                ? "bg-[#075A53] text-white hover:bg-[#054a44]"
                                : "bg-white text-[#075A53] border-2 border-[#075A53] hover:bg-[#075A53] hover:text-white"
                            }`}
                        >
                        Contact Us
                        </button>
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <button
                className="lg:hidden text-gray-700"
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
                >
                <Menu size={28} />
                </button>
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-all ease-in-out duration-400 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setIsOpen(false)}> </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform ease-in-out duration-400 z-50`}
                aria-hidden={!isOpen} >
                <div className="flex items-center justify-between px-5 py-4 border-b">
                    <span className="text-[#075A53] text-xl font-bold">CropGen</span>
                    <button
                        className="text-gray-700"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close Menu" >
                        <X size={24} />
                    </button>
                </div>

                <ul className="flex flex-col p-5 space-y-4">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className={`font-medium ${
                                pathname === link.path
                                    ? "text-[#075A53] font-semibold"
                                    : "text-[#797979]"
                                } hover:text-[#075A53] transition-all ease-in-out duration-400`}
                                onClick={() => setIsOpen(false)}
                                aria-current={pathname === link.path ? "page" : undefined}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <button className="mt-4 bg-[#265A48] text-white px-4 py-2 rounded-full hover:bg-[#1E4A3A] transition-all ease-in-out duration-400 w-full">
                                Contact us
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
