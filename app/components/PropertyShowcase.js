const PropertyShowcase = () => {
  const floorPlans = [
    {
      id: 1,
      title: "Ruby",
      description: "Luxurious 2BHK apartment with modern amenities",
      image: "https://wgl-dsites.net/quere/wp-content/uploads/2023/07/plan-1.png",
      bgText: "R",
      link: "#",
      details: {
        sqft: "1250 - 1890 sqft",
        bedrooms: "2/3 Bedrooms",
        bathrooms: "2/3 Bathrooms",
        kitchen: "Modular Kitchen",
        parking: "1 Car Parking",
        price: "₹59.99 Lakhs onwords"
      }
    },
    {
      id: 2,
      title: "Emerald",
      description: "Spacious 3BHK with balcony and garden view",
      image: "https://wgl-dsites.net/quere/wp-content/uploads/2023/07/plan-2.png",
      bgText: "E",
      link: "#",
      details: {
        sqft: "1210 - 2080 sqft",
        bedrooms: "2/3 Bedrooms",
        bathrooms: "2/3 Bathrooms",
        kitchen: "Modular Kitchen",
        parking: "2 Car Parking",
        price: "₹59.99 Lakhs onwords"
      }
    },
    {
      id: 3,
      title: "Pearl",
      description: "Elegant 2BHK with premium finishes",
      image: "https://wgl-dsites.net/quere/wp-content/uploads/2023/07/plan-3.png",
      bgText: "P",
      link: "#",
      details: {
        sqft: "1175 - 1530 sqft",
        bedrooms: "2/3 Bedrooms",
        bathrooms: "2/3 Bathrooms",
        kitchen: "Modular Kitchen",
        parking: "1 Car Parking",
        price: "₹59.99 Lakhs onwords"
      }
    },
    {
      id: 4,
      title: "Topaz",
      description: "Premium 4BHK duplex with private terrace",
      image: "https://wgl-dsites.net/quere/wp-content/uploads/2023/07/plan-1.png", // Replace with actual image
      bgText: "T",
      link: "#",
      details: {
        sqft: "1185 - 1540 sqft",
        bedrooms: "2/3 Bedrooms",
        bathrooms: "2/3 Bathrooms",
        kitchen: "Modular Kitchen",
        parking: "2 Car Parking",
        price: "₹1.2 Crore"
      }
    }
  ];

  return (
    <section id="property-showcase" className="floorplan-showcase" style={{ backgroundColor: '#000000', padding: '80px 0' }}>
      <div className="floorplan-container">
        {floorPlans.map(plan => (
          <div key={plan.id} className="floorplan-card">
            <div className="card-inner">
              {/* Front of the card */}
              <div className="card-front">
                <div className="plan-image-wrapper">
                  <img 
                    src={plan.image} 
                    alt={plan.title}
                    className="plan-image"
                  />
                </div>
                <div className="plan-content">
                  <div className="plan-title-wrapper">
                    <h3 className="plan-title">{plan.title}</h3>
                  </div>
                  <div className="plan-description">
                    <p>{plan.description}</p>
                  </div>
                  <div className="plan-bg-text">{plan.bgText}</div>
                  <div className="plan-hover-text">
                    <span>Hover for Details</span>
                  </div>
                </div>
              </div>
              
              {/* Back of the card - Details */}
              <div className="card-back">
                <div className="plan-details">
                  <h3 className="details-title">{plan.title} - Details</h3>
                  <div className="details-list">
                    <div className="detail-item">
                      <span className="detail-label">Area:</span>
                      <span className="detail-value">{plan.details.sqft}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Bedrooms:</span>
                      <span className="detail-value">{plan.details.bedrooms}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Bathrooms:</span>
                      <span className="detail-value">{plan.details.bathrooms}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Kitchen:</span>
                      <span className="detail-value">{plan.details.kitchen}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Parking:</span>
                      <span className="detail-value">{plan.details.parking}</span>
                    </div>
                    <div className="detail-item price">
                      <span className="detail-label">Price:</span>
                      <span className="detail-value">{plan.details.price}</span>
                    </div>
                  </div>
                  <div className="details-button-wrapper">
                    <a href={plan.link} className="details-button">
                      <span>View Floor Plan</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyShowcase;