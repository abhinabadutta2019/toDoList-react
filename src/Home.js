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
  async function submitForm(answer) {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay

    if (answer.toLowerCase() !== "lima") {
      throw new Error("Good guess but a wrong answer. Try again!");
    }
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
