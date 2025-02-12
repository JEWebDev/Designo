import { ProjectsNav } from "../layouts/projectsNav/ProjectsNav.jsx"

import { CallToAction } from "../components/callToAction/CallToAction.jsx"
import { Navbar } from "../components/navbar/Navbar.jsx"
import { MainButton } from "../components/main-button/MainButton.jsx"
import { ProjectCard } from "../components/projectCard/ProjectCard.jsx"
import { Footer } from "../components/footer/Footer.jsx"
export function HomePage() {
  return (
    <div className="home-page">
      <Navbar></Navbar>
      <div className="hero-wrapper">
        <section className="section__hero">
          <div className="hero__text">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <MainButton path="/about">learn more</MainButton>
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
      </div>

      <ProjectsNav>
        <ProjectCard
          styleClass="web orange-bg"
          title="web design"
          link="/web-design"
          img="/assets/home/mobile/image-web-design.jpg"
          imgTablet="/assets/home/tablet/image-web-design.jpg"
          imgDesktop="/assets/home/desktop/image-web-design-large.jpg"
          alt="A laptop for web design"
        ></ProjectCard>

        <ProjectCard
          styleClass="app"
          title="app design"
          link="/app-design"
          img="/assets/home/mobile/image-app-design.jpg"
          imgTablet="/assets/home/tablet/image-app-design.jpg"
          imgDesktop="/assets/home/desktop/image-app-design.jpg"
          alt="A laptop for web design"
        ></ProjectCard>

        <ProjectCard
          styleClass="graphic"
          title="graphic design"
          link="/graphic-design"
          img="/assets/home/mobile/image-graphic-design.jpg"
          imgTablet="/assets/home/tablet/image-graphic-design.jpg"
          imgDesktop="/assets/home/desktop/image-graphic-design.jpg"
          alt="A laptop for web design"
        ></ProjectCard>
      </ProjectsNav>

      <section className="section__service-description">
        <ul className="service__perks">
          <li className="perk">
            <img
              src="/assets/home/desktop/illustration-passionate.svg"
              alt="a person smiling with a pen in hand"
              className="perk__img"
            />
            <div className="perk__text">
              <h3 className="text__heading">passionate</h3>
              <p className="text__description">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </li>

          <li className="perk">
            <img
              src="/assets/home/desktop/illustration-resourceful.svg"
              alt="a person smiling with a pen in hand"
              className="perk__img"
            />
            <div className="perk__text">
              <h3 className="text__heading">resourceful</h3>
              <p className="text__description">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fullfil our
                clients needs.
              </p>
            </div>
          </li>

          <li className="perk">
            <img
              src="/assets/home/desktop/illustration-friendly.svg"
              alt="a person smiling with a pen in hand"
              className="perk__img"
            />
            <div className="perk__text">
              <h3 className="text__heading">friendly</h3>
              <p className="text__description">
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  )
}
