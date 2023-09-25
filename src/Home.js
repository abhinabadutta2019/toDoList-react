import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState({ x: "Abhi", y: "naba" });
  //
  const eventHandlerX = () => {
    //
    setValue({ ...value, x: "Addd" });
  };
  //
  const eventHandlerY = () => {
    setValue({ ...value, y: "vdddd" });
  };
  //
  const eventHandlerBoth = () => {
    setValue({ y: "xxxx", x: "yyyy" });
  };
  //
  return (
    <>
      <button onClick={eventHandlerX}>change x</button>
      <button onClick={eventHandlerY}>change y</button>
      <button onClick={eventHandlerBoth}>change Both</button>
      <p>x:{value.x}</p>
      <p>y:{value.y}</p>
    </>
  );
};

export default Home;
