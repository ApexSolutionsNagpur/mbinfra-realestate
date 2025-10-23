'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Play, X, Globe } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showPanoramaModal, setShowPanoramaModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const slides = [
    {
      id: 1,
      background: "bg-[url('/hero/1.jpg')]",
      locationIcon: <MapPin size={26} />,
      address: "Manish Nagar, Nagpur",
      title1: "New Comfortable",
      title2: "Apartments",
      buttonText: "View All Apartments"
    },
    {
      id: 2,
      background: "bg-[url('/hero/2.jpg')]",
      locationIcon: <MapPin size={26} />,
      address: "Manish Nagar, Beltarodi Road, Nagpur",
      title1: "Unmatched",
      title2: "urban living",
      buttonText: "View All Apartments"
    },
    {
      id: 3,
      background: "bg-[url('/hero/3.jpg')]",
      locationIcon: <MapPin size={26} />,
      address: "Manish Nagar, Near DMART, Nagpur",
      title1: "Luxury",
      title2: "Living Spaces",
      buttonText: "View All Apartments"
    }
  ];

  const youtubeVideos = [
        {
      id: 2,
      title: "Virtual Tour",
      thumbnail: "/hero/4.jpg",
      videoId: "ZI43STPDQ-8",
      duration: "3:20",
      type: "video"
    }
  ];

  const panoramaTours = [
    {
      id: 3,
      title: "360° Panorama View",
      thumbnail: "/hero/1.jpg",
      panoramaUrl: "https://kre83d.com//RoyalEmpire/Panoramas.html",
      duration: "Interactive",
      type: "panorama"
    }
  ];

  const allMedia = [...youtubeVideos, ...panoramaTours];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[currentSlide];

  const handleVideoPlay = (videoId) => {
    setSelectedVideo(videoId);
    setShowVideoModal(true);
  };

  const handlePanoramaOpen = (panoramaUrl) => {
    window.open(panoramaUrl, '_blank', 'noopener,noreferrer');
  };

  const handlePanoramaModal = (panoramaUrl) => {
    setSelectedVideo(panoramaUrl);
    setShowPanoramaModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedVideo('');
  };

  const closePanoramaModal = () => {
    setShowPanoramaModal(false);
    setSelectedVideo('');
  };

  // Function to scroll to PropertyShowcase section
  const scrollToPropertyShowcase = () => {
    const propertyShowcaseSection = document.getElementById('property-showcase');
    if (propertyShowcaseSection) {
      propertyShowcaseSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url('/hero/${currentSlide + 1}.jpg')`
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content-container">
        <div className="hero-text-container">
          <div className="hero-location-icon animate-fade-in">
            <div className="inline-block text-white">
              {current.locationIcon}
            </div>
          </div>

          <div className="hero-address animate-fade-in-delay-1">
            <p className="hero-address-text">
              {current.address}
            </p>
          </div>

          <div className="hero-titles">
            <h1 className="hero-title-1 animate-slide-in-left">
              {current.title1}
            </h1>
            <h2 className="hero-title-2 animate-slide-in-right">
              {current.title2}
            </h2>
          </div>

          <div className="hero-button-container animate-fade-in-delay-2">
            <button 
              className="hero-cta-button"
              onClick={scrollToPropertyShowcase}
            >
              {current.buttonText}
            </button>
          </div>
        </div>

        <div className="hero-side-contact">
          <div className="contact-vertical">
            <a
              href="tel:+918806600119"
              className="contact-link"
            >
              +91-8806600119
            </a>
            <div className="contact-divider"></div>
            <a
              href="mailto:mbinfrangp@gmail.com"
              className="contact-link"
            >
              mbinfrangp@gmail.com
            </a>
          </div>
        </div>

        <div className="hero-video-cards">
          {allMedia.map((media, index) => (
            <div
              key={media.id}
              className={`video-card group ${media.type === 'panorama' ? 'panorama-card' : ''}`}
              data-type={media.type}
              onClick={() => media.type === 'video' 
                ? handleVideoPlay(media.videoId) 
                : handlePanoramaOpen(media.panoramaUrl)
              }
              
            >
              <div className="video-thumbnail">
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="video-thumbnail-image"
                />
                <div className="video-overlay">
                  <div className={`play-button ${media.type === 'panorama' ? 'panorama-button' : ''}`}>
                    {media.type === 'video' ? (
                      <Play size={20} fill="white" />
                    ) : (
                      <Globe size={20} fill="white" />
                    )}
                  </div>
                </div>
                <div className="video-duration">
                  {media.duration}
                </div>
                {media.type === 'panorama' && (
                  <div className="panorama-badge">
                    360°
                  </div>
                )}
              </div>
              <div className="video-info">
                <h3 className="video-title">{media.title}</h3>
                <div className="video-indicator">
                  <div className="indicator-dot"></div>
                  <span>
                    {media.type === 'video' ? 'Watch Video' : 'Explore 360° View'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${currentSlide === index ? 'slider-dot-active' : 'slider-dot-inactive'}`}
            />
          ))}
        </div>
      </div>

      {showVideoModal && (
        <div className="video-modal-overlay">
          <div className="video-modal-container">
            <button
              onClick={closeVideoModal}
              className="video-modal-close"
            >
              <X size={32} />
            </button>
            <div className="video-player-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                className="video-player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {showPanoramaModal && (
        <div className="video-modal-overlay">
          <div className="video-modal-container panorama-modal-container">
            <button
              onClick={closePanoramaModal}
              className="video-modal-close"
            >
              <X size={32} />
            </button>
            <div className="panorama-modal-header">
              <h3>360° Panorama View</h3>
              <p>Explore our project in immersive 360°</p>
            </div>
            <div className="panorama-player-wrapper">
              <iframe
                src={selectedVideo}
                className="panorama-player"
                frameBorder="0"
                allow="fullscreen"
                allowFullScreen
                title="360 Panorama View"
              ></iframe>
            </div>
            <div className="panorama-modal-footer">
              <button 
                className="panorama-external-btn"
                onClick={() => window.open(selectedVideo, '_blank')}
              >
                <Globe size={16} />
                Open in Full Screen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}