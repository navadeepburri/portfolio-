import React from 'react';
import { ArrowUpRight, Download, Code2, Sparkles } from 'lucide-react';
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
import { downloadResume } from '../utils/downloadResume';

const Hero = () => {
  const techStack = [
    { icon: <FaJava color="#ED8B00" />, name: "Java" },
    { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
    { icon: <FaReact color="#61DAFB" />, name: "React.js" },
    { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <span style={{ fontWeight: 800, color: '#818cf8', fontSize: '1.1rem' }}>C</span>, name: "C" },
    { icon: <FaGitAlt color="#F05032" />, name: "Git" },
    { icon: <FaGithub color="#ffffff" />, name: "GitHub" },
    { icon: <SiPrometheus color="#E6522C" />, name: "Prometheus" },
    { icon: <SiGrafana color="#F46800" />, name: "Grafana" }
  ];

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '7.5rem',
      paddingBottom: '5rem',
      position: 'relative'
    }} className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Text & Actions */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            
            {/* Tag Pill */}
            <div className="badge-tag">
              <Sparkles size={14} style={{ color: '#818cf8' }} />
              Full-Stack Developer
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '1rem'
            }}>
              Hi, I’m <span style={{
                color: '#818cf8',
                background: 'linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Navadeep</span><br />
              I build things for the web.
            </h1>

            {/* Subtitle Bio matching resume Summary */}
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: '560px',
              marginBottom: '2.2rem'
            }}>
              Final-year B.Tech CSE (Data Science) student with hands-on experience in full-stack development using Java, Spring Boot, React.js, and MySQL. Skilled in building scalable web applications, implementing authentication systems, optimizing backend performance, and deploying production-ready applications.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: '1.2rem',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              <a href="#projects" className="btn-primary">
                View My Work <ArrowUpRight size={18} />
              </a>
              
              <a 
                href={`${import.meta.env.BASE_URL}Navadeep_Burri_Resume.pdf`} 
                download="Navadeep_Burri_Resume.pdf"
                onClick={downloadResume}
                className="btn-secondary"
              >
                Download CV <Download size={18} />
              </a>
            </div>

            {/* Technologies Strip matching resume */}
            <div>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}>
                Technologies I Work With
              </p>
              
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                {techStack.map((tech, i) => (
                  <div key={i} className="tech-badge" title={tech.name}>
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Avatar Backdrop & Floating Code Card */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }} className="hero-visual">
            
            {/* Circular Purple Backdrop with Navadeep's real profile photo */}
            <div style={{
              position: 'relative',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 40% 30%, #6366f1 0%, #4338ca 60%, #1e1b4b 100%)',
              boxShadow: '0 0 60px rgba(99, 102, 241, 0.45), inset 0 0 40px rgba(139, 92, 246, 0.4)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid rgba(139, 92, 246, 0.3)'
            }}>
              <img 
                src={`${import.meta.env.BASE_URL}navadeep-profile.jpg`} 
                alt="Navadeep Burri" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 8%',
                  transform: 'scale(1.03)'
                }}
              />
            </div>

            {/* Floating Code Snippet Card - positioned comfortably at bottom-right corner without blocking face */}
            <div className="code-card" style={{
              position: 'absolute',
              bottom: '-55px',
              right: '-65px',
              animation: 'float-slow 6s ease-in-out infinite',
              zIndex: 3
            }}>
              <div className="code-card-header">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Code2 size={14} style={{ color: '#818cf8' }} /> &lt;/&gt; Code
                </span>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)'
                }}></span>
              </div>
              
              <div style={{ color: '#94a3b8', fontSize: '0.73rem', lineHeight: 1.45 }}>
                <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#38bdf8' }}>developer</span> = &#123;<br />
                &nbsp;&nbsp;<span style={{ color: '#e2e8f0' }}>name</span>: <span style={{ color: '#86efac' }}>"Navadeep"</span>,<br />
                &nbsp;&nbsp;<span style={{ color: '#e2e8f0' }}>role</span>: <span style={{ color: '#86efac' }}>"Full-Stack Dev"</span>,<br />
                &nbsp;&nbsp;<span style={{ color: '#e2e8f0' }}>skills</span>: [<span style={{ color: '#fef08a' }}>"Java"</span>, <span style={{ color: '#fef08a' }}>"Spring"</span>, <span style={{ color: '#fef08a' }}>"React"</span>],<br />
                &nbsp;&nbsp;<span style={{ color: '#e2e8f0' }}>status</span>: <span style={{ color: '#86efac' }}>"Available to hire"</span><br />
                &#125;;
              </div>
            </div>

            {/* Decorative arrow doodle accent */}
            <svg 
              width="65" 
              height="65" 
              viewBox="0 0 65 65" 
              fill="none" 
              style={{
                position: 'absolute',
                top: '40px',
                left: '-10px',
                opacity: 0.6,
                transform: 'rotate(-10deg)',
                pointerEvents: 'none'
              }}
            >
              <path 
                d="M10 50 C 20 20, 40 10, 55 25" 
                stroke="#818cf8" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeDasharray="4 4"
              />
              <path 
                d="M50 18 L 57 26 L 46 29" 
                stroke="#818cf8" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-visual {
            order: -1;
            margin-top: 1rem;
          }
          .code-card {
            right: 0 !important;
            bottom: -35px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
