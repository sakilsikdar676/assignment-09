import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";
import { CancalBookingAlart } from "../components/CencalBookingAlart";
import Link from "next/link";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  // আপনার দেওয়া ব্যাকএন্ড রাউট অনুযায়ী ডেটা ফেচ হচ্ছে
  const res = await fetch(`http://localhost:8000/booking/${user?.id}`);
  const carData = await res.json();

  console.log(carData);

  const getStatusStyle = (status) => {
    if (status === "Confirmed")
      return "bg-green-500/10 text-green-400 border-green-500/20";
    if (status === "Pending")
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    return "bg-gray-500/10 text-gray-400 border-gray-500/20";
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-200 mb-6 tracking-wide text-center sm:text-left">
        My Bookings
      </h2>

      {carData?.length === 0 && (
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="max-w-2xl w-full text-center border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(59,130,246,0.08)]">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-5xl">
                📅
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              No Bookings Yet
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8">
              Looks like you haven't booked any cars yet. Explore our collection
              of premium vehicles and reserve the perfect ride for your next
              journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/explore-cars"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                Explore Cars
                <span>→</span>
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/10"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2  gap-6">
        {carData?.map((car) => (
          <div
            key={car._id || car.id}
            className="w-full max-w-2xl mx-auto bg-[#0d1520]/80 backdrop-blur-md border border-gray-800 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-lime-500/30 hover:shadow-[0_0_40px_rgba(163,230,53,0.1)] flex flex-col sm:flex-row"
          >
            <div className="w-full sm:w-2/5 relative min-h-[180px] sm:min-h-full bg-gray-900">
              <img
                src={
                  car.imageUrl ||
                  "https://placehold.co/600x400/0d1520/ffffff?text=No+Image"
                }
                alt={car.name || "Booked Car"}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-sm border border-gray-800 text-[10px] font-mono text-gray-400 px-2.5 py-1 rounded-md">
                #{car.bookingId || car._id || car.id}
              </span>
            </div>

            <div className="w-full sm:w-3/5 p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-200 tracking-wide">
                    {car.carName || "Unknown Car"}
                  </h3>
                </div>
                <span
                  className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${getStatusStyle(car.status || "Pending")}`}
                >
                  ● {car.status || "Pending"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-gray-950/40 border border-gray-800/50 rounded-xl">
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase font-semibold">
                    Driver Status
                  </span>
                  <span
                    className={`text-xs font-medium ${car.driverNeeded === "Yes" ? "text-lime-400" : "text-gray-400"}`}
                  >
                    {car.driverNeeded === "Yes"
                      ? "👨‍✈️ Driver Included"
                      : "🚗 Self Drive"}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase font-semibold">
                    Total Cost
                  </span>
                  <span className="text-xs font-bold text-gray-200">
                    ${car.dailyPrice || "45.00"} / day
                  </span>
                </div>
              </div>

              {car.specialNote && (
                <div className="p-2.5 bg-gray-900/40 border-l-2 border-lime-500 rounded-r-lg">
                  <span className="block text-[10px] uppercase font-bold text-lime-400 tracking-wider">
                    Your Note:
                  </span>
                  <p className="text-xs text-gray-400 mt-0.5 italic line-clamp-2">
                    {car.specialNote}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-800/60">
                <CancalBookingAlart bookingId={car._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
