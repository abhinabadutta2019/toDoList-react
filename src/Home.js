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
  console.log(hide, "hide before");
  // show / hide toggle working
  const eventHandlerHide = () => {
    // eta -- true thakle -- false kore dicche --- false thakle -- true kore dicche
    setHide(!hide);
    console.log(hide, "hide inside");
  };
  //

  console.log(hide, "hide after");

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
