import { Navbar } from "../components/navbar/Navbar"
import { CallToAction } from "../components/callToAction/CallToAction.jsx"
import { Footer } from "../components/footer/Footer.jsx"

import "../locations.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"
export function LocationsPage() {
  return (
    <div className="locations-page">
      <Navbar></Navbar>

      <section className="locations-section">
        <div className="map Canada" id="Canada">
          <MapContainer center={[43.6440066, -79.3971137]} zoom={13}>
            <TileLayer
              attribution="Open Street View"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          {/* <picture>
            <source
              media="(min-width: 700px)"
              srcSet="/assets/locations/tablet/image-map-canada.png"
            />
            <img src="/assets/locations/desktop/image-map-canada.png" alt="" />
          </picture> */}
        </div>

        <div className="location-info c">
          <h2>Canada</h2>

          <div className="wrapper">
            <div className="direction">
              <h3>Designo Central Office</h3>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>

            <div className="contact">
              <h3>Contact</h3>
              <p>P: +1 253-863-8967</p>
              <p>M: contact@designo.co</p>
            </div>
          </div>
        </div>

        <div className="map Australia" id="Australia">
          <MapContainer center={[-30.3294275, 149.7856209]} zoom={13}>
            <TileLayer
              attribution="Open Street View"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          {/* <picture>
            <source
              media="(min-width: 700px)"
              srcSet="/assets/locations/tablet/image-map-australia.png"
            />
            <img
              src="/assets/locations/desktop/image-map-australia.png"
              alt=""
            />
          </picture> */}
        </div>

        <div className="location-info a">
          <h2>Australia</h2>

          <div className="wrapper">
            <div className="direction">
              <h3>Designo AU Office</h3>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>

            <div className="contact">
              <h3>Contact</h3>
              <p>P: (02) 6720 9092</p>
              <p>M: contact@designo.au</p>
            </div>
          </div>
        </div>

        <div className="map united-kingdom" id="united-kingdom">
          <MapContainer center={[53.7102644, -1.360203]} zoom={13}>
            <TileLayer
              attribution="Open Street View"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          {/* <picture>
            <source
              media="(min-width: 700px)"
              srcSet="/assets/locations/tablet/image-map-uk.png"
            />
            <img
              src="/assets/locations/desktop/image-map-united-kingdom.png"
              alt=""
            />
          </picture> */}
        </div>

        <div className="location-info u">
          <h2>United Kingdom</h2>

          <div className="wrapper">
            <div className="direction">
              <h3>Designo UK Office</h3>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>

            <div className="contact">
              <h3>Contact</h3>
              <p>P: +1 253-863-8967</p>
              <p>M: contact@designo.co</p>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </div>
  )
}
