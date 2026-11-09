import React, { useState, useEffect } from 'react';
import { MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { MarcaInfo } from '../types/food';

interface NavbarProps {
  marca: MarcaInfo;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  marca,
  activeCategory,
  onSelectCategory,
  onScrollToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Full Menu', id: 'menu' },
    { label: 'From The Grill', category: 'From the Grill', id: 'menu' },
    { label: 'Crispy Classics', category: 'Crispy Classics', id: 'menu' },
    { label: 'Salad Bar', category: 'From the Salad Bar', id: 'menu' },
    { label: 'Beach Tennis 2026', id: 'tournament' },
    { label: 'Location', id: 'location' },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    if (link.category) {
      onSelectCategory(link.category);
    }
    onScrollToSection(link.id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Event Announcement Bar */}
      <aside aria-label="Event announcement" className="event-top-bar">
        <div className="container event-top-bar-content">
          <span className="event-tag">
            <span className="pulse-dot"></span>
            OFFICIAL POP-UP
          </span>
          <p className="event-text">
            <strong>BEACH TENNIS ARUBA OPEN 2026</strong> • Bushiri Beach • November 8–22
          </p>
          <a
            href="https://www.instagram.com/cookoutaruba/"
            target="_blank"
            rel="noopener noreferrer"
            className="event-ig-link"
          >
            <InstagramIcon size={14} />
            <span>@cookoutaruba</span>
          </a>
        </div>
      </aside>

      {/* Main Navigation */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          {/* Brand Logo */}
          <div className="navbar-brand" onClick={() => onScrollToSection('hero')} role="button" tabIndex={0}>
            <img src="/logo_cookout.jpg" alt="COOKOUT Aruba" className="navbar-logo-img" />
          </div>

          {/* Desktop Nav Items */}
          <nav className="navbar-links desktop-only">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                type="button"
                className={`nav-link-btn ${link.category && activeCategory === link.category ? 'active' : ''}`}
                onClick={() => handleLinkClick(link)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="navbar-actions desktop-only">
            <a
              href="https://www.instagram.com/cookoutaruba/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon-link"
              title="Official Instagram"
            >
              <InstagramIcon size={19} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-nav-items">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="mobile-nav-btn"
                  onClick={() => handleLinkClick(link)}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="mobile-drawer-footer">
              <a
                href="https://www.instagram.com/cookoutaruba/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-action full-width"
              >
                <InstagramIcon size={18} />
                <span>Follow @cookoutaruba</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
