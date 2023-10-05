import { useState } from "react";
import { foods } from "./Task.js";

export default function FilterableList() {
  const [query, setQuery] = useState("");

  //
  function handleChange(e) {
    setQuery(e.target.value);
    console.log(query, "query");
  }
  //

  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <List items={foods} />
    </>
  );
}

//
//
const SearchBar = ({ query, onChange }) => {
  return (
    <>
      <input value={query} onChange={onChange} />
    </>
  );
};

//
//List component
const List = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <li key={item.id}>
            {item.name} - - - {item.description}
          </li>
        );
      })}
    </>
  );
};
