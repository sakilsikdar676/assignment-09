"use client";

import { authClient } from "@/src/lib/auth-client";
import { useState } from "react";
import { successToast } from "../utils-toast/toast";

export default function BookingModal({ carId, carData }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    carType,
    carName,
    dailyPrice,
    imageUrl,
    description,
    seatCapacity,
    pickupLocation,
  } = carData;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [driverNeeded, setDriverNeeded] = useState("No");
  const [specialNote, setSpecialNote] = useState("");

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      driverNeeded: driverNeeded,
      specialNote: specialNote,
      carId: carId,
      userId: user.id,
      carType: carType,
      carName: carName,
      dailyPrice: dailyPrice,
      imageUrl: imageUrl,
      description: description,
      seatCapacity: seatCapacity,
      pickupLocation: pickupLocation,
      driverNeeded: driverNeeded,
      specialNote: specialNote,
    };

    setIsModalOpen(false);
    setSpecialNote("");
    setDriverNeeded("No");

    const res = await fetch(`http://localhost:8000/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const result = await res.json();
    console.log(result);

    if (result.insertedId) {
      successToast("Car Booking successfully");
    }
  };

  return (
    <div className="flex justify-center items-center py-4">
      {/* ১. প্রধান বুক নাও বাটন (যেটাতে ক্লিক করলে মোডাল ওপেন হবে) */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3.5 text-sm font-semibold text-white bg-darkblue-600 hover:bg-[#6bc417] rounded-md transition-colors duration-300 shadow-sm shadow-lime-600 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)] transform active:scale-[0.98]"
      >
        ⚡ Book Now
      </button>

      {/* ২. মোডাল পপআপ সেকশন */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          {/* মোডালের ভেতরের মূল কার্ড */}
          <div className="w-full max-w-md bg-[#0d1520]/95 border border-gray-800 rounded-3xl p-6 shadow-[0_0_50px_rgba(163,230,53,0.15)] relative animate-in zoom-in-95 duration-200">
            {/* ক্লোজ বাটন (X) */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-lime-400 text-xl transition-colors"
            >
              ✕
            </button>

            {/* মোডাল হেডার */}
            <div className="mb-5">
              <h3 className="text-xl font-bold text-gray-200 tracking-wide">
                Confirm Your Booking
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Provide necessary info below to complete the process.
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-lime-500/30 to-transparent mt-4" />
            </div>

            {/* বুকিং ফরম */}
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              {/* Driver Needed (Lime Toggle) */}
              <div>
                <label className="block text-xs font-semibold text-lime-400 uppercase tracking-wider mb-2">
                  Driver Needed?
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-950/60 border border-gray-800 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setDriverNeeded("Yes")}
                    className={`py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      driverNeeded === "Yes"
                        ? "bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/40 text-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.1)]"
                        : "text-gray-400 hover:text-gray-200 border border-transparent"
                    }`}
                  >
                    👨‍✈️ Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setDriverNeeded("No")}
                    className={`py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      driverNeeded === "No"
                        ? "bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/40 text-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.1)]"
                        : "text-gray-400 hover:text-gray-200 border border-transparent"
                    }`}
                  >
                    🚗 No
                  </button>
                </div>
              </div>

              {/* Special Note */}
              <div>
                <label className="block text-xs font-semibold text-lime-400 uppercase tracking-wider mb-2">
                  Special Note
                </label>
                <textarea
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  rows="4"
                  placeholder="Any specific requests? (e.g., child seat, pickup location details...)"
                  className="w-full px-4 py-3 bg-gray-950/50 border border-gray-800 rounded-xl text-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:border-lime-500/60 focus:ring-1 focus:ring-lime-500/30 transition-all尊 resize-none shadow-inner"
                />
              </div>

              {/* প্রাইস সামারি */}
              <div className="p-3 bg-gray-950/30 border border-gray-800/60 rounded-xl text-xs text-gray-400 space-y-1">
                <div className="flex justify-between">
                  <span>Vehicle Rate:</span>
                  <span className="text-gray-200 font-medium">$45.00/day</span>
                </div>
                <div className="flex justify-between">
                  <span>Driver Allowance:</span>
                  <span className="text-gray-200 font-medium">
                    {driverNeeded === "Yes" ? "+$15.00/day" : "$0.00"}
                  </span>
                </div>
              </div>

              {/* ফাইনাল কনফার্ম বাটন */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/3 py-3 text-sm font-medium text-gray-400 bg-gray-950 border border-gray-800 rounded-xl hover:text-gray-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-lime-400 to-green-400 rounded-xl hover:from-lime-300 hover:to-green-300 transition-all duration-300 shadow-[0_0_15px_rgba(163,230,53,0.3)]"
                >
                  Confirm Ride
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
