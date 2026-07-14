import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--color-mahogany)',
      color: 'rgba(250, 248, 245, 0.7)',
      padding: '80px 0 40px 0',
      borderTop: '1px solid rgba(250, 248, 245, 0.1)',
      fontFamily: 'var(--font-sans)'
    }}>
      <div className="container">
        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '48px',
          marginBottom: '60px'
        }} className="footer-grid">
          {/* Brand Col */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-capiz)',
              fontSize: '1.8rem',
              marginBottom: '16px',
              letterSpacing: '0.05em'
            }}>
              BUGLAS ISLA
            </h3>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: '1.6',
              maxWidth: '300px',
              marginBottom: '24px'
            }}>
              A restored ancestral home from Bais City, operating as a sanctuary of adaptive reuse in Piapi, Dumaguete.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" aria-label="Instagram" style={{ color: 'var(--color-capiz)', opacity: 0.7, display: 'inline-flex', alignItems: 'center' }} className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" style={{ color: 'var(--color-capiz)', opacity: 0.7, display: 'inline-flex', alignItems: 'center' }} className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="mailto:buglasislacafe@riesa.ph" aria-label="Email" style={{ color: 'var(--color-capiz)', opacity: 0.7 }} className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: 'var(--color-capiz)',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px'
            }}>
              Explore
            </h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => handleNavClick('home')} className="footer-link">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="footer-link">
                  Relocation Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('cafe')} className="footer-link">
                  The Café Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="footer-link">
                  Contact & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{
              color: 'var(--color-capiz)',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px'
            }}>
              Sanctuary Hours
            </h4>
            <div className="hours-desktop">
              <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
                <strong>Monday to Sunday</strong>
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                7:00 AM – 10:00 PM
              </p>
              <p style={{ fontSize: '0.8rem', marginTop: '12px', opacity: 0.5 }}>
                Reservations recommended for garden dining.
              </p>
            </div>
            <div className="hours-mobile">
              <p style={{ fontSize: '0.9rem' }}>
                <strong>Daily: 7am – 10pm</strong>
              </p>
            </div>
          </div>

          {/* Newsletter / Contact Details */}
          <div>
            <h4 style={{
              color: 'var(--color-capiz)',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px'
            }}>
              Stay in Touch
            </h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '16px', lineHeight: '1.4' }}>
              Join our mailing list for exclusive updates.
            </p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-capiz)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  width: '100%',
                  outline: 'none'
                }}
              />
              <button type="submit" style={{ color: 'var(--color-capiz)', marginLeft: '8px', opacity: 0.8 }}>
                →
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid rgba(250, 248, 245, 0.1)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem'
        }} className="footer-bottom">
          <p className="copyright-desktop">© {new Date().getFullYear()} Buglas Isla. Dumaguete City, Philippines. All rights reserved.</p>
          <p className="copyright-mobile">© {new Date().getFullYear()} Buglas Isla.</p>
          <button 
            onClick={scrollToTop} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-capiz)',
              opacity: 0.8
            }}
            className="back-to-top"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .social-link:hover {
          opacity: 1 !important;
          color: var(--color-terracotta) !important;
        }
        .footer-link:hover {
          color: var(--color-capiz) !important;
          padding-left: 4px;
        }
        .footer-link {
          transition: var(--transition-fast);
          color: inherit;
          text-align: left;
        }
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.9rem;
        }
        .footer-newsletter-form {
          display: flex;
          border-bottom: 1px solid rgba(250, 248, 245, 0.2);
          padding-bottom: 8px;
        }
        .hours-desktop {
          display: block;
        }
        .hours-mobile {
          display: none;
        }
        .copyright-desktop {
          display: block;
        }
        .copyright-mobile {
          display: none;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          footer {
            padding: 40px 0 24px 0 !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .footer-links-list {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .hours-desktop {
            display: none !important;
          }
          .hours-mobile {
            display: block !important;
          }
          .footer-newsletter-form {
            padding-bottom: 4px !important;
          }
          .copyright-desktop {
            display: none !important;
          }
          .copyright-mobile {
            display: block !important;
          }
          .footer-bottom {
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
};
