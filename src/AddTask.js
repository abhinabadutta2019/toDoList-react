const Profile = () => {
  //
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 150,
  };
  //
  return (
    <div>
      <h3>{user.name}</h3>
      <img
        src={user.imageUrl}
        alt={"photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
};

export default Profile;
