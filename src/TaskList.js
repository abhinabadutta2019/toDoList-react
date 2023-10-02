// import { useState } from "react";

export default function Picture() {
  // const [imgTag, setImgTag] = useState(false);
  //
  // if (imgTag) {
  //   // setImgTag(!imgTag);
  // } else {
  //   setImgTag(!imgTag);
  // }
  //
  let divClass = "";
  let imgClass = "";

  //
  const divHandler = (e) => {
    //
    e.stopPropagation();
    //
    imgClass = "picture";
    divClass = "background background--active";
    //
    console.log(imgClass, "imgClass divHandler");
    console.log(divClass, "divClass divHandler");
  };
  const imgHandler = (e) => {
    //
    e.stopPropagation();
    //
    imgClass = "picture picture--active";
    divClass = "background";
    //
    console.log(divClass, "divClass imgHandler");
    console.log(imgClass, "imgClass imgHandler");
  };
  //
  return (
    <div onClick={divHandler} className={imgClass}>
      <img
        onClick={imgHandler}
        className={divClass}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
