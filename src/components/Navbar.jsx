import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { downloadResume } from '../utils/downloadResume';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: isScrolled ? '0.9rem 0' : '1.4rem 0',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      background: isScrolled ? 'rgba(7, 8, 20, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Brand Logo matching reference */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'Outfit, sans-serif',
          fontSize: '1.35rem',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.5px'
        }}>
          <span style={{
            color: 'var(--accent-primary)',
            background: 'rgba(99, 102, 241, 0.12)',
            padding: '0.35rem 0.5rem',
            borderRadius: '8px',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '1rem',
            fontWeight: 700
          }}>
            &lt;/&gt;
          </span>
          <span>Navadeep</span>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <ul style={{ display: 'flex', gap: '2.2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{
                  color: link.name === 'Home' ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 500,
                  fontSize: '0.92rem',
                  transition: 'color 0.2s ease',
                  position: 'relative'
                }}
                onMouseOver={(e) => e.target.style.color = '#ffffff'}
                onMouseOut={(e) => e.target.style.color = link.name === 'Home' ? '#ffffff' : 'var(--text-secondary)'}
                >
                  {link.name}
                  {link.name === 'Home' && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '16px',
                      height: '2px',
                      background: 'var(--accent-primary)',
                      borderRadius: '2px'
                    }}></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right CTA Button ("Hire Me ↗" style matching reference) */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1.25rem' }} className="desktop-social">
          <a 
            href={`${import.meta.env.BASE_URL}Navadeep_Burri_Resume.pdf`}
            download="Navadeep_Burri_Resume.pdf"
            onClick={downloadResume}
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            Resume
          </a>

          <a href="mailto:navadeepburri2005@gmail.com" style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0.55rem 1.3rem',
            borderRadius: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.6)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.4)';
          }}
          >
            Hire Me <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'block' }}
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(10, 12, 28, 0.96)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--glass-border)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '0.5rem 0'
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`${import.meta.env.BASE_URL}Navadeep_Burri_Resume.pdf`}
            download="Navadeep_Burri_Resume.pdf"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              downloadResume(e);
            }}
            style={{
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '0.5rem 0',
              cursor: 'pointer'
            }}
          >
            Download Resume (PDF)
          </a>
          <a 
            href="mailto:navadeepburri2005@gmail.com"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#ffffff',
              padding: '0.75rem',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 600,
              marginTop: '0.5rem'
            }}
          >
            Hire Me ↗
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: block !important;
          }
          .desktop-social {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
