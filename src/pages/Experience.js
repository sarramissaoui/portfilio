import React from 'react';
import experienceData from '../data/experience.json';

const Experience = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">👨🏼‍💻 Work Experience</h1>
      
      <section>
        <h2 className="section-title">👀 Work, Internship, and Volunteership</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          As a <strong>Full Stack Developer</strong>, I have built and contributed to web solutions focused on academic management, business workflows, and digital transformation.
          I combine technical implementation with a strong understanding of user needs, process optimization, and reliable application design.
        </p>
      </section>

      <section>
        <h2 className="section-title">✍️ Professional Work Experience</h2>
        
        <div className="timeline">
          {experienceData.experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3 className="position-title">{exp.position}</h3>
                <div className="company-name">{exp.company}</div>
                <div className="period">📅 {exp.period}</div>
                <div className="location">📍 {exp.location}</div>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', margin: '1rem 0' }}>
                  {exp.description}
                </p>
                
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;