const Profile = ({ products }) => {
  //
  const listItem = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  //
  return <ul>{listItem}</ul>;
};
//

export default Profile;
