import "./callToAction.css"
import { MainButton } from "../main-button/MainButton"
export function CallToAction() {
  return (
    <section className="call-to-action-section">
      <div className="content">
        <h3>Lets Talk about your project</h3>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <MainButton theme="light" link="#">
          get in touch
        </MainButton>
      </div>
    </section>
  )
}
