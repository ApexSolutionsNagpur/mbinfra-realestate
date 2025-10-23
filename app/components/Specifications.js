"use client";

import { 
  Building, Square, Brush, SquareStack, PanelTop, DoorOpen, 
  Palette, ChefHat, Zap, Sun, ArrowUp, Droplets, Car, Wrench, 
  CircleAlert 
} from 'lucide-react';

const Specifications = () => {
  const specifications = [
    {
      id: 1,
      number: "01",
      title: "STRUCTURE",
      icon: <Building size={32} />,
      color: "#c8a97e",
      description: "Earthquake Resistance R.C.C. Frame Structure.",
      type: "description"
    },
    {
      id: 2,
      number: "02",
      title: "WALLS",
      icon: <Square size={32} />,
      color: "#e74c3c",
      items: [
        "External walls upto 150mm thick.",
        "Internal walls upto 115mm thick."
      ],
      type: "list"
    },
    {
      id: 3,
      number: "03",
      title: "PLASTER",
      icon: <Brush size={32} />,
      color: "#3498db",
      items: [
        "All internal walls to be plastered with 12mm fanti plaster.",
        "External walls with double coat plaster."
      ],
      type: "list"
    },
    {
      id: 4,
      number: "04",
      title: "FLOORING",
      icon: <SquareStack size={32} />,
      color: "#9b59b6",
      items: [
        "2'x4' vitrified / 32\" x 32\" vitrified tiles for all floors.",
        "Toilet wall tiles upto 7' height.",
        "Anti-skid tiles for all toilets."
      ],
      type: "list"
    },
    {
      id: 5,
      number: "05",
      title: "WINDOWS",
      icon: <PanelTop size={32} />,
      color: "#2ecc71",
      description: "Powder coated Aluminium sliding windows with MS safety grills.",
      type: "description"
    },
    {
      id: 6,
      number: "06",
      title: "DOORS",
      icon: <DoorOpen size={32} />,
      color: "#e67e22",
      items: [
        "Secure OR equivalent quality main door.",
        "Flushed door with laminated finish for internal doors.",
        "PVC or sintex door for toilets."
      ],
      type: "list"
    },
    {
      id: 7,
      number: "07",
      title: "PAINTING",
      icon: <Palette size={32} />,
      color: "#1abc9c",
      items: [
        "Internal walls: Putty finished & plastic emulsion paint.",
        "External walls: Weather proof / Apex paint."
      ],
      type: "list"
    },
    {
      id: 8,
      number: "08",
      title: "KITCHEN",
      icon: <ChefHat size={32} />,
      color: "#d35400",
      items: [
        "Modular kitchen with granite counter & stainless steel sink.",
        "Glazed ceramic tiles upto lintle level.",
        "Power points for fridge, oven, chimney & water purifier."
      ],
      type: "list"
    },
    {
      id: 9,
      number: "09",
      title: "ELECTRICAL",
      icon: <Zap size={32} />,
      color: "#f39c12",
      items: [
        "Wires: Polycabs, KEI, Anchor or equivalent ISI mark quality.",
        "Switches: Anchor Roma, Grate white or equivalent ISI mark quality."
      ],
      type: "list"
    },
    {
      id: 10,
      number: "10",
      title: "SOLAR PANEL",
      icon: <Sun size={32} />,
      color: "#f1c40f",
      description: "Solar panel for common area, water pumps and lift will be provided.",
      type: "description"
    },
    {
      id: 11,
      number: "11",
      title: "LIFT",
      icon: <ArrowUp size={32} />,
      color: "#34495e",
      description: "Automatic branded lifts with power backup will be provided.",
      type: "description"
    },
    {
      id: 12,
      number: "12",
      title: "WATER SUPPLY",
      icon: <Droplets size={32} />,
      color: "#2980b9",
      description: "Overhead water tank with corporation water supply 24x7.",
      type: "description"
    },
    {
      id: 13,
      number: "13",
      title: "PARKING",
      icon: <Car size={32} />,
      color: "#7f8c8d",
      description: "Alloted car parking for each flat.",
      type: "description"
    },
    {
      id: 14,
      number: "14",
      title: "PLUMBING & SANITARY",
      icon: <Wrench size={32} />,
      color: "#8e44ad",
      description: "Plumbing, Sanitary & C.P. fitting would be provided like Jaguar, Cera or equivalent.",
      type: "description"
    }
  ];

  return (
    <section className="specifications-section">
      <div className="specifications-container">
        {/* Header */}
        <div className="specifications-header">
          <div className="subtitle">Specification</div>
          <h2 className="main-title">THE INSIDE STORY OF YOUR PARADISE</h2>
          <p className="section-description">
            Premium quality construction with attention to every detail
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="specifications-layout">
          {/* First Row - 6 cards */}
          <div className="spec-row">
            <div className="spec-cards-grid">
              {specifications.slice(0, 6).map((spec, index) => (
                <div 
                  key={spec.id}
                  className="spec-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div 
                    className="card-decoration" 
                    style={{ backgroundColor: spec.color }}
                  ></div>
                  <div className="card-content">
                    <div className="spec-icon-wrapper">
                      <div 
                        className="spec-icon" 
                        style={{ backgroundColor: spec.color }}
                      >
                        {spec.icon}
                      </div>
                      <div className="spec-number">{spec.number}</div>
                    </div>
                    <h3 className="spec-title">{spec.title}</h3>
                    <div className="spec-details">
                      {spec.type === "list" ? (
                        <ul className="spec-items">
                          {spec.items?.map((item, itemIndex) => (
                            <li key={itemIndex} className="spec-item">
                              <span 
                                className="item-bullet" 
                                style={{ backgroundColor: spec.color }}
                              ></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="spec-description">{spec.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - 8 cards */}
          <div className="spec-row">
            <div className="spec-cards-grid">
              {specifications.slice(6).map((spec, index) => (
                <div 
                  key={spec.id}
                  className="spec-card"
                  data-aos="fade-up"
                  data-aos-delay={(index + 6) * 100}
                >
                  <div 
                    className="card-decoration" 
                    style={{ backgroundColor: spec.color }}
                  ></div>
                  <div className="card-content">
                    <div className="spec-icon-wrapper">
                      <div 
                        className="spec-icon" 
                        style={{ backgroundColor: spec.color }}
                      >
                        {spec.icon}
                      </div>
                      <div className="spec-number">{spec.number}</div>
                    </div>
                    <h3 className="spec-title">{spec.title}</h3>
                    <div className="spec-details">
                      {spec.type === "list" ? (
                        <ul className="spec-items">
                          {spec.items?.map((item, itemIndex) => (
                            <li key={itemIndex} className="spec-item">
                              <span 
                                className="item-bullet" 
                                style={{ backgroundColor: spec.color }}
                              ></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="spec-description">{spec.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="additional-info" data-aos="fade-up">
          <div className="info-icon">
            <CircleAlert size={24} />
          </div>
          <div className="info-content">
            <h4 className="info-title">Important Note</h4>
            <p className="info-text">
              Expenses towards the electric meter connection, meter deposit, water meter connection & 
              deed expenses including registration fees, stamp duty, lawyer fees and GST shall be 
              payable extra by the flat owners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;