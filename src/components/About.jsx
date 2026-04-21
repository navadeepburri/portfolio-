import React from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech CSE (Data Science)",
      school: "SRM Institute of Science and Technology, Chennai, Tamil Nadu",
      period: "Aug 2023 — Expected May 2027",
      score: "CGPA: 7.63",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "Class XII",
      school: "Narayana Junior College",
      period: "Aug 2021 — Mar 2023",
      score: "Percentage: 90%",
      icon: <BookOpen size={24} />
    },
    {
      degree: "Class X",
      school: "Sri Chaitanya School",
      period: "Jun 2020 — May 2021",
      score: "CGPA: 10",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Education & Background</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {education.map((edu, index) => (
            <div key={index} className="glass-card" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                opacity: 0.1,
                color: 'var(--accent-cyan)',
                transform: 'scale(3)'
              }}>
                {edu.icon}
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))',
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
                marginBottom: '1rem'
              }}>
                {edu.icon}
              </div>
              
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{edu.degree}</h3>
              <div style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>{edu.school}</div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid var(--glass-border)'
              }}>
                <span>{edu.period}</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
