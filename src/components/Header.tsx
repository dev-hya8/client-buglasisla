import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Relocation Story' },
    { id: 'cafe', label: 'The Café' },
    { id: 'contact', label: 'Contact & Reservations' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      height: 'var(--header-height)',
      backgroundColor: isScrolled ? 'rgba(250, 248, 245, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'var(--transition-smooth)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Serif Wordmark Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.65rem',
            letterSpacing: '0.08em',
            color: 'var(--color-mahogany)',
            fontWeight: 400
          }}
        >
          BUGLAS ISLA
        </button>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', gap: '32px' }} className="desktop-only">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  position: 'relative',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: isActive ? 600 : 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: isActive ? 'var(--color-terracotta)' : 'var(--color-text)',
                  padding: '8px 0',
                  transition: 'var(--transition-fast)'
                }}
              >
                {item.label}
                {/* Underline hover effect */}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'var(--color-terracotta)',
                  transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'var(--transition-smooth)',
                  transformOrigin: 'center'
                }} />
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            color: 'var(--color-mahogany)'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          width: '100%',
          height: 'calc(100vh - var(--header-height))',
          backgroundColor: 'var(--color-capiz)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px',
          gap: '24px',
          animation: 'fadeIn 0.3s ease'
        }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: isActive ? 'var(--color-terracotta)' : 'var(--color-mahogany)',
                  textAlign: 'left',
                  borderBottom: '1px solid var(--color-border)',
                  paddingBottom: '12px',
                  width: '100%'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Quick responsive media queries injection */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
