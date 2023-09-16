const TaskList = ({ value }) => {
  //
  const handleClick = () => {
    console.log("clicked!");
  };
  //
  return (
    <>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </>
  );
};

export default TaskList;
