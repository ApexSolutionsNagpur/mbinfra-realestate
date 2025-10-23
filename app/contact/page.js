'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="contact-info-icon" />,
      title: 'Visit Our Office',
      details: ['Plot No. J-12, Flat No.402, Swapnil Tarangini, WHC Road, Laxmi Nagar,', 'Nagpur, MH - 440022'],
      link: '#'
    },
    {
      icon: <MapPin className="contact-info-icon" />,
      title: 'Site Office',
      details: ['Royal Empire, Khasra No. 34/1, Beltarodi Road, Manish Nagar,', 'Nagpur, MH - 440015'],
      link: '#'
    },
    {
      icon: <Phone className="contact-info-icon" />,
      title: 'Call Us',
      details: ['+91-8806600119', '+91-8806600113'],
      link: 'tel:+918806600119'
    },
    {
      icon: <Mail className="contact-info-icon" />,
      title: 'Email Us',
      details: ['mbinfrangp@gmail.com'],
      link: 'mailto:mbinfrangp@gmail.com'
    },
    {
      icon: <Clock className="contact-info-icon" />,
      title: 'Working Hours',
      details: ['Mon - Sat: 10:00 AM - 7:00 PM', 'Sunday: Closed'],
      link: '#'
    }
  ];

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-main-title">Get In Touch</h1>
          <p className="contact-hero-text">
            We'd love to hear from you. Contact us for any inquiries about our projects or services.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="contact-form-title">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  <Send size={20} />
                  Send Message
                </button>
              </form>

              {/* Google Map Below Form */}
              <div className="contact-map-section">
                <h3 className="contact-map-title">Visit Our Location</h3>
                <div className="h-100">
                  <iframe 
                    className="rounded w-100" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.7790499176763!2d79.07693203746692!3d21.081485204449876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf2c7c5de8ff%3A0x493e6ae0b7a050e!2sRoyal%20Empire!5e0!3m2!1sen!2sin!4v1701682975448!5m2!1sen!2sin" 
                    frameBorder="0" 
                    style={{ height: '100%', minHeight: '400px', border: '0' }} 
                    allowFullScreen="" 
                    aria-hidden="false" 
                    tabIndex="0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-description">
                Reach out to us through any of the following channels. We're here to help you with all your real estate needs.
              </p>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="contact-info-icon-wrapper">
                      {info.icon}
                    </div>
                    <div className="contact-info-content">
                      <h3 className="contact-info-card-title">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="contact-info-detail">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;