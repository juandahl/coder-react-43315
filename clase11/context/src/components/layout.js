import useTheme from "../context/theme/useTheme";

function Layout({ children }) {
  const result = useTheme();

  return (
    <div className="layout" style={{ background: result.isDarkMode ? "black" : "white" }}>
      {children}
    </div>
    )
}

export default Layout;
