import React, { useState } from 'react';
import { History, Eye, Hammer, Heart } from 'lucide-react';
import ourJourneyImg from '../assets/our journey.png';
import preskoImg from '../assets/presko.png';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const timelineSteps = [
    {
      year: '1930s',
      title: 'The Ancestral Origins',
      location: 'Bais City, Negros Oriental',
      icon: <History size={20} />,
      desc: 'Built in the golden era of the sugar industry in Negros, the home was constructed using premier Philippine hardwoods (Molave, Yakal, and Narra). It hosted generations of familial gatherings, standing as a testament to classic Spanish-Filipino plantation architecture.',
      imagery: 'Archival Photo: The original house standing in Bais City, showing its classic bahay-na-bato base structure and grand upper-floor wooden balconies.'
    },
    {
      year: '2020',
      title: 'The Deconstruction & Salvage',
      location: 'Bais City',
      icon: <Eye size={20} />,
      desc: 'To save the abandoned structure from deterioration and demolition, heritage architects undertook a meticulous process. Every wooden column, ceiling truss, capiz window pane, and flooring panel was cataloged, numbered, and carefully dismantled over months.',
      imagery: 'Detailed Photo: Workers cataloging large timber beams, with close-up wood grains and hand-written chalk numbers marking their layout coordinate.'
    },
    {
      year: '2021 - 2022',
      title: 'Transportation & Reconstruction',
      location: 'Piapi, Dumaguete City',
      icon: <Hammer size={20} />,
      desc: 'The materials were transported to Dumaguete City. Local craftsmen and woodcarvers worked in unison to fit the wooden puzzle back together. Missing elements were replaced with matching vintage salvage materials to preserve structural and historical integrity.',
      imagery: 'Action Photo: Local craftsmen reassembling the mortise-and-tenon joints of the main floor support beams, backlit by bright coastal daylight.'
    },
    {
      year: 'Present Day',
      title: 'The Sanctuary Openings',
      location: 'Dumaguete City',
      icon: <Heart size={20} />,
      desc: 'Today, the ancestral house stands fully restored as Buglas Isla café. It functions as a living museum where guests can touch the 90-year-old timber, view the sunlight through translucent capiz shells, and celebrate Negros culture.',
      imagery: 'High-end Architectural Detail: The finished sliding capiz windows framing a beautiful modern espresso bar inside the cafe.'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '100px' }}>
      
      {/* 1. INTRO / HEADLINE SECTION */}
      <section style={{ padding: '80px 0 60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
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
            Our Journey
          </span>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            lineHeight: '1.2',
            marginBottom: '32px'
          }}>
            Preserving the soul of a house <br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-forest)' }}>requires taking it apart.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'var(--color-text-light)',
            lineHeight: '1.8',
            textAlign: 'justify'
          }}>
            Every ancestral home is a living entity. When we discovered this structure in Bais City, it had been weathered by decades of monsoons and neglect. Rather than letting it vanish, we chose adaptive reuse. The house was dismantled piece-by-piece, cataloged, transported, and reassembled in Piapi, Dumaguete, to become a quiet refuge where history and gastronomy meet.
          </p>
        </div>
      </section>

      {/* 2. ARCHIVAL COVER IMAGE */}
      <section style={{ padding: '20px 0 60px 0' }}>
        <div className="container">
          <img 
            src={ourJourneyImg} 
            alt="Archival Relocation Journey" 
            className="about-journey-image"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '4px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 8px 30px rgba(35, 23, 17, 0.05)',
              display: 'block'
            }} 
          />
        </div>
      </section>

      {/* 3. INTERACTIVE TIMELINE */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAF5ED' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Reconstructing History</h2>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
              Click through the stages of our relocation journey.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '64px',
            alignItems: 'start'
          }} className="timeline-grid">
            
            {/* Left Steps Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {timelineSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '24px',
                      backgroundColor: isActive ? 'var(--color-bg-card)' : 'transparent',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--color-border)' : 'transparent',
                      borderRadius: '4px',
                      textAlign: 'left',
                      transition: 'var(--transition-smooth)'
                    }}
                    className="timeline-btn"
                  >
                    <div style={{
                      color: isActive ? 'var(--color-terracotta)' : 'var(--color-text-light)',
                      backgroundColor: isActive ? 'rgba(189, 99, 78, 0.08)' : 'rgba(35, 23, 17, 0.04)',
                      padding: '10px',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {step.icon}
                    </div>
                    <div>
                      <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--color-terracotta)',
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '0.05em'
                      }}>
                        {step.year}
                      </span>
                      <h3 style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-mahogany)',
                        marginTop: '2px'
                      }}>
                        {step.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Display Panel */}
            <div style={{
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: '48px',
              minHeight: '420px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(35, 23, 17, 0.02)'
            }} className="timeline-panel animate-fade-in" key={activeStep}>
              <div>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-text-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  {timelineSteps[activeStep].location}
                </span>
                <h3 style={{
                  fontSize: '2rem',
                  marginBottom: '20px',
                  color: 'var(--color-mahogany)'
                }}>
                  {timelineSteps[activeStep].title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--color-text-light)',
                  lineHeight: '1.7',
                  marginBottom: '32px'
                }}>
                  {timelineSteps[activeStep].desc}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. VERANDA CALLOUT */}
      <section style={{ padding: '100px 0 0 0' }}>
        <div className="container about-split-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
              Refining the <span style={{ fontStyle: 'italic' }}>"Presko"</span> Lifestyle
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '16px', lineHeight: '1.7' }}>
              Filipino architecture evolved around the climate. Standard Spanish-influenced ancestral homes featured high wooden ceilings, sliding shutter walls made of capiz shells, and wide open-air verandas.
            </p>
            <p style={{ fontSize: '1.02rem', fontStyle: 'italic', color: 'var(--color-forest)', marginBottom: '16px', borderLeft: '2px solid var(--color-forest)', paddingLeft: '16px' }}>
              "Presko describes the sensation of cool air moving through shaded wooden spaces. It is both a physical design and a state of mind."
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-light)', lineHeight: '1.7' }}>
              We have retained these passive cooling dynamics. The ocean breeze enters freely from the coast, passing through the garden foliage, and circulating through the high wood trusses. It is natural cooling that encourages you to linger.
            </p>
          </div>
            <img 
              src={preskoImg} 
              alt="Sliding Capiz Shell Panels" 
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
      </section>

      <style>{`
        .timeline-btn:hover {
          background-color: rgba(255, 255, 255, 0.6) !important;
        }
        @media (max-width: 900px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .timeline-panel {
            padding: 24px !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};
