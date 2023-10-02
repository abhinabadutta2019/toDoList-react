import { useState } from "react";

const Home = () => {
  //
  const [firstName, setFirstName] = useState("firstName");
  const [lastName, setLastName] = useState("lastName");
  //
  const [isEditing, setisEditing] = useState(true);
  //
  const editButtonHandler = (e) => {
    e.preventDefault();
    setisEditing(false);
  };
  //
  const saveButtonHandler = (e) => {
    e.preventDefault();
    setisEditing(true);
  };
  //
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  //
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  //
  return (
    <>
      <label>First name: </label>
      {isEditing ? (
        <span>{firstName}</span>
      ) : (
        <input onChange={firstNameHandler} value={firstName} />
      )}

      <br />
      <label>Last name: </label>

      {isEditing ? (
        <span>{lastName}</span>
      ) : (
        <input onChange={lastNameHandler} value={lastName} />
      )}

      <br />
      {isEditing ? (
        <button onClick={editButtonHandler}>Edit</button>
      ) : (
        <button onClick={saveButtonHandler}>save</button>
      )}
    </>
  );
};

export default Home;
