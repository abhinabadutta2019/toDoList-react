const AddTask = ({ products }) => {
  //

  //
  return (
    <div>
      {products.map((product) => {
        return <li key={product.title}>{product.title}</li>;
      })}
    </div>
  );
};

export default AddTask;
