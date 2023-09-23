import { useState } from "react";

const Home = () => {
  //
  // console.log("Hi");
  const [value, setValue] = useState(true);
  //

  //
  const eventHandler = () => {
    setValue(!value);
    //
    console.log(value, "value");
    // not working
    // const go = value ? "start" : "stop";
  };
  //
  return (
    <div>
      <p>{value}</p>
      <button onClick={eventHandler}>change button</button>
      {/* using conditional, ternery and useState method */}
      <h3>
        {value ? (
          <span style={{ color: "darkred" }}>stay</span>
        ) : (
          <span style={{ color: "darkgreen" }}>go</span>
        )}
      </h3>
    </div>
  );
};

export default Home;
