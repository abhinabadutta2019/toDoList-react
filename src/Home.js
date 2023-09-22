import { useState } from "react";
import { myList } from "./AddTask.js";

export default function Gallery() {
  //
  const [index, setIndex] = useState(0);

  let hawa = 0;
  // console.log(index);

  const eventHandler = () => {
    for (let i = 0; i < 10; i++) {
      // hawa = i;
      setIndex(index + 1);
      hawa = index;
    }
    return hawa;
  };

  return (
    <div>
      <button onClick={eventHandler}></button>
      <p>{hawa} hawa</p>
      <p>{index} index</p>
    </div>
  );
}
