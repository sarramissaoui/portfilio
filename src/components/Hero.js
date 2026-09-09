import React from 'react';
import { Link } from 'react-router-dom';
import personalData from '../data/personal.json';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            {personalData.name}
          </h1>
          <p className="hero-subtitle">
            {personalData.tagline}
          </p>
          <p className="hero-tagline">
            {personalData.subtitle}
          </p>
          {personalData.stats && (
            <div className="hero-stats" style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
              {personalData.stats.map((stat, idx) => (
                <div key={idx} className="stat">
                  <div className="stat-value" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    {stat.value}
                  </div>
                  <div className="stat-label" style={{ fontSize: '0.9rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="cta-button">
              Contact Me!
            </Link>
          </div>
        </div>
        
        <div className="hero-image fade-in-up">
          <img 
            src={personalData.profileImage} 
            alt={personalData.name}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/375x375?text=Profile+Image';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;