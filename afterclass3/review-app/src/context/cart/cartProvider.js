import { useState } from "react";
import CartContext from "./cartContext";

function CartProvider({ defaultValue = [], children }) {
  const [products, setProducts] = useState(defaultValue);

  function addProduct(product) {
    const newList = [...products];
    newList.push(product);

    setProducts(newList);
  }

  const otherValue = [];

  // Los componentes que lo usen(consumidores)
  // pueden utilizar calquiera de estas variables
  const valueProvided = {
    products,
    addProduct,
    cantidad: products.length
  }

  return (
  <CartContext.Provider value={valueProvided}>
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider;