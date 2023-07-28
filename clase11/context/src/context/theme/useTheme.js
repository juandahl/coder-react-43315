import { useContext } from "react";
import ThemeContext from "./themeContext";

const useTheme = () => {
  const result = useContext(ThemeContext);

  return result;
}

export default useTheme;
