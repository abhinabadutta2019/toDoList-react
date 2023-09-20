const ButtonClick = ({ message, childComp }) => {
  return (
    <button
      onClick={() => {
        console.log(message);
      }}
    >
      {childComp}
    </button>
  );
};

const Home = () => {
  return (
    <div>
      <ButtonClick message={"Misss"} childComp={"Click here 1"} />{" "}
      <ButtonClick message={"Mrs"} childComp={"Click111 here 1"} />
    </div>
  );
};

export default Home;
