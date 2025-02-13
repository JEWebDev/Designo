/* eslint-disable react/prop-types */
import "./pageHeader.css"
export function PageHeader({ heading, description }) {
  return (
    <section className="page-header">
      <div className="content">
        <div className="content-text">
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}
