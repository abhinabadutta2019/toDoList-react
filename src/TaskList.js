const TaskList = () => {
  //
  const imageTag = (
    <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
  );
  //
  return <>{imageTag}</>;
};

const Gallery = () => {
  return (
    <>
      <TaskList /> <TaskList /> <TaskList />
    </>
  );
};

export { TaskList, Gallery };
