import { Navbar } from "../components/navbar/Navbar.jsx"
import { CallToAction } from "../components/callToAction/CallToAction.jsx"
import { Footer } from "../components/footer/Footer.jsx"
import { LocationCard } from "../components/locationCard/LocationCard.jsx"
import "../contact.css"
export function ContactPage() {
  return (
    <div className="contact-page">
      <div className="web-design-page">
        <Navbar></Navbar>
        <section className="contact-section">
          <div className="content">
            <div className="text">
              <h1>Contact Us</h1>
              <p>
                Ready to take it to the next level? Let&apos;s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that&apos;s
                relatable to your users, drop us a line.
              </p>
            </div>

            <form id="contact-form">
              <label htmlFor="name" aria-label="name"></label>
              <input type="text" name="name" placeholder="Name" required />
              <label htmlFor="email" aria-label="email"></label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <label htmlFor="phone" aria-label="phone number"></label>
              <input type="tel" name="phone" placeholder="Phone" required />
              <label htmlFor="message" aria-label="message"></label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
              ></textarea>
              <button>submit</button>
            </form>
          </div>
        </section>
        <section className="locations">
          <LocationCard
            img="/assets/shared/desktop/illustration-canada.svg"
            heading="Canada"
            link="/locations/#Canada"
          />
          <LocationCard
            img="/assets/shared/desktop/illustration-australia.svg"
            heading="Australia"
            link="/locations/#Australia"
          />
          <LocationCard
            img="/assets/shared/desktop/illustration-united-kingdom.svg"
            heading="United Kingdom"
            link="/locations/#united-kingdom"
          />
        </section>
        <CallToAction />
        <Footer />
      </div>
    </div>
  )
}
