import React from 'react';
import { Calendar, Users, Trophy } from 'lucide-react';

export const TournamentBanner: React.FC = () => {
  return (
    <section id="tournament" className="tournament-banner-section">
      <div className="container">
        <div className="tournament-banner-card tournament-banner-card-single">
          <div className="tournament-banner-info">
            <div className="tournament-pill">
              <Trophy size={16} />
              <span>THE BIGGEST BEACH TENNIS EVENT IN THE WORLD</span>
            </div>
            <h2 className="tournament-title">
              ARUBA OPEN BEACH TENNIS 2026
            </h2>
            <p className="tournament-desc">
              From November 8 to 22, 2026, Bushiri Beach becomes the world capital of beach tennis. COOKOUT is the official tournament culinary hub steps from the sand: live pit-fire grilling, smash burgers, ribeye steaks, fresh ocean catch, and non-stop festival vibes.
            </p>

            <div className="tournament-dates-grid">
              <div className="tournament-date-box">
                <Calendar size={18} />
                <div>
                  <strong>08 – 22 NOV 2026</strong>
                  <span>15 Non-Stop Days</span>
                </div>
              </div>
              <div className="tournament-date-box">
                <Users size={18} />
                <div>
                  <strong>+1,900 PLAYERS</strong>
                  <span>From Over 40 Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

