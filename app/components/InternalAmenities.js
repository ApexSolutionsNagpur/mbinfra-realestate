// components/InternalAmenities.js
import { Shield, Zap, Wifi, Cpu } from 'lucide-react';

const InternalAmenities = () => {
  const amenitiesData = [
    {
      category: "Security & Control",
      icon: <Shield className="internal-amenities__icon" />,
      items: [
        "24/7 Surveillance (CCTV)",
        "Access Control Systems", 
        "Secure Entry & Exit Points"
      ]
    },
    {
      category: "Essential Services",
      icon: <Zap className="internal-amenities__icon" />,
      items: [
        "Automatic Water Supply",
        "Uninterrupted Power Backup",
        "Dedicated Water Supply Line"
      ]
    },
    {
      category: "Comfort & Convenience", 
      icon: <Wifi className="internal-amenities__icon" />,
      items: [
        "High-Speed Internet Connectivity (LIFE & CONNEXY)",
        "Ample Power Supply",
        "Flexible Space Planning"
      ]
    },
    {
      category: "Advanced Infrastructure",
      icon: <Cpu className="internal-amenities__icon" />,
      items: [
        "Sensor-based Automation",
        "Centralized Monitoring & Control Systems", 
        "Efficient Power Management"
      ]
    }
  ];

  return (
    <section className="internal-amenities">
      <div className="internal-amenities__container">
        <div className="internal-amenities__header">
          <h2 className="internal-amenities__title">INTERNAL AMENITIES</h2>
          <p className="internal-amenities__description">
            Our facilities are equipped with state-of-the-art amenities to ensure security, 
            comfort, and convenience for all our occupants.
          </p>
        </div>
        
        <div className="internal-amenities__grid">
          {amenitiesData.map((category, index) => (
            <div key={index} className="internal-amenities__card">
              <div className="internal-amenities__category-header">
                {category.icon}
                <h3 className="internal-amenities__category-title">{category.category}</h3>
              </div>
              <ul className="internal-amenities__list">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="internal-amenities__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalAmenities;