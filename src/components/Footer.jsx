import React from 'react';
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(5, 5, 8, 0.8)',
      backdropFilter: 'blur(12px)',
      padding: '4rem 0 2rem 0',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '2rem',
            fontWeight: 800,
            background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px'
          }}>
            NAVADEEP BURRI
          </h2>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{
              background: 'var(--glass-bg)',
              padding: '0.8rem',
              borderRadius: '50%',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.color = 'var(--accent-cyan)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            >
              <FaGithub size={24} />
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
              background: 'var(--glass-bg)',
              padding: '0.8rem',
              borderRadius: '50%',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--accent-blue)';
              e.currentTarget.style.color = 'var(--accent-blue)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            >
              <FaLinkedin size={24} />
            </a>
            
            <a href="mailto:email@example.com" style={{
              background: 'var(--glass-bg)',
              padding: '0.8rem',
              borderRadius: '50%',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--accent-purple)';
              e.currentTarget.style.color = 'var(--accent-purple)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            >
              <FaEnvelope size={24} />
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
