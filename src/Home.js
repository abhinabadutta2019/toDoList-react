import { useState } from "react";

const Home = () => {
  //

  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState("typing");

  //
  const inputHandler = (e) => {
    setAnswer(e.target.value);
  };
  //
  async function buttonHandler(e) {
    //
    setStatus("submitting");
    //
    try {
      await submitForm(answer);
      setMessage("Correct!");
    } catch (err) {
      // console.log(err);
      setMessage(err.message);
      setStatus("typing");
    }
    //
  }

  //
  return (
    <>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>

      <textarea onChange={inputHandler}></textarea>

      <button
        onClick={buttonHandler}
        disabled={answer.length < 1 || status == "submitting"}
      >
        submit
      </button>

      <p>{message}</p>
    </>
  );
};

//
function submitForm(answer) {
  // Pretend it's hitting the network.
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
