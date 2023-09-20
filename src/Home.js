//Stopping propagation example

//event propogation -- here example== parent <div> and child <button>  both has event

//

// this is exporting
const Home = () => {
  //
  return (
    <div
      onClick={() => {
        console.log("You clicked on the toolbar!");
      }}
    >
      <button
        onClick={(e) => {
          console.log(e);
          console.log("Play button macha");
        }}
      >
        Play here
      </button>
      {/*  */}
      <button
        onClick={() => {
          console.log("Upload button macha");
        }}
      >
        Upload here
      </button>
    </div>
  );
  //
};

export default Home;
