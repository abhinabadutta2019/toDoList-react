import Profile from "./AddTask";
import TaskList from "./TaskList";

const Home = () => {
  //
  const isLoggedIn = true;

  //
  return (
    <div>
      <h2>Home</h2>
      {isLoggedIn ? <Profile /> : <TaskList />}
    </div>
  );
};

export default Home;
