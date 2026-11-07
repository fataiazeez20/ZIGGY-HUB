
import './App.css'

// ZIGGY HUB business contact
const WHATSAPP_NUMBER = '2347010106630'

// Create WhatsApp links with prepared messages
function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function App() {
  return (
    <div className="site-container">

      {/* WEBSITE HEADER */}
      <header className="site-header">

        <a href="#home" className="brand-logo">
          ZIGGY <span>HUB.</span>
        </a>

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#closet">Closet</a>
          <a href="#academy">Academy</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href={whatsappLink('Hello ZIGGY HUB! I would like to make an enquiry.')}
          className="header-contact"
          target="_blank"
          rel="noreferrer"
        >
          Contact Us
        </a>

      </header>

      {/* MAIN HERO SECTION */}
      <main id="home">

        <section className="hero-section">

          <span className="hero-label">
            WELCOME TO ZIGGY HUB
          </span>

          <h1>
            FASHION.
            <br />
            CREATIVITY.
            <br />
            CRAFTSMANSHIP.
          </h1>

          <p>
            Discover streetwear, order custom-made garments
            and learn the art of sewing. Welcome to the world
            of ZIGGY HUB.
          </p>

          <a href="#closet" className="primary-button">
            EXPLORE OUR WORLD
          </a>

        </section>

        {/* BUSINESS DIVISIONS */}
        <section className="divisions-section">

          <span className="hero-label">
            WHAT WE DO
          </span>

          <h2 className="section-heading">
            MORE THAN A FASHION BRAND.
          </h2>

          <p className="section-description">
            ZIGGY HUB brings fashion, garment creation and
            practical fashion education together under one brand.
          </p>

          <div className="divisions-grid">

            {/* ZIGGY CLOSET */}
            <article className="division-card" id="closet">

              <span className="hero-label">
                FASHION & GARMENT
              </span>

              <h3>ZIGGY CLOSET</h3>

              <p>
                Explore our streetwear collection, discover
                ready-to-wear pieces or bring your own design
                and let us bring it to life.
              </p>

              <a
                href={whatsappLink(
                  'Hello ZIGGY CLOSET! I am interested in your streetwear collection.'
                )}
                className="division-link"
                target="_blank"
                rel="noreferrer"
              >
                SHOP WITH US →
              </a>

              <a
                href={whatsappLink(
                  'Hello ZIGGY CLOSET! I would like to request a custom garment. I have a design idea to share.'
                )}
                className="division-link"
                target="_blank"
                rel="noreferrer"
              >
                REQUEST A CUSTOM GARMENT →
              </a>

            </article>

            {/* ZIGGY ACADEMY */}
            <article className="division-card" id="academy">

              <span className="hero-label">
                FASHION EDUCATION
              </span>

              <h3>ZIGGY ACADEMY</h3>

              <p>
                Learn how to sew streetwear, understand garment
                construction and develop practical fashion skills.
                Join our physical training or purchase a sewing video course.
              </p>

              <a
                href={whatsappLink(
                  'Hello ZIGGY ACADEMY! I am interested in your physical sewing training at Atan, Ogun State.'
                )}
                className="division-link"
                target="_blank"
                rel="noreferrer"
              >
                APPLY FOR PHYSICAL TRAINING →
              </a>

              <a
                href={whatsappLink(
                  'Hello ZIGGY ACADEMY! Please send me your available sewing video courses and prices.'
                )}
                className="division-link"
                target="_blank"
                rel="noreferrer"
              >
                EXPLORE VIDEO COURSES →
              </a>

            </article>

          </div>

        </section>

      </main>

      {/* CONTACT AND SOCIAL MEDIA */}
      <footer className="site-footer" id="contact">

        <div className="footer-brand">
          ZIGGY HUB.
        </div>

        <p>
          Fashion. Creativity. Craftsmanship.
        </p>

        <p>
          For shopping, custom garment orders, academy
          applications and enquiries, contact us on WhatsApp.
        </p>

        <a
          href={whatsappLink('Hello ZIGGY HUB! I would like to make an enquiry.')}
          className="primary-button"
          target="_blank"
          rel="noreferrer"
        >
          CHAT WITH US ON WHATSAPP
        </a>

        <h3>CONNECT WITH US</h3>

        <p>
          ZIGGY HUB: {' '}
          <a href="https://x.com/ziggyhub" target="_blank" rel="noreferrer">
            X (Twitter)
          </a>
        </p>

        <p>
          ZIGGY CLOSET: {' '}
          <a href="https://instagram.com/ziggycloset" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>

        <p>
          ZIGGY ACADEMY: {' '}
          <a href="https://instagram.com/ziggyacademy" target="_blank" rel="noreferrer">
            Instagram
          </a>
          {' | '}
          <a href="https://tiktok.com/@ziggyacademy" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </p>

        <p>
          © {new Date().getFullYear()} ZIGGY HUB. All rights reserved.
        </p>

      </footer>

    </div>
  )
}

export default App
