"use client";

import { authClient } from "@/src/lib/auth-client";
import { errorToast, successToast } from "../utils-toast/toast";

const AddCar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const carData = {
      ...data,

      userId: user?.id,
      userEmail: user?.email,
      userName: user?.name,
      userImage: user?.image,
    };
    console.log(carData);

    const res = await fetch(`http://localhost:8000/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });
    const result = await res.json();

    if (result.insertedId) {
      successToast("car added successfully");

      event.target.reset();
    } else if (!result.insertedId) {
      errorToast("something went wrong");
    }
  };

  return (
    <div className="relative min-h-screen w-full  text-white flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* বল ১ - Light Lime Gradient */}
        <div className="absolute top-[10%] left-[10%] w-48 h-48 rounded-full bg-gradient-to-tr from-[#CCFF00] to-[#0A192F] opacity-30 blur-sm animate-float-slow"></div>
        {/* বল ২ */}
        <div className="absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full bg-gradient-to-bl from-[#0A192F] via-[#CCFF00] to-[#0A192F] opacity-25 blur-md animate-float-medium"></div>
        {/* বল ৩ */}
        <div className="absolute top-[60%] left-[50%] w-36 h-36 rounded-full bg-gradient-to-br from-[#CCFF00] to-transparent opacity-20 blur-sm animate-float-fast"></div>
        {/* বল ৪ */}
        <div className="absolute bottom-[10%] left-[5%] w-56 h-56 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#CCFF00] opacity-15 blur-lg animate-float-slow"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-wide text-white">
            Add New <span className="text-[#CCFF00]">Car Listing</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Fill up the details to list your car for rent
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Car Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Car Name
              </label>
              <input
                type="text"
                name="carName"
                required
                placeholder="enter car name"
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
                name="dailyPrice"
                required
                placeholder="e.g., 99"
                className="w-full bg-[#0D2342] border border-gray-700 focus:border-[#CCFF00] rounded-xl px-4 py-3 text-white outline-none transition-all duration-200 placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Car Model
              </label>
              <input
                type="text"
                name="carModel"
                required
                placeholder="enter car model"
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
                <option value="Crossover" className="bg-[#0A192F]">
                  Sports
                </option>
                <option value="Crossover" className="bg-[#0A192F]">
                  Van
                </option>
                <option value="Crossover" className="bg-[#0A192F]">
                  Convertible
                </option>
                <option value="Crossover" className="bg-[#0A192F]">
                  Hybrid
                </option>
                <option value="Crossover" className="bg-[#0A192F]">
                  Truck
                </option>
              </select>
            </div>

            {/* Seat Capacity */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Seat Capacity
              </label>
              <input
                type="number"
                name="seatCapacity"
                required
                placeholder="e.g., 5"
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
                name="imageUrl"
                required
                placeholder="https://i.ibb.co/your-image-id.jpg"
                className="w-full bg-[#0D2342] border border-gray-700 focus:border-[#CCFF00] rounded-xl px-4 py-3 text-white outline-none transition-all duration-200 placeholder-gray-500"
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                name="pickupLocation"
                required
                placeholder="e.g., Dhaka, Bangladesh"
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
                required
                rows="3"
                placeholder="Write something about the car's condition, features, etc..."
                className="w-full bg-[#0D2342] border border-gray-700 focus:border-[#CCFF00] rounded-xl px-4 py-3 text-white outline-none transition-all duration-200 placeholder-gray-500 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#CCFF00] text-[#0A192F] font-bold py-3.5 px-6 rounded-xl shadow-lg hover:bg-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Submit Car Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
