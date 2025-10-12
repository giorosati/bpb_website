import { useState } from 'react'
import './App.css'
import FAQ from './FAQ'
import bpbPepperLogo from './assets/bpb_pepper_alt.svg'
import bpbLogoWhite from './assets/bpb_logo_white_72dpi_alt.png'
import quickbooksLogo from './assets/quickbooks-brand-preferred-logo-50-50-black-external.png'
import socialLinkedIn from './assets/social_linkedin.svg'
import socialFacebook from './assets/social_facebook.svg'
import socialInstagram from './assets/social_instagram.svg'
import socialTikTok from './assets/social_tiktok.svg'
import socialBlueSky from './assets/social_bluesky.svg'
import eLazaroPhoto from './assets/E_Lazaro.jpeg'
import sDodsonPhoto from './assets/S_Dodson.jpeg'

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
      {/* Testimonials Section (added) */}
      <section id="testimonials" className="testimonials-section">
        <div className="container testimonials-grid">
          <article className="testimonial-card" data-animate="fade-up" style={{'--delay': '0s'}}>
            <div className="testimonial-quote">"Blue Pepper transformed our bookkeeping — we now get clear monthly reports and useful advice."</div>
            <div className="testimonial-meta">
              <img src={sDodsonPhoto} alt="S. Dodson" className="testimonial-avatar" />
              <div className="testimonial-person">
                <div className="name">S. Dodson</div>
                <div className="role">Business Owner</div>
              </div>
            </div>
          </article>

          <article className="testimonial-card" data-animate="fade-up" style={{'--delay': '0.08s'}}>
            <div className="testimonial-quote">"Giovanni was incredibly helpful getting our finances in order. From helping us develop an initial budget to keeping our books accurate and up-to-date. Highly recommended!"</div>
            <div className="testimonial-meta">
              <img src={eLazaroPhoto} alt="Dr. Edmer Lazaro" className="testimonial-avatar" />
              <div className="testimonial-person">
                <div className="name">Dr. Edmer Lazaro, PT, DPT, MSHCA</div>
                <div className="role">Owner - Lazaro Physical Therapy</div>
              </div>
            </div>
          </article>
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

      {/* Footer (with schema.org microdata for LocalBusiness) */}
      <footer id="contact" className="footer" itemScope itemType="http://schema.org/LocalBusiness">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col footer-col-logo">
              <a href="/" aria-label="Blue Pepper Bookkeeping home">
                <img src={bpbLogoWhite} alt="Blue Pepper logo" itemProp="logo" className="footer-logo" />
              </a>
            </div>

            <div className="footer-col footer-col-center">
              <h3 itemProp="name">Blue Pepper Bookkeeping</h3>
              <address itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="footer-address">
                <span itemProp="streetAddress">164 Colchester Dr.</span><br />
                <span itemProp="addressLocality">Iowa City</span>, <span itemProp="addressRegion">IA</span> <span itemProp="postalCode">52245</span>
              </address>
            </div>

            
            <div className="footer-col-contact">
              <h4>Contact Info</h4>
              <p><a href="mailto:info@bluepepperbookkeeping.com" itemProp="email">info@bluepepperbookkeeping.com</a></p>
              <p><a href="tel:+14152513512" itemProp="telephone">(415) 251-3512</a></p>
              <div className="footer-social">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src={socialLinkedIn} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <img src={socialFacebook} alt="Facebook" className="social-icon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src={socialInstagram} alt="Instagram" className="social-icon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <img src={socialTikTok} alt="TikTok" className="social-icon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="BlueSky">
                  <img src={socialBlueSky} alt="BlueSky" className="social-icon" />
                </a>
              </div>
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
