import { Navbar } from "../components/navbar/Navbar.jsx"
import { PageHeader } from "../components/pageHeader/PageHeader.jsx"
import { ProjectsGrid } from "../layouts/projectsGrid/ProjectsGrid.jsx"
import { ProjectCard } from "../components/projectCard/ProjectCard.jsx"
import { ProjectsNav } from "../layouts/projectsNav/ProjectsNav.jsx"
import { NavCard } from "../components/navCard/NavCard.jsx"
import { CallToAction } from "../components/callToAction/CallToAction.jsx"
import { Footer } from "../components/footer/Footer.jsx"
export function GraphicDesignPage() {
  return (
    <div className="graphic-design-page">
      <Navbar></Navbar>
      <PageHeader
        heading="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives"
      />
      <ProjectsGrid>
        <ProjectCard
          img="/assets/graphic-design/desktop/image-change.jpg"
          heading="tim brown"
          description="A book cover designed for Tim Brown's new release, 'Change'"
        />

        <ProjectCard
          img="/assets/graphic-design/desktop/image-boxed-water.jpg"
          heading="boxed water"
          description="A simple packaging concept made for Boxed Water"
        />

        <ProjectCard
          img="/assets/graphic-design/desktop/image-science.jpg"
          heading="science!"
          description="A poster made in collaboration with the Federal Art Project"
        />
      </ProjectsGrid>

      <ProjectsNav>
        <NavCard
          styleClass="app"
          title="app design"
          link="/app-design"
          img="/assets/home/mobile/image-app-design.jpg"
          imgTablet="/assets/home/tablet/image-app-design.jpg"
          imgDesktop="/assets/home/desktop/image-app-design.jpg"
          alt="A laptop for web design"
        />
        <NavCard
          styleClass="app"
          title="web-design"
          link="/web-design"
          img="/assets/home/mobile/image-web-design.jpg"
          imgTablet="/assets/home/tablet/image-web-design.jpg"
          imgDesktop="/assets/home/desktop/image-web-design-large.jpg"
          alt="A laptop for web design"
        />
      </ProjectsNav>
      <CallToAction />
      <Footer></Footer>
    </div>
  )
}
