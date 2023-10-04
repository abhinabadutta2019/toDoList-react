import { useState } from "react";
import { letters } from "./TaskList";
import Letter from "./Task";

const Home = () => {
  const [selectedIdArr, setSelectedIdArr] = useState([]);

  const selectedCount = selectedIdArr.length;

  console.log(selectedIdArr, "selectedIdArr");

  const checkboxHandler = (sentID) => {
    // if (selectedIdArr.includes()) {
    // }
    // console.log(sentID);

    if (selectedIdArr.includes(sentID)) {
      const filterValue = selectedIdArr.filter((oneID) => oneID != sentID);
      setSelectedIdArr(filterValue);
    } else {
      setSelectedIdArr([...selectedIdArr, sentID]);
    }
  };

  return (
    <>
      {letters.map((letter) => (
        <Letter
          key={letter.id}
          letter={letter}
          //
          isSelected={
            // TODO allow multiple selection
            selectedIdArr.includes(letter.id)
          }
          //
          checkboxHandler={checkboxHandler}
        />
      ))}
      <br />
      <b>You selected {selectedCount} letters</b>
    </>
  );
};

export default Home;
