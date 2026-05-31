import BookingModal from "../../components/BookingCard";
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";

const CarDetailPage = async ({ params }) => {
  const { userId } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  
  const res = await fetch(`http://localhost:8000/cars/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const carData = await res.json();
  const {
    carType,
    carName,
    dailyPrice,
    imageUrl,
    description,
    seatCapacity,
    pickupLocation,
  } = carData;

  return (
    <section className="w-full min-h-screen   py-12 md:py-20 font-sans selection:bg-[#c5a880] selection:text-white">
      <div className=" border border-white/10 bg-white/5 rounded-2xl px-5 py-4 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] max-w-6xl mx-auto  sm:px-6 lg:px-8">
        {/* Main Grid: Image + Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image Container with Hover Effect */}
          <div className="relative group overflow-hidden bg-neutral-50 rounded-md border border-neutral-100  shadow-lg shadow-lime-600">
            <div className="aspect-[4/3] w-full overflow-hidden relative ">
              {/* Replace with your actual Next.js <Image /> component or valid URL */}
              <img
                src={imageUrl}
                alt={carName}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 "
              />
            </div>
            {/* Subtle Overlay on Hover */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col justify-center">
            {/* Title & Share Section */}
            <div className="flex justify-between items-start gap-4 mb-3">
              <h1 className="text-2xl md:text-3xl font-normal text-[#c5a880] tracking-wide">
                {carName}
              </h1>
            </div>

            {/* Price */}
            <div className="text-xl md:text-2xl font-medium text-neutral-900 mb-4">
              <span className="text-yellow-600">$</span>
              <span className="text-white">{dailyPrice}</span>
              <span className="text-neutral-600">/day</span>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-500 leading-relaxed font-light mb-8 max-w-lg">
              {description}
            </p>

            {/* Meta Info (Color, SKU, Category) */}
            <div className="space-y-3 text-xs tracking-wide text-neutral-600 mb-10 border-t border-b border-neutral-100 py-6 max-w-md">
              <div className="grid grid-cols-3">
                <span className="text-neutral-400">Pickup Location:</span>
                <span className="col-span-2 text-white font-medium">
                  {pickupLocation}
                </span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-neutral-400">Seat Capacity :</span>
                <span className="col-span-2 text-white font-medium">
                  {seatCapacity}
                </span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-neutral-400">Category :</span>
                <span className="col-span-2 text-white font-medium  cursor-pointer transition-colors duration-300">
                  {carType}
                </span>
              </div>
            </div>

            {/* Actions: Quantity + Add To Cart */}
            <div className="flex flex-wrap items-center gap-4 max-w-md">
              {/* Add To Cart Button with Premium Hover Effect */}
              <div className="flex items-center justify-center gap-2 ">
                <BookingModal carId={userId} carData={carData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailPage;
