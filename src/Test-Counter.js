import { useState } from "react";
import { letters } from "./TaskList.js";
import Letter from "./Task.js";

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO allow multiple selection
  const selectedCount = selectedIds.length;
  console.log(selectedCount);

  console.log(selectedIds, "selectedId");

  function handleToggle(toggledId) {
    // TODO allow multiple selection
    if (selectedIds.includes(toggledId)) {
      // Then remove this ID from the array.
      setSelectedIds(selectedIds.filter((id) => id !== toggledId));
    } else {
      // Otherwise, add this ID to the array.
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO allow multiple selection
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
