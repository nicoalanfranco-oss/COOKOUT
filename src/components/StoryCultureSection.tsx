import React from 'react';
import { Flame, ExternalLink, Fish, Sparkles, Heart } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const StoryCultureSection: React.FC = () => {
  const instagramPosts = [
    {
      title: 'Pit-fire live cooking',
      subtitle: 'Fuego vivo en la playa',
      image: '/menu_photos/page_1_img_1_R14.jpg',
      tag: '#SmashBurgers',
    },
    {
      title: 'Ocean Fresh Catch',
      subtitle: 'Pesca local del día',
      image: '/menu_photos/page_6_img_3_R50.jpg',
      tag: '#RawBar',
    },
    {
      title: 'Prime Ribeye Cuts',
      subtitle: 'Cortes seleccionados',
      image: '/menu_photos/page_2_img_2_R29.jpg',
      tag: '#FromtheGrill',
    },
    {
      title: 'Beach Vibes & BTA 2026',
      subtitle: 'El mejor ambiente del torneo',
      image: '/menu_photos/page_5_img_2_R69.jpg',
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
              FUEGO, MAR Y PASIÓN POR EL BEACH TENNIS
            </h2>
            <p className="story-p">
              Nacido de la mano del equipo gastronómico de <strong>Green Fish Aruba</strong>, <strong>COOKOUT</strong> redefine el concepto de comida de torneo. Combinamos la técnica rústica de parrilla a leña y carbón con la frescura inigualable de nuestra barra de mariscos y ceviches caribeños.
            </p>
            <p className="story-p">
              Durante el <strong>Beach Tennis Aruba Open 2026</strong>, te esperamos en Bushiri Beach desde las 10:00 de la mañana hasta la medianoche con platos preparados al instante para recargar energía entre partido y partido o celebrar con amigos al atardecer.
            </p>

            <div className="story-author-box">
              <img
                src="/logo_cookout.jpg"
                alt="Cookout Logo"
                className="story-author-img"
              />
              <div>
                <strong>COOKOUT ARUBA</strong>
                <span>Open-air Pit Fire & Raw Bar by Green Fish</span>
              </div>
            </div>
          </div>

          <div className="story-highlight-card">
            <div className="story-card-inner">
              <Flame size={32} className="story-flame" />
              <h3>¿QUÉ NOS HACE ÚNICOS?</h3>
              <ul className="story-features-list">
                <li>
                  <strong>Carnes Seleccionadas:</strong> Ribeye tierno y smash burgers con blends de carne 100% de primera calidad.
                </li>
                <li>
                  <strong>Pesca y Ceviche Directo:</strong> Mahi-mahi y salmón fresco con el sello indiscutido de Green Fish Aruba.
                </li>
                <li>
                  <strong>Sabor Ahumado Auténtico:</strong> Asado a fuego vivo frente a vos en la orilla de Bushiri Beach.
                </li>
                <li>
                  <strong>Atención a la Comunidad:</strong> Menú especial para el staff y la organización del torneo.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instagram Inspiration Gallery */}
        <div className="instagram-showcase-block">
          <div className="ig-header">
            <div>
              <span className="ig-subtitle">SÍGUENOS EN REDES</span>
              <h3 className="ig-title">VIVE LA EXPERIENCIA @COOKOUTARUBA</h3>
            </div>
            <a
              href="https://www.instagram.com/cookoutaruba/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ig-pill"
            >
              <InstagramIcon size={18} />
              <span>Seguir en Instagram</span>
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
              Etiquetanos en tus historias durante el torneo con <strong>#CookoutAruba</strong> y <strong>#BTA2026</strong> para salir en nuestro feed oficial!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
