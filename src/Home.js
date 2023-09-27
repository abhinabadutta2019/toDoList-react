import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    const updatedArray = products.map((oneProd) => {
      if (oneProd.id == productId) {
        console.log(oneProd);
        return { ...oneProd, count: oneProd.count + 1 };
      } else {
        return oneProd;
      }
    });

    setProducts(updatedArray);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}
