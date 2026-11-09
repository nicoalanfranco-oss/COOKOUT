import React from 'react';
import { Flame, Sparkles, MapPin, Clock, Award, ArrowDown, CheckCircle2 } from 'lucide-react';
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
          <span className="badge-flame"><Flame size={16} /></span>
          <span>OFFICIAL FOOD POP-UP • BEACH TENNIS ARUBA OPEN 2026</span>
        </div>

        {/* Big Brand Title */}
        <h1 className="hero-title">
          <span className="hero-title-main">COOKOUT</span>
          <span className="hero-title-sub">ARUBA</span>
        </h1>

        <p className="hero-tagline">
          The ultimate pit-fire grill & raw bar experience at Bushiri Beach. Smash burgers, flame-grilled ribeyes, crispy classics and fresh ocean ceviche right by the championship courts.
        </p>

        {/* Event Quick Specs */}
        <div className="hero-specs-grid">
          <div className="hero-spec-card">
            <MapPin className="spec-icon" size={20} />
            <div>
              <div className="spec-label">LUGAR</div>
              <div className="spec-value">Bushiri Beach, Aruba</div>
            </div>
          </div>

          <div className="hero-spec-card">
            <Clock className="spec-icon" size={20} />
            <div>
              <div className="spec-label">HORARIO</div>
              <div className="spec-value">10:00 a 00:00 hs (Todos los días)</div>
            </div>
          </div>

          <div className="hero-spec-card">
            <Award className="spec-icon" size={20} />
            <div>
              <div className="spec-label">CREADO POR</div>
              <div className="spec-value">Green Fish Aruba</div>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="hero-highlights">
          <span className="highlight-pill">
            <CheckCircle2 size={15} /> 100% Pit-Fire & Charcoal Grill
          </span>
          <span className="highlight-pill">
            <CheckCircle2 size={15} /> Fresh Catch & Raw Bar
          </span>
          <span className="highlight-pill">
            <CheckCircle2 size={15} /> Fast Court-Side Pickup
          </span>
          <span className="highlight-pill">
            <CheckCircle2 size={15} /> Prices in USD & AWG
          </span>
        </div>

        {/* CTAs */}
        <div className="hero-cta-group">
          <button type="button" className="btn-hero-primary" onClick={onScrollToMenu}>
            <span>Ver Carta Oficial 2026</span>
            <ArrowDown size={18} />
          </button>
          
          <button type="button" className="btn-hero-secondary" onClick={onScrollToLocation}>
            <MapPin size={18} />
            <span>Cómo Llegar en Bushiri Beach</span>
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
