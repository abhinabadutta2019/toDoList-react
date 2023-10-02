import { useState } from "react";

const Home = () => {
  //
  const [answer, setAnswer] = useState("");
  //
  const answerHandler = (e) => {
    setAnswer(e.target.value);
  };
  //
  let content;
  //

  if (answer == "lima") {
    content = (
      <>
        <h3>Well done</h3>
      </>
    );
  } else {
    content = (
      <>
        <p>
          In which city is there a billboard that turns air into drinkable
          water?
        </p>
        <textarea onChange={answerHandler}></textarea>
        <br />
        <button disabled={answer.length < 1}>submit</button>
        <p>error</p>
      </>
    );
  }
  //
  return <>{content}</>;
};

export default Home;
