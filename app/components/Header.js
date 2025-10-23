"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Navigation() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const megaMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const apartmentTypes = [
    {
      name: "Ruby",
      image: "apartments/rubyfull.jpg",
    },
    {
      name: "Emerald",
      image: "apartments/emeraldfull.jpg",
    },
    {
      name: "Pearl",
      image: "apartments/pearlfull.jpg",
    },
    {
      name: "Topaz",
      image: "apartments/topazfull.jpg",
    }
  ];

  // WhatsApp message
  const message = "Hello, I'm interested in booking a site visit for Royal Empire Apartments. Please provide me with more details.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/918806600113?text=${encodedMessage}`;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen) return;
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowLeft') handlePreviousImage();
      if (event.key === 'ArrowRight') handleNextImage();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isMobileMenuOpen]);

  const handleApartmentClick = (apartment) => {
    // Remove the Ruby-only condition to open modal for all apartments
    setSelectedApartment(apartment);
    setIsModalOpen(true);
    setCurrentImageIndex(0);
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApartment(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedApartment?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedApartment.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePreviousImage = () => {
    if (selectedApartment?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedApartment.gallery.length - 1 : prev - 1
      );
    }
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
         
          <div className="logo">
            <a href="/">
            <img src="/mbinfra_logo.png" alt="MB INFRA" className="logo-image" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links" ref={megaMenuRef}>
            <a href="/">Home</a>
            
            <div className="mega-menu-wrapper">
              <button 
                className="nav-link-with-dropdown"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                Apartments
                <ChevronDown size={16} />
              </button>

              {isMegaMenuOpen && (
                <div 
                  className="mega-menu"
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <div className="mega-menu-content">
                    <div className="mega-menu-header">
                      <h3>Our Premium Apartments</h3>
                      <p>Choose from our exclusive collection</p>
                    </div>

                    <div className="apartments-grid">
                      {apartmentTypes.map((apartment, index) => (
                        <div
                          key={apartment.name}
                          className="apartment-card"
                          onClick={() => handleApartmentClick(apartment)}
                        >
                          <div className="apartment-image">
                            <img src={apartment.image} alt={apartment.name} />
                            <div className="apartment-overlay">
                              <span className="view-details">
                                View Gallery
                              </span>
                            </div>
                          </div>
                          
                          <div className="apartment-info">
                            <h4>{apartment.name}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#amenities" onClick={(e) => { e.preventDefault(); scrollToSection('amenities'); }}>Amenities</a>
            <a href="#location" onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}>Location</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
              Book Site Visit
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu" ref={mobileMenuRef}>
            <div className="mobile-menu-content">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              
              <div className="mobile-menu-section">
                <div className="mobile-menu-header">Apartments</div>
                <div className="mobile-apartments-grid">
                  {apartmentTypes.map((apartment) => (
                    <div
                      key={apartment.name}
                      className="mobile-apartment-card"
                      onClick={() => handleApartmentClick(apartment)}
                    >
                      <img src={apartment.image} alt={apartment.name} />
                      <div className="mobile-apartment-info">
                        <h4>{apartment.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#amenities" onClick={(e) => { e.preventDefault(); scrollToSection('amenities'); setIsMobileMenuOpen(false); }}>Amenities</a>
              <a href="#location" onClick={(e) => { e.preventDefault(); scrollToSection('location'); setIsMobileMenuOpen(false); }}>Location</a>
              <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
              <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>

              <div className="mobile-cta">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mobile-visit-btn">
                  Book Site Visit
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Apartment Modal - Only Images */}
      {isModalOpen && selectedApartment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-main-image">
              <img 
                src={selectedApartment.image} 
                alt={selectedApartment.name}
              />
              
              {/* Show apartment name in modal */}
              <div className="apartment-name-modal">
                {selectedApartment.name} Apartment
              </div>

              {selectedApartment.gallery && selectedApartment.gallery.length > 1 && (
                <>
                  <button className="nav-arrow prev-arrow" onClick={handlePreviousImage}>
                    <ChevronLeft size={32} />
                  </button>
                  <button className="nav-arrow next-arrow" onClick={handleNextImage}>
                    <ChevronRight size={32} />
                  </button>
                  <div className="image-counter">
                    {currentImageIndex + 1} / {selectedApartment.gallery.length}
                  </div>
                </>
              )}
            </div>

            {selectedApartment.gallery && selectedApartment.gallery.length > 1 && (
              <div className="thumbnail-gallery">
                {selectedApartment.gallery.map((thumb, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                    onClick={() => handleImageClick(index)}
                  >
                    <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}