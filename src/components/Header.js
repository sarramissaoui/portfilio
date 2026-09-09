import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Facebook, 
  MessageCircle,
  Home,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Phone
} from 'lucide-react';
import personalData from '../data/personal.json';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Education & Certifications', path: '/education', icon: GraduationCap },
    { name: 'Work Experience', path: '/experience', icon: Briefcase },
    { name: 'Portfolio Pieces', path: '/projects', icon: FolderOpen },
    { name: 'Contact & Resume', path: '/contact', icon: Phone }
  ];

  const socialLinks = [
    { icon: Github, href: personalData.contact.github, label: 'GitHub' },
    { icon: Linkedin, href: personalData.contact.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: personalData.contact.facebook, label: 'Facebook' },
    { icon: MessageCircle, href: personalData.contact.discord, label: 'Discord' }
  ];

  return (
    <header className="nav-container">
      <div className="nav-content">

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          {navigation.slice(0).map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                <IconComponent size={16} />
                {item.name}
              </Link>
            );
          })}
          
          <button onClick={toggleTheme} className="theme-toggle">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <div className="social-links">
            {socialLinks.map((social, index) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <SocialIcon size={16} />
                </a>
              );
            })}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="mobile-hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <IconComponent size={18} />
                  {item.name}
                </Link>
              );
            })}
            
            <div className="mobile-theme-social">
              <button onClick={toggleTheme} className="theme-toggle">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.label}
                    >
                      <SocialIcon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;