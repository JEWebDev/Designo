/* eslint-disable react/prop-types */
import { Link } from "react-router"
import "./locationCard.css"
export function LocationCard({ img, alt, heading, link }) {
  return (
    <div className="location-card">
      <img src={img} alt={alt} width="202px" />
      <div className="location-text">
        <h3>{heading}</h3>
        <Link to={link} className="location-link">
          see location
        </Link>
      </div>
    </div>
  )
}
