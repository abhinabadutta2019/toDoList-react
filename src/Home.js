import { useState } from "react";

const Home = () => {
  //
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  //
  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  //
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    //
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }
  //
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }
  //
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
  return (
    <>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>

      <form onSubmit={handleSubmit}>
        {/*  */}
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          // what is this ?
          disabled={status === "submitting"}
        ></textarea>

        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {/*  */}
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
};

export default Home;
