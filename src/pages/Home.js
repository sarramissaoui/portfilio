import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Code, MapPin, ChevronRight, Zap } from 'lucide-react';
import personalData from '../data/personal.json';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = (personalData.stats && personalData.stats.length > 0)
    ? personalData.stats.map((s) => ({
        label: s.label,
        value: s.value,
        icon: s.label && s.label.toLowerCase().includes('project') ? <Code size={24} /> : <Award size={24} />
      }))
    : [
        { label: "Projects Completed", value: "10+", icon: <Code size={24} /> },
        { label: "Technologies", value: "8+", icon: <Zap size={24} /> }
      ];

  const skills = [
    { name: "Backend Systems", icon: "🖥️", description: "I build robust backend systems using NestJS, Python Rest Framework, and FastAPI. I develop RESTful APIs, implement JWT authentication, integrate machine learning models, and create microservices architecture with Redis for scalable applications." },
    { name: "Full Stack Apps", icon: "🌐", description: "I create complete web applications using React + NestJS, and MERN stack. I handle everything from database design to user interface, implementing role-based access control and subscription management systems." },
    { name: "Mobile Apps", icon: "📱", description: "I develop cross-platform mobile applications using Flutter and Firebase. I build apps with real-time chat, image sharing, social media functionality, and parent-child monitoring systems with seamless mobile-web integration." },
    { name: "Data Analytics", icon: "📊", description: "I create comprehensive Power BI dashboards and data visualization solutions. I develop analytics systems for business intelligence, sales tracking, and performance monitoring, leveraging my background in business intelligence." },
     {
    name: "DevOps",
    icon: "⚙️",
    description:
      "I design and implement CI/CD pipelines using tools like Jenkins, GitHub Actions, Docker, Prometheus, and Grafana. I leverage Kubernetes for container orchestration and use Terraform for infrastructure as code to ensure scalable, reliable, and automated deployments.",
  },
    { name: "API & ML Integration", icon: "🔗", description: "I specialize in integrating machine learning models into web applications  ." }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '6rem 2rem', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(244, 114, 182, 0.10)',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'rgba(251, 207, 232, 0.20)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 400px', 
            gap: '4rem'
          }}>
            <div style={{ 
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out'
            }}>
              <div style={{ 
                background: 'rgba(255,255,255,0.9)', 
                padding: '0.5rem 1rem', 
                borderRadius: '2rem', 
                display: 'inline-block',
                marginBottom: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(244, 114, 182, 0.25)',
                boxShadow: '0 8px 24px rgba(244, 114, 182, 0.08)'
              }}>
                <span style={{ color: '#be185d', fontSize: '0.875rem', fontWeight: '600' }}>
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                fontWeight: '800', 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #111827 0%, #be185d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.1'
              }}>
                {personalData.name}
              </h1>
              
              <h2 style={{ 
                fontSize: '1.5rem', 
                color: '#4b5563', 
                fontWeight: '500',
                marginBottom: '1.5rem'
              }}>
                Full Stack Developer
              </h2>
              
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#4b5563', 
                lineHeight: '1.7',
                marginBottom: '2rem',
                maxWidth: '500px'
              }}>
                I am a Full Stack Developer based in Sousse, Tunisia, creating reliable web applications and digital solutions that support academic, business, and operational needs.
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                <Link 
                  to="/projects" 
                  style={{
                    background: 'linear-gradient(135deg, #ec4899 0%, #f9a8d4 100%)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '3rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(236, 72, 153, 0.25)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 15px 40px rgba(236, 72, 153, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 30px rgba(236, 72, 153, 0.25)';
                  }}
                >
                  View My Projects
                  <ChevronRight size={18} />
                </Link>
                
                <Link 
                  to="/contact"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    color: '#be185d',
                    padding: '1rem 2rem',
                    borderRadius: '3rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(236,72,153,0.25)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#fff1f2';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.9)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Contact Me
                </Link>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '1rem'
              }}>
                {stats.map((stat, index) => (
                  <div key={index} style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '1rem',
                    borderRadius: '1rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    <div style={{ color: '#fff', marginBottom: '0.5rem' }}>{stat.icon}</div>
                    <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700' }}>{stat.value}</div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ 
              position: 'relative',
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 0.2s'
            }}>
              <div style={{
                position: 'relative',
                width: '350px',
                height: '350px',
                margin: '0 auto'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '-20px',
                  background: 'linear-gradient(135deg, #f9a8d4, #fdf2f8)',
                  borderRadius: '50%',
                  opacity: 0.9,
                  filter: 'blur(1px)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  inset: '-10px',
                  background: 'rgba(255,255,255,0.8)',
                  borderRadius: '50%',
                  backdropFilter: 'blur(10px)'
                }} />
                
                <img 
                  src={personalData.profileImage} 
                  alt={personalData.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    position: 'relative',
                    zIndex: 2,
                    border: '4px solid rgba(255,255,255,0.3)'
                  }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/350x350?text=Profile+Image'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section style={{ 
        padding: '4rem 2rem', 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              My Journey
            </h2>
            <p style={{ 
              color: '#64748b', 
              fontSize: '1.125rem', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              A solid education and diverse experience in service of technological innovation
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '3rem',
            background: 'rgba(255,255,255,0.5)',
            padding: '0.5rem',
            borderRadius: '3rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            maxWidth: 'fit-content',
            margin: '0 auto 3rem'
          }}>
            {['overview', 'skills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '2rem',
                  border: 'none',
                  background: activeTab === tab ? '#fff' : 'transparent',
                  color: activeTab === tab ? '#2d3748' : '#64748b',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === tab ? '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none'
                }}
              >
                {tab === 'overview' ? 'Overview' : 'Capabilities'}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  icon: <GraduationCap size={24} />,
                  title: "Preparatory Integrated Program",
                  subtitle: "Polytechnique Sousse (2018 - 2020)",
                  color: "#10b981"
                },
                {
                  icon: <Award size={24} />,
                  title: "Software Engineering",
                  subtitle: "Polytechnique Sousse (2022 - 2025)",
                  color: "#3b82f6"
                },
                {
                  icon: <Code size={24} />,
                  title: "Full Stack Developer",
                  subtitle: "React, Spring Boot, PHP, MySQL, Odoo",
                  color: "#f59e0b"
                },
                {
                  icon: <MapPin size={24} />,
                  title: "Based in Sousse, Tunisia",
                  subtitle: "Available for remote or hybrid work",
                  color: "#ef4444"
                }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ 
                    color: item.color, 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    color: '#2d3748',
                    fontSize: '1.125rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: '#64748b', 
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}>
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {skills.map((skill, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
                      <span style={{ fontWeight: '600', color: '#2d3748' }}>{skill.name}</span>
                    </div>
                    <p style={{ 
                      color: '#64748b', 
                      fontSize: '0.875rem', 
                      lineHeight: '1.5'
                    }}>
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" style={{ 
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #bfd0f5ff 0%, #ffffff)'
      }}>
        <div className="features-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary, #151414ff)' }}>
              What I Bring to the Table
            </h2>
            <p style={{ color: 'var(--text-secondary, rgba(255,255,255,0.9))', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Combining technical expertise with a business intelligence background to deliver comprehensive solutions
            </p>
          </div>
          
          <div className="features-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {personalData.features.map((feature, index) => (
              <article key={index} className="feature-card fade-in-up" style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '2rem',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
              >
                <div className="feature-icon" style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  textAlign: 'center',
                  color: feature.color
                }}>
                  {feature.icon}
                </div>
                <h3 className="feature-title" style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: feature.color,
                  textAlign: 'center'
                }}>
                  {feature.title}
                </h3>
                <p className="feature-description" style={{ 
                  color: feature.color,
                  lineHeight: '1.6',
                  textAlign: 'center'
                }}>
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ 
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem 2rem', 
            background: 'white', 
            borderRadius: '1rem', 
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            border: '1px solid var(--border-color, rgba(255,255,255,0.2))'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem', 
              color: 'var(--text-primary, #2d3748)'
            }}>
              Ready to collaborate?
            </h3>
            <p style={{ 
              color: 'var(--text-secondary, #64748b)', 
              marginBottom: '2rem', 
              maxWidth: '500px', 
              margin: '0 auto 2rem',
              fontSize: '1.125rem'
            }}>
              I'm always excited to work on new projects and bring innovative ideas to life. 
              Let's discuss how we can work together!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to="/projects" 
                className="cta-button" 
                style={{ 
                  background: 'var(--secondary-color, linear-gradient(135deg, #66d6eaff 0%, #4b89a2ff 100%))', 
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '3rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(102,126,234,0.3)',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(102,126,234,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(102,183,234,0.3)';
                }}
              >
                View My Work
                <ChevronRight size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="cta-button" 
                style={{ 
                  background: 'transparent',
                  color: '#667eea',
                  padding: '1rem 2rem',
                  borderRadius: '3rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  border: '2px solid #667eea'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#667eea';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#667eea';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          section > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;