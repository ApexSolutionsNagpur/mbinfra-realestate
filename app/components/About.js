import { Phone } from 'lucide-react';
const About = () => {
  return (
    <section className="about-agency-section">
      <div className="about-agency-container">
        {/* Left Column - Image Layers */}
        <div className="image-column">
          <div className="image-layers-wrapper">
            <div className="img-layer slide_down" style={{ zIndex: 1 }}>
              <div className="img-layer_item">
                <div className="img-layer_image">
                  <img
                    decoding="async"
                    src="about_1.png"
                    alt="Luxury apartment interior"
                  />
                </div>
              </div>
            </div>
            <div className="img-layer slide_up" style={{ zIndex: 1 }}>
              <div className="img-layer_item">
                <div className="img-layer_image">
                  <img
                    decoding="async"
                    src="about_2.png"
                    alt="Modern architecture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="content-column">
          <div className="spacer"></div>

          <div className="heading-wrapper">
            <div className="subtitle">ABOUT MB INFRA</div>
            <div className="title-wrapper">
              <h3 className="main-title">
                <span className="title-line-1">Elegance & Luxury Apartments.</span>
                <span className="title-line-2">Grand Architecture</span>
              </h3>
            </div>
          </div>

          <div className="description">
            <p>
              <strong>MB INFRA</strong> is a distinguished real estate firm guided by a team of seasoned directors with over 22 years of valuable experience in the industry. Our illustrious journey has witnessed the successful sale of approximately 25 lakhs square feet of plotable land, as well as the construction of approximately 3,50,000 square feet of residential and commercial developments.We specialize in crafting exceptional commercial and residential buildings, driven by our commitment to excellence, innovation, and an unwavering dedication to delivering the finest real estate solutions. With a rich history of achievement and a relentless pursuit of excellence, MB INFRA is your trusted partner in building the future.Above all, we take great pride in having fulfilled the dreams of over 1800+ families & counting by providing them with their dream homes.
            </p>
          </div>

          <div className="buttons-wrapper">
            <a className="agency-button primary" href="/about">
              <div className="button-content">
                <span className="button-text">More About Us</span>
              </div>
            </a>

            <a className="agency-button secondary" href="tel:+918806600113">
              <div className="button-content">
                <Phone size={16} style={{ marginRight: '8px' }} />
                <span className="button-text">+91-8806600113</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;