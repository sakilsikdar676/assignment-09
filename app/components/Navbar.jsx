"use client";

import Link from "next/link";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function PremiumNavbar() {
  // Demo Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 mx-auto max-w-7xl px-4 py-4 md:px-8">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>

          <NavLink href="/explore-cars">Explore Cars</NavLink>

          <NavLink href="/add-car">Add Car</NavLink>

          <NavLink href="/bookings">My Bookings</NavLink>
          <NavLink href="/my-added-cars">My Added Cars</NavLink>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="text-white transition hover:text-lime-400"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-lime-400 px-5 py-2.5 font-semibold text-black shadow-lg shadow-lime-400/30 transition hover:scale-105"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              {/* Profile Button */}
              <div className="flex items-center gap-3 rounded-2xl  shadow-lg shadow-lime-400/30 px-3 py-2 text-white  transition ">
                <img
                  src={`https://cdn.pixabay.com/photo/2024/08/19/10/15/ai-generated-8980377_1280.jpg`}
                  alt="profile"
                  className="rounded-full  border-2 border-lime-400/50 h-15 w-15"
                />

                <div className="text-left">
                  <p className="text-sm font-semibold">Masrul Islam</p>

                  <p className="text-xs text-gray-400">Premium Member</p>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="flex  items-center  rounded-2xl px-4 py-3 text-red-400 bg-red-500/10 transition hover:bg-red-500/20"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          {!isLoggedIn ? (
            <div className="hidden">
              <img
                src={`https://cdn.pixabay.com/photo/2024/08/19/10/15/ai-generated-8980377_1280.jpg`}
                alt="profile"
                className="rounded-full  border-2 border-lime-400/50 h-15 w-15"
              />
            </div>
          ) : (
            <div className=" lg:hidden">
              <img
                src={`https://cdn.pixabay.com/photo/2024/08/19/10/15/ai-generated-8980377_1280.jpg`}
                alt="profile"
                className="rounded-full  border-2 border-lime-400/50 h-15 w-15"
              />
            </div>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mt-4 rounded-3xl border border-white/10 bg-[#07111f]/95 p-5 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-3">
            <MobileNav href="/">Home</MobileNav>

            <MobileNav href="/explore-cars">Explore Cars</MobileNav>

            <MobileNav href="/add-car">Add Car</MobileNav>

            <MobileNav href="/bookings">My Bookings</MobileNav>

            {!isLoggedIn ? (
              <>
                <MobileNav href="/login">Login</MobileNav>

                <Link
                  href="/register"
                  className="rounded-2xl bg-lime-400 px-4 py-3 text-center font-semibold text-black"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <MobileNav href="/my-cars">My Added Cars</MobileNav>

                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="rounded-2xl bg-red-500/10 px-4 py-3 text-left text-red-400"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ========================= */
/* Nav Link */
/* ========================= */

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative text-sm font-medium text-gray-200 transition"
    >
      <span className="transition group-hover:text-lime-400">{children}</span>

      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

/* ========================= */
/* Mobile Nav */
/* ========================= */

function MobileNav({ href, children }) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:bg-white/10"
    >
      {children}
    </Link>
  );
}



