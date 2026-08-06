import { NavLink, useLocation } from "react-router";
import logo from "../assets/images/BKlogoooo.svg";

function Navbar() {
  const { pathname } = useLocation();
  const projectTheme = pathname === "/projects/lynk" || pathname === "/projects/sideprojekter"
    ? "site-header--lynk"
    : pathname === "/projects/lumina"
      ? "site-header--lumina"
      : pathname === "/projects/landingpage-koncept"
        ? "site-header--concept"
      : "";

  return (
    <header className={`site-header ${projectTheme}`.trim()}>
      <NavLink className="brand" to="/" aria-label="Gå til forsiden">
        <img src={logo} alt="BK" />
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
