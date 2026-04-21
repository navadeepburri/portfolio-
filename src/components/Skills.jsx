import React from 'react';
import { Database, Layout, Server, BrainCircuit, Wrench, Code2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={24} />,
      skills: ["C", "Java", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      skills: ["React.js", "HTML", "CSS"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Spring Boot", "REST APIs", "Flask"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      title: "ML & NLP",
      icon: <BrainCircuit size={24} />,
      skills: ["Helsinki-NLP", "Text Classification", "Hugging Face"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench size={24} />,
      skills: ["Docker", "Git", "GitHub", "Prometheus", "Grafana"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card" style={{
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: 'var(--accent-blue)',
                  padding: '0.8rem',
                  borderRadius: '12px'
                }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem' }}>{category.title}</h3>
              </div>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.8rem'
              }}>
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    padding: '0.4rem 1rem',
                    borderRadius: '100px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(139, 92, 246, 0.15)';
                    e.target.style.color = 'var(--text-primary)';
                    e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.borderColor = 'var(--glass-border)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
