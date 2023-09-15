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
      {products.map((product) => {
        return <li key={product.title}>{product.title}</li>;
      })}
    </div>
  );
};

export default Home;
