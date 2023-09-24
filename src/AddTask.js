export function getFinalState(baseState, queue) {
  let finalState = baseState;

  console.log(queue, "queue");

  for (let i of queue) {
    if (typeof i === "function") {
      // Apply the updater function.
      finalState = i(finalState);
      //
      console.log(i(finalState), "update(finalState)");
    } else {
      //   // Replace the next state.
      finalState = i;

      //   console.log(update, "update");
    }
    //
    // console.log(i, "update");
    // console.log(typeof update, "typeof update");
  }

  return finalState;
}
