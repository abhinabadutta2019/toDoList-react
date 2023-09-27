import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

//

const Home = () => {
  const [name, setName] = useState("");
  const [array, setArray] = useState(initialArtists);
  //
  const inputEvent = (e) => {
    setName(e.target.value);

    console.log(name);
  };
  //
  const buttonEvent = () => {
    // nextId++
    nextId = nextId + 1;
    const newObj = { id: nextId, name: name };
    //
    console.log(newObj);
    //
    let newArray = [...array.slice(0, 1), newObj, ...array.slice(1)];
    //
    // console.log(newArray, "newArray");
    //
    setArray(newArray);
    //input field empty korbe after submit
    // setName("");
    //
  };
  //
  return (
    <>
      <p>
        Name : <input onChange={inputEvent} />{" "}
        <button onClick={buttonEvent}>submit</button>
      </p>
      {array.map((oneItem) => (
        <li key={oneItem.id}>{oneItem.name}</li>
      ))}
    </>
  );
};

export default Home;
