import { useState } from "react";

let initialCounters = [0, 0, 0];

const Home = () => {
  //
  const [value, setValue] = useState(initialCounters);
  //
  const eventHandler = (i) => {
    //

    console.log(i, i);

    const nextCouters = value.map((item, index) => {
      // console.log(item++);
      // console.log(item + 1);

      if (index == i) {
        return item + 1;
      } else {
        return item;
      }
    });
    //
    setValue(nextCouters);
  };

  return (
    <>
      {value.map((item, index) => (
        <li key={index}>
          {value[index]}
          <button
            onClick={() => {
              eventHandler(index);
            }}
          >
            +1
          </button>{" "}
        </li>
      ))}
    </>
  );
};

export default Home;
