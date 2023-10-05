import { useState } from "react";
import { foods } from "./Task.js";

//
// const filterItems = (items, query) => {
//   query = query.toLowerCase();

//   const filterValue = items.filter((item) =>
//     item.name.split(" ").some((word) => {
//       //
//       console.log(item.name.split(" "), "item.name");
//       //
//       return word.toLowerCase().startsWith(query);
//     })
//   );
//   //
//   return filterValue;
// };
//
const filterItems = (items, query) => {
  // Convert the query to lowercase for case-insensitive matching.
  query = query.toLowerCase();

  // Create an array to store the filtered items.
  const filteredItems = items.filter((item) => {
    // Split the item's name into an array of words.
    const words = item.name.split(" ");

    // Log the array of words.
    console.log(words, "Words in item.name");

    // Check if any of the words start with the query.
    const isMatching = words.some((word) => {
      // Log the current word being checked.
      // console.log(word, "Current word");

      // Check if the lowercase word starts with the lowercase query.
      return word.toLowerCase().startsWith(query);
    });

    //
    console.log(isMatching, "isMatching");

    // Return true if at least one word in the item's name matches the query.
    return isMatching;
  });

  // Return the filtered items.
  return filteredItems;
};

//

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  //
  console.log(results, "results");

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
