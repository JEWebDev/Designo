/* eslint-disable react/prop-types */
import "./projectCard.css"
export function ProjectCard({ img, heading, description }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-text">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
