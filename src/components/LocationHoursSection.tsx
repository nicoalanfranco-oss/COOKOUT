import React from 'react';
import { MapPin, Clock, Navigation, CreditCard, Calendar } from 'lucide-react';
import { TenantInfo, MarcaInfo } from '../types/food';

interface LocationHoursSectionProps {
  tenant: TenantInfo;
  marca: MarcaInfo;
}

export const LocationHoursSection: React.FC<LocationHoursSectionProps> = ({ tenant, marca }) => {
  return (
    <section id="location" className="location-section">
      <div className="container">
        <div className="section-header-block">
          <div className="section-pill">
            <MapPin size={15} />
            <span>WHERE TO FIND US</span>
          </div>
          <h2 className="section-title">LOCATION &amp; HOURS</h2>
          <p className="section-subtitle">
            Our food pop-up is set up directly inside the main grounds of Bushiri Beach for the Beach Tennis Aruba Open 2026.
          </p>
        </div>

        <div className="location-grid">
          {/* Main Info Card */}
          <div className="location-info-card">
            <div className="location-item">
              <div className="loc-icon-circle">
                <MapPin size={22} />
              </div>
              <div>
                <h4>Bushiri Beach, Aruba</h4>
                <p>Official Venue – Beach Tennis Aruba Open 2026</p>
                <span className="loc-sub">Steps from the main courts and grandstand</span>
              </div>
            </div>

            <div className="location-item">
              <div className="loc-icon-circle">
                <Clock size={22} />
              </div>
              <div>
                <h4>Opening Hours</h4>
                <p>10:00 AM – Midnight</p>
                <span className="loc-sub">Open every day without interruption</span>
              </div>
            </div>

            <div className="location-item">
              <div className="loc-icon-circle">
                <Calendar size={22} />
              </div>
              <div>
                <h4>Tournament Dates</h4>
                <p>November 8–22, 2026</p>
                <span className="loc-sub">15 days of sport, music &amp; great food</span>
              </div>
            </div>

            <div className="location-item">
              <div className="loc-icon-circle">
                <CreditCard size={22} />
              </div>
              <div>
                <h4>Official Tournament Payments</h4>
                <p>BTA Event Wristband (RFID cashless) &amp; Cards</p>
                <span className="loc-sub">Pay directly with your official tournament wristband, debit/credit cards or top-up at event stations</span>
              </div>
            </div>

            <div className="location-actions">
              <a
                href="https://maps.google.com/?q=Bushiri+Beach+Aruba"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-location-map"
              >
                <Navigation size={18} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Visual Map / Event Card */}
          <div className="location-visual-card">
            <div className="visual-card-header">
              <span className="card-badge">BUSHIRI BEACH SPOT</span>
              <h3>COOKOUT POP-UP VILLAGE</h3>
            </div>
            <p className="visual-card-text">
              Facing the Caribbean Sea with the best view of the championship finals. Shaded seating, cocktail &amp; natural juice bar, live music and the unmistakable scent of live-fire grilling.
            </p>

            <div className="tournament-checklist">
              <div className="check-item">
                <span className="bullet">✓</span>
                <span>Energy recharge station before and after every match</span>
              </div>
              <div className="check-item">
                <span className="bullet">✓</span>
                <span>Protein-rich &amp; healthy options at our Salad Bar</span>
              </div>
            </div>

            <div className="location-contact-footer">
              <div>
                <span className="contact-label">Contact Email:</span>
                <span className="contact-val">seba@greenfish.com</span>
              </div>
              <div>
                <span className="contact-label">Organization &amp; Catering:</span>
                <span className="contact-val">Green Fish Aruba</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
