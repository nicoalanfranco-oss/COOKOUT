import React from 'react';
import { Flame, MapPin, ArrowUp } from 'lucide-react';
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
              <img src="/logo_cookout.jpg" alt="COOKOUT Aruba" className="footer-logo-img" />
              <div>
                <span className="footer-brand-name">COOKOUT</span>
                <span className="footer-brand-sub">ARUBA • BY GREEN FISH</span>
              </div>
            </div>
            <p className="footer-desc">
              Pit-fire grill, smash burgers, ribeye steaks and a fresh raw bar at the world's biggest beach tennis tournament. Bushiri Beach, Aruba.
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
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Menu Categories</h4>
            <ul className="footer-links">
              <li>
                <a href="#menu">From The Grill (Burgers &amp; Steaks)</a>
              </li>
              <li>
                <a href="#menu">From The Griddle (Fish &amp; Wraps)</a>
              </li>
              <li>
                <a href="#menu">Crispy Classics (Loaded Fries &amp; Calamari)</a>
              </li>
              <li>
                <a href="#menu">From The Salad Bar (Poke Bowls &amp; Ceviche)</a>
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
                  📅 November 8–22, 2026
                </span>
              </li>
              <li>
                <span className="footer-info-line">
                  ⏰ 10:00 AM – Midnight · Every Day
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
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} COOKOUT Aruba. All rights reserved. Created by <strong>Green Fish Aruba</strong>.
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
