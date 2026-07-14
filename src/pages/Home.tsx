import React from 'react';
import { ArrowRight, Compass, Shield, Coffee } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '100px' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{
        padding: '60px 0 100px 0',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '64px',
          alignItems: 'center'
        }}>
          
          {/* Hero Text */}
          <div className="animate-fade-up delay-1">
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--color-terracotta)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              display: 'block',
              marginBottom: '16px'
            }}>
              Now Standing in Dumaguete City
            </span>
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              lineHeight: '1.1',
              marginBottom: '24px',
              color: 'var(--color-mahogany)'
            }}>
              Where history breathes <br />
              <span style={{ fontStyle: 'italic', color: 'var(--color-forest)' }}>and time slows.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem',
              color: 'var(--color-text-light)',
              maxWidth: '480px',
              marginBottom: '40px',
              lineHeight: '1.7'
            }}>
              Step into an authentic ancestral mansion, relocated piece by piece from Bais City, restored to offer a quiet sanctuary of heritage and comfort.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActiveTab('contact')}
                className="btn-primary"
              >
                Reserve a Table
              </button>
              <button 
                onClick={() => setActiveTab('cafe')}
                className="btn-secondary"
              >
                Explore the Menu
              </button>
            </div>
          </div>

          <div className="animate-fade-up delay-2" style={{ width: '100%' }}>
            <img 
              src="/src/assets/new hero.png" 
              alt="Buglas Isla Ancestral House" 
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '4/5',
                objectFit: 'cover',
                borderRadius: '4px',
                border: '1px solid var(--color-border)',
                boxShadow: '0 8px 30px rgba(35, 23, 17, 0.05)',
                display: 'block'
              }} 
            />
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY OF ADAPTIVE REUSE (Split Section) */}
      <section style={{
        padding: '120px 0',
        backgroundColor: '#FAF5ED',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '80px',
            alignItems: 'center'
          }} className="split-grid">
            
            {/* Left Image Placeholder */}
            <div>
              <img 
                src="/src/assets/architectural image.jpg.avif" 
                alt="Details of architectural reassembly" 
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 8px 30px rgba(35, 23, 17, 0.05)',
                  display: 'block'
                }} 
              />
            </div>

            {/* Right Content */}
            <div>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--color-text-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                display: 'block',
                marginBottom: '16px'
              }}>
                Our Philosophy
              </span>
              <h2 style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                lineHeight: '1.2',
                marginBottom: '24px'
              }}>
                The Art of <span style={{ fontStyle: 'italic' }}>Adaptive Reuse</span>
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'var(--color-text)',
                marginBottom: '20px',
                lineHeight: '1.7'
              }}>
                At Buglas Isla, we believe that preservation is a living action. Instead of letting history fade into memory, we dismantled a majestic, forgotten ancestral home in Bais City, cataloged its old timber beams, and reconstructed it here in Dumaguete.
              </p>
              <p style={{
                fontSize: '1rem',
                color: 'var(--color-text-light)',
                marginBottom: '32px',
                lineHeight: '1.7'
              }}>
                Every sliding window pane, floorboard, and pillar holds decades of stories. Today, they serve a new purpose—as the backdrop to your morning brew, quiet conversations, and shared heritage.
              </p>
              <button 
                onClick={() => setActiveTab('about')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-terracotta)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
                className="hover-arrow"
              >
                Read our relocation story <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE THREE PILLARS (Grid Section) */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>
              The Buglas Isla Experience
            </h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '500px', margin: '0 auto' }}>
              A sanctuary built on historical integrity, airy comfort, and authentic Negros heritage.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '40px'
          }} className="pillars-grid">
            
            {/* Pillar 1 */}
            <div style={{
              backgroundColor: 'var(--color-bg-card)',
              padding: '48px 32px',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
              <div style={{
                color: 'var(--color-terracotta)',
                backgroundColor: 'rgba(189, 99, 78, 0.08)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>The Ancestral Relic</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                Rebuilt timber-by-timber. You are dining within a structure crafted from heritage Philippine hardwood that stood strong in Bais City for almost a century.
              </p>
            </div>

            {/* Pillar 2 */}
            <div style={{
              backgroundColor: 'var(--color-bg-card)',
              padding: '48px 32px',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
              <div style={{
                color: 'var(--color-forest)',
                backgroundColor: 'rgba(27, 51, 38, 0.08)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Shield size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>The Presko Oasis</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                Open capiz shutters and high pitched rafters. Designed to draw in the sea breeze from Rizal Boulevard, creating an airy shelter from the busy outside world.
              </p>
            </div>

            {/* Pillar 3 */}
            <div style={{
              backgroundColor: 'var(--color-bg-card)',
              padding: '48px 32px',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
              <div style={{
                color: 'var(--color-mahogany)',
                backgroundColor: 'rgba(35, 23, 17, 0.08)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Coffee size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>The Heritage Kitchen</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                Traditional recipes re-imagined. We highlight Negros ingredients, from locally sourced millet (Budbud) to pure Bais Muscovado sugar and estate chocolates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. VISUAL HERO CALL-OUT */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <img 
            src="/src/assets/final image.jpg" 
            alt="Al Fresco Garden Dining at Buglas Isla" 
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '21/9',
              objectFit: 'cover',
              borderRadius: '4px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 8px 30px rgba(35, 23, 17, 0.05)',
              display: 'block'
            }} 
          />
        </div>
      </section>

      {/* Quick responsive media queries injection */}
      <style>{`
        .hover-arrow {
          transition: var(--transition-fast);
        }
        .hover-arrow:hover {
          color: var(--color-mahogany) !important;
        }
        .hover-arrow:hover svg {
          transform: translateX(4px);
        }
        .hover-arrow svg {
          transition: var(--transition-fast);
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-grid p {
            margin: 0 auto 32px auto !important;
          }
          .hero-grid div:first-child {
            order: 2;
          }
          .hero-grid div:last-child {
            order: 1;
          }
          .split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};
