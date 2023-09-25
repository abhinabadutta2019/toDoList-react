import { useState } from "react";

const Home = () => {
  const [object, setObject] = useState({ a: "Abhi", b: "Naba", c: "dutta" });

  //
  const eventHandlerA = (e) => {
    console.log([e.target.name]);
    //
    setObject({
      ...object,
      [e.target.name]: e.target.value,
      // a: e.target.value
    });
  };

  // //
  // const eventHandlerB = (e) => {
  //   setObject({ ...object, b: e.target.value });
  // };
  // //
  // const eventHandlerC = (e) => {
  //   setObject({ ...object, c: e.target.value });
  //   // console.log("Hi");
  // };
  //
  return (
    <>
      <label>
        A:
        <input name="a" value={object.a} onChange={eventHandlerA} />
      </label>
      <label>
        B:
        {/* <input value={object.b} onChange={eventHandlerB} /> */}
        <input name="b" value={object.b} onChange={eventHandlerA} />
      </label>
      <label>
        C:
        {/* <input value={object.c} onChange={eventHandlerC} /> */}
        <input name="c" value={object.c} onChange={eventHandlerA} />
      </label>

      {/*  */}
      <p>{object.a}</p>
      <p>{object.b}</p>
      <p>{object.c}</p>
    </>
  );
};

export default Home;
