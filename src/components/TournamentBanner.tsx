import React from 'react';
import { Calendar, Users, Trophy, Sparkles, HeartHandshake } from 'lucide-react';

export const TournamentBanner: React.FC = () => {
  return (
    <section id="tournament" className="tournament-banner-section">
      <div className="container">
        <div className="tournament-banner-card">
          <div className="tournament-banner-info">
            <div className="tournament-pill">
              <Trophy size={16} />
              <span>THE BIGGEST BEACH TENNIS EVENT IN THE WORLD</span>
            </div>
            <h2 className="tournament-title">
              ARUBA OPEN BEACH TENNIS 2026
            </h2>
            <p className="tournament-desc">
              Del 8 al 22 de Noviembre de 2026, Bushiri Beach se convierte en la capital mundial del beach tennis. COOKOUT es el punto de encuentro gastronómico oficial a metros de la arena: fuego vivo, hamburguesas smash, bife de ribeye, pesca local y ambiente de fiesta continuo.
            </p>

            <div className="tournament-dates-grid">
              <div className="tournament-date-box">
                <Calendar size={18} />
                <div>
                  <strong>08 – 22 NOV 2026</strong>
                  <span>15 días ininterrumpidos</span>
                </div>
              </div>
              <div className="tournament-date-box">
                <Users size={18} />
                <div>
                  <strong>+1,500 JUGADORES</strong>
                  <span>De más de 40 países</span>
                </div>
              </div>
            </div>
          </div>

          {/* Special Staff / Family Callout matching PDF */}
          <div className="tournament-staff-box">
            <div className="staff-box-header">
              <HeartHandshake size={22} className="staff-icon" />
              <div>
                <h3 className="staff-box-title">STAFF? WE GOT YOU!</h3>
                <p className="staff-box-sub">ASK FOR THE FAMILY MENU</p>
              </div>
            </div>
            <p className="staff-box-text">
              Sos parte de la organización, jueces de silla, árbitros, cuerpo médico o staff del torneo? Acercate al mostrador de Cookout y consultá por el menú exclusivo para la familia de Beach Tennis Aruba 2026.
            </p>
            <div className="staff-box-badge">
              <span>★ BTA 2026 OFFICIAL CREW PERK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
