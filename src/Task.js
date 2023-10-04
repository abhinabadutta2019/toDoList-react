const Letter = ({ letter, checkboxHandler, isSelected }) => {
  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            checkboxHandler(letter.id);
          }}
        />
        {letter.subject}
      </li>
    </>
  );
};

export default Letter;
