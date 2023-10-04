import { useState } from "react";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <li>
      <h3>{title}</h3>
      {isActive ? (
        //how this is sure about children ?
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>Show</button>
      )}
    </li>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comesconsidered a likely candidate for the ancestor of the
        modern domestic apple.
      </Panel>
    </>
  );
}
