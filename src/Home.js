import { useState } from "react";

const Home = () => {
  //

  //
  return (
    <>
      <Panel>
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel>Jaaaaaaa haaaaaaaaa jaaaaaaaa</Panel>
    </>
  );
};

//
const Panel = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li>
      {isActive ? (
        <>{children}</>
      ) : (
        <button
          onClick={() => {
            setIsActive(true);
          }}
        >
          show
        </button>
      )}
    </li>
  );
};

//

export default Home;
