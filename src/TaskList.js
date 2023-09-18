import { getImageUrl } from "./AddTask.js";
const Profile = ({ src, alt }) => {
  // console.log(imageId);
  //
  return (
    <img
      className="avatar"
      // src={getImageUrl(imageId)}
      src={src}
      // alt="Katsuko Saruhashi"
      alt={alt}
      width={70}
      height={70}
    />
  );
};

export default Profile;
