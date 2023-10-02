//question ---
// This form switches between two modes: in the editing mode, you see the inputs, and in the viewing mode, you only see the result. The button label changes between “Edit” and “Save” depending on the mode you’re in. When you change the inputs, the welcome message at the bottom updates in real time.
import { useState } from "react";

export default function EditProfile() {
  //

  const [firstName, setFirstName] = useState("f");
  const [lastname, setLastName] = useState("l");

  //
  const [editStatus, setEditStatus] = useState(true);
  //
  const firstnameHandler = (e) => {
    setFirstName(e.target.value);
  };
  //
  const lastnameHandler = (e) => {
    setLastName(e.target.value);
  };
  //
  const saveButtonHandler = (e) => {
    e.preventDefault();
    setEditStatus(false);
  };
  //
  const editButtonHandler = (e) => {
    e.preventDefault();
    setEditStatus(true);
  };
  //
  let content;
  //

  if (editStatus) {
    content = (
      <>
        <form>
          <label>
            First name:
            <input value={firstName} onChange={firstnameHandler} />
          </label>
          <br />
          <label>
            Last name:
            <input value={lastname} onChange={lastnameHandler} />
          </label>
          <br />
          <button onClick={saveButtonHandler} type="submit">
            Save Profile
          </button>
          <p>
            <i>
              Hello, {firstName} {lastname}!
            </i>
          </p>
        </form>
      </>
    );
  } else {
    content = (
      <>
        <form>
          <label>
            First name:
            {/* <input onChange={firstnameHandler} /> */}
            {firstName}
          </label>
          <br />
          <label>
            Last name:
            {/* <input onChange={lastnameHandler} /> */}
            {lastname}
          </label>
          <br />
          <button onClick={editButtonHandler} type="submit">
            Edit Profile
          </button>
          <p>
            <i>
              Hello, {firstName} {lastname}!
            </i>
          </p>
        </form>
      </>
    );
  }

  //
  return <>{content}</>;
}
