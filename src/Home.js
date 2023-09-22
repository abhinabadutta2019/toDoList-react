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
  // show / hide toggle working
  const eventHandlerHide = () => {
    setHide(!hide);
  };
  //
  console.log(hide, "hide");

  let item = sculptureList[index];

  return (
    <div>
      <button onClick={eventHandler}>next topic</button>
      <p>{item.name}</p>
      <button onClick={eventHandlerHide}>
        {hide ? "hide" : "show"} details
      </button>
      {hide && <p>{item.alt}</p>}
    </div>
  );
}
