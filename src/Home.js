// e.preventDefault() is different from --- e.stopPropagation()

const Home = () => {
  //

  const eventHandler = (e) => {
    // e.preventDefault();
    alert("Hi");
  };
  //

  return (
    <form onSubmit={eventHandler}>
      <input />
      <button>Click here</button>
    </form>
  );
};

export default Home;
