import { useState } from "react"
import "./header.css"
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
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
        <nav className={isMenuOpen ? "active" : ""}>
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
        <img
          onClick={toggleMobileMenu}
          className={isMenuOpen ? `close active` : `close`}
          src="/assets/shared/mobile/icon-close.svg"
          alt="close mobile navigation menu"
        />
        <img
          onClick={toggleMobileMenu}
          className="ham-menu"
          src="/assets/shared/mobile/icon-hamburger.svg"
          alt="open mobile navigation menu"
        />
      </div>
    </header>
  )
}
