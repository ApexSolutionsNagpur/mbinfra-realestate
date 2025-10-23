// components/FloatingIcons.js
"use client";

import { ArrowUp, Phone, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingIcons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll to top button when page is scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsApp = () => {
    // Replace with your WhatsApp number (format: 911234567890)
    const phoneNumber = '911234567890';
    const message = 'Hello, I am interested in your properties. Can you please provide more information?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    // Replace with your phone number
    const phoneNumber = '+911234567890';
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div className="floating-icons">
      {/* WhatsApp Icon */}
      <button 
        className="floating-icon whatsapp"
        onClick={handleWhatsApp}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="floating-icon__tooltip">Chat on WhatsApp</span>
      </button>

      {/* Call Now Icon */}
      <button 
        className="floating-icon call"
        onClick={handleCall}
        aria-label="Call Now"
      >
        <Phone size={20} />
        <span className="floating-icon__tooltip">Call Now</span>
      </button>

      {/* Scroll to Top Icon */}
      {isVisible && (
        <button 
          className="floating-icon scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
          <span className="floating-icon__tooltip">Back to Top</span>
        </button>
      )}
    </div>
  );
};

export default FloatingIcons;