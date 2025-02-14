/* eslint-disable react/prop-types */
import "./aboutCard.css"
export function AboutCard({
  img,
  imgTablet,
  imgDesktop,
  heading,
  description,
  alt,
  styleClass,
  children,
}) {
  return (
    <div className={styleClass ? `about-card ${styleClass}` : `about-card`}>
      <div
        className={
          styleClass?.includes("row-reverse")
            ? "content row-reverse"
            : "content"
        }
      >
        <picture>
          <source media="(min-width: 1024px)" srcSet={imgDesktop} />
          <source media="(min-width: 600px)" srcSet={imgTablet} />
          <img src={img} alt={alt} />
        </picture>
        <div className="about-text">
          <h2>{heading}</h2>
          <p>{description}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
