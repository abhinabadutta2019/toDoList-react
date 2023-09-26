import { useState } from "react";

let nextId = 0;
// console.log(nextId, "nextId");

const Home = () => {
  //
  const [name, setName] = useState("");
  const [array, setArray] = useState([]);
  //
  const eventOnChange = (e) => {
    setName(e.target.value);
  };
  //
  const eventOnButton = () => {
    setArray([...array, { id: nextId++, name: name }]);
  };
  //
  const eventOnDelete = (id) => {
    setArray(array.filter((item) => item.id !== id));
  };

  return (
    <>
      name: <input onChange={eventOnChange} />
      <button onClick={eventOnButton}>submit</button>
      <p>Name:{name}</p>
      <>
        {array.map((item) => (
          <li key={item.id}>
            Name : {item.name}-- id :{item.id}{" "}
            <button onClick={() => eventOnDelete(item.id)}>delete</button>
          </li>
        ))}
      </>
    </>
  );
};

export default Home;
