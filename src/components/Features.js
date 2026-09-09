import React from 'react';
import personalData from '../data/personal.json';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {personalData.features.map((feature, index) => (
            <article key={index} className="feature-card fade-in-up">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h2 className="feature-title">
                {feature.title}
              </h2>
              <p className="feature-description">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;