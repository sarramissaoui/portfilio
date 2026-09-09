import React from 'react';
import educationData from '../data/education.json';

const Education = () => {
  const { degrees = [], certifications = [] } = educationData;

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
      <section style={{ marginBottom: '3rem' }}>
        <p style={{ color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '0.75rem' }}>
          Education
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: 0, color: '#111827' }}>
          Academic background
        </h1>
      </section>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {degrees.map((degree, index) => (
          <article
            key={`${degree.institution}-${index}`}
            style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '20px',
              padding: '1.5rem',
              boxShadow: '0 12px 35px rgba(15, 23, 42, 0.06)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <h2 style={{ margin: '0 0 0.35rem', color: '#111827', fontSize: '1.5rem' }}>{degree.degree}</h2>
                <p style={{ margin: 0, color: '#374151', fontWeight: 600 }}>{degree.institution}</p>
              </div>
              <span style={{ color: '#2563eb', background: '#eff6ff', borderRadius: '999px', padding: '0.5rem 0.9rem', fontWeight: 700 }}>
                {degree.period}
              </span>
            </div>

            <p style={{ color: '#4b5563', lineHeight: 1.7, margin: '1rem 0' }}>{degree.description}</p>

            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#374151', lineHeight: 1.8 }}>
              {degree.highlights.map((highlight, i) => (
                <li key={`${degree.institution}-highlight-${i}`}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section style={{ marginTop: '4rem' }}>
        <p style={{ color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, marginBottom: '0.75rem' }}>
          Certifications
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {certifications.map((certification, index) => (
            <div
              key={`${certification.name}-${index}`}
              style={{
                background: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '1.25rem'
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem', color: '#111827' }}>{certification.name}</h3>
              <p style={{ margin: '0 0 0.4rem', color: '#2563eb', fontWeight: 600 }}>{certification.issuer}</p>
              <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.6 }}>{certification.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
