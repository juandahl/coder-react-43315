import { useState } from "react";

function useContador() {
  const [contador, setContador] = useState(0);

  function handleIncrease() {
    setContador(contador + 1);
  }

  function handleDecrease() {
    setContador(contador - 1);
  }

  return {
    contador,
    handleIncrease,
    handleDecrease
  };
}

export default useContador;
