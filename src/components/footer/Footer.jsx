import "./footer.css"
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <header>
          <img
            src="/assets/shared/desktop/logo-light.png"
            alt="designo logo"
            width="197px"
            height="auto"
            className="logo"
          />
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#">our company</a>
              </li>
              <li>
                <a href="#">locations</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="footer-text">
          <div className="direction-card">
            <h5>Designo Central Office</h5>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="contact-card">
            <h5>Contact Us(Central Office)</h5>
            <p>P: +1 253-863-8967</p>
            <p>M: contact@designo.co</p>
          </div>

          <ul className="socials">
            <li>
              <a href="https://facebook.com">
                <img
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a href="https://youtube.com">
                <img
                  src="/assets/shared/desktop/icon-youtube.svg"
                  alt="youtube"
                />
              </a>
            </li>
            <li>
              <a href="https://x.com">
                <img
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt="x formerly twitter"
                />
              </a>
            </li>
            <li>
              <a href="https://pinterest.com">
                <img
                  src="/assets/shared/desktop/icon-pinterest.svg"
                  alt="pinterest"
                />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt="instagram"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
