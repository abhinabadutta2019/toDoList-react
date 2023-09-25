import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState({ x: "Abhi", y: { ya: "AA", yb: "BB" } });
  //
  const eventHandlerX = () => {
    //
    setValue({ ...value, x: "Addd" });
  };
  // //
  const eventHandlerYA = () => {
    console.log(value.y.ya);
    setValue({ ...value, y: { ...value.y, ya: "YAYAYA" } });
  };
  // //
  // const eventHandlerBoth = () => {
  //   setValue({ y: "xxxx", x: "yyyy" });
  // };
  //
  return (
    <>
      <button onClick={eventHandlerX}>change x</button>
      <button onClick={eventHandlerYA}>change ya</button>
      {/* <button onClick={eventHandlerBoth}>change Both</button> */}
      <p>x:{value.x}</p>
      <p>y.ya:{value.y.ya}</p>
      <p>y.yb:{value.y.yb}</p>
    </>
  );
};

export default Home;
