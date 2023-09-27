import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

const Home = () => {
  //
  const [myList, setMyList] = useState(initialList);

  //
  const eventChange = (e) => {
    myList.map((item, index) => {
      return console.log(item);
    });
  };
  //
  return (
    <>
      <ItemList artworks={myList} eventChange={eventChange} />
    </>
  );
};

const ItemList = ({ artworks, eventChange }) => {
  return (
    <>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          {artwork.title}--
          {/* if true -- show then */}
          {artwork.seen === true && <span>Hi</span>}
          <button
            onClick={(e) => {
              eventChange();
            }}
          >
            change
          </button>
        </li>
      ))}
    </>
  );
};

export default Home;
