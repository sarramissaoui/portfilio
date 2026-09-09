import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, MessageCircle, ExternalLink } from 'lucide-react';
import personalData from '../data/personal.json';
import skillsData from '../data/skills.json';

const Contact = () => {
  const contactItems = [
    { icon: Mail, label: 'Email', value: personalData.contact.email, link: `mailto:${personalData.contact.email}` },
    { icon: Phone, label: 'Phone', value: personalData.contact.phone, link: `tel:${personalData.contact.phone}` },
    { icon: MapPin, label: 'Location', value: personalData.contact.address },
    { icon: Github, label: 'GitHub', value: 'GitHub Profile', link: personalData.contact.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', link: personalData.contact.linkedin },
    { icon: Facebook, label: 'Facebook', value: 'Facebook Profile', link: personalData.contact.facebook },
    { icon: MessageCircle, label: 'Discord', value: 'Discord Profile', link: personalData.contact.discord }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">📞 Contact & Resume</h1>
      
      <section>
        <h2 className="section-title">🌐 Connect with Me</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          You can reach out to me through the platforms below. I'll try to respond as soon as possible!
        </p>
        
        <div className="contact-grid">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <IconComponent size={20} />
                </div>
                <div className="contact-info">
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">
                    {item.link ? (
                      <a href={item.link} className="contact-link" target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="section-title">📄 Resume Preview</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          View my professional experience and skills.<br />
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}
          >
            ➡️ See Full Resume <ExternalLink size={16} />
          </a>
        </p>
        
        {/* Resume Preview */}
        <div style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          padding: '2rem', 
          borderRadius: '0.5rem', 
          border: '1px solid var(--border-color)',
          marginBottom: '3rem'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            {personalData.name}
          </h3>
          <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
            {personalData.title}
          </h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
            {personalData.description}
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div>
              <h5 style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Contact</h5>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                📧 {personalData.contact.email}<br />
                📱 {personalData.contact.phone}<br />
                📍 {personalData.contact.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">🛠️ Skills Overview</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">Programming Languages</h3>
            <div className="skill-list">
              {skillsData.technicalSkills.programmingLanguages.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Frameworks & Libraries</h3>
            <div className="skill-list">
              {skillsData.technicalSkills.frameworks.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Databases</h3>
            <div className="skill-list">
              {skillsData.technicalSkills.databases.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Development Tools</h3>
            <div className="skill-list">
              {skillsData.toolsAndTechnologies.developmentTools.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Architecture & Protocols</h3>
            <div className="skill-list">
              {skillsData.toolsAndTechnologies.architectureAndProtocols.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">Testing & Analytics</h3>
            <div className="skill-list">
              {skillsData.toolsAndTechnologies.testingAndAnalytics.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="skill-category-title">AI & Machine Learning</h3>
            <div className="skill-list">
              {skillsData.specializations.aiAndML.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>

         

          <div className="skill-category">
            <h3 className="skill-category-title">Languages</h3>
            <div className="skill-list">
              {Object.entries(skillsData.languages).map(([lang, level], index) => (
                <span key={index} className="skill-item">{lang}: {level}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;