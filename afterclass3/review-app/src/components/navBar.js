import { NavLink } from "react-router-dom";

import "./navBar.css";
import useCart from "../context/cart/useCart";

function NavBar() {
  const { cantidad } = useCart();

  return (
    <div className="navbar">
      <NavLink to="/" className="not-active" activeClassName="active">Home</NavLink>
      <NavLink to="/estudiantes" activeClassName="active" className="not-active">Estudiantes</NavLink>

      <div>{cantidad}</div>
    </div>
  )
}

export default NavBar;