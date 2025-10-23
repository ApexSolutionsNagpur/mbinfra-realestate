"use client";
import { useState } from 'react';
import { Dumbbell, Heart, Waves, Trees, Car, Mountain, Baby, Star } from 'lucide-react';

export default function WorldOfAmenities() {
  const [flippedCard, setFlippedCard] = useState(null);

  const amenities = [
    {
      id: 1,
      title: "Your Personal Gym",
      image: "gym.jpg",
      icon: <Dumbbell size={40} />,
      rating: 5,
      description: "State-of-the-art fitness center with modern equipment",
      details: {
        features: [
          "24/7 Access",
          "Personal Training Sessions",
          "Cardio Zone",
          "Weight Training",
          "Yoga Studio",
          "Steam Room"
        ],
        timing: "5:00 AM - 11:00 PM",
        trainer: "Certified Professional Trainers",
        equipment: "Life Fitness & Technogym"
      }
    },
    {
      id: 2,
      title: "Meditation Hall",
      image: "meditation_hall.jpg",
      icon: <Heart size={40} />,
      rating: 5,
      description: "Serene space for mindfulness and inner peace",
      details: {
        features: [
          "Soundproof Environment",
          "Natural Lighting",
          "Yoga Mats Provided",
          "Guided Meditation",
          "Aromatherapy",
          "Peaceful Ambiance"
        ],
        timing: "6:00 AM - 10:00 PM",
        capacity: "Up to 20 people",
        sessions: "Daily Yoga & Meditation Classes"
      }
    },
    {
      id: 3,
      title: "Swimming Pool",
      image: "night_swimming_pool.jpg",
      icon: <Waves size={40} />,
      rating: 5,
      description: "Luxurious swimming experience day and night",
      details: {
        features: [
          "Heated Pool",
          "Night Lighting",
          "Lap Pool Section",
          "Kids Pool Area",
          "Poolside Lounge",
          "Safety Lifeguard"
        ],
        timing: "6:00 AM - 10:00 PM",
        temperature: "Maintained at 28°C",
        maintenance: "Daily Water Quality Check"
      }
    },
    {
      id: 4,
      title: "Garden",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500",
      icon: <Trees size={40} />,
      rating: 5,
      description: "Lush green oasis with panoramic city views",
      details: {
        features: [
          "Organic Vegetable Garden",
          "Sitting Areas",
          "Barbecue Zone",
          "Children's Play Area",
          "Evening Lighting",
          "Water Features"
        ],
        timing: "5:00 AM - 11:00 PM",
        events: "Weekly Community Gardening",
        view: "360° City Panorama"
      }
    },
    {
      id: 5,
      title: "Basket Ball Court",
      image: "basketball_ground.jpg",
      icon: <Car size={40} />,
      rating: 5,
      description: "Experience the trill of a private basketball court within community.",
      details: {
        features: [
          "24/7 CCTV Surveillance",
          "EV Charging Stations",
          "Valet Service",
          "Car Wash Area",
          "Visitor Parking",
          "Security Patrol"
        ],
        capacity: "200+ Cars",
        access: "Smart Card Entry",
        safety: "Fire Safety Systems"
      }
    },
    {
      id: 6,
      title: "Children's Playground",
      image: "playground.jpg",
      icon: <Baby size={40} />,
      rating: 5,
      description: "Safe and fun environment for children",
      details: {
        features: [
          "Age-appropriate Equipment",
          "Soft Rubber Flooring",
          "Shaded Areas",
          "Sand Play Zone",
          "Swings & Slides",
          "Parent Seating"
        ],
        timing: "7:00 AM - 8:00 PM",
        safety: "Child-Safe Materials",
        supervision: "Trained Attendants"
      }
    }
  ];

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "text-gold fill-gold" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section id="amenities" className="world-amenities-section">
      <div className="amenities-container">
        <div className="text-center section-title">
          <p className="section-subtitle">World Of Amenities</p>
        </div>
        
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div 
              key={amenity.id}
              className={`amenity-card ${flippedCard === amenity.id ? 'flipped' : ''}`}
              onClick={() => handleCardClick(amenity.id)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-inner">
                {/* Front of Card */}
                <div className="card-front">
                  <div className="image-container">
                    <img 
                      src={amenity.image} 
                      alt={amenity.title}
                      className="amenity-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  
                  <div className="card-content">
                    <div className="rating-stars">
                      {renderStars(amenity.rating)}
                    </div>
                    
                    <h3 className="amenity-title">{amenity.title}</h3>
                    <p className="amenity-description">{amenity.description}</p>
                    
                    <div className="flip-indicator">
                      <span>Click for Details</span>
                    </div>
                  </div>
                </div>
                
                {/* Back of Card - Details */}
                <div className="card-back">
                  <div className="back-content">
                    <div className="back-icon">
                      {amenity.icon}
                    </div>
                    
                    <h3 className="back-title">{amenity.title}</h3>
                    
                    <div className="details-section">
                      <h4 className="details-title">Features</h4>
                      <ul className="features-list">
                        {amenity.details.features.map((feature, idx) => (
                          <li key={idx} className="feature-item">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="specs-grid">
                      {Object.entries(amenity.details).map(([key, value], idx) => {
                        if (key === 'features') return null;
                        return (
                          <div key={idx} className="spec-item">
                            <span className="spec-label">{key.replace(/_/g, ' ').toUpperCase()}:</span>
                            <span className="spec-value">{value}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <button className="detail-button">
                      More Details <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}