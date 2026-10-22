import React from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const project = {
    title: "A Multilingual E-Commerce Complaint Management System with Automated Categorization",
    period: "Dec 2025 – Mar 2026",
    image: `${import.meta.env.BASE_URL}project-ecommerce.jpg`,
    demoLink: "https://dcms-frontend-liart.vercel.app/",
    codeLink: "https://github.com/navadeepburri",
    highlights: [
      "Built a scalable system to process and categorize multilingual customer complaints using NLP models",
      "Integrated Helsinki-NLP transformers for automated multilingual tagging",
      "Designed REST APIs using Spring Boot and implemented system monitoring with Prometheus & Grafana",
      "Deployed containerized services and improved observability and reliability"
    ],
    techStack: [
      "React.js", 
      "Spring Boot", 
      "Java", 
      "PostgreSQL", 
      "Hugging Face NLP", 
      "Docker", 
      "Prometheus & Grafana"
    ]
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header-center">
          <div className="badge-tag">
            Portfolio Showcase
          </div>
          <h2 className="section-title">
            Featured Project
          </h2>
          <div className="section-title-line"></div>
        </div>

        {/* Featured Showcase Project Card matching Resume */}
        <div style={{
          marginTop: '3.5rem',
          maxWidth: '1100px',
          margin: '3.5rem auto 0'
        }}>
          <div className="glass-card" style={{
            padding: '0',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.6)'
          }} className="project-feature-card">
            
            {/* Visual Preview */}
            <div style={{
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(15, 18, 40, 0.95), rgba(7, 9, 22, 0.95))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              borderRight: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(99, 102, 241, 0.15)'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Content Details */}
            <div style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <span style={{
                  fontSize: '0.85rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  background: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  padding: '0.25rem 0.8rem',
                  borderRadius: '999px'
                }}>
                  {project.period}
                </span>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <FaGithub size={18} /> Code
                  </a>
                  
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: '#818cf8',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#818cf8'}
                  >
                    Live Demo <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>

              <h3 style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                marginBottom: '1.25rem',
                lineHeight: 1.35,
                color: '#ffffff'
              }}>
                {project.title}
              </h3>

              {/* Highlights from Resume */}
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1.75rem'
              }}>
                {project.highlights.map((item, i) => (
                  <li key={i} style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    position: 'relative',
                    paddingLeft: '1.35rem'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.55rem',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent-primary)'
                    }}></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech Stack matching Resume */}
              <div>
                <p style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.65rem'
                }}>
                  Tech Stack:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {project.techStack.map((tech, tIndex) => (
                    <span key={tIndex} style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#c7d2fe',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-feature-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
