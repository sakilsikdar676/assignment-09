"use client";

import { Envelope } from "@gravity-ui/icons";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { errorToast, successToast } from "../utils-toast/toast";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
export function EditModal({ carId, carData }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const rawData = Object.fromEntries(formData.entries());

    const updatedData = {};
    Object.keys(rawData).forEach((key) => {
      if (rawData[key].trim() !== "") {
        updatedData[key] = rawData[key];
      }
    });

    const res = await fetch(`http://localhost:8000/cars/${carId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const result = await res.json();

    if (result.modifiedCount > 0) {
      successToast("Car updated successfully");
      event.target.reset();
      setIsOpen(false);
      router.refresh();
    } else {
      errorToast("No changes were made");
    }
  };

  return (
    <>
      {/* এডিট বাটন */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-white bg-darkblue-600 hover:bg-[#6bc417] rounded-md transition-colors duration-300 shadow-sm shadow-lime-600 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)] transform active:scale-[0.98]"
      >
        Edit <FaEdit />
      </button>

      {/* মোডাল ওভারলে ও উইন্ডো */}
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-lg p-4 overflow-y-auto">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0D2342] px-5 py-4 backdrop-blur-2xl shadow-2xl text-white">
              {/* ক্লোজ বাটন */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-neutral-400 hover:text-white text-xl"
              >
                ✕
              </button>

              {/* হেডার */}
              <div className="mb-4">
                <div className="bg-white/5 text-white p-2 rounded-lg inline-block">
                  <Envelope className="size-5" />
                </div>

                <h2 className="text-xl font-semibold text-white mt-2">
                  Update Your Car Info
                </h2>

                <p className="mt-1.5 text-sm leading-5 text-neutral-400">
                  Please fill out the form below to update your car information.
                </p>
              </div>

              {/* এখানে তোর পুরো form আগের মতোই থাকবে */}
              <form
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-4 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Car Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Car Name
                    </label>
                    <input
                      type="text"
                      defaultValue={carData?.carName}
                      name="carName"
                      className="w-full bg-[#0D2342] border border-gray-700 focus:border-[#CCFF00] rounded-xl px-4 py-3 text-white outline-none transition-all duration-200 placeholder-gray-500"
                    />
                  </div>

                  {/* Daily Rent Price */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Daily Rent Price ($)
                    </label>
                    <input
                      type="number"
                      defaultValue={carData?.dailyPrice}
                      name="dailyPrice"
                      placeholder="e.g., 99"
                      className="w-full bg-[#0D2342] border border-gray-700 focus:border-[#CCFF00] rounded-xl px-4 py-3 text-white outline-none transition-all duration-200 placeholder-gray-500"
                    />
                  </div>

                  {/* Car Type */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Car Type
                    </label>
                    <select
                      name="carType"
                      defaultValue={carData?.carType || "SUV"}
                      className="w-full bg-[#0D2342] border border-gray-700 focus:border-[#CCFF00] rounded-xl px-4 py-3 text-white outline-none transition-all duration-200"
                    >
                      <option value="SUV" className="bg-[#0A192F]">
                        SUV
                      </option>
                      <option value="Sedan" className="bg-[#0A192F]">
                        Sedan
                      </option>
                      <option value="Hatchback" className="bg-[#0A192F]">
                        Hatchback
                      </option>
                      <option value="Luxury" className="bg-[#0A192F]">
                        Luxury
                      </option>
                      <option value="Crossover" className="bg-[#0A192F]">
                        Crossover
                      </option>
                      <option value="Sports" className="bg-[#0A192F]">
                        Sports
                      </option>
                      <option value="Van" className="bg-[#0A192F]">
                        Van
                      </option>
                      <option value="Convertible" className="bg-[#0A192F]">
                        Convertible
                      </option>
                      <option value="Hybrid" className="bg-[#0A192F]">
                        Hybrid
                      </option>
                      <option value="Truck" className="bg-[#0A192F]">
                        Truck
                      </option>
                    </select>
                  </div>

                  {/* Pickup Location */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      defaultValue={carData?.pickupLocation}
                      name="pickupLocation"
                      placeholder="e.g., Dhaka, Bangladesh"
                      className="w-full bg-[#0D2342] border border-gray-700 focus:border-[#CCFF00] rounded-xl px-4 py-3 text-white outline-none transition-all duration-200 placeholder-gray-500"
                    />
                  </div>

                  {/* Image URL */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Image URL (imgbb/postimage)
                    </label>
                    <input
                      type="url"
                      defaultValue={carData?.imageUrl}
                      name="imageUrl"
                      placeholder="https://i.ibb.co/your-image-id.jpg"
                      className="w-full bg-[#0D2342] border border-gray-700 focus:border-[#CCFF00] rounded-xl px-4 py-3 text-white outline-none transition-all duration-200 placeholder-gray-500"
                    />
                  </div>

                  {/* Availability Status */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Availability Status
                    </label>
                    <select
                      name="availabilityStatus"
                      defaultValue={carData?.availabilityStatus || "Available"}
                      className="w-full bg-[#0D2342] border border-gray-700 focus:border-[#CCFF00] rounded-xl px-4 py-3 text-white outline-none transition-all duration-200"
                    >
                      <option value="Available" className="bg-[#0A192F]">
                        Available
                      </option>
                      <option value="Unavailable" className="bg-[#0A192F]">
                        Unavailable
                      </option>
                    </select>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      defaultValue={carData?.description}
                      rows="3"
                      placeholder="Write something about the car's condition, features, etc..."
                      className="w-full bg-[#0D2342] border border-gray-700 focus:border-[#CCFF00] rounded-xl px-4 py-3 text-white outline-none transition-all duration-200 placeholder-gray-500 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-lightLime text-darkBlue font-bold py-3.5 px-6 rounded-xl shadow-lg hover:bg-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    Confirm Edit
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
