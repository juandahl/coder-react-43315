import { useContext } from "react";
import ThemeContext from "../context/theme/themeContext";

function Text({ value }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? "text-dark" : "text-light"}>
      {value}
    </div>
  )
}

export default Text;
