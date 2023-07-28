import useTheme from "../context/theme/useTheme";

function Button({ children }) {
  const { onChangeMode } = useTheme();

  const handleClick = () => {
    onChangeMode();
  }
  return <button onClick={handleClick}>{children}</button>
}

export default Button;
