import { Navbar } from "../components/navbar/Navbar"
import { AboutCard } from "../components/aboutCard/AboutCard.jsx"
import { CallToAction } from "../components/callToAction/CallToAction.jsx"
import { Footer } from "../components/footer/Footer.jsx"
import { LocationCard } from "../components/locationCard/LocationCard.jsx"
export function AboutPage() {
  return (
    <div className="about-page">
      <Navbar></Navbar>
      <section className="hero-section">
        <AboutCard
          styleClass="orange-bg row-reverse"
          heading="About Us"
          description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our client's audiences"
          img="/assets/about/mobile/image-about-hero.jpg"
          imgTablet="/assets/about/tablet/image-about-hero.jpg"
          imgDesktop="/assets/about/desktop/image-about-hero.jpg"
        />
      </section>

      <AboutCard
        styleClass="pale-bg"
        heading="World-class talent"
        description={`We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.`}
        img="/assets/about/mobile/image-world-class-talent.jpg"
        imgTablet="/assets/about/tablet/image-world-class-talent.jpg"
        imgDesktop="/assets/about/desktop/image-world-class-talent.jpg"
      >
        <p>
          Our team is multi-disciplinary and we are not merely in form - content
          and meaning are just as important. We give great importance to
          craftsmanship, service and prompt delivery. Clients have been
          impressed with our high-quality outcomes that encapsulates their
          brand&apos;s story and mission.
        </p>
      </AboutCard>
      <section className="locations">
        <LocationCard
          img="/assets/shared/desktop/illustration-canada.svg"
          heading="Canada"
          link="/locations/#canada"
        />
        <LocationCard
          img="/assets/shared/desktop/illustration-australia.svg"
          heading="Australia"
          link="/locations/#australia"
        />
        <LocationCard
          img="/assets/shared/desktop/illustration-united-kingdom.svg"
          heading="United Kingdom"
          link="/locations/#united-kingdom"
        />
      </section>
      <AboutCard
        styleClass="pale-bg row-reverse"
        heading="The real deal"
        description={`As strategic partners in our client's businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.`}
        img="/assets/about/mobile/image-real-deal.jpg"
        imgTablet="/assets/about/tablet/image-real-deal.jpg"
        imgDesktop="/assets/about/desktop/image-real-deal.jpg"
      >
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </AboutCard>
      <CallToAction />
      <Footer />
    </div>
  )
}
