import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem'
    }} className="section">
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div style={{
          animation: 'slideUp 1s ease-out',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-1px'
          }}>
            Hi, I'm <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-purple) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Navadeep Burri</span>
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'var(--text-secondary)',
            fontWeight: 400
          }}>
            Data Science & Full-Stack Developer
          </h2>
          
          <p style={{
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)',
            fontSize: '1.1rem'
          }}>
            Third-year B.Tech CSE student specializing in Data Science at SRM Institute of Science and Technology. 
            Building scalable full-stack applications with an eye for modern design and AI integrations.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="#projects" style={{
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
              color: 'white',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              View My Work <ArrowRight size={18} />
            </a>
            
            <a href="#" style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'var(--glass-bg)';
            }}
            >
              Resume <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
