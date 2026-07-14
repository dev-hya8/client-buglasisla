import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    session: 'coffee',
    notes: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please provide a contact number.';
    if (!formData.date) newErrors.date = 'Please select a reservation date.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Trigger brand-colored confetti burst
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#BD634E', '#1B3326', '#231711', '#FAF8F5'] // terracotta, forest green, mahogany, capiz
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '2',
      date: '',
      session: 'coffee',
      notes: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '100px' }}>
      
      {/* SECTION HEADER */}
      <section style={{ padding: '80px 0 40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
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
            Reservations
          </span>
          <h1 style={{ fontSize: '3.2rem', marginBottom: '16px' }}>Step Inside</h1>
          <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>
            Book a table in our gardens or inside the historic capiz lounge. Walk-ins are welcome, but tables fill quickly during golden hour.
          </p>
        </div>
      </section>

      {/* SPLIT CONTACT GRID */}
      <section style={{ padding: '20px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '64px',
            alignItems: 'start'
          }} className="contact-grid">
            
            {/* LEFT SIDE: DETAILS & MAP PLACEHOLDER */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              
              {/* Information Row */}
              <div style={{
                backgroundColor: 'var(--color-bg-card)',
                padding: '40px',
                border: '1px solid var(--color-border)',
                borderRadius: '2px'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Find Us</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <MapPin style={{ color: 'var(--color-terracotta)', flexShrink: 0, marginTop: '2px' }} size={20} />
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>Location</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '2px' }}>
                        Ground Floor, E.J. Blanco Drive, Piapi, <br />
                        Dumaguete City, 6200 Negros Oriental
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <Clock style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '2px' }} size={20} />
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>Hours of Sanctuary</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '2px' }}>
                        Monday to Sunday: 7:00 AM – 10:00 PM <br />
                        Kitchen Closes at 9:30 PM
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <Phone style={{ color: 'var(--color-mahogany)', flexShrink: 0, marginTop: '2px' }} size={20} />
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>Contact Details</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '2px' }}>
                        +63 917 500 3953 <br />
                        buglasislacafe@riesa.ph
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Map */}
              <div style={{
                width: '100%',
                borderRadius: '4px',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(35, 23, 17, 0.05)',
                aspectRatio: '16/10'
              }}>
                <iframe
                  title="Buglas Isla Café Location Map"
                  src="https://maps.google.com/maps?q=Buglas%20Isla%20Cafe,%20E.J.%20Blanco%20Drive,%20Piapi,%20Dumaguete&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

            {/* RIGHT SIDE: RESERVATION FORM OR SUCCESS PANEL */}
            <div style={{
              backgroundColor: 'var(--color-bg-card)',
              padding: '48px',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              boxShadow: '0 8px 30px rgba(35, 23, 17, 0.03)'
            }} className="form-card">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Request a Table</h2>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '32px' }}>
                    Fill out the form below. We will confirm your reservation request via email within 1 hour.
                  </p>

                  {/* Name Input */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Dela Cruz"
                      className="form-input"
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  {/* Split row: Email & Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="split-form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan@email.com"
                        className="form-input"
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input 
                        type="text" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+63 917 123 4567"
                        className="form-input"
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Split row: Date, Guests, Session */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1.2fr', gap: '16px' }} className="split-form-row-3">
                    <div className="form-group">
                      <label className="form-label" htmlFor="date">Date</label>
                      <input 
                        type="date" 
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-input"
                      />
                      {errors.date && <span className="error-text">{errors.date}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="guests">Guests</label>
                      <select 
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6">6+ People</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="session">Session</label>
                      <select 
                        id="session"
                        name="session"
                        value={formData.session}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="brunch">Brunch (7 AM - 11 AM)</option>
                        <option value="coffee">Coffee (11 AM - 4 PM)</option>
                        <option value="sunset">Sunset Vibe (4 PM - 6 PM)</option>
                        <option value="dinner">Dinner (6 PM - 10 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="form-group" style={{ marginBottom: '32px' }}>
                    <label className="form-label" htmlFor="notes">Special Requests / Occasion</label>
                    <textarea 
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="E.g., Garden table preferred, anniversary celebration, vegetarian options..."
                      className="form-textarea"
                      rows={3}
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                    Request Reservation
                  </button>
                </form>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '40px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  animation: 'fadeIn 0.5s ease'
                }}>
                  <div style={{
                    color: 'var(--color-forest)',
                    marginBottom: '24px'
                  }}>
                    <CheckCircle size={64} />
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Request Received</h2>
                  <p style={{
                    color: 'var(--color-text-light)',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    maxWidth: '360px',
                    marginBottom: '40px'
                  }}>
                    Thank you, <strong>{formData.name}</strong>. We've received your request for <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong>. A confirmation email has been sent to <strong>{formData.email}</strong>.
                  </p>
                  
                  <div style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '24px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    <button 
                      onClick={resetForm} 
                      className="btn-secondary"
                      style={{ width: '100%' }}
                    >
                      Make Another Booking
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      <style>{`
        .error-text {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--color-terracotta);
          margin-top: 6px;
          display: block;
          font-weight: 500;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .form-card {
            padding: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .split-form-row {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .split-form-row-3 {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};
