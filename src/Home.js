import { useState } from "react";

const Home = () => {
  const [data, setdata] = useState({
    name: "Abhi",
    work: { title: "chobi", city: "sodepur" },
  });
  //
  //e.target.data
  const nameEvent = (e) => {
    //
    console.log(data, "data");
    //
    setdata({ ...data, name: e.target.value });
  };
  //
  const cityEvent = (e) => {
    //
    console.log(data, "data cityEvent");
    //
    setdata({ ...data, work: { ...data.work, city: e.target.value } });
  };
  //
  return (
    <>
      <p>
        name:
        <input value={data.name} onChange={nameEvent} />
      </p>
      <p>
        work.city:
        <input value={data.work.city} onChange={cityEvent} />
      </p>

      {/*  */}

      <p>name:{data.name}</p>
      <p>work.title:{data.work.title}</p>
      <p>work.city:{data.work.city}</p>
    </>
  );
};

export default Home;
