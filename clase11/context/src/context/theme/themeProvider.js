import { useState } from "react";
import ThemeContext from "./themeContext";

function ThemeProvider({ defaultValue, children }) {
  const [isDarkMode, setIsDarkMode] = useState(defaultValue);

  function handleChangeMode() {
    setIsDarkMode(!isDarkMode);
  }

  // Los componentes que lo usen(consumidores)
  // pueden utilizar calquiera de estas variables
  const valueProvided = {
    isDarkMode,
    onChangeMode: handleChangeMode,
  }

  return (
  <ThemeContext.Provider value={valueProvided}>
    {children}
  </ThemeContext.Provider>
  )
}

export default ThemeProvider;