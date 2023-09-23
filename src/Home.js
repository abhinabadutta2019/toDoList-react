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
      {/* using conditional and state */}
      <p>{value ? <>stay</> : <>go</>}</p>
    </div>
  );
};

export default Home;
