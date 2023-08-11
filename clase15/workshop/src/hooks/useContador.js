import { useState } from "react";

export function useContador(defaultValue, minValue, maxValue) {
  const [value, setValue] = useState(defaultValue);


  function increment() {
    if (value < maxValue) {
      setValue(value + 1);
    }
  
  }

  function decrement() {
    if (value > minValue) {
      setValue(value - 1);
    }
  }

  return {
    value,
    increment,
    decrement,
  }

}