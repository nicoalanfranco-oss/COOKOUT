import React from 'react';
import { MapPin, ArrowDown } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface HeroSectionProps {
  onScrollToMenu: () => void;
  onScrollToLocation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToMenu,
  onScrollToLocation,
}) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-content">
        {/* Tournament Pill */}
        <div className="hero-badge-tournament">
          <span className="badge-flame">🔥</span>
          <span>OFFICIAL FOOD POP-UP • BEACH TENNIS ARUBA OPEN 2026</span>
        </div>

        {/* Official Logo with animated entry + shine */}
        <div className="cookout-logo-wrap">
          <div className="cookout-logo-shine"></div>
          <img
            src="/logo_cookout.jpg"
            alt="COOKOUT Aruba"
            className="cookout-logo-img"
          />
        </div>

        <p className="hero-tagline">
          The ultimate pit-fire grill &amp; raw bar experience at Bushiri Beach. Smash burgers,
          flame-grilled ribeyes, crispy classics and fresh ocean ceviche right by the championship courts.
        </p>

        {/* Event Quick Specs */}
        <div className="hero-specs-grid">
          <div className="hero-spec-card">
            <MapPin className="spec-icon" size={20} />
            <div>
              <div className="spec-label">LOCATION</div>
              <div className="spec-value">Bushiri Beach, Aruba</div>
            </div>
          </div>

          <div className="hero-spec-card">
            <span className="spec-icon" style={{ fontSize: '1.25rem' }}>⏰</span>
            <div>
              <div className="spec-label">HOURS</div>
              <div className="spec-value">10:00 AM – Midnight · Every Day</div>
            </div>
          </div>

          <div className="hero-spec-card">
            <span className="spec-icon" style={{ fontSize: '1.25rem' }}>🏆</span>
            <div>
              <div className="spec-label">BY</div>
              <div className="spec-value">Green Fish Aruba</div>
            </div>
          </div>
        </div>

        {/* Feature Badges — compact single row */}
        <div className="hero-highlights">
          <span className="highlight-pill">🔥 Pit-Fire &amp; Charcoal Grill</span>
          <span className="highlight-pill">🐟 Fresh Catch &amp; Raw Bar</span>
          <span className="highlight-pill">⚡ Fast Court-Side Pickup</span>
          <span className="highlight-pill">💵 Prices in USD &amp; AWG</span>
        </div>

        {/* CTAs */}
        <div className="hero-cta-group">
          <button type="button" className="btn-hero-primary" onClick={onScrollToMenu}>
            <span>View Official Menu 2026</span>
            <ArrowDown size={18} />
          </button>
          
          <button type="button" className="btn-hero-secondary" onClick={onScrollToLocation}>
            <MapPin size={18} />
            <span>How to Get to Bushiri Beach</span>
          </button>

          <a
            href="https://www.instagram.com/cookoutaruba/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-outline"
          >
            <InstagramIcon size={18} />
            <span>@cookoutaruba</span>
          </a>
        </div>
      </div>
    </section>
  );
};
