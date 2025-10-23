import { Building, Award, Users, Target, Heart, Home, LandPlot } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '22+', label: 'Years Experience', icon: <Award className="about-stat-icon" /> },
    { number: '25L+', label: 'Sq Ft Land Sold', icon: <LandPlot className="about-stat-icon" /> },
    { number: '3.5L+', label: 'Sq Ft Constructed', icon: <Building className="about-stat-icon" /> },
    { number: '1800+', label: 'Dream Homes Delivered', icon: <Home className="about-stat-icon" /> }
  ];

  const values = [
    {
      icon: <Heart className="about-value-icon" />,
      title: 'Excellence',
      description: 'We never compromise on quality and ensure every project meets the highest standards of craftsmanship.'
    },
    {
      icon: <Target className="about-value-icon" />,
      title: 'Innovation',
      description: 'Driven by innovation to deliver the finest real estate solutions with modern techniques.'
    },
    {
      icon: <Award className="about-value-icon" />,
      title: 'Commitment',
      description: 'Unwavering dedication to delivering exceptional commercial and residential buildings.'
    },
    {
      icon: <Users className="about-value-icon" />,
      title: 'Trust',
      description: 'Your trusted partner in building the future with transparency and reliability.'
    }
  ];

  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-main-title">About MB INFRA</h1>
          <p className="about-hero-text">
            For over 22 years, MB INFRA has been shaping skylines and building dreams across Central India. 
            We are committed to excellence in construction and creating luxury living experiences.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats-section">
        <div className="about-container">
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-card">
                {stat.icon}
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Story Section */}
      <div className="about-fullwidth-section">
        <div className="about-container-full">
          <div className="about-story-fullwidth">
            <h2 className="about-section-title">Our Story</h2>
            <div className="about-story-content-full">
              <p className="about-story-text">
                <strong>MB INFRA - Building Dreams Since 2002</strong>
              </p>
              <p className="about-story-text">
                For over 22 years, MB INFRA has been synonymous with excellence in the real estate industry. Our illustrious journey began with a simple vision: to transform the landscape of luxury living in Central India.
              </p>
              <p className="about-story-text">
                What started as a dream has now flourished into a legacy of trust and excellence. We've successfully sold approximately 25 lakhs square feet of plotable land and constructed approximately 3,50,000 square feet of residential and commercial developments. But beyond these numbers lies our true achievement - fulfilling the dreams of over <strong>1800+ families</strong> by providing them with their dream homes.
              </p>
              <p className="about-story-text">
                From our first project to the magnificent Royal Empire, each development carries our signature commitment to quality, innovation, and customer satisfaction. Our story is woven into the fabric of every home we build, every community we create, and every dream we help realize.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section - Text Left, Image Right */}
      <div className="about-mission-section">
        <div className="about-container">
          <div className="about-mission-grid">
            <div className="about-mission-content">
              <h2 className="about-section-title">Our Mission</h2>
              <p className="about-story-text"><strong>Crafting Exceptional Living Experiences</strong></p>
              <p className="about-story-text">
                At MB INFRA, our mission is to redefine luxury living through innovative design, superior craftsmanship, and unwavering commitment to excellence. We believe that a home is more than just four walls - it's a sanctuary where dreams take shape and memories are made.
              </p>
              <ul className="about-mission-list">
                <li className="about-story-text">Creating exceptional commercial and residential spaces that exceed expectations</li>
                <li className="about-story-text">Delivering the finest real estate solutions through innovation and expertise</li>
                <li className="about-story-text">Building sustainable communities that enhance quality of life</li>
                <li className="about-story-text">Maintaining the highest standards of quality and customer service</li>
                <li className="about-story-text">Being the trusted partner our clients can rely on for generations</li>
              </ul>
            </div>
            <div className="about-mission-image">
              <img 
                src="/hero/2.jpg" 
                alt="MB INFRA Mission" 
                className="about-image"
              />
              <div className="about-image-overlay">
                <h3>Our Mission</h3>
                <p>Crafting Exceptional Living</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section - Text Right, Image Left */}
      <div className="about-vision-section">
        <div className="about-container">
          <div className="about-vision-grid">
            <div className="about-vision-image">
              <img 
                src="/hero/3.jpg" 
                alt="MB INFRA Vision" 
                className="about-image"
              />
              <div className="about-image-overlay">
                <h3>Our Vision</h3>
                <p>Redefining Luxury Living</p>
              </div>
            </div>
            <div className="about-vision-content">
              <h2 className="about-section-title">Our Vision</h2>
              <p className="about-story-text"><strong>Redefining Luxury Living - The Royal Empire Experience</strong></p>
              <p className="about-story-text"><em>"It is about living the luxury"</em></p>
              <p className="about-story-text">
                We envision creating residential havens where luxury knows no bounds. The Royal Empire represents our commitment to providing more than just a place to reside - it's a lifestyle that exudes opulence at every turn.
              </p>
              <p className="about-story-text">
                Set amidst pristine landscapes, The Royal Empire offers an exclusive sanctuary for those who seek the finest in life. From the moment you step through its regal gates, you'll be immersed in a world of extravagance.
              </p>
              <p className="about-story-text">
                Our vision is to create spaces where contemporary convenience seamlessly marries with enduring elegance, and every residence becomes a testament to extraordinary design and meticulous craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-values-section">
        <div className="about-container">
          <h2 className="text-center about-section-title">Our Core Values</h2>
          <p className="text-center about-section-subtitle">
            The principles that guide every project we undertake
          </p>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card">
                <div className="about-value-icon-wrapper">
                  {value.icon}
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Ready to Build Your Dream?</h2>
            <p className="about-cta-text">
              Join the 1800+ families who have trusted MB INFRA with their dream homes. 
              Let's build your legacy together.
            </p>
            <button className="about-cta-button">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;