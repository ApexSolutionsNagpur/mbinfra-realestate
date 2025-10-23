import { ShoppingCart, School, Shield, Utensils, TreePine, Building2, Heart, Coffee } from 'lucide-react';

export default function NearbyAttractions() {
  const mainAttractions = [
    { 
      icon: <ShoppingCart size={40} />, 
      title: "Dmart", 
      description: "Convenient shopping destination with daily essentials, groceries, and household items.",
      distance: "0.7 km",
      time: "5 min walk",
      category: "Shopping"
    },
    { 
      icon: <School size={40} />, 
      title: "School Schoolers", 
      description: "Premium educational institution with modern facilities and experienced faculty.",
      distance: "0.1 km",
      time: "1 min walk",
      category: "Education"
    },
    { 
      icon: <Shield size={40} />, 
      title: "Police Station", 
      description: "24/7 security and emergency services ensuring neighborhood safety.",
      distance: "0.4 km",
      time: "2 min walk",
      category: "Security"
    }
  ];

  const otherAttractions = [
    { icon: <Utensils size={24} />, title: "Restaurants", distance: "0.3 km" },
    { icon: <TreePine size={24} />, title: "Central Park", distance: "0.9 km" },
    { icon: <Building2 size={24} />, title: "Bank", distance: "0.7 km" },
    { icon: <Heart size={24} />, title: "Hospital", distance: "1.5 km" },
    { icon: <Coffee size={24} />, title: "Cafes", distance: "0.4 km" },
    { icon: <ShoppingCart size={24} />, title: "Mall", distance: "2.1 km" }
  ];

  return (
    <section className="nearby-attractions-section">
      <div className="attractions-container">
        {/* Section Header */}
        <div className="attractions-header">
          <div className="subtitle">EXPLORE NEARBY</div>
          <h2 className="main-title">Nearby Attractions</h2>
          <p className="section-description">
            Everything you need is just a short distance away from your new home
          </p>
        </div>

        {/* Main Attractions Grid */}
        <div className="main-attractions-grid">
          {mainAttractions.map((attraction, index) => (
            <div key={index} className="attraction-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon-wrapper">
                    <div className="icon-circle">
                      {attraction.icon}
                    </div>
                    <div className="distance-badge">
                      {attraction.distance}
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <span className="category-tag">{attraction.category}</span>
                    <h3 className="attraction-title">{attraction.title}</h3>
                    <p className="attraction-description">{attraction.description}</p>
                    <div className="time-indicator">
                      <span className="time-text">{attraction.time}</span>
                    </div>
                  </div>
                  
                  <div className="card-hover-indicator">
                    <span>View Details</span>
                  </div>
                </div>
                
                <div className="card-back">
                  <div className="back-content">
                    <h4>Quick Facts</h4>
                    <div className="facts-list">
                      <div className="fact-item">
                        <span className="fact-label">Distance:</span>
                        <span className="fact-value">{attraction.distance}</span>
                      </div>
                      <div className="fact-item">
                        <span className="fact-label">Walking Time:</span>
                        <span className="fact-value">{attraction.time}</span>
                      </div>
                      <div className="fact-item">
                        <span className="fact-label">Category:</span>
                        <span className="fact-value">{attraction.category}</span>
                      </div>
                    </div>
                    <button className="direction-button">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Attractions */}
        <div className="other-attractions-section">
          <h3 className="other-attractions-title">More Nearby Places</h3>
          <div className="other-attractions-grid">
            {otherAttractions.map((attraction, index) => (
              <div key={index} className="small-attraction-card" data-aos="zoom-in" data-aos-delay={index * 50}>
                <div className="small-icon">
                  {attraction.icon}
                </div>
                <div className="small-card-content">
                  <h4 className="small-title">{attraction.title}</h4>
                  <span className="small-distance">{attraction.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}