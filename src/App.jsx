import { useState } from 'react'
import './App.css'
import FAQ from './FAQ'
import bpbPepperLogo from './assets/bpb_pepper.svg'
import bpbLogoWhite from './assets/bpb_logo_white_72dpi.png'
import quickbooksLogo from './assets/quickbooks-brand-preferred-logo-50-50-black-external.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = (sectionId) => {
    if (currentPage !== 'home') {
      // If not on home page, switch to home first
      setCurrentPage('home')
      // Wait for the page to render, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // If already on home page, just scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
            <img src={bpbPepperLogo} alt="Blue Pepper Bookkeeping" className="logo" />
            <div className="logo-text">
              <div className="logo-text-line1">blue pepper</div>
              <div className="logo-text-line2">BOOKKEEPING</div>
            </div>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('services'); setIsMenuOpen(false); }}>Services</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('faq'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>FAQ</a>
            <a href="https://calendar.app.google/yZGeZbTnWyCTyr5N6" target="_blank" rel="noopener noreferrer" className="nav-link cta-link" onClick={() => setIsMenuOpen(false)}>Book a Free Consult</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); setIsMenuOpen(false); }}>Contact</a>
          </div>
          
          <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Professional Bookkeeping for Your Business</h1>
            <p className="hero-subtitle">
              Focus on growing your business while we handle your books with precision and care. 
              Trusted by entrepreneurs and small businesses.
            </p>
            <div className="hero-buttons">
              <a href="https://calendar.app.google/yZGeZbTnWyCTyr5N6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get Free Consultation</a>
              <a href="#services" className="btn btn-secondary">View Services</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-logo-box">
              <img src={bpbLogoWhite} alt="Blue Pepper Bookkeeping Logo" className="hero-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          
          {/* Certification Badge */}
          <div className="certification-section">
            <div className="certification-content">
              <div className="certification-text">
                <h3>Certified QuickBooks Online Bookkeepers</h3>
                <p>All of our bookkeepers are certified QuickBooks Online ProAdvisors, ensuring you receive expert-level service and accurate financial management.</p>
              </div>
              <div className="certification-badges">
                <img src={quickbooksLogo} alt="QuickBooks Online ProAdvisor" className="certification-badge" />
              </div>
            </div>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Monthly Bookkeeping</h3>
              <p>Complete monthly financial record keeping and reconciliation</p>
            </div>
            <div className="service-card">
              <h3>Financial Reports</h3>
              <p>Detailed financial statements and business insights</p>
            </div>
            <div className="service-card">
              <h3>Payroll Services</h3>
              <p>Complete payroll processing and compliance management</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consult" className="cta-section">
        <div className="container">
          <h2>Ready to Streamline Your Finances?</h2>
          <p>Schedule a free consultation to discuss how we can help your business thrive.</p>
          <a href="https://calendar.app.google/yZGeZbTnWyCTyr5N6" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Book Your Free Consultation</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Blue Pepper Bookkeeping</h3>
              <p>Professional bookkeeping services for businesses and entrepreneurs.</p>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Email: info@bluepepperbookkeeping.com</p>
              <p>Phone: (415) 251-3512</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <p>Monthly Bookkeeping</p>
              <p>Financial Reports</p>
              <p>Payroll Services</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Blue Pepper Bookkeeping. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </>
      )}

      {/* FAQ Page */}
      {currentPage === 'faq' && <FAQ />}
    </div>
  )
}

export default App
