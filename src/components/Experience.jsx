import React from 'react';
import { Briefcase, Award, Users, Code2, Heart, CheckCircle2, ShieldCheck } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      role: "Full Stack Developer Intern",
      org: "Goloka IT",
      period: "May 2026 – Aug 2026",
      highlights: [
        "Developed and maintained client-facing web applications using React.js, Spring Boot, and MySQL for production use",
        "Contributed to IBMV by resolving frontend/backend issues, improving course management, sorting logic, and mobile responsiveness",
        "Implemented SSO integration with Edmingle using JWT-based authentication",
        "Designed and optimized REST APIs for course synchronization, authentication, and dynamic content retrieval",
        "Worked on deployment, debugging, database migration, and production issue fixes across AWS EC2, Amazon S3, and Hostinger"
      ],
      icon: <Code2 size={24} />
    }
  ];

  const activities = [
    {
      role: "Committee Head",
      org: "Aaruush, SRM University",
      period: "May 2025 – Aug 2025",
      desc: "Led cross-functional teams for a national-level tech fest with 10K+ participants. Coordinated planning, execution, and stakeholder communication.",
      color: "var(--accent-cyan)",
      bgColor: "rgba(6, 182, 212, 0.1)",
      borderColor: "rgba(6, 182, 212, 0.25)"
    },
    {
      role: "Committee Member",
      org: "Aaruush, SRM University",
      period: "Aug 2024 – May 2025",
      desc: "Organized technical workshops and supported collaboration.",
      color: "var(--accent-blue)",
      bgColor: "rgba(59, 130, 246, 0.1)",
      borderColor: "rgba(59, 130, 246, 0.25)"
    },
    {
      role: "Volunteer",
      org: "Aaruush, SRM University",
      period: "Oct 2023 – Jul 2024",
      desc: "Supported event coordination, logistics, and technical workshop operations during Aaruush's university events.",
      color: "var(--accent-purple)",
      bgColor: "rgba(139, 92, 246, 0.1)",
      borderColor: "rgba(139, 92, 246, 0.25)"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      code: "CLF-C02",
      issuer: "Amazon Web Services",
      date: "Issued: Apr 2026",
      iconColor: "#FF9900",
      iconBg: "rgba(255, 153, 0, 0.1)",
      borderColor: "rgba(255, 153, 0, 0.2)"
    },
    {
      title: "NPTEL – Java Programming",
      code: "Advanced Programming Concepts",
      issuer: "NPTEL / IIT",
      date: "Issued: 2024",
      iconColor: "#4285F4",
      iconBg: "rgba(66, 133, 244, 0.1)",
      borderColor: "rgba(66, 133, 244, 0.2)"
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        
        {/* Work Experience */}
        <h2 className="section-title">Work Experience</h2>
        
        <div style={{ marginTop: '3.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {workExperience.map((exp, index) => (
            <div key={index} className="glass-card" style={{
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                opacity: 0.05,
                color: 'var(--accent-cyan)',
                transform: 'scale(4.5)',
                pointerEvents: 'none'
              }}>
                {exp.icon}
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.35rem', fontWeight: 700 }}>{exp.role}</h3>
                  <span style={{ 
                    color: 'var(--accent-cyan)', 
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}>{exp.org}</span>
                </div>
                <span style={{
                  color: 'var(--accent-purple)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  padding: '0.4rem 1rem',
                  borderRadius: '999px'
                }}>{exp.period}</span>
              </div>

              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}>
                {exp.highlights.map((item, i) => (
                  <li key={i} style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    position: 'relative',
                    paddingLeft: '1.4rem'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.6rem',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))'
                    }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extracurricular Activities */}
        <div style={{ marginTop: '5.5rem' }}>
          <h3 className="section-subtitle-left">Extracurricular Activities</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            {activities.map((exp, index) => (
              <div key={index} className="glass-card" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1.8rem',
                borderTop: `2px solid ${exp.color}`
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: exp.bgColor,
                    border: `1px solid ${exp.borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: exp.color,
                    flexShrink: 0
                  }}>
                    {index === 0 ? <Users size={20} /> : index === 1 ? <Briefcase size={20} /> : <Heart size={20} />}
                  </div>
                  
                  <span style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--glass-border)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px',
                    fontWeight: 500
                  }}>
                    {exp.period}
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{exp.role}</h4>
                  <p style={{ color: exp.color, fontWeight: 500, fontSize: '0.9rem' }}>{exp.org}</p>
                </div>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  marginTop: 'auto'
                }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginTop: '5.5rem' }}>
          <h3 className="section-subtitle-left">Certifications</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.8rem',
                borderLeft: `3px solid ${cert.iconColor}`
              }}>
                <div style={{
                  color: cert.iconColor,
                  background: cert.iconBg,
                  border: `1px solid ${cert.borderColor}`,
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Award size={28} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '0.3rem'
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: cert.iconColor,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {cert.issuer}
                    </span>
                    <span style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.8rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px'
                    }}>
                      {cert.date}
                    </span>
                  </div>
                  
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.25rem', lineHeight: 1.3 }}>
                    {cert.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    {cert.code}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
