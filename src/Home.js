import { useState } from "react";
import { foods } from "./Task.js";

//
const filterItems = (items, query) => {
  query = query.toLowerCase();

  //
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
  //
};
//

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  //
  function handleChange(e) {
    setQuery(e.target.value);
    console.log(query, "query");
  }
  //

  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <List items={results} />
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
