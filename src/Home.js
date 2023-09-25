import { useState } from "react";

const Home = () => {
  const [object, setObject] = useState({ a: "Abhi", b: "Naba", c: "dutta" });

  //
  const eventHandlerA = (e) => {
    setObject({ ...object, a: e.target.value });
  };

  //
  const eventHandlerB = (e) => {
    setObject({ ...object, b: e.target.value });
  };
  //
  const eventHandlerC = (e) => {
    setObject({ ...object, c: e.target.value });
    // console.log("Hi");
  };
  //
  return (
    <>
      <label>
        A:
        <input value={object.a} onChange={eventHandlerA} />
      </label>
      <label>
        B:
        <input value={object.b} onChange={eventHandlerB} />
      </label>
      <label>
        C:
        <input value={object.c} onChange={eventHandlerC} />
      </label>

      {/*  */}
      <p>{object.a}</p>
      <p>{object.b}</p>
      <p>{object.c}</p>
    </>
  );
};

export default Home;
