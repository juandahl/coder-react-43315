import { NavLink } from "react-router-dom";

import "./navBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="not-active" activeClassName="active">Home</NavLink>
      <NavLink to="/estudiantes" activeClassName="active" className="not-active">Estudiantes</NavLink>
    </div>
  )
}

export default NavBar;