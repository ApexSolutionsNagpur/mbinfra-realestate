'use client';
import { useState } from 'react';
import { MapPin, Calendar, Expand, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Skyline Towers',
      location: 'Nagpur',
      type: 'Residential',
      status: 'Completed',
      image: '/hero/1.jpg',
      description: 'Luxury residential towers with modern amenities and panoramic city views.',
      features: ['Swimming Pool', 'Gym', 'Park', '24/7 Security'],
      year: '2023'
    },
    {
      id: 2,
      title: 'Business Hub',
      location: 'Pune',
      type: 'Commercial',
      status: 'Ongoing',
      image: 'hero/2.jpg',
      description: 'State-of-the-art commercial complex designed for modern businesses.',
      features: ['Conference Rooms', 'Cafeteria', 'Parking', 'High-Speed Internet'],
      year: '2024'
    },
    {
      id: 3,
      title: 'Green Valley',
      location: 'Mumbai',
      type: 'Residential',
      status: 'Completed',
      image: 'hero/3.jpg',
      description: 'Eco-friendly residential community with green spaces and sustainable features.',
      features: ['Solar Power', 'Rainwater Harvesting', 'Organic Garden', 'Play Area'],
      year: '2022'
    },
    {
      id: 4,
      title: 'Tech Park',
      location: 'Hyderabad',
      type: 'Commercial',
      status: 'Upcoming',
      image: '/hero/4.jpg',
      description: 'Modern IT park with advanced infrastructure for technology companies.',
      features: ['Fiber Optics', 'Auditorium', 'Food Court', 'Fitness Center'],
      year: '2025'
    },
    {
      id: 5,
      title: 'Lakeview Residences',
      location: 'Bangalore',
      type: 'Residential',
      status: 'Ongoing',
      image: '/hero/1.jpg',
      description: 'Premium apartments with lake views and luxury amenities.',
      features: ['Lake View', 'Club House', 'Jogging Track', 'Children Play Area'],
      year: '2024'
    },
    {
      id: 6,
      title: 'Retail Mall',
      location: 'Delhi',
      type: 'Commercial',
      status: 'Completed',
      image: 'hero/2.jpg',
      description: 'Multi-level shopping mall with international brands and entertainment zones.',
      features: ['Parking', 'Food Court', 'Cinema', 'Play Zone'],
      year: '2021'
    }
  ];

  const projectTypes = ['All', 'Residential', 'Commercial', 'Ongoing', 'Completed', 'Upcoming'];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.type === activeFilter || project.status === activeFilter
      );

  return (
    <section className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-main-title">Our Projects</h1>
          <p className="projects-hero-text">
            Explore our diverse portfolio of residential and commercial projects across India.
          </p>
        </div>
      </div>

      <div className="projects-content">
        <div className="projects-container">
          {/* Project Filters */}
          <div className="projects-filters">
            {projectTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`project-filter-btn ${activeFilter === type ? 'active' : ''}`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button className="project-expand-btn">
                      <Expand size={20} />
                    </button>
                  </div>
                  <div className="project-badge">
                    <span className={`badge ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  
                  <div className="project-meta">
                    <div className="project-meta-item">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className="project-meta-item">
                      <Calendar size={16} />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="feature-item">{feature}</li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="feature-item">+{project.features.length - 3} more</li>
                      )}
                    </ul>
                  </div>

                  <div className="project-actions">
                    <button className="project-details-btn">
                      View Details
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="projects-stats">
            <div className="projects-stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="projects-stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Cities</div>
            </div>
            <div className="projects-stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="projects-stat">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;