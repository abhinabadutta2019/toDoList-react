//Passing event handlers as props

const ButtonClick = ({ onClick, buttonName }) => {
  return <button onClick={onClick}>{buttonName}</button>;
};
// UploadButton
const UploadButton = () => {
  //
  const eventHandler1 = () => {
    console.log("Hi");
  };

  return (
    <div>
      <ButtonClick onClick={eventHandler1} buttonName="Upload here" />
    </div>
  );
};
//

const PlayButton = () => {
  //
  const eventHandler2 = () => {
    //
    alert("Play here");
  };
  //
  return <ButtonClick onClick={eventHandler2} buttonName="play button" />;
};

// this is exporting
const Home = () => {
  //
  return (
    <div>
      <UploadButton />
      <PlayButton />
    </div>
  );
  //
};

export default Home;
