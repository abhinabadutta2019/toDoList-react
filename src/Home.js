import { useState } from "react";

const Home = () => {
  const [myIndex, setMyIndex] = useState(0);
  return (
    <>
      <Panel isActive={myIndex === 0} myFunc={() => setMyIndex(0)}>
        With a population of about 2 million
      </Panel>
      <Panel isActive={myIndex === 1} myFunc={() => setMyIndex(1)}>
        Almaty is Kazakhstan's largest city
      </Panel>
    </>
  );
};

const Panel = ({ isActive, myFunc, children }) => {
  return <>{isActive ? children : <button onClick={myFunc}>expand</button>}</>;
};

export default Home;
