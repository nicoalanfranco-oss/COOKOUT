import React from 'react';
import { Flame, ExternalLink, Fish } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const StoryCultureSection: React.FC = () => {
  const instagramPosts = [
    {
      title: 'Pit-fire live cooking',
      subtitle: 'Live fire on the beach',
      image: 'https://res.cloudinary.com/domyogu15/image/upload/v1794222333/nalu_food/elaborados/ua23pbkbzrd9fwsmmwqg.png',
      tag: '#SmashBurgers',
    },
    {
      title: 'Ocean Fresh Catch',
      subtitle: 'Local catch of the day',
      image: 'https://res.cloudinary.com/domyogu15/image/upload/v1794177239/nalu_food/elaborados/eahrhuwxtu3u8vxove3d.png',
      tag: '#RawBar',
    },
    {
      title: 'Prime Ribeye Cuts',
      subtitle: 'Hand-selected prime cuts',
      image: 'https://res.cloudinary.com/domyogu15/image/upload/v1794176197/nalu_food/elaborados/eriyp1k77cwzlosqu9wi.png',
      tag: '#FromtheGrill',
    },
    {
      title: 'Beach Vibes & BTA 2026',
      subtitle: 'The best atmosphere at the tournament',
      image: 'https://res.cloudinary.com/domyogu15/image/upload/v1794179930/nalu_food/elaborados/cofrmrdqnmf18otb6ihh.png',
      tag: '#BeachTennisAruba',
    },
  ];

  return (
    <section id="story" className="story-section">
      <div className="container">
        {/* Story Intro */}
        <div className="story-grid">
          <div className="story-text-block">
            <div className="section-pill">
              <Fish size={15} />
              <span>THE COOKOUT EXPERIENCE</span>
            </div>
            <h2 className="story-title">
              FIRE, SEA &amp; PASSION FOR BEACH TENNIS
            </h2>
            <p className="story-p">
              Born from the culinary team at <strong>Green Fish Aruba</strong>, <strong>COOKOUT</strong> redefines tournament food. We blend the rustic technique of pit-fire and charcoal grilling with the unmatched freshness of our raw bar and Caribbean ceviche.
            </p>
            <p className="story-p">
              During the <strong>Beach Tennis Aruba Open 2026</strong>, we'll be at Bushiri Beach from 10:00 AM to midnight — with dishes cooked to order so you can refuel between matches or celebrate with friends at sunset.
            </p>

            <div className="story-author-box">
              <img
                src="/logo_cookout.jpg"
                alt="Cookout Logo"
                className="story-author-img"
              />
              <div>
                <strong>COOKOUT ARUBA</strong>
                <span>Open-air Pit Fire &amp; Raw Bar by Green Fish</span>
              </div>
            </div>
          </div>

          <div className="story-highlight-card">
            <div className="story-card-inner">
              <Flame size={32} className="story-flame" />
              <h3>WHAT MAKES US UNIQUE?</h3>
              <ul className="story-features-list">
                <li>
                  <strong>Hand-Selected Meats:</strong> Tender ribeye and smash burgers crafted from 100% premium-grade beef blends.
                </li>
                <li>
                  <strong>Direct Catch &amp; Ceviche:</strong> Mahi-mahi and fresh salmon with the unmistakable Green Fish Aruba seal of quality.
                </li>
                <li>
                  <strong>Authentic Smoky Flavor:</strong> Grilled over live fire right in front of you on the shores of Bushiri Beach.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instagram Inspiration Gallery */}
        <div className="instagram-showcase-block">
          <div className="ig-header">
            <div>
              <span className="ig-subtitle">FOLLOW US ON SOCIAL</span>
              <h3 className="ig-title">EXPERIENCE @COOKOUTARUBA</h3>
            </div>
            <a
              href="https://www.instagram.com/cookoutaruba/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ig-pill"
            >
              <InstagramIcon size={18} />
              <span>Follow on Instagram</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="ig-posts-grid">
            {instagramPosts.map((post, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/cookoutaruba/"
                target="_blank"
                rel="noopener noreferrer"
                className="ig-post-card"
              >
                <img src={post.image} alt={post.title} className="ig-post-img" />
                <div className="ig-post-overlay">
                  <InstagramIcon size={24} className="ig-hover-icon" />
                  <span className="ig-post-tag">{post.tag}</span>
                  <h4 className="ig-post-title">{post.title}</h4>
                  <p className="ig-post-sub">{post.subtitle}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="ig-footer-callout">
            <p>
              Tag us in your stories during the tournament with <strong>#CookoutAruba</strong> and <strong>#BTA2026</strong> to be featured on our official feed!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
