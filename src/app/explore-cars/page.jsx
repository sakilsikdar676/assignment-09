import ExploreCarsContainer from "../components/ExploreCarsContainer";


const ExploreCarsPage = async () => {
  const res = await fetch("http://localhost:8000/cars", {
    cache: "no-store",
  });

  const cars = await res.json();

  return <ExploreCarsContainer cars={cars} />;
};

export default ExploreCarsPage;