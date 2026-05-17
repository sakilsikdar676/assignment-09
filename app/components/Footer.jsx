import Link from "next/link";
import { BsLayers, BsTwitter } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="w-full text-gray-400 bg-transparent pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section: Links & About */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 text-center lg:text-left">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-center lg:items-start space-y-5">
            <div className="flex items-center gap-3 text-white">
              {/* Demo Logo Wrapper */}
              <Link href="/" className="flex items-center gap-3">
                {/* Logo Box */}
                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl  shadow-lg shadow-lime-400/30">
                  <img src="/logo.png" size={30} />
                </div>

                {/* Brand */}
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-white">
                    Drive<span className="text-lime-400">Fleet</span>
                  </h1>

                  <p className="text-xs tracking-[3px] text-gray-400 uppercase">
                    Premium Rentals
                  </p>
                </div>
              </Link>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              adipiscing cursus commodo tempus id. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="p-2 rounded-full border border-gray-800 hover:border-[#88EF21] hover:text-[#88EF21] transition"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-gray-800 hover:border-[#88EF21] hover:text-[#88EF21] transition"
              >
                <BsTwitter size={25} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-gray-800 hover:border-[#88EF21] hover:text-[#88EF21] transition"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-semibold tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Investment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Recent News
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-semibold tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Payment Methods
                </a>
              </li>
            </ul>
          </div>

          {/* Investments Links */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-4">
            <h4 className="text-white font-semibold tracking-wide">
              Investments
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Incubation of small business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Investment on real estate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Funding Projects / Startups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Investment from outer entity
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Contact Info & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col lg:flex-row gap-8 justify-between items-center lg:items-center text-center lg:text-left">
          {/* Copyright & Privacy */}
          <div className="space-y-2 order-2 lg:order-1 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 text-sm">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-white transition">
                Terms & Condition
              </a>
            </div>
            <p className="text-xs text-gray-600">
              Copyright © 2026. All rights reserved.
            </p>
          </div>

          {/* Contact Cards Row */}
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center order-1 lg:order-2 items-center sm:items-start">
            {/* Phone Info */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left min-w-[160px]">
              <div className="p-3 bg-[#e0a96d]/10 text-[#e0a96d] border border-[#e0a96d]/20 rounded-xl">
                <FaPhone size={20} />
              </div>
              <div className="text-xs">
                <span className="block text-gray-500 font-medium">
                  Call us :
                </span>
                <span className="text-white font-semibold text-sm">
                  9876543210
                </span>
              </div>
            </div>

            {/* Location Info */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left min-w-[160px]">
              <div className="p-3 bg-[#e0a96d]/10 text-[#e0a96d] border border-[#e0a96d]/20 rounded-xl">
                <CiLocationOn size={20} />
              </div>
              <div className="text-xs">
                <span className="block text-gray-500 font-medium">
                  Located at :
                </span>
                <span className="text-white font-semibold text-sm">
                  Kathmandu, Nepal
                </span>
              </div>
            </div>

            {/* Email Info */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left min-w-[160px]">
              <div className="p-3 bg-[#e0a96d]/10 text-[#e0a96d] border border-[#e0a96d]/20 rounded-xl">
                <GoMail size={20} />
              </div>
              <div className="text-xs">
                <span className="block text-gray-500 font-medium">
                  Email Address :
                </span>
                <span className="text-white font-semibold text-sm">
                  Company@example.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
