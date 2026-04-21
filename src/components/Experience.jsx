import React from 'react';
import { Briefcase, Award, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Committee Head",
      org: "Aaruush, SRM University",
      period: "May 2025 - Aug 2025",
      desc: "Led cross-functional teams for a national-level tech fest with 10K+ participants. Coordinated planning, execution, and stakeholder communication for multiple events."
    },
    {
      role: "Committee Member",
      org: "Aaruush, SRM University",
      period: "Aug 2024 - May 2025",
      desc: "Organized technical workshops and supported cross-team collaboration."
    },
    {
      role: "Volunteer",
      org: "Aaruush, SRM University",
      period: "Oct 2023 - Jul 2024",
      desc: "Supported event coordination and logistics during Aaruush's technical workshops and events."
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem'
        }} className="exp-grid">
          
          {/* Experience Timeline */}
          <div>
            <h2 className="section-title" style={{ left: '0', transform: 'none', textAlign: 'left' }}>Experience</h2>
            <div style={{
              position: 'relative',
              paddingLeft: '2rem',
              borderLeft: '2px solid var(--glass-border)',
              marginTop: '3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}>
              {experiences.map((exp, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '-34px',
                    top: '0',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '4px solid var(--accent-purple)',
                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
                  }}></div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 500 }}>{exp.org}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{exp.period}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="section-title" style={{ left: '0', transform: 'none', textAlign: 'left' }}>Certifications</h2>
            <div style={{
              marginTop: '3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div className="glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ color: '#FF9900', background: 'rgba(255, 153, 0, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                  <Award size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>AWS Certified Cloud Practitioner</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>CLF-C02</p>
                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Issued: Apr 2026</p>
                </div>
              </div>

              <div className="glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ color: '#4285F4', background: 'rgba(66, 133, 244, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                  <Briefcase size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>NPTEL Java Programming</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Advanced Programming Concepts</p>
                  <p style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Issued: 2024</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
