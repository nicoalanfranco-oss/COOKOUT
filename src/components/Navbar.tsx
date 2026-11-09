import React, { useState, useEffect } from 'react';
import { Flame, MessageCircle, MapPin, Menu as MenuIcon, X, Calendar } from 'lucide-react';
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
    { label: 'Menú Completo', id: 'menu' },
    { label: 'From The Grill', category: 'From the Grill', id: 'menu' },
    { label: 'Crispy Classics', category: 'Crispy Classics', id: 'menu' },
    { label: 'Salad Bar', category: 'From the Salad Bar', id: 'menu' },
    { label: 'Beach Tennis 2026', id: 'tournament' },
    { label: 'Ubicación', id: 'location' },
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
      <aside aria-label="Anuncio del evento" className="event-top-bar">
        <div className="container event-top-bar-content">
          <span className="event-tag">
            <span className="pulse-dot"></span>
            OFICIAL POP-UP
          </span>
          <p className="event-text">
            <strong>BEACH TENNIS ARUBA OPEN 2026</strong> • Bushiri Beach • 8 al 22 de Noviembre
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
          {/* Brand Logo & Title */}
          <div className="navbar-brand" onClick={() => onScrollToSection('hero')} role="button" tabIndex={0}>
            <div className="logo-badge">
              <Flame className="flame-icon" size={24} />
            </div>
            <div className="brand-text">
              <span className="brand-name">COOKOUT</span>
              <span className="brand-sub">ARUBA • BY GREEN FISH</span>
            </div>
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
              title="Instagram Oficial"
            >
              <InstagramIcon size={19} />
            </a>
            <a
              href="https://wa.me/2975930387?text=Hola%20Cookout%20Aruba!%20Quería%20hacer%20una%20consulta%20sobre%20el%20menú%20para%20el%20Beach%20Tennis%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-action"
            >
              <MessageCircle size={17} />
              <span>WhatsApp</span>
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
                href="https://wa.me/2975930387?text=Hola%20Cookout%20Aruba!%20Quería%20hacer%20una%20consulta%20sobre%20el%20menú%20para%20el%20Beach%20Tennis%202026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-action full-width"
              >
                <MessageCircle size={18} />
                <span>Contactar por WhatsApp (+297 593 0387)</span>
              </a>
              <a
                href="https://www.instagram.com/cookoutaruba/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-action full-width"
              >
                <InstagramIcon size={18} />
                <span>Seguir en @cookoutaruba</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
