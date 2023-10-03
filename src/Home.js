import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

const Home = () => {
  const [array, setArray] = useState(initialItems);
  //   const [position, setPosition] = useState(array[0]);
  const [position, setPosition] = useState(0);
  //
  //   const buttonHandler = (sentItem) => {
  //     // console.log(sentItem, "sentItem");

  //     setPosition(array[sentItem.id]);
  //   };
  //
  const buttonHandler = (id) => {
    setPosition(id); // Corrected: Set the selected position to the id
  };
  //////
  const selectedItem = array.find((item) => item.id === position);
  //////

  console.log(selectedItem);

  //
  const inputHandler = (e, ID) => {
    // console.log(e.target.value);
    // console.log(sentItem.title);

    setArray(
      array.map((item) => {
        if (item.id === ID) {
          return { ...item, title: e.target.value };
        } else {
          return item;
        }
      })
    );

    // setArray(mapValue);
  };
  //
  return (
    <>
      {array.map((item) => {
        return (
          <li key={item.id}>
            <input
              onChange={(e) => {
                inputHandler(e, item.id);
              }}
              value={item.title}
            />
            <button
              onClick={() => {
                buttonHandler(item.id);
              }}
            >
              select
            </button>
          </li>
        );
      })}

      <p>
        now selected <strong>{selectedItem.title}</strong>
      </p>
    </>
  );
};

export default Home;
