import { useState } from "react";
import { foods } from "./Task.js";

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  console.log(results, "results");

  //
  function filterItems(items, query) {
    query = query.toLowerCase();
    return items.filter((item) =>
      item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
    );
  }
  //

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={results} />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <div>
      Search: <input value={query} onChange={onChange} />
    </div>
  );
}
//
function List({ items }) {
  return (
    <ul>
      {items.map((food) => (
        <li key={food.id}>
          <strong>{food.name}</strong>: {food.description}
        </li>
      ))}
    </ul>
  );
}
//
