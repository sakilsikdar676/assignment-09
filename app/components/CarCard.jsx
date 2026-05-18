import { FaGasPump, FaCarSide } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import { FaUserGroup } from "react-icons/fa6";

export default function CarCard({ car }) {
  const typeStyles = {
    Sedan: "bg-blue-50 text-blue-600 border-blue-100",
    SUV: "bg-green-50 text-green-600 border-green-100",
    Electric: "bg-emerald-50 text-emerald-600 border-emerald-100",
    Truck: "bg-purple-50 text-purple-600 border-purple-100",
    Sports: "bg-rose-50 text-rose-600 border-rose-100",
    Luxury: "bg-indigo-50 text-indigo-600 border-indigo-100",
    Hybrid: "bg-teal-50 text-teal-600 border-teal-100",
    Convertible: "bg-cyan-50 text-cyan-600 border-cyan-100",
    Van: "bg-orange-50 text-orange-600 border-orange-100",
    Hatchback: "bg-pink-50 text-pink-600 border-pink-100",
  };

  const currentStyle =
    typeStyles[car.carType] || "bg-amber-50 text-amber-600 border-amber-100";
  return (
    <div className=" rounded-3xl border border-white/10 bg-white/10 font-sans py-2 px-2">
      {/* Car Image Container */}
      <div className="w-full h-[300px] flex justify-center items-center bg-gradient-to-b  to-transparent rounded-2xl overflow-hidden mb-4">
        <img
          src={car.imageUrl} // তোমার ইমেজের সোর্স বা পাথ এখানে দিও
          alt="Toyota RAV4"
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Title & Rating */}
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="text-xl font-bold text-white">{car.carName}</h3>
          <p className="text-sm text-white mt-0.5">{car.carModel}</p>
        </div>

        <div
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border ${currentStyle}`}
        >
          {car.carType}
        </div>
      </div>

      {/* Specifications Grid */}
      <div className="grid grid-cols-3 gap-2 my-5 text-whaite text-sm font-medium">
        {/* Seats */}
        <div
          className="flex items-center gap-2  px-3 py-2 rounded-xl
        backdrop-blur-2xl shadow-sm shadow-lime-300"
        >
          <FaUserGroup className="text-whaite text-lg" />
          <span>{car.seatCapacity} Seats</span>
        </div>

        {/* Type */}
        <div
          className="flex justify-center items-center gap-2  px-3 py-2 rounded-xl
        backdrop-blur-2xl shadow-sm shadow-lime-300"
        >
          <span
            className={`${car.availabilityStatus === "Available" ? "text-green-500" : "text-red-500"}`}
          >
            {car.availabilityStatus}
          </span>
        </div>
      </div>

      {/* Footer: Price & Button */}
      <div className="flex justify-between items-center pt-2 border-t border-gray-50">
        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-whaite">
            ${car.dailyPrice}
          </span>
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
