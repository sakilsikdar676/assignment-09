"use client";

import { useMemo, useState } from "react";
import CarCard from "../components/CarCard";

export default function ExploreCarsContainer({ cars }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesSearch = car.carName
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || car.carType === category;

      return matchesSearch && matchesCategory;
    });
  }, [cars, search, category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Explore Our Cars
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Find the perfect vehicle for your next adventure. Search by name or
          filter by category.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 md:p-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by car name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0D2342] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-lime-400"
          />

          {/* Filter */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-[#0D2342] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-lime-400"
          >
            <option value="All">All Categories</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
            <option value="Sports">Sports</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {/* Result Count */}
      <div className="mb-6">
        <p className="text-gray-400">
          Found{" "}
          <span className="text-lime-400 font-semibold">
            {filteredCars.length}
          </span>{" "}
          cars
        </p>
      </div>

      {/* Cars */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[40vh]">
          <div className="text-center border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-10 max-w-lg w-full">
            <div className="text-6xl mb-4">🚗</div>

            <h2 className="text-3xl font-bold text-white mb-3">
              No Cars Found
            </h2>

            <p className="text-gray-400">
              We couldn't find any cars matching your search or selected
              category. Try a different keyword or filter.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}