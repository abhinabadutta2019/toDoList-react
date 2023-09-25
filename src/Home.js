import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      // image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  //
  const nameHandler = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  //
  const titleHandler = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, title: e.target.value },
    });
  };
  //

  const cityHandler = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, city: e.target.value },
    });
  };

  //

  return (
    <>
      <p>
        Name: <input value={person.name} onChange={nameHandler} />
      </p>
      <p>
        artwork.title:
        <input value={person.artwork.title} onChange={titleHandler} />
      </p>
      <p>
        artwork.city:{" "}
        <input value={person.artwork.city} onChange={cityHandler} />
      </p>
    </>
  );
}
