import { createContext } from "react";

const defaultValue = {
  isDarkMode: false,
};
const ThemeContext = createContext(defaultValue);

export default ThemeContext;
