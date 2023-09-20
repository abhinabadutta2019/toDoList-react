// let guest = 0;

function Cup({ guest }) {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  const emptyArray = [];
  for (let index = 0; index < 5; index++) {
    // const element = array[index];
    // console.log("Tea cup for guest " + index);
    const output = <div>Tea cup for guest " # {index}</div>;
    emptyArray.push(output);
    // return;
  }

  return emptyArray;
}
