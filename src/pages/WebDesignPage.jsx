import { Navbar } from "../components/navbar/Navbar.jsx"
import { PageHeader } from "../components/pageHeader/PageHeader.jsx"
import { ProjectsNav } from "../layouts/projectsNav/ProjectsNav.jsx"
import { NavCard } from "../components/navCard/NavCard.jsx"
import { ProjectsGrid } from "../layouts/projectsGrid/ProjectsGrid.jsx"
import { ProjectCard } from "../components/projectCard/ProjectCard.jsx"
import { CallToAction } from "../components/callToAction/CallToAction.jsx"
import { Footer } from "../components/footer/Footer.jsx"

export function WebDesignPage() {
  return (
    <div className="web-design-page">
      <Navbar></Navbar>

      <PageHeader
        heading="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />

      <ProjectsGrid>
        <ProjectCard
          img="/assets/web-design/desktop/image-express.jpg"
          heading="Express"
          description="A multi-carrier shipping website for ecommerce business"
        />
        <ProjectCard
          img="/assets/web-design/desktop/image-transfer.jpg"
          heading="transfer"
          description="Site for low-cost money transfer and sending money within seconds"
        />

        <ProjectCard
          img="/assets/web-design/desktop/image-photon.jpg"
          heading="photon"
          description="A state-of-the-art music player with high-resolution audio and DSP effects"
        />

        <ProjectCard
          img="/assets/web-design/desktop/image-builder.jpg"
          heading="builder"
          description="Connects users with local contractors based on their location"
        />

        <ProjectCard
          img="/assets/web-design/desktop/image-blogr.jpg"
          heading="blogr"
          description="Blogr is a platform for creating an online blog or publication"
        />

        <ProjectCard
          img="/assets/web-design/desktop/image-camp.jpg"
          heading="camp"
          description="Get expert training in coding, data, design and digital marketing"
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
