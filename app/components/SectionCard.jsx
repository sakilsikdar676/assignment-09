import Link from "next/link";
import CarCard from "./CarCard";
import { GoArrowUpRight } from "react-icons/go";

const SectionCard = async () => {
  const res = await fetch(`http://localhost:8000/cars`);
  const result = await res.json();
  console.log(result);
  return (
    <div className="mt-10 mb-10">
      <div className="text-center m-5">
        <h1 className="text-3xl font-bold">Most Loved Latest Cars</h1>
        <p className="text-gray-600">
          Handpicked cars for your perfect journey.
        </p>
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <Link
          href="/explore-cars"
          className="max-w-[100px] flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-darkblue-600 hover:bg-[#6bc417] rounded-md transition-colors duration-300 shadow-sm shadow-lime-600"
        >
          Viw All <GoArrowUpRight />
        </Link>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {result.slice(0, 6).map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default SectionCard;
