import React, { useState, useMemo } from 'react';
import { Flame, Utensils, Search, ChevronRight } from 'lucide-react';
import { ProductoElaborado } from '../types/food';

interface MenuSectionProps {
  platos: ProductoElaborado[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onSelectPlato: (plato: ProductoElaborado) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'Full Menu', icon: '🍽️' },
  { id: 'From the Grill', label: 'FROM THE GRILL', icon: '🔥' },
  { id: 'From the Griddle', label: 'FROM THE GRIDDLE', icon: '🍳' },
  { id: 'Crispy Classics', label: 'CRISPY CLASSICS', icon: '🍟' },
  { id: 'From the Salad Bar', label: 'FROM THE SALAD BAR', icon: '🥗' },
];

export const MenuSection: React.FC<MenuSectionProps> = ({
  platos,
  selectedCategory,
  onSelectCategory,
  onSelectPlato,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlatos = useMemo(() => {
    return platos.filter((p) => {
      // Filtro por categoría
      const matchesCategory =
        selectedCategory === 'all' ||
        p.categoria.toLowerCase() === selectedCategory.toLowerCase();

      // Filtro por búsqueda
      const term = searchTerm.toLowerCase().trim();
      if (!term) return matchesCategory;

      const matchesSearch =
        p.nombre.toLowerCase().includes(term) ||
        (p.descripcion && p.descripcion.toLowerCase().includes(term)) ||
        (p.estacion_cocina && p.estacion_cocina.toLowerCase().includes(term)) ||
        (p.insumos_receta &&
          p.insumos_receta.some((i) => i.nombre.toLowerCase().includes(term)));

      return matchesCategory && matchesSearch;
    });
  }, [platos, selectedCategory, searchTerm]);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-pill">
            <Flame size={15} />
            <span>OFFICIAL MENU • BTA 2026</span>
          </div>
          <h2 className="section-title">THE COOKOUT MENU</h2>
          <p className="section-subtitle">
            Inspired by live fire, the sea, and the urban beach kitchen. All prices in USD — official tournament wristband &amp; cards accepted at our counter.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="menu-controls">
          {/* Search bar */}
          <div className="search-bar-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search dishes, meats, seafood or ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Ribbon Buttons */}
          <div className="category-ribbon">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === 'all'
                  ? platos.length
                  : platos.filter(
                      (p) => p.categoria.toLowerCase() === cat.id.toLowerCase()
                    ).length;

              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectCategory(cat.id)}
                >
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-label">{cat.label}</span>
                  <span className="cat-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredPlatos.length === 0 ? (
          <div className="empty-results-box">
            <Utensils size={40} />
            <h3>No dishes found</h3>
            <p>Try a different search term or select "Full Menu".</p>
            <button
              type="button"
              className="btn-reset-filters"
              onClick={() => {
                setSearchTerm('');
                onSelectCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="dishes-grid">
            {filteredPlatos.map((plato) => {
              const displayImage =
                plato.imagen_url || plato.imagen_local || '/logo_cookout.jpg';

              return (
                <article
                  key={plato.producto_elaborado_id}
                  className="dish-card"
                  onClick={() => onSelectPlato(plato)}
                >
                  {/* Dish Image Container */}
                  <div className="dish-image-container">
                    <img
                      src={displayImage}
                      alt={plato.nombre}
                      className="dish-image"
                      loading="lazy"
                      onError={(e) => {
                        if (plato.imagen_url && e.currentTarget.src !== plato.imagen_url) {
                          e.currentTarget.src = plato.imagen_url;
                        } else {
                          e.currentTarget.src = '/logo_cookout.jpg';
                        }
                      }}
                    />

                    {/* Badge */}
                    {plato.badge && (
                      <span className="dish-top-badge">{plato.badge}</span>
                    )}

                    {/* Price Tag */}
                    <div className="dish-price-tag">
                      <span className="price-usd">${plato.precio_venta}</span>
                      <span className="price-label">USD</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="dish-card-body">
                    <div className="dish-header-row">
                      <span className="dish-station-tag">
                        {plato.estacion_cocina}
                      </span>
                      <span className="dish-category-label">{plato.categoria}</span>
                    </div>

                    <h3 className="dish-title">{plato.nombre}</h3>
                    <p className="dish-desc">{plato.descripcion}</p>

                    {/* Add Fries Tag if applicable */}
                    {plato.has_fries_addon && (
                      <div className="dish-addon-pill">
                        <span className="addon-circle">●</span>
                        <span>ADD FRIES $5</span>
                      </div>
                    )}

                    {/* Ingredients summary if available */}
                    {plato.insumos_receta && plato.insumos_receta.length > 0 && (
                      <div className="dish-ingredients-preview">
                        {plato.insumos_receta.slice(0, 3).map((ins, i) => (
                          <span key={i} className="insumo-mini-chip">
                            {ins.nombre}
                          </span>
                        ))}
                        {plato.insumos_receta.length > 3 && (
                          <span className="insumo-mini-chip more">
                            +{plato.insumos_receta.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Footer Button */}
                    <div className="dish-card-footer">
                      <span className="btn-view-details">
                        <span>View Details &amp; Photo</span>
                        <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

