"use client";

import { useState, useEffect } from 'react';
import { X, Download, FileText, MessageCircle, CheckCircle, Phone, User } from 'lucide-react';

export default function BrochureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: Success, 3: Download
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  // Auto-open modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Simulate brochure URL
  useEffect(() => {
    setDownloadUrl('https://mbinfra.co.in/web_assets/brochure/mbinfra-brochure.pdf');
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    // 1. Save lead to Google Sheet
    await saveLeadToGoogleSheet(formData);
    
    // 2. Download brochure PDF
    downloadBrochure();
    
    // 3. Navigate to WhatsApp
    navigateToWhatsApp(formData);
    
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

const downloadBrochure = () => {
  // Direct download from public directory
  const brochureUrl = '/brochure_pdf.pdf'; // Path in public folder
  const link = document.createElement('a');
  link.href = brochureUrl;
  link.download = 'brochure_pdf.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const navigateToWhatsApp = (data) => {
  const message = `Hello, I just downloaded the MBInfra Royal Empire brochure. My name is ${data.name}. Please provide me with more details.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/918806600113?text=${encodedMessage}`;
  
  // Open WhatsApp in same tab
  window.location.href = whatsappUrl;
  
  // Close modal after a short delay
  setTimeout(() => {
    setIsOpen(false);
    setStep(1);
    setFormData({ name: '', phone: '', email: '' });
  }, 1000);
};
  const saveLeadToGoogleSheet = async (data) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx4dGEQl4TFm0yRPzAGx2OT-Ndw59sYzbD5sJylhzUZS3r1ixbvAPgLMLVAGI9UTV8fsg/exec';
    
    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      utm_source: 'brochure_modal',
      utm_medium: 'website',
      utm_campaign: 'royal_empire_brochure',
      page_url: window.location.href,
      referrer: document.referrer || 'direct'
    };

    const response = await fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    // Since we're using no-cors, we can't read the response
    // But the data will still be sent to Google Sheets
    console.log('Lead data sent to Google Sheets:', payload);
    
    return true;
  };

  const sendWhatsAppMessage = (data) => {
    const message = `Hello ${data.name}! Thank you for your interest in MBInfra Royal Empire. Here's your brochure download link: ${downloadUrl}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918806600113?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleDownload = () => {
    // Trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'brochure_pdf.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close modal after download
    setTimeout(() => {
      setIsOpen(false);
      setStep(1);
      setFormData({ name: '', phone: '', email: '' });
    }, 1000);
  };

  const closeModal = () => {
    setIsOpen(false);
    setStep(1);
    setFormData({ name: '', phone: '', email: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="brochure-modal-overlay">
      <div className="brochure-modal-container">
        {/* Close Button */}
        <button className="modal-close-btn" onClick={closeModal}>
          <X size={24} />
        </button>

        {/* Step 1: Form */}
        {step === 1 && (
          <div className="modal-content">
            <div className="modal-icon">
              <FileText size={48} className="icon-document" />
            </div>
            
            <div className="modal-header">
              <h2 className="modal-title">Get Your Exclusive Brochure</h2>
              <p className="modal-subtitle">
                Download our detailed project brochure and get personalized assistance on WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="lead-form">
              <div className="form-group">
                <div className="input-wrapper">
                  <User size={20} className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <Phone size={20} className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your WhatsApp Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <>
                    <Download size={20} />
                    Get Brochure on WhatsApp
                  </>
                )}
              </button>

              <p className="privacy-note">
                We respect your privacy. Your information is secure with us.
              </p>
            </form>
          </div>
        )}

        {/* Step 2: Success */}
        {step === 2 && (
          <div className="modal-content success-content">
            <div className="success-icon">
              <CheckCircle size={64} className="icon-success" />
            </div>
            
            <div className="modal-header">
              <h2 className="modal-title">Thank You!</h2>
              <p className="modal-subtitle">
                We've sent the brochure to your WhatsApp. Redirecting to download...
              </p>
            </div>

            <div className="success-animation">
              <div className="pulse-dot"></div>
              <div className="pulse-dot"></div>
              <div className="pulse-dot"></div>
            </div>
          </div>
        )}

        {/* Step 3: Download */}
        {step === 3 && (
          <div className="modal-content download-content">
            <div className="modal-icon">
              <Download size={48} className="icon-download" />
            </div>
            
            <div className="modal-header">
              <h2 className="modal-title">Download Ready!</h2>
              <p className="modal-subtitle">
                Your brochure is ready to download. Click the button below.
              </p>
            </div>

            <button 
              onClick={handleDownload}
              className="download-btn"
            >
              <Download size={20} />
              Download Brochure (PDF)
            </button>

            <div className="download-info">
              <p>File: MBInfra-Royal-Empire-Brochure.pdf</p>
              <p>Size: 2.4 MB</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}