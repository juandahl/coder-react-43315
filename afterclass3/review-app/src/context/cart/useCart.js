import { useContext } from "react";
import CartContext from "./cartContext";

const useCart = () => {
  const result = useContext(CartContext);

  return result;
}

export default useCart;
