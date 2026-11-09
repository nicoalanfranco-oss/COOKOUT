import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, CreditCard, DollarSign, Calendar } from 'lucide-react';
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
            <span>DÓNDE ENCONTRARNOS</span>
          </div>
          <h2 className="section-title">UBICACIÓN & HORARIOS</h2>
          <p className="section-subtitle">
            Nuestro pop-up gastronómico está instalado directamente en el predio principal de Bushiri Beach para el torneo Beach Tennis Aruba Open 2026.
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
                <p>Predio Oficial de Beach Tennis Aruba Open 2026</p>
                <span className="loc-sub">A pasos de las canchas centrales y la tribuna principal</span>
              </div>
            </div>

            <div className="location-item">
              <div className="loc-icon-circle">
                <Clock size={22} />
              </div>
              <div>
                <h4>Horarios de Atención</h4>
                <p>10:00 a 00:00 hs (Medianoche)</p>
                <span className="loc-sub">Abierto todos los días de manera ininterrumpida</span>
              </div>
            </div>

            <div className="location-item">
              <div className="loc-icon-circle">
                <Calendar size={22} />
              </div>
              <div>
                <h4>Fechas del Torneo</h4>
                <p>8 al 22 de Noviembre de 2026</p>
                <span className="loc-sub">15 jornadas a puro deporte, música y gastronomía</span>
              </div>
            </div>

            <div className="location-item">
              <div className="loc-icon-circle">
                <CreditCard size={22} />
              </div>
              <div>
                <h4>Métodos de Pago Aceptados</h4>
                <p>Efectivo (USD / AWG) y Tarjetas de Débito / Crédito</p>
                <span className="loc-sub">Terminales inalámbricas en nuestro mostrador</span>
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
                <span>Abrir en Google Maps</span>
              </a>

              <a
                href="https://wa.me/2975930387?text=Hola%20Cookout%20Aruba!%20Quería%20consultar%20por%20su%20ubicación%20en%20Bushiri%20Beach"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-location-wa"
              >
                <Phone size={18} />
                <span>+297 593 0387</span>
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
              Frente al mar caribeño y con la mejor vista a los partidos finales. Espacio con mesas sombreadas, barra de cócteles y jugos naturales, música en vivo y el inconfundible aroma del fuego parrillero.
            </p>

            <div className="tournament-checklist">
              <div className="check-item">
                <span className="bullet">✓</span>
                <span>Punto de recarga de energía antes y después de cada partido</span>
              </div>
              <div className="check-item">
                <span className="bullet">✓</span>
                <span>Opciones proteicas y saludables en nuestro Salad Bar</span>
              </div>
              <div className="check-item">
                <span className="bullet">✓</span>
                <span>Menú especial para árbitros, jueces y equipo de staff</span>
              </div>
            </div>

            <div className="location-contact-footer">
              <div>
                <span className="contact-label">Email de Contacto:</span>
                <span className="contact-val">seba@greenfish.com</span>
              </div>
              <div>
                <span className="contact-label">Organización & Catering:</span>
                <span className="contact-val">Green Fish Aruba</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

