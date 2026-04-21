import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(5, 5, 8, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="#" style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '1.5rem',
          fontWeight: 800,
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          NAVADEEP.
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Social */}
        <div style={{ display: 'none', gap: '1rem' }} className="desktop-social">
          <a href="https://github.com/navadeepburri" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><FaGithub size={20} /></a>
          <a href="https://linkedin.com/in/navadeepburri" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><FaLinkedin size={20} /></a>
          <a href="mailto:email@example.com" style={{ color: 'var(--text-secondary)' }}><FaEnvelope size={20} /></a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'block' }}
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-secondary)',
          backdropFilter: 'blur(16px)',
          padding: '2rem',
          borderBottom: '1px solid var(--glass-border)'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{
                  color: 'var(--text-primary)',
                  fontSize: '1.2rem',
                  fontWeight: 600
                }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu, .desktop-social { display: flex !important; align-items: center; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
