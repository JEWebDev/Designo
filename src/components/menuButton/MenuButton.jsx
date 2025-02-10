import { useState } from "react"
import "./menuButton.css"
export function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMenuOpen((prevState) => {
      const newState = !prevState // Toggle the current state
      const button = document.querySelector(".hamburger-menu")
      button.setAttribute("aria-expanded", newState)

      const nav = document.querySelector(".mobile-nav")
      nav.setAttribute("aria-expanded", newState)
      return newState
    })
  }

  return (
    <button
      className="hamburger-menu"
      aria-controls="primary-navigation"
      aria-expanded="false"
      onClick={toggleMobileMenu}
    >
      <svg
        className="hamburger-icon"
        viewBox="0 0 100 100"
        width="24"
        height="20"
      >
        <rect className="line top" width="100" height="20" x="0" y="0"></rect>
        <rect className="line mid" width="100" height="20" x="0" y="40"></rect>
        <rect className="line bot" width="100" height="20" x="0" y="80"></rect>
      </svg>
    </button>
  )
}
