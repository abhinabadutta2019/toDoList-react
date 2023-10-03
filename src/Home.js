import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

const Home = () => {
  const [array, setArray] = useState(initialItems);
  const [position, setPosition] = useState(0);
  //
  let nowShow;

  array.forEach((item) => {
    if (item.id === position) {
      //   console.log(item);
      nowShow = item;
      //   return item;
    }
  });

  //   console.log(nowShow, "nowShow");

  const buttonHandler = (sendItem) => {
    setPosition(sendItem.id);
  };
  //
  const inputHandler = (e, sentItem) => {
    const mapValue = array.map((item) => {
      if (item.id == sentItem.id) {
        return { ...item, title: e.target.value };
      } else {
        return item;
      }
    });
    //
    setArray(mapValue);
  };

  return (
    <>
      {array.map((item) => {
        return (
          <li key={item.id}>
            {/* {item.title} */}

            <input
              onChange={(e) => {
                inputHandler(e, item);
              }}
              value={item.title}
            />

            <button
              onClick={() => {
                buttonHandler(item);
              }}
            >
              select
            </button>
          </li>
        );
      })}

      <p>now showing:{nowShow.title} </p>
    </>
  );
};

export default Home;
