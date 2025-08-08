"use client";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1F4D3A] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* First Row: Left Content & Right Icons */}
        <div className="flex flex-col md:flex-row pb-2 md:pb-6">
          {/* Left Section: Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full md:w-auto">
            {/* Column 1: Address */}
            <div>
              <h3 className="text-md md:text-xl font-semibold">CropGen</h3>
              <ul className="mt-2 space-y-1">
                <p className="mt-2 text-sm md:text-md text-gray-300">
                  Pune, Maharashtra, 411018, India
                </p>
                <p className="text-sm md:text-md text-gray-300">info@cropgenapp.com</p>
                <p className="text-sm md:text-md text-gray-300">+91 9656959670</p>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h3 className="text-md md:text-xl font-semibold">Resources</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a
                    href="/crop-monitoring"
                    className="text-gray-300 text-sm md:text-md hover:text-white"
                  >
                    Crop Monitoring
                  </a>
                </li>
                <li>
                  <a
                    href="/agri-business"
                    className="text-gray-300 text-sm md:text-md hover:text-white"
                  >
                    Agri Business
                  </a>
                </li>
                <li>
                  <a
                    href="/sustainability"
                    className="text-gray-300 text-sm md:text-md hover:text-white"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-300 text-sm md:text-md hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-md md:text-xl font-semibold">Company</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="/about" className="text-gray-300 text-sm md:text-md hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 text-sm md:text-md hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="https://www.cropgenapp.com/sitemap-0.xml" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm md:text-md hover:text-white">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Social Icons - Responsive */}
          <div className="w-full md:w-1/3 flex justify-between items-center mt-6 md:mt-0">
            <a
              href="https://www.facebook.com/people/CropGen/61554177574869/"
              target="_blank"
              className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_white] transition-all duration-300 ease-in-out"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/cropgen"
              target="_blank"
              className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_white] transition-all duration-300 ease-in-out"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://x.com/cropgen"
              target="_blank"
              className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_white] transition-all duration-300 ease-in-out"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/cropgen/posts/?feedView=all&viewAsMember=true"
              target="_blank"
              className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_white] transition-all duration-300 ease-in-out"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCuU7d-rByYZfMkfoj0Pgq0w"
              target="_blank"
              className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_white] transition-all duration-300 ease-in-out"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Second Row: Copyright & Policies - Responsive */}
        <div className="mt-6 text-gray-300 text-sm flex flex-col sm:w-2/3 md:flex-row md:justify-between">
          <p className="text-center md:text-left">
            © Copyright CropGen. All Rights Reserved
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2 md:mt-0">
            <a href="/terms-conditions" className="hover:text-white">
              Terms of Service
            </a>
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
