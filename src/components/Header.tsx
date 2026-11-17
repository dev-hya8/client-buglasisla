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
          aria-label="Buglas Isla Home"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.65rem',
            letterSpacing: '0.08em',
            color: 'var(--color-mahogany)',
            fontWeight: 400,
            minHeight: '48px',
            minWidth: '48px',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '4px 8px'
          }}
        >
          BUGLAS ISLA
        </button>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', gap: '24px' }} className="desktop-only">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-item ${isActive ? 'active' : ''}`}
                style={{
                  minHeight: '48px',
                  minWidth: '48px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 10px'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          style={{
            color: 'var(--color-mahogany)',
            minWidth: '48px',
            minHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px'
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
          gap: '16px',
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
                  padding: '14px 0',
                  minHeight: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}

    </header>
  );
};
