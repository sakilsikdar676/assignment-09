import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";
import { CancalBookingAlart } from "../components/CencalBookingAlart";

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

      {/* বুকিং লিস্ট খালি থাকলে এটি দেখাবে */}
      {carData?.length === 0 && (
        <p className="text-gray-500 text-sm text-center py-10">
          No bookings found.
        </p>
      )}

      <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2  gap-6">
        {carData?.map((car) => (
          <div
            key={car._id || car.id}
            className="w-full max-w-2xl mx-auto bg-[#0d1520]/80 backdrop-blur-md border border-gray-800 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-lime-500/30 hover:shadow-[0_0_40px_rgba(163,230,53,0.1)] flex flex-col sm:flex-row"
          >
            {/* ১. কার ইমেজ সেকশন */}
            <div className="w-full sm:w-2/5 relative min-h-[180px] sm:min-h-full bg-gray-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
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

            {/* ২. কার ইনফরমেশন ও ডিটেইলস সেকশন */}
            <div className="w-full sm:w-3/5 p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  {/* 🛠️ এখানে car.carName এর বদলে car.name করা হয়েছে */}
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

              {/* স্পেসিফিকেশন ও কন্ডিশন গ্রিড */}
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
                    {/* যদি ডাটাবেজে প্রাইস সেভ থাকে */}$
                    {car.dailyPrice || "45.00"} / day
                  </span>
                </div>
              </div>

              {/* ইউজার স্পেশাল নোট */}
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

              {/* অ্যাকশন বাটনসমূহ */}
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
