import "./App.css"
import { Header } from "./components/header/Header"
import { MainButton } from "./components/main-button/MainButton"
import { ProjectCard } from "./components/projectCard/ProjectCard"

function App() {
  return (
    <div className="home-page">
      <Header></Header>
      <section className="section__hero">
        <div className="hero__text">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <MainButton>learn more</MainButton>
        </div>
        <div className="hero__img">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/home/desktop/image-hero-phone-desktop.png"
            />
            <img
              src="/assets/home/desktop/image-hero-phone.png"
              alt="designo mobile mockup"
            />
          </picture>
        </div>
      </section>

      <section className="section__projects">
        <ProjectCard
          styleClass="web orange-bg"
          title="web design"
          img="/assets/home/mobile/image-web-design.jpg"
          imgTablet="/assets/home/tablet/image-web-design.jpg"
          imgDesktop="/assets/home/desktop/image-web-design-large.jpg"
          alt="A laptop for web design"
        ></ProjectCard>

        <ProjectCard
          styleClass="app"
          title="app design"
          img="/assets/home/mobile/image-app-design.jpg"
          imgTablet="/assets/home/tablet/image-app-design.jpg"
          imgDesktop="/assets/home/desktop/image-app-design.jpg"
          alt="A laptop for web design"
        ></ProjectCard>

        <ProjectCard
          styleClass="graphic"
          title="graphic design"
          img="/assets/home/mobile/image-graphic-design.jpg"
          imgTablet="/assets/home/tablet/image-graphic-design.jpg"
          imgDesktop="/assets/home/desktop/image-graphic-design.jpg"
          alt="A laptop for web design"
        ></ProjectCard>
      </section>
    </div>
  )
}

export default App
