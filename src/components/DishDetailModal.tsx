import React, { useEffect } from 'react';
import { X, Flame, Share2, Check, Sparkles, ChefHat } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { ProductoElaborado } from '../types/food';

interface DishDetailModalProps {
  plato: ProductoElaborado | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ plato, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (plato) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [plato, onClose]);

  if (!plato) return null;

  const awgPrice = (plato.precio_venta * 1.79).toFixed(2);

  // Preferred image: Cloudinary first, then local fallback
  const displayImage = plato.imagen_url || plato.imagen_local || '/logo_cookout.jpg';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Modal Image Header */}
        <div className="modal-image-wrapper">
          <img
            src={displayImage}
            alt={plato.nombre}
            className="modal-image"
            onError={(e) => {
              if (plato.imagen_url && e.currentTarget.src !== plato.imagen_url) {
                e.currentTarget.src = plato.imagen_url;
              } else {
                e.currentTarget.src = '/logo_cookout.jpg';
              }
            }}
          />

          {/* Badges on image */}
          <div className="modal-image-badges">
            <span className="station-badge">{plato.estacion_cocina}</span>
            {plato.badge && <span className="highlight-tag">{plato.badge}</span>}
          </div>
        </div>

        {/* Modal Content */}
        <div className="modal-body">
          <div className="modal-header-row">
            <div>
              <span className="modal-category">{plato.categoria}</span>
              <h3 className="modal-title">{plato.nombre}</h3>
            </div>
            <div className="modal-price-box">
              <span className="modal-price-usd">${plato.precio_venta}</span>
              <span className="modal-price-currency">USD</span>
              <span className="modal-price-awg">≈ {awgPrice} AWG</span>
            </div>
          </div>

          {/* Add Fries Callout if applicable */}
          {plato.has_fries_addon && (
            <div className="addon-callout">
              <span className="addon-dot">●</span>
              <strong>ADD FRIES +$5 USD</strong>
              <span className="addon-sub">(Crispy sea-salt fries)</span>
            </div>
          )}

          {/* Description */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Sparkles size={16} />
              <span>Dish Description</span>
            </h4>
            <p className="modal-description">{plato.descripcion}</p>
          </div>

          {/* Ingredients if available */}
          {plato.insumos_receta && plato.insumos_receta.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <ChefHat size={16} />
                <span>Ingredients &amp; Preparation</span>
              </h4>
              <div className="ingredients-pills">
                {plato.insumos_receta.map((ins, idx) => (
                  <span key={idx} className="ingredient-chip">
                    <Check size={12} />
                    <span>{ins.nombre}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Event & Ordering Note */}
          <div className="modal-event-note">
            <Flame size={18} className="note-icon" />
            <div>
              <strong>Exclusive · Beach Tennis Aruba Open 2026</strong>
              <p>
                Served fresh at our pop-up stand at Bushiri Beach. Walk up to the counter any time during the tournament (10:00 AM – Midnight).
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="modal-actions">
            <a
              href="https://www.instagram.com/cookoutaruba/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modal-instagram"
            >
              <InstagramIcon size={18} />
              <span>See us on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
