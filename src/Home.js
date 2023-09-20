import ButtonFunc from "./AddTask";

const ButtonClick = () => {
  console.log("HI");
};

const Home = () => {
  return <ButtonFunc clickFunc={ButtonClick} />;
};

export default Home;
