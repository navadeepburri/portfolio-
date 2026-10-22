import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(5, 6, 15, 0.95)',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="container">
        
        {/* Main Contact & Connect Grid (matching reference bottom section) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr',
          gap: '3.5rem',
          marginBottom: '4.5rem'
        }} className="footer-grid">
          
          {/* Column 1: Let's Work Together */}
          <div>
            <div className="badge-tag">
              Let's Work Together
            </div>
            
            <h3 style={{
              fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Have an opportunity or project in mind?
            </h3>
            
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              marginBottom: '1.8rem',
              maxWidth: '380px'
            }}>
              I’m currently open to full-time software engineering roles, internships, and collaborative developer projects. Let’s connect!
            </p>
            
            <a href="mailto:navadeepburri2005@gmail.com" className="btn-primary">
              Get In Touch <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              Navigation
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { label: 'Home', href: '#' },
                { label: 'About Me & Education', href: '#about' },
                { label: 'Technical Skills', href: '#skills' },
                { label: 'Featured Projects', href: '#projects' },
                { label: 'Work & Extracurriculars', href: '#experience' }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#ffffff'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow & Contact Info */}
          <div>
            <p style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              Follow Me
            </p>

            {/* Social Icons row matching reference */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
              <a 
                href="https://github.com/navadeepburri" 
                target="_blank" 
                rel="noreferrer"
                className="tech-badge"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/navadeepburri" 
                target="_blank" 
                rel="noreferrer"
                className="tech-badge"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="mailto:navadeepburri2005@gmail.com"
                className="tech-badge"
                title="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Mail size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                <a href="mailto:navadeepburri2005@gmail.com" style={{ color: 'inherit' }}>navadeepburri2005@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>📞</span>
                <a href="tel:+919392078977" style={{ color: 'inherit' }}>+91 9392078977</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>Kodad, Telangana, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line matching reference */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Navadeep Burri. All rights reserved.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Designed with precision & ❤️
            </span>

            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                padding: '0.45rem 0.95rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.82rem',
                transition: 'all 0.25s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <ArrowUp size={14} /> Back to Top
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
