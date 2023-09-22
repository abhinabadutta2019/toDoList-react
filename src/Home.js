import { useState } from "react";
import { sculptureList } from "./TaskList.js";

export default function Gallery() {
  //
  const [index, setIndex] = useState(0);
  const [hide, setHide] = useState(false);
  //

  const eventHandler = () => {
    setIndex(index + 1);
  };
  //
  const eventHandlerHide = () => {
    setHide(true);
  };
  //
  console.log(hide, "hide");
  // console.log(index, "index");

  // console.log(sculptureList.length, "length");
  let item;

  // ??? eta diye -- loop ta stop/ break kora jacche naa

  if (index < sculptureList.length) {
    item = sculptureList[index];
  }

  return (
    <div>
      <button onClick={eventHandler}>click here</button>
      <p>{item.name}</p>
      <button onClick={eventHandlerHide}>
        {hide ? "hide" : "show"} details
      </button>
      {hide && <p>{item.alt}</p>}
    </div>
  );
}
