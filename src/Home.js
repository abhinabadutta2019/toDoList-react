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
  const [yourList, setYourList] = useState(initialList);

  // this part of syntax-- done by gpt
  const eventChange = (e, id) => {
    const updatedList = myList.map((item) => {
      if (item.id == id) {
        // console.log(item);
        return { ...item, seen: !item.seen };
      } else {
        return item;
      }
    });
    setMyList(updatedList);
  };
  //
  const yourEventChange = (e, id) => {
    const updatedList = yourList.map((item) => {
      if (item.id == id) {
        // console.log(item);
        return { ...item, seen: !item.seen };
      } else {
        return item;
      }
    });
    setYourList(updatedList);
  };
  //
  return (
    <>
      <p> myList</p>
      <ItemList artworks={myList} eventChange={eventChange} />
      <p> yourList</p>
      <ItemList artworks={yourList} eventChange={yourEventChange} />
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
              eventChange(e, artwork.id);
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
