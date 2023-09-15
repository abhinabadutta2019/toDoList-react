import Profile from "./AddTask";

const Home = () => {
  //
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];

  //
  return <Profile products={products} />;
};

export default Home;
