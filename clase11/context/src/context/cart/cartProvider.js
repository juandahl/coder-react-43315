import { useState } from "react";
import CartContext from "./cartContext";

function CartProvider({ defaultValue, children }) {
  const [products, setProducts] = useState(defaultValue);

  // Los componentes que lo usen(consumidores)
  // pueden utilizar calquiera de estas variables
  const valueProvided = {
    products,
  }

  return (
  <CartContext.Provider value={valueProvided}>
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider;