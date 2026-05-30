"use client";

import { Button } from "@heroui/react";
import { DeleteAlart } from "@/src/app/components/DeleteAlart";
import { EditModal } from "@/src/app/components/EditModal";

export default function AddedCarCard({ car }) {
  const carName = car?.carName;
  const image = car?.imageUrl;
  const price = car?.dailyPrice;
  const carId = car?._id;
  const status = car?.availabilityStatus;

  const getStatusStyle = (carStatus) => {
    if (carStatus === "Available")
      return "bg-lime-500/10 text-lime-400 border-lime-500/20";

    if (carStatus === "Rented")
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";

    return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#0d1520]/80 backdrop-blur-md border border-gray-800 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-lime-500/30 hover:shadow-[0_0_40px_rgba(163,230,53,0.1)] flex flex-col justify-between group">
      {/* Image */}
      <div className="relative h-48 w-full bg-gray-900 overflow-hidden">
        <img
          src={image}
          alt={carName}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        <span
          className={`absolute top-4 right-4 text-[11px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-md ${getStatusStyle(
            status
          )}`}
        >
          ● {status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-gray-200 tracking-wide line-clamp-1 group-hover:text-lime-400 transition-colors">
            {carName}
          </h3>

          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">Rental Rate</span>

            <span className="text-sm font-bold text-gray-200">
              ${price}
              <span className="text-xs text-gray-500 font-normal">
                {" "}
                / day
              </span>
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-800/60">
          <EditModal carId={carId} carData={car} />

          <DeleteAlart carId={carId} carData={car} />
        </div>
      </div>
    </div>
  );
}