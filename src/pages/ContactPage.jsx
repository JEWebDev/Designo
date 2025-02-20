import { Navbar } from "../components/navbar/Navbar.jsx"
import { CallToAction } from "../components/callToAction/CallToAction.jsx"
import { Footer } from "../components/footer/Footer.jsx"
import { LocationCard } from "../components/locationCard/LocationCard.jsx"
import "../contact.css"

import { formSchema } from "../schemas/formSchema.js"
import { useState } from "react"
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const result = formSchema.safeParse(formData)
    if (result.success) {
      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      return true
    } else {
      const newErrors = {}
      result.error.errors.forEach((error) => {
        newErrors[error.path[0]] = error.message
      })
      setErrors(newErrors)
      console.log(result)
      return false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Form submitted")
      console.log(formData)

      //reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }
  }
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

            <form id="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name" aria-label="name"></label>
              <div className="wrapper">
                <input
                  className={errors.name ? "error" : ""}
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <label htmlFor="email" aria-label="email"></label>
              <div className="wrapper">
                <input
                  className={errors.email ? "error" : ""}
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <label htmlFor="phone" aria-label="phone number"></label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              <label
                htmlFor="message"
                name="message"
                id="message"
                aria-label="message"
              ></label>
              <div className="wrapper">
                <textarea
                  className={errors.message ? "error" : ""}
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                ></textarea>
                {errors.message && (
                  <p className="error-text">{errors.message}</p>
                )}
              </div>
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
