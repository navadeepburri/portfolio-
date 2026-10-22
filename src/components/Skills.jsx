import React from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Activity, 
  Wrench, 
  Cpu 
} from 'lucide-react';
import { 
  FaJava, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiMysql, 
  SiPrometheus, 
  SiGrafana 
} from 'react-icons/si';

const Skills = () => {
  // Exactly matching resume Technical Skills section
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={22} style={{ color: '#818cf8' }} />,
      accentColor: "#818cf8",
      skills: [
        { name: "Java", icon: <FaJava color="#ED8B00" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "C", icon: <span style={{ fontWeight: 800, color: '#818cf8' }}>C</span> }
      ]
    },
    {
      title: "Frameworks",
      icon: <Layers size={22} style={{ color: '#38bdf8' }} />,
      accentColor: "#38bdf8",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "React.js", icon: <FaReact color="#61DAFB" /> }
      ]
    },
    {
      title: "Database",
      icon: <Database size={22} style={{ color: '#fbbf24' }} />,
      accentColor: "#fbbf24",
      skills: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench size={22} style={{ color: '#c084fc' }} />,
      accentColor: "#c084fc",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#ffffff" /> }
      ]
    },
    {
      title: "Monitoring",
      icon: <Activity size={22} style={{ color: '#f87171' }} />,
      accentColor: "#f87171",
      skills: [
        { name: "Prometheus", icon: <SiPrometheus color="#E6522C" /> },
        { name: "Grafana", icon: <SiGrafana color="#F46800" /> }
      ]
    },
    {
      title: "Core Concepts",
      icon: <Cpu size={22} style={{ color: '#34d399' }} />,
      accentColor: "#34d399",
      skills: [
        { name: "Data Structures & Algorithms", icon: <span style={{ fontWeight: 800, color: '#34d399', fontSize: '0.75rem' }}>DSA</span> },
        { name: "OOPs", icon: <span style={{ fontWeight: 800, color: '#34d399', fontSize: '0.75rem' }}>OOP</span> },
        { name: "Operating Systems", icon: <span style={{ fontWeight: 800, color: '#34d399', fontSize: '0.75rem' }}>OS</span> }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center">
          <div className="badge-tag">
            Core Competencies
          </div>
          <h2 className="section-title">
            Technical Skills
          </h2>
          <div className="section-title-line"></div>
        </div>

        {/* 6 Category Grid matching Resume */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
          marginTop: '3.5rem'
        }} className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card" 
              style={{
                padding: '1.75rem',
                borderTop: `2px solid ${category.accentColor}`,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.4rem'
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#ffffff'
                }}>
                  {category.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                marginTop: 'auto'
              }}>
                {category.skills.map((skill, sIndex) => (
                  <div
                    key={sIndex}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '0.5rem 1rem',
                      borderRadius: '10px',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      transition: 'all 0.25s ease',
                      cursor: 'default'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.12)';
                      e.currentTarget.style.borderColor = category.accentColor;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
