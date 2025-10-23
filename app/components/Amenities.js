import { Dumbbell, Waves, Trees, Car, Mountain, Baby } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { 
      icon: <Dumbbell size={32} />, 
      title: "Fitness Center", 
      description: "These agents work with clients to understand their needs and preferences and then help them find properties.",
      number: "1"
    },
    { 
      icon: <Waves size={32} />, 
      title: "Indoor Pool", 
      description: "These agents work with clients to understand their needs and preferences and then help them find properties.",
      number: "2"
    },
    { 
      icon: <Trees size={32} />, 
      title: "Rooftop Garden", 
      description: "These agents work with clients to understand their needs and preferences and then help them find properties.",
      number: "3"
    },
    { 
      icon: <Car size={32} />, 
      title: "Undercover Parking", 
      description: "These agents work with clients to understand their needs and preferences and then help them find properties.",
      number: "4"
    },
    { 
      icon: <Mountain size={32} />, 
      title: "Courtyard Terrace", 
      description: "These agents work with clients to understand their needs and preferences and then help them find properties.",
      number: "5"
    },
    { 
      icon: <Baby size={32} />, 
      title: "Playground", 
      description: "These agents work with clients to understand their needs and preferences and then help them find properties.",
      number: "6"
    },
  ];

  return (
    <section className="amenities-section">
      <div className="amenities-container">
        <div className="amenities-column">
          <div className="spacer"></div>
          
          <div className="amenities-heading">
            <div className="subtitle">WHAT WE OFFER</div>
            <div className="title-wrapper">
              <h3 className="main-title">
                <span className="title-line-1">Amenities &</span>
                <span className="title-line-2">Social Facilities</span>
              </h3>
            </div>
          </div>

          {/* First Row of Amenities */}
          <div className="amenities-row">
            {amenities.slice(0, 3).map((amenity, index) => (
              <div key={index} className="amenity-column">
                <div className="amenity-box">
                  <a className="amenity-link" href="/contacts"></a>
                  <div className="amenity-wrapper">
                    <div className="media-wrapper icon-wrapper">
                      <span className="amenity-icon">
                        {amenity.icon}
                      </span>
                    </div>
                    <div className="content-wrapper">
                      <div className="amenity-title-wrapper">
                        <h3 className="amenity-title">
                          <span className="amenity-title-text">{amenity.title}</span>
                        </h3>
                      </div>
                      <div className="amenity-content">
                        <p>{amenity.description}</p>
                      </div>
                      <div className="amenity-footer-wrapper">
                        <div className="amenity-footer-text">{amenity.number}</div>
                        <div className="amenity-footer-separator"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="amenity-spacer"></div>
              </div>
            ))}
          </div>

          {/* Second Row of Amenities */}
          <div className="amenities-row">
            {amenities.slice(3, 6).map((amenity, index) => (
              <div key={index} className="amenity-column">
                <div className="amenity-box">
                  <a className="amenity-link" href="/contacts"></a>
                  <div className="amenity-wrapper">
                    <div className="media-wrapper icon-wrapper">
                      <span className="amenity-icon">
                        {amenity.icon}
                      </span>
                    </div>
                    <div className="content-wrapper">
                      <div className="amenity-title-wrapper">
                        <h3 className="amenity-title">
                          <span className="amenity-title-text">{amenity.title}</span>
                        </h3>
                      </div>
                      <div className="amenity-content">
                        <p>{amenity.description}</p>
                      </div>
                      <div className="amenity-footer-wrapper">
                        <div className="amenity-footer-text">{amenity.number}</div>
                        <div className="amenity-footer-separator"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="amenity-spacer"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}