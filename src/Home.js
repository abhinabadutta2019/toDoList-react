//event propogation -- here example== parent <div> and child <button>  both has event

//

// this is exporting
const Home = () => {
  //
  return (
    <div
      onClick={() => {
        console.log("Hi");
      }}
    >
      <button
        onClick={() => {
          console.log("Play macha");
        }}
      >
        Play here
      </button>
      {/*  */}
      <button
        onClick={() => {
          console.log("Upload macha");
        }}
      >
        Upload here
      </button>
    </div>
  );
  //
};

export default Home;
