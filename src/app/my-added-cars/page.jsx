import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";
import AddedCarCard from "../components/AddedCarCard";
import Link from "next/link";


const MyAddedCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  //   console.log(user);

  const res = await fetch(`http://localhost:8000/car/${user?.id}`);
  const carData = await res.json();

  console.log(carData);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {carData?.length === 0 ? (
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="max-w-2xl w-full text-center border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(163,230,53,0.08)]">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-5xl">
                🚗
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              No Cars Found
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8">
              It looks like you haven't added any cars yet. Start building your
              rental fleet by adding your first vehicle and make it available
              for customers.
            </p>

            <Link
              href="/add-car"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-lime-400 to-green-500 text-slate-900 font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.4)]"
            >
              Add Your First Car
              <span>→</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carData?.map((car) => (
            <AddedCarCard key={car._id} car={car} userId={user?.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedCarsPage;
