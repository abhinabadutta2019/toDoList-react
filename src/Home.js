import AddTask from "./AddTask";

const Home = () => {
  //
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];

  //
  return (
    <div>
      <AddTask products={products} />
    </div>
  );
};

export default Home;
