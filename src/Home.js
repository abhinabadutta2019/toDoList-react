const Home = () => {
  //
  const handleClick = (name) => {
    console.log("hello world" + name);
  };
  //
  const handleClickAgain = (name) => {
    console.log("hello world " + name);
  };
  //
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleClick("mario")}>Click here</button>
      <button
        onClick={(e) => {
          handleClickAgain("Virat");
        }}
      >
        Click for more
      </button>
    </div>
  );
};

export default Home;
