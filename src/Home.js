import { useState } from "react";
import { foods } from "./Task.js";

export default function FilterableList() {
  const [query, setQuery] = useState("");

  return (
    <>
      <List items={foods} />
    </>
  );
}

//
//List component
const List = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <li key={item.id}>
            {item.name} : {item.description}
          </li>
        );
      })}
    </>
  );
};
