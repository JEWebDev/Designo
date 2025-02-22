import { MenuButton } from "../menuButton/MenuButton"
import { Link } from "react-router"
import "./navbar.css"
export function Navbar() {
  return (
    <header className="header">
      <div className="content">
        <Link to="/">
          <img
            className="logo"
            src="/assets/shared/desktop/logo-dark.png"
            alt="designo logo"
            width="157px"
            height="27px"
          />
        </Link>
        <nav className="main-nav" aria-expanded="false">
          <ul>
            <li>
              <Link to="/about">our company</Link>
            </li>
            <li>
              <Link to="/locations">locations</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="mobile-nav" aria-expanded="false">
          <ul>
            <li>
              <Link to="/about" tabIndex={-1}>
                our company
              </Link>
            </li>
            <li>
              <Link to="/locations" tabIndex={-1}>
                locations
              </Link>
            </li>
            <li>
              <Link to="/contact" tabIndex={-1}>
                contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="overlay"></div>
        <MenuButton></MenuButton>
      </div>
    </header>
  )
}
