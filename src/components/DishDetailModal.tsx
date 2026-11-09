import React, { useEffect } from 'react';
import { X, Flame, MessageCircle, Share2, Check, Sparkles, ChefHat } from 'lucide-react';
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
  const whatsappText = encodeURIComponent(
    `Hola Cookout Aruba! Vi en la web el plato *${plato.nombre}* ($${plato.precio_venta} USD) para el Beach Tennis Aruba 2026 y quería hacer una consulta.`
  );
  const whatsappUrl = `https://wa.me/2975930387?text=${whatsappText}`;

  // Imagen preferida: local si existe, o Cloudinary
  const displayImage = plato.imagen_local || plato.imagen_url || '/logo_cookout.jpg';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
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
              // Si falla la imagen local, intentar con Cloudinary o logo
              if (plato.imagen_url && e.currentTarget.src !== plato.imagen_url) {
                e.currentTarget.src = plato.imagen_url;
              } else {
                e.currentTarget.src = '/logo_cookout.jpg';
              }
            }}
          />
          <div className="modal-image-gradient"></div>

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
              <span className="addon-sub">(Papas fritas crocantes con sal marina)</span>
            </div>
          )}

          {/* Description */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Sparkles size={16} />
              <span>Descripción del Plato</span>
            </h4>
            <p className="modal-description">{plato.descripcion}</p>
          </div>

          {/* Insumos / Ingredientes si están disponibles */}
          {plato.insumos_receta && plato.insumos_receta.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <ChefHat size={16} />
                <span>Ingredientes & Preparación</span>
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
              <strong>Exclusivo Beach Tennis Aruba Open 2026</strong>
              <p>
                Servido al momento en nuestro pop-up en Bushiri Beach. Podés pedir directamente en el mostrador durante todo el torneo (10:00 a 00:00 hs).
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="modal-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modal-whatsapp"
            >
              <MessageCircle size={18} />
              <span>Consultar por este Plato</span>
            </a>

            <a
              href="https://www.instagram.com/cookoutaruba/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modal-instagram"
            >
              <InstagramIcon size={18} />
              <span>Ver en Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
