import React from 'react';
import { GraduationCap, Briefcase, Users, Award, Download, BookOpen } from 'lucide-react';
import { downloadResume } from '../utils/downloadResume';

const About = () => {
  const stats = [
    {
      icon: <GraduationCap size={24} color="#818cf8" />,
      bg: "rgba(99, 102, 241, 0.12)",
      title: "B.Tech CSE",
      subtitle: "Data Science, SRM KTR"
    },
    {
      icon: <Briefcase size={24} color="#38bdf8" />,
      bg: "rgba(56, 189, 248, 0.12)",
      title: "Full Stack Intern",
      subtitle: "Goloka IT (Production Dev)"
    },
    {
      icon: <Users size={24} color="#c084fc" />,
      bg: "rgba(192, 132, 252, 0.12)",
      title: "10K+ Participants",
      subtitle: "Committee Head @ Aaruush"
    },
    {
      icon: <Award size={24} color="#34d399" />,
      bg: "rgba(52, 211, 153, 0.12)",
      title: "Academic Excellence",
      subtitle: "10 CGPA (X) & 90% (XII)"
    }
  ];

  const education = [
    {
      degree: "B.Tech CSE (Data Science)",
      school: "SRM KTR",
      period: "Aug 2023 – Expected May 2027",
      score: "CGPA: 7.8"
    },
    {
      degree: "Class XII",
      school: "Narayana Junior College",
      period: "Aug 2021 – Mar 2023",
      score: "Percentage: 90%"
    },
    {
      degree: "Class X",
      school: "Sri Chaitanya School",
      period: "Jun 2020 – May 2021",
      score: "CGPA: 10"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* Top 2-Column Split: Bio on Left, 2x2 Stats on Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }} className="about-grid">
          
          {/* Left Side: Bio matching Resume Summary */}
          <div>
            <div className="badge-tag">
              About Me
            </div>
            
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              lineHeight: 1.2,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem'
            }}>
              Passionate about building scalable web applications and data systems
            </h2>
            
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '1.25rem'
            }}>
              Final-year B.Tech CSE (Data Science) student at SRM KTR with hands-on experience in full-stack development using Java, Spring Boot, React.js, and MySQL.
            </p>
            
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '2.5rem'
            }}>
              Skilled in building scalable web applications, implementing authentication systems, optimizing backend performance, and deploying production-ready applications across AWS EC2, Amazon S3, and Hostinger.
            </p>
            
            <a 
              href={`${import.meta.env.BASE_URL}Navadeep_Burri_Resume.pdf`} 
              download="Navadeep_Burri_Resume.pdf"
              onClick={downloadResume}
              className="btn-secondary"
            >
              Download Full Resume <Download size={18} />
            </a>
          </div>

          {/* Right Side: 2x2 Metric Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem'
          }} className="stat-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon-box" style={{ background: stat.bg }}>
                  {stat.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>
                    {stat.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.4 }}>
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Education History Cards matching Resume */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <BookOpen size={22} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700 }}>Education</h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {education.map((edu, index) => (
              <div key={index} className="glass-card" style={{ padding: '1.8rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#818cf8',
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px'
                  }}>
                    {edu.period}
                  </span>
                  
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#34d399',
                    background: 'rgba(52, 211, 153, 0.1)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px'
                  }}>
                    {edu.score}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.35rem', lineHeight: 1.35 }}>
                  {edu.degree}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {edu.school}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .stat-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
