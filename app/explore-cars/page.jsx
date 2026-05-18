import CarCard from "../components/CarCard";

const ExploreCarsPage = async () => {
  const res = await fetch(`http://localhost:8000/cars`);
  const result = await res.json();
  console.log(result);

  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {result.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCarsPage;
