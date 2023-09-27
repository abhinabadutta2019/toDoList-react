import { useState } from "react";

let initialArray = [0, 0, 0];

const Home = () => {
  const [array, setArray] = useState(initialArray);
  //
  const eventHandler = (pI) => {
    const finalArray = array.map((oneItem, i) => {
      // console.log(oneItem, i);
      if (pI == i) {
        return (oneItem = oneItem + 1);
      } else {
        return oneItem;
      }
    });
    setArray(finalArray);
  };

  return (
    <>
      {array.map((item, index) => (
        <li key={index}>
          {item}--
          <button
            onClick={() => {
              eventHandler(index);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </>
  );
};

//

export default Home;
