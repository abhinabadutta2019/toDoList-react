import Profile from "./AddTask";

const Home = () => {
  //
  const isLoggedIn = false;
  let content;
  if (isLoggedIn) {
    content = <Profile />;
  } else {
    content = <>No</>;
  }
  //
  return (
    <div>
      <h2>Home</h2>
      {content}
    </div>
  );
};

export default Home;
