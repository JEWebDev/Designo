import "./App.css"
import { Header } from "./components/header/Header"
import { MainButton } from "./components/main-button/MainButton"

function App() {
  return (
    <div className="home-page">
      <Header></Header>
      <section className="hero-section">
        <div className="hero-text">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <MainButton>learn more</MainButton>
        </div>
        <div className="hero-img">
          <img
            src="/assets/home/desktop/image-hero-phone.png"
            alt="mobile mockup"
            height="573px"
          />
        </div>
      </section>
    </div>
  )
}

export default App
