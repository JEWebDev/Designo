import { Navbar } from "../components/navbar/Navbar.jsx"
import { PageHeader } from "../components/pageHeader/PageHeader.jsx"
import { ProjectsGrid } from "../layouts/projectsGrid/ProjectsGrid.jsx"
import { ProjectCard } from "../components/projectCard/ProjectCard.jsx"
import { ProjectsNav } from "../layouts/projectsNav/ProjectsNav.jsx"
import { NavCard } from "../components/navCard/NavCard.jsx"
import { CallToAction } from "../components/callToAction/CallToAction.jsx"
import { Footer } from "../components/footer/Footer.jsx"
export function AppDesignPage() {
  return (
    <div className="web-design-page">
      <Navbar></Navbar>

      <PageHeader
        heading="App Design"
        description="Our mobile designs bring intuitive solutions to your customers right at their fingertips."
      />

      <ProjectsGrid>
        <ProjectCard
          img="/assets/app-design/desktop/image-airfilter.jpg"
          heading="airfilter"
          description="Solving the problem of poor indoor air quality by filtering the air"
        />
        <ProjectCard
          img="/assets/app-design/desktop/image-eyecam.jpg"
          heading="eyecam"
          description="Product that lets you edit your favorite photos and videos at any time"
        />

        <ProjectCard
          img="/assets/app-design/desktop/image-faceit.jpg"
          heading="faceit"
          description="Get to meet your favorite internet superstar with faceit app"
        />

        <ProjectCard
          img="/assets/app-design/desktop/image-todo.jpg"
          heading="todo"
          description="A todo app that features cloud sync with light and dark mode"
        />

        <ProjectCard
          img="/assets/app-design/desktop/image-loopstudios.jpg"
          heading="loopstudios"
          description="A VR experience app made for Loopstudios"
        />
      </ProjectsGrid>

      <ProjectsNav>
        <NavCard
          styleClass="app"
          title="web-design"
          link="/web-design"
          img="/assets/home/mobile/image-web-design.jpg"
          imgTablet="/assets/home/tablet/image-web-design.jpg"
          imgDesktop="/assets/home/desktop/image-web-design-large.jpg"
          alt="A laptop for web design"
        ></NavCard>

        <NavCard
          styleClass="graphic"
          title="graphic design"
          link="/graphic-design"
          img="/assets/home/mobile/image-graphic-design.jpg"
          imgTablet="/assets/home/tablet/image-graphic-design.jpg"
          imgDesktop="/assets/home/desktop/image-graphic-design.jpg"
          alt="A laptop for web design"
        ></NavCard>
      </ProjectsNav>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  )
}
