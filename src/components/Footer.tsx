import React from 'react';
import { Flame, MessageCircle, MapPin, ArrowUp, Heart } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <div className="footer-brand" onClick={scrollToTop} role="button" tabIndex={0}>
              <div className="footer-logo-badge">
                <Flame size={24} />
              </div>
              <div>
                <span className="footer-brand-name">COOKOUT</span>
                <span className="footer-brand-sub">ARUBA • BY GREEN FISH</span>
              </div>
            </div>
            <p className="footer-desc">
              Parrilla a leña, smash burgers, bife de ribeye y barra fresca de mariscos en el torneo de beach tennis más grande del planeta. Bushiri Beach, Aruba.
            </p>
            <div className="footer-social-links">
              <a
                href="https://www.instagram.com/cookoutaruba/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="Instagram @cookoutaruba"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/2975930387?text=Hola%20Cookout%20Aruba!"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="WhatsApp Directo"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Categorías del Menú</h4>
            <ul className="footer-links">
              <li>
                <a href="#menu">From The Grill (Burgers & Steaks)</a>
              </li>
              <li>
                <a href="#menu">From The Griddle (Fish & Wraps)</a>
              </li>
              <li>
                <a href="#menu">Crispy Classics (Loaded Fries & Calamari)</a>
              </li>
              <li>
                <a href="#menu">From The Salad Bar (Poke Bowls & Ceviche)</a>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Beach Tennis Aruba 2026</h4>
            <ul className="footer-links">
              <li>
                <span className="footer-info-line">
                  <MapPin size={15} /> Bushiri Beach, Oranjestad, Aruba
                </span>
              </li>
              <li>
                <span className="footer-info-line">
                  📅 8 al 22 de Noviembre de 2026
                </span>
              </li>
              <li>
                <span className="footer-info-line">
                  ⏰ 10:00 a 00:00 hs (Todos los días)
                </span>
              </li>
              <li>
                <span className="footer-info-line">
                  ⭐ Staff? Ask for the Family Menu
                </span>
              </li>
            </ul>
          </div>

          {/* Back to top */}
          <div className="footer-col top-col">
            <button type="button" className="btn-back-to-top" onClick={scrollToTop}>
              <ArrowUp size={18} />
              <span>Volver Arriba</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} COOKOUT Aruba. Todos los derechos reservados. Creado por <strong>Green Fish Aruba</strong>.
          </div>
          <div className="footer-powered">
            <span>Powered by</span>
            <strong>Food by Nico Labs</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
