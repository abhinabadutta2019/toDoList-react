import { useState } from "react";

const Home = () => {
  //
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);
  //
  const answerHandler = (e) => {
    setAnswer(e.target.value);
  };
  //
  async function handleFormSubmit() {
    //
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      // setStatus("typing");
      setError(err);
      // console.log(err);
    }
  }
  //
  let content;
  //

  if (status == "success") {
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
        <button onClick={handleFormSubmit} disabled={answer.length < 1}>
          submit
        </button>

        {error !== null && <p>{error.message}</p>}
      </>
    );
  }
  //
  return <>{content}</>;
};

//
// Pretend it's hitting the network.
function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
//

export default Home;
