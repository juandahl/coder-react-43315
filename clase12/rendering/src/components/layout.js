import Text from "./text";

function Layout({ isLoading, children, isDarkMode }) {
  return (
    <div className="layout" style={{ background: isDarkMode ? "black" : "white" }}>
      {isLoading ? <Text value="Cargando..." isDarkMode={isDarkMode} /> : children}
    </div>
    )
}

export default Layout;
