import "./App.css";
import Nested1 from "./Nested1";

function App() {
  //
  const title = "To do list app component";
  //
  return (
    <div className="App">
      <div>
        <h2>{title}</h2>

        <Nested1 />
      </div>
    </div>
  );
}

export default App;
