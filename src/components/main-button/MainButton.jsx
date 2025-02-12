/* eslint-disable react/prop-types */
import "./mainButton.css"
import { Link } from "react-router"
export function MainButton({ children, path }) {
  return (
    <Link className="main-button" to={path}>
      {children}
    </Link>
  )
}
