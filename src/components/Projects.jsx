import React from 'react';
import { ExternalLink, Code, Monitor, Server, Settings } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "A Multilingual E-Commerce Complaint Management System with Automated Categorization",
      period: "Dec 2025 - Mar 2026",
      demoLink: "https://dcms-frontend-liart.vercel.app/",
      role: "Full Stack Development & Machine Learning",
      description: "Built a scalable full-stack system to process and categorize multilingual customer complaints using NLP models. Integrated Helsinki-NLP transformers for automated tagging. Designed REST APIs using Spring Boot and deployed containerized services using Docker. Implemented system monitoring with Prometheus & Grafana.",
      techStack: ["React.js", "Spring Boot", "Java", "PostgreSQL", "Hugging Face", "Docker", "Prometheus"],
      icon: <Settings size={28} />
    },
    {
      title: "Pharmacy Management System",
      period: "Feb 2025 - Apr 2025",
      role: "Developer",
      description: "Designed and developed a full-stack system to manage inventory, sales, and expiry alerts, reducing manual bookkeeping effort by 40%. Implemented role-based authentication, CRUD APIs, and real-time dashboards. Optimized MySQL queries to improve data retrieval performance.",
      techStack: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
      icon: <Monitor size={28} />
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          marginTop: '4rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} className="glass-card" style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(300px, 1fr) 2fr',
              gap: '2rem',
              alignItems: 'start'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))',
                borderRadius: '12px',
                padding: '2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid var(--glass-border)'
              }}>
                <div style={{
                  color: 'var(--accent-cyan)',
                  marginBottom: '1rem'
                }}>
                  {project.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>{project.title}</h3>
                <p style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem' }}>{project.role}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{project.period}</p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem'
                  }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.techStack.map((tech, tIndex) => (
                      <span key={tIndex} style={{
                        color: 'var(--accent-blue)',
                        background: 'rgba(59, 130, 246, 0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  >
                    <Code size={18} /> View Code
                  </a>
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #projects .glass-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
