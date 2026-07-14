import React, { useState } from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Cafe: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuCategories = [
    { id: 'coffee', label: 'Signature Brews' },
    { id: 'delicacies', label: 'Native Delicacies' },
    { id: 'brunch', label: 'All-Day Brunch' },
    { id: 'dinner', label: 'Heritage Dinner' }
  ];

  const menuItems: Record<string, Array<{ name: string; desc: string; price: string }>> = {
    coffee: [
      {
        name: 'Capiz Cold Brew',
        desc: 'Negros-grown single-origin arabica, steeped cold for 18 hours, finished with a hint of Bais wild honey.',
        price: '₱190'
      },
      {
        name: 'Tsokolate Espresso Macchiato',
        desc: 'A robust double-shot of espresso folded into pure native cacao tablea, sweetened with dark muscovado sugar.',
        price: '₱210'
      },
      {
        name: 'Presko Garden Iced Latte',
        desc: 'Espresso poured over chilled local farm milk, infused with house-extracted pandan leaves and lemongrass syrup.',
        price: '₱185'
      },
      {
        name: 'Traditional Drip Coffee',
        desc: 'Slow hand-pour of medium-roasted Robusta beans from the foothills of Mount Kanlaon, earthy and cocoa-noted.',
        price: '₱160'
      }
    ],
    delicacies: [
      {
        name: 'Budbud Kabog Tres Leches',
        desc: 'Traditional Dumaguete millet-seed rolls (budbud) soaked in three milks, served with fresh mango segments and toasted coconut.',
        price: '₱220'
      },
      {
        name: 'Heritage Tablea Champorado',
        desc: 'Sticky upland brown rice cooked with pure unsweetened chocolate blocks from Bais City, accompanied by crispy dried sapsap fish.',
        price: '₱240'
      },
      {
        name: 'Native Bibingka Soufflé',
        desc: 'Baked-to-order coconut rice cake soufflé with salted duck egg center, glazed with local butter and topped with grated queso de bola.',
        price: '₱260'
      },
      {
        name: 'Masa Podrida Shortbreads',
        desc: 'Crumbly, vintage-recipe Spanish-style biscuits baked with lard and brown sugar, ideal for dipping in hot tsokolate.',
        price: '₱120'
      }
    ],
    brunch: [
      {
        name: 'Bais Muscovado Bacon & Eggs',
        desc: 'House-cured thick-cut bacon glazed with caramelized muscovado sugar, served with two organic eggs, local greens, and sourdough.',
        price: '₱380'
      },
      {
        name: 'Adobo Flakes Eggs Benedict',
        desc: 'Crispy shredded native chicken adobo on grilled pandesal, topped with soft poached eggs and a citrus-tinged hollandaise.',
        price: '₱350'
      },
      {
        name: 'Kansi Benedict on Pan de Sal',
        desc: 'Pulled beef shank slow-cooked in sour batwan broth, served on local bread with garlic chili oils.',
        price: '₱390'
      },
      {
        name: 'Sikwate French Toast',
        desc: 'Brioche bread soaked in sweet egg custard, pan-griddled and drizzled with a thick native chocolate syrup.',
        price: '₱310'
      }
    ],
    dinner: [
      {
        name: 'Piapi Sea Bass in Batwan Broth',
        desc: 'Pan-seared local sea bass filet served over a reduced broth of sour batwan fruit, local spinach, and sweet tomatoes.',
        price: '₱580'
      },
      {
        name: 'Slow-Braised Mahogany Pork Humba',
        desc: 'Negros pork belly simmered in native tuba vinegar, soy sauce, and black beans, sweetened with whole sugar cane stalks.',
        price: '₱490'
      },
      {
        name: 'Mount Kanlaon Garlic Rice & Inasal Ribs',
        desc: 'Charcoal-grilled pork ribs basted in annatto oil and calamansi, served with heirloom red rice tossed in crispy garlic.',
        price: '₱520'
      },
      {
        name: 'Smoked Aubergine & Coconut Curry',
        desc: 'Fire-roasted eggplant stewed in fresh coconut milk, ginger, and turmeric, topped with fresh garden basil.',
        price: '₱420'
      }
    ]
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '100px' }}>
      
      {/* 1. INTRO / SPACES SECTION */}
      <section style={{ padding: '80px 0 60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px auto' }}>
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
              The Vibe & Flavors
            </span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
              Dine inside a heritage relic.
            </h1>
            <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>
              Choose your sanctuary. Buglas Isla offers three distinct dining environments, each reflecting the airflow, light, and mahogany frameworks of our historic reassembled home.
            </p>
          </div>

          {/* Zones Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '32px',
            marginBottom: '80px'
          }} className="zones-grid">
            
            {/* Zone 1 */}
            <div>
              <ImagePlaceholder 
                title="The Garden Al Fresco" 
                description="View of wrought iron patio furniture under large, shady green palms and native orchids. Natural, soft outdoor light."
                aspectRatio="4/3"
              />
              <h3 style={{ fontSize: '1.4rem', marginTop: '20px', marginBottom: '8px' }}>The Garden Al Fresco</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                Surrounded by lush local greenery, orchids, and stone walkways. Feel the fresh coastal breeze under high canopy trees.
              </p>
            </div>

            {/* Zone 2 */}
            <div>
              <ImagePlaceholder 
                title="The Capiz Lounge" 
                description="Elegant indoor dining tables next to sliding capiz lattice window panels. Soft light filters in, casting square patterns on wooden floorboards."
                aspectRatio="4/3"
              />
              <h3 style={{ fontSize: '1.4rem', marginTop: '20px', marginBottom: '8px' }}>The Capiz Lounge</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                Soft natural lighting diffused through vintage capiz panels. Ideal for quiet afternoons, reading, and signature coffees.
              </p>
            </div>

            {/* Zone 3 */}
            <div>
              <ImagePlaceholder 
                title="The Mahogany Room" 
                description="Close-up of heavy dark wood dining tables, surrounded by historic pillars and exposed rafters. Classic, moody interior lighting."
                aspectRatio="4/3"
              />
              <h3 style={{ fontSize: '1.4rem', marginTop: '20px', marginBottom: '8px' }}>The Mahogany Room</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                Surrounded by the original 1930s load-bearing timbers. A formal, sophisticated environment highlighting structural heritage.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE EDITORIAL MENU SECTION */}
      <section style={{
        padding: '100px 0',
        backgroundColor: '#FAF5ED',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          
          {/* Menu Title & Category Nav */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '64px'
          }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '32px' }}>The Culinary Journal</h2>
            
            {/* Category Tabs */}
            <div style={{
              display: 'flex',
              backgroundColor: 'rgba(35, 23, 17, 0.04)',
              padding: '6px',
              borderRadius: '4px',
              border: '1px solid var(--color-border)',
              maxWidth: '100%',
              overflowX: 'auto'
            }} className="menu-tabs-container">
              {menuCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '10px 24px',
                      borderRadius: '2px',
                      backgroundColor: isActive ? 'var(--color-mahogany)' : 'transparent',
                      color: isActive ? 'var(--color-capiz)' : 'var(--color-text)',
                      transition: 'var(--transition-fast)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Menu Grid and Food Image Split */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '64px',
            alignItems: 'start'
          }} className="menu-split">
            
            {/* Menu List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }} className="animate-fade-in" key={activeCategory}>
              {menuItems[activeCategory].map((item, idx) => (
                <div key={idx} style={{
                  borderBottom: '1px solid rgba(35, 23, 17, 0.1)',
                  paddingBottom: '24px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '8px'
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 500,
                      color: 'var(--color-mahogany)'
                    }}>
                      {item.name}
                    </h3>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      color: 'var(--color-terracotta)',
                      fontSize: '0.95rem'
                    }}>
                      {item.price}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-light)',
                    lineHeight: '1.5',
                    maxWidth: '480px'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Sidebar Image Suggestion (dynamic) */}
            <div style={{
              position: 'sticky',
              top: '120px'
            }} className="menu-image-container">
              {activeCategory === 'coffee' && (
                <ImagePlaceholder 
                  title="Photo: Signature Cold Brew Served" 
                  description="A cold glass of signature coffee resting on a heavy mahogany tabletop. Droplets of condensation catch the low-angled garden sunlight."
                  aspectRatio="1/1"
                />
              )}
              {activeCategory === 'delicacies' && (
                <ImagePlaceholder 
                  title="Photo: Local Budbud Kabog Plated" 
                  description="Traditional millet delicacies styled on custom-made dark ceramics, drizzled with native Bais chocolate syrup."
                  aspectRatio="1/1"
                />
              )}
              {activeCategory === 'brunch' && (
                <ImagePlaceholder 
                  title="Photo: Muscovado Bacon Benedict" 
                  description="A gourmet breakfast dish close-up. Thick glaze-cut bacon and soft poached eggs, shot with macro lens detailing textures."
                  aspectRatio="1/1"
                />
              )}
              {activeCategory === 'dinner' && (
                <ImagePlaceholder 
                  title="Photo: Piapi Sea Bass Presentation" 
                  description="Pan-seared fish filet resting in batwan-infused broth, plated elegantly with fresh green garnishes on a terracotta dish."
                  aspectRatio="1/1"
                />
              )}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .zones-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .menu-split {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .menu-image-container {
            position: static !important;
            order: -1;
          }
        }
      `}</style>
    </div>
  );
};
