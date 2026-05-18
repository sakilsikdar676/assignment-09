import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaGasPump, FaCarSide } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { HiFire } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";

export default function CarCard({ car }) {
  return (
    <div className=" rounded-3xl border border-white/10 bg-white/10 font-sans py-2 px-2">
      {/* Top Badge & Wishlist Button */}
      <div className="flex justify-start items-center mb-3">
        {/* Popular Badge */}
        <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full text-xs font-semibold border border-amber-100">
          <HiFire className="text-amber-500 text-sm" />
          {car.carType}
        </div>
      </div>

      {/* Car Image Container */}
      <div className="w-full h-[300px] flex justify-center items-center bg-gradient-to-b  to-transparent rounded-2xl overflow-hidden mb-4">
        <img
          src={car.imageUrl} // তোমার ইমেজের সোর্স বা পাথ এখানে দিও
          alt="Toyota RAV4"
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"

        />
      </div>

      {/* Title & Rating */}
      <div className="flex justify-start items-start mb-1">
        <div>
          <h3 className="text-xl font-bold text-white">Toyota RAV4</h3>
          <p className="text-sm text-white mt-0.5">
            SUV • Automatic • Petrol
          </p>
        </div>

        {/* Rating */}
        
      </div>

      {/* Specifications Grid */}
      <div className="grid grid-cols-3 gap-2 my-5 text-whaite text-sm font-medium">
        {/* Seats */}
        <div className="flex items-center gap-2  px-3 py-2 rounded-xl
        backdrop-blur-2xl shadow-sm shadow-lime-300">
          <FaUserGroup className="text-whaite text-lg" />
          <span>5 Seats</span>
        </div>

        {/* Engine capacity */}
        <div className="flex items-center gap-2  px-3 py-2 rounded-xl
        backdrop-blur-2xl shadow-sm shadow-lime-300">
          <FaGasPump className="text-gray-400 text-base" />
          <span>2.5L</span>
        </div>

        {/* Type */}
        <div className="flex items-center gap-2  px-3 py-2 rounded-xl
        backdrop-blur-2xl shadow-sm shadow-lime-300">
          <FaCarSide className="text-gray-400 text-base" />
          <span>SUV</span>
        </div>
      </div>

      {/* Footer: Price & Button */}
      <div className="flex justify-between items-center pt-2 border-t border-gray-50">
        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-whaite">$5,500</span>
          <span className="text-gray-400 text-sm font-normal">/ day</span>
        </div>

        {/* View Details Button */}
        <button className="flex items-center gap-2 rounded-xl bg-lime-400 px-3 py-2.5 font-semibold text-black shadow-lg shadow-lime-400/30 transition hover:scale-105">
          View Details
          <FiArrowRight className="text-base" />
        </button>
      </div>
    </div>
  );
}
