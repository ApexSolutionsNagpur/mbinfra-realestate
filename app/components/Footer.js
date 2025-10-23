import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* Registered Office */}
          <div className="footer-column">
            <h4 className="footer-title">Registered Office</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <p className="contact-text">
                  Plot No. J-12, Flat No.402, Swapnil Tarangini, WHC Road, Laxmi Nagar, Nagpur - 440022
                </p>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <p className="contact-text">+91-8806600113</p>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <p className="contact-text">+91-8806600119</p>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <p className="contact-text">mbinfrangp@gmail.com</p>
              </div>
            </div>
            
            <div className="social-links">
              <a 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.facebook.com/mbinfrangp"
              >
                <Facebook size={18} />
              </a>
              <a 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.instagram.com/mbinfrangp/?igshid=aDJja2E0MDI1dnRj"
              >
                <Instagram size={18} />
              </a>
              <a 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=xLQtE9lGg54"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Site Office */}
          <div className="footer-column">
            <h4 className="footer-title">Site Office</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <p className="contact-text">
                  Royal Empire, Khasra No. 34/1, Beltarodi Road, Manish Nagar, Nagpur.
                </p>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <p className="contact-text">+91-8806600113</p>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <p className="contact-text">+91-8806600119</p>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <p className="contact-text">mbinfrangp@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column quick-links">
            <h4 className="footer-title">Quick Links</h4>
            <div className="links-container">
              <a className="footer-link" href="home">
                Home
              </a>
              <a className="footer-link" href="about">
                About Us
              </a>
              <a className="footer-link" href="contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}