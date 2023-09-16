import TaskList from "./TaskList";

const Home = () => {
  //
  // const value = 0;
  //
  return (
    <>
      <div>
        <TaskList value="1" />
        <TaskList value="2" />
        <TaskList value="3" />
      </div>
      <div>
        <TaskList value="4" />
        <TaskList value="5" />
        <TaskList value="6" />
      </div>
      <div>
        <TaskList value="7" />
        <TaskList value="8" />
        <TaskList value="9" />
      </div>
    </>
  );
};

export default Home;
