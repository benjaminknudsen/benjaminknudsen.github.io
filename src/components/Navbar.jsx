import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Gå til forsiden">
        BK
      </NavLink>

      <nav className="site-nav" aria-label="Primær navigation">
        <NavLink to="/projects">Projekter</NavLink>
        <NavLink to="/about">Om mig</NavLink>
        <NavLink className="contact-link" to="/contact">
          Lad os tale
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
