import React, { useState, useEffect } from 'react';
import { ExternalLink, Building2, User, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectImages, setProjectImages] = useState({});

  // Function to load images for a specific project
  const loadProjectImages = async (project) => {
    const { imageFolder, images } = project;
    
    if (!imageFolder || !images || projectImages[imageFolder]) {
      return projectImages[imageFolder] || [];
    }

    try {
      const validImages = [];
      
      // Check each image from the JSON to see if it exists
      for (const imageName of images) {
        const imagePath = `/images/projects/${imageFolder}/${imageName}`;
        
        try {
          // Check if image exists by trying to load it
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = imagePath;
          });
          
          validImages.push(imagePath);
        } catch (error) {
          // Image doesn't exist, continue to next image
          console.log(`Image not found: ${imagePath}`);
          continue;
        }
      }

      // Update state
      setProjectImages(prev => ({
        ...prev,
        [imageFolder]: validImages
      }));

      console.log(`Found ${validImages.length} images for ${imageFolder}`);
      return validImages;
    } catch (error) {
      console.log(`Error loading images for ${imageFolder}:`, error);
      return [];
    }
  };

  const openGallery = async (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
    
    // Load images if not already loaded
    if (project.imageFolder && project.images && !projectImages[project.imageFolder]) {
      await loadProjectImages(project);
    }
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.imageFolder) {
      const images = projectImages[selectedProject.imageFolder] || [];
      if (images.length > 0) {
        setCurrentImageIndex((prev) => 
          prev === images.length - 1 ? 0 : prev + 1
        );
      }
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.imageFolder) {
      const images = projectImages[selectedProject.imageFolder] || [];
      if (images.length > 0) {
        setCurrentImageIndex((prev) => 
          prev === 0 ? images.length - 1 : prev - 1
        );
      }
    }
  };

  const renderProjectLink = (project) => {
    const hasScreenshots = project.imageFolder && project.images;
    
    if (project.linkType === 'internal') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Link 
            to={project.link}
            className="project-link"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span className="project-title">{project.title}</span>
            <ExternalLink size={16} />
          </Link>
          {hasScreenshots && (
            <button
              onClick={() => openGallery(project)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--primary-color)',
                padding: '0.25rem',
                borderRadius: '0.25rem',
                display: 'flex',
                alignItems: 'center'
              }}
              title={`View Screenshots (${getImageCount(project)})`}
            >
              <Eye size={16} />
            </button>
          )}
        </div>
      );
    } else if (project.linkType === 'company' || project.linkType === 'external') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span className="project-title">{project.title}</span>
            <ExternalLink size={16} />
          </a>
          {hasScreenshots && (
            <button
              onClick={() => openGallery(project)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--primary-color)',
                padding: '0.25rem',
                borderRadius: '0.25rem',
                display: 'flex',
                alignItems: 'center'
              }}
              title={`View Screenshots (${getImageCount(project)})`}
            >
              <Eye size={16} />
            </button>
          )}
        </div>
      );
    } else {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <h3 className="project-title">{project.title}</h3>
          {hasScreenshots && (
            <button
              onClick={() => openGallery(project)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--primary-color)',
                padding: '0.25rem',
                borderRadius: '0.25rem',
                display: 'flex',
                alignItems: 'center'
              }}
              title={`View Screenshots (${getImageCount(project)})`}
            >
              <Eye size={16} />
            </button>
          )}
        </div>
      );
    }
  };

  // Helper to count images is available via getImageCount; remove unused hasImages to satisfy lint

  const getImageCount = (project) => {
    if (!project.imageFolder || !project.images) return 0;
    const images = projectImages[project.imageFolder] || [];
    return images.length;
  };

  // Load images for all projects on component mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const loadAllImages = async () => {
      const allProjects = [...projectsData.workProjects, ...projectsData.personalProjects];
      
      for (const project of allProjects) {
        if (project.imageFolder && project.images) {
          await loadProjectImages(project);
        }
      }
    };

    loadAllImages();
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">💼 Portfolio Pieces</h1>
      
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '3rem', textAlign: 'center' }}>
          <strong>  </strong>  I've professional development experience, I've worked on diverse projects 
        during my internships and also developed personal projects to enhance my skills.
      </p>

      <section>
        <h2 className="section-title">
          <Building2 size={24} style={{ display: 'inline', marginRight: '0.5rem' }} />
          Professional Work Projects
        </h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          Projects I developed during my internships and professional work experience at various companies.
        </p>
        
        <div className="projects-grid">
          {projectsData.workProjects && projectsData.workProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div style={{ marginBottom: '1rem' }}>
                {renderProjectLink(project)}
                <div style={{ 
                  color: 'var(--primary-color)', 
                  fontWeight: '500', 
                  fontSize: '0.875rem',
                  marginBottom: '0.5rem'
                }}>
                  {project.company} • {project.period}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              {project.responsibilities && (
                <div style={{ margin: '1rem 0' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    Key Responsibilities:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} style={{ marginBottom: '0.25rem' }}>• {resp}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.technologies && (
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}

              {/* Remove the separate Eye button since it's now integrated above */}
              {/* project.imageFolder && project.images && (
                <div style={{ marginTop: '1rem' }}>
                  <button
                    onClick={() => openGallery(project)}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.5rem',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    <Eye size={16} />
                    View Screenshots {getImageCount(project) > 0 && `(${getImageCount(project)})`}
                  </button>
                </div>
              ) */}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">
          <User size={24} style={{ display: 'inline', marginRight: '0.5rem' }} />
          Personal & Freelance Projects
        </h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          Personal projects I developed to learn new technologies and showcase my skills.
        </p>
        
        <div className="projects-grid">
          {projectsData.personalProjects && projectsData.personalProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  {project.link ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <span className="project-title">{project.title}</span>
                        <ExternalLink size={16} />
                      </a>
                      {project.imageFolder && project.images && (
                        <button
                          onClick={() => openGallery(project)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--primary-color)',
                            padding: '0.25rem',
                            borderRadius: '0.25rem',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          title={`View Screenshots (${getImageCount(project)})`}
                        >
                          <Eye size={16} />
                        </button>
                      )}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <h3 className="project-title">{project.title}</h3>
                      {project.imageFolder && project.images && (
                        <button
                          onClick={() => openGallery(project)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--primary-color)',
                            padding: '0.25rem',
                            borderRadius: '0.25rem',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          title={`View Screenshots (${getImageCount(project)})`}
                        >
                          <Eye size={16} />
                        </button>
                      )}
                    </div>
                  )}
                  
                  <p className="project-description">{project.description}</p>
                  
                  {project.status && (
                    <div style={{ marginTop: '1rem' }}>
                      <span 
                        style={{ 
                          backgroundColor: project.status === 'Completed' ? '#10b981' : '#f59e0b',
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                  )}
                  
                  {project.technologies && (
                    <div className="tech-tags" style={{ marginTop: '1rem' }}>
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}

                  {/* Remove the separate Eye button since it's now integrated above */}
                  {/* project.imageFolder && project.images && (
                    <div style={{ marginTop: '1rem' }}>
                      <button
                        onClick={() => openGallery(project)}
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          padding: '0.5rem 1rem',
                          backgroundColor: 'var(--bg-secondary)',
                          border: '1px solid var(--border-color)',
                          borderRadius: '0.5rem',
                          color: 'var(--text-primary)',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        <Eye size={16} />
                        View Screenshots {getImageCount(project) > 0 && `(${getImageCount(project)})`}
                      </button>
                    </div>
                  ) */}
                </div>
                
                {/* Remove the duplicate external link icon */}
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '3rem', textAlign: 'center' }}>
          🔗 <strong>
            <a 
              href="https://github.com/sarramissaoui?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              View All Projects on GitHub
            </a>
          </strong>
        </p>
      </section>

      {/* Image Gallery Modal */}
      {selectedProject && selectedProject.imageFolder && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            {/* Close Button */}
            <button
              onClick={closeGallery}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.5rem',
                padding: '0.5rem',
                cursor: 'pointer',
                color: 'var(--text-primary)'
              }}
            >
              <X size={20} />
            </button>

            {/* Project Title */}
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              color: 'var(--text-primary)',
              paddingRight: '3rem'
            }}>
              {selectedProject.title}
            </h3>

            {/* Image Container */}
            {projectImages[selectedProject.imageFolder] && projectImages[selectedProject.imageFolder].length > 0 ? (
              <div style={{
                position: 'relative',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                <img
                  src={projectImages[selectedProject.imageFolder][currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '60vh',
                    borderRadius: '0.5rem',
                    border: '1px solid var(--border-color)'
                  }}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600?text=Screenshot+${currentImageIndex + 1}`;
                  }}
                />

                {/* Navigation Arrows */}
                {projectImages[selectedProject.imageFolder].length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        padding: '0.75rem',
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        padding: '0.75rem',
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div style={{ 
                  textAlign: 'center', 
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  marginTop: '1rem'
                }}>
                  {currentImageIndex + 1} / {projectImages[selectedProject.imageFolder].length}
                </div>

                {/* Thumbnails */}
                {projectImages[selectedProject.imageFolder].length > 1 && (
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    {projectImages[selectedProject.imageFolder].map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        style={{
                          width: '60px',
                          height: '40px',
                          border: index === currentImageIndex ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                          borderRadius: '0.25rem',
                          padding: '2px',
                          cursor: 'pointer',
                          backgroundColor: 'var(--bg-secondary)',
                          overflow: 'hidden'
                        }}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '0.125rem'
                          }}
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/60x40?text=${index + 1}`;
                          }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                No images available for this project
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;