import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    //step 1--pend increase
    setPending((pend) => {
      return pend + 1;
    });

    // step 2 -- add delay
    await delay(2000);
    // console.log("Hi");

    //step 3 add comp
    setCompleted((comp) => {
      return comp + 1;
    });
    //step 4 reduce pend
    setPending((pend) => {
      return pend - 1;
    });
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
