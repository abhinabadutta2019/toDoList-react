import { useState } from "react";
import { sculptureList } from "./AddTask.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  //
  // const [decrease, setDecrease] = useState();

  // next/ increase
  function handleNextClick() {
    // if statement- not to cross the -- array length
    if (index < sculptureList.length - 1) {
      //
      console.log(sculptureList.length, "length");
      console.log(index, "index");
      setIndex(index + 1);
    }
  }
  // previous/ decrease
  function handlePreviousClick() {
    if (index >= 1) {
      console.log(index, "index");
      setIndex(index - 1);
    }
  }

  // show/ hide
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePreviousClick}>Previous</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
