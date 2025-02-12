/* eslint-disable react/prop-types */
import "./navCard.css"
import { Link } from "react-router"
export function NavCard({
  title,
  img,
  imgTablet,
  imgDesktop,
  alt,
  styleClass,
  link,
}) {
  return (
    <div className={styleClass ? `project-card ${styleClass}` : `project-card`}>
      <div className="card-text">
        <h2>{title}</h2>
        <Link to={link} className="project-link">
          view projects
          <img
            src="/assets/shared/desktop/icon-right-arrow.svg"
            alt="right arrow"
          />
        </Link>
      </div>
      <picture>
        <source media="(min-width: 1024px)" srcSet={imgDesktop} />
        <source media="(min-width: 678px)" srcSet={imgTablet} />
        <img src={img} alt={alt} />
      </picture>
    </div>
  )
}
