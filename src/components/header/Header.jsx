import { MenuButton } from "../menuButton/MenuButton"
import "./header.css"
export function Header() {
  return (
    <header className="header">
      <div className="content">
        <img
          className="logo"
          src="/assets/shared/desktop/logo-dark.png"
          alt="designo logo"
          width="157px"
          height="27px"
        />
        <nav className="main-nav" aria-expanded="false">
          <ul>
            <li>
              <a href="#">our company</a>
            </li>
            <li>
              <a href="#">locations</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
        <nav className="mobile-nav" aria-expanded="false">
          <ul>
            <li>
              <a href="#">our company</a>
            </li>
            <li>
              <a href="#">locations</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
        <div className="overlay"></div>
        <MenuButton></MenuButton>
      </div>
    </header>
  )
}
