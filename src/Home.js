import { getImageUrl } from "./AddTask.js";

function Avatar({ person, size }) {
  if (size < 90) {
    size = "s";
  } else {
    size = "b";
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={89}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP",
      }}
    />
  );
}
