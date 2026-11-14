import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TournamentBanner } from './components/TournamentBanner';
import { MenuSection } from './components/MenuSection';
import { StoryCultureSection } from './components/StoryCultureSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { TenantInfo, MarcaInfo, ProductoElaborado } from './types/food';
import {
  fetchCookoutCatalogo,
  getInitialCatalog,
  TENANT_INFO,
  MARCA_INFO,
  REAL_PLATOS,
} from './services/api';
import { useStructuredData } from './hooks/useStructuredData';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { checkAppVersionAndPurge, recordUserActivity, checkInactivityState } from './utils/versionCheck';

export const App: React.FC = () => {
  const initialCatalog = getInitialCatalog();
  const [tenant, setTenant] = useState<TenantInfo>(initialCatalog.tenant || TENANT_INFO);
  const [marca, setMarca] = useState<MarcaInfo>(initialCatalog.marca || MARCA_INFO);
  const [platos, setPlatos] = useState<ProductoElaborado[]>(initialCatalog.elaborados || REAL_PLATOS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPlatoModal, setSelectedPlatoModal] = useState<ProductoElaborado | null>(null);

  // Hook de structured data JSON-LD para SEO y Google
  useStructuredData(tenant, marca, platos);

  // Hook de animaciones al scroll
  useScrollAnimation();

  // Carga inicial y sincronización con el backend en vivo
  useEffect(() => {
    let isSubscribed = true;

    const handleUserTouch = () => recordUserActivity();
    window.addEventListener('click', handleUserTouch);
    window.addEventListener('touchstart', handleUserTouch);

    const syncCatalog = async (silent = false) => {
      try {
        const data = await fetchCookoutCatalogo(true);
        if (!isSubscribed) return;
        if (data.elaborados && data.elaborados.length > 0) {
          setPlatos(data.elaborados);
        }
        if (data.tenant) setTenant(data.tenant);
        if (data.marca) setMarca(data.marca);
      } catch (err) {
        console.warn('Usando catálogo estático pre-cargado:', err);
      }
    };

    syncCatalog(false);
    checkAppVersionAndPurge().catch(() => {});

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const { isStale, shouldHardReload, minutesIdle } = checkInactivityState();
        recordUserActivity();

        if (shouldHardReload) {
          console.warn(`[Inactivity] Sesión abierta hace ${minutesIdle} minutos. Refrescando versión y datos limpios...`);
          checkAppVersionAndPurge().then(purged => {
            if (!purged) {
              syncCatalog(true);
            }
          });
          return;
        }

        if (isStale) {
          checkAppVersionAndPurge().catch(() => {});
        }

        syncCatalog(true);
      }
    };

    const handleFocus = () => {
      recordUserActivity();
      checkAppVersionAndPurge().catch(() => {});
      syncCatalog(true);
    };

    const handleOnline = () => {
      checkAppVersionAndPurge().catch(() => {});
      syncCatalog(true);
    };

    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        checkAppVersionAndPurge().catch(() => {});
        syncCatalog(true);
      }
    }, 60 * 1000);

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('online', handleOnline);

    return () => {
      isSubscribed = false;
      window.removeEventListener('click', handleUserTouch);
      window.removeEventListener('touchstart', handleUserTouch);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('online', handleOnline);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cookout-app">
      {/* Barra de Navegación */}
      <Navbar
        marca={marca}
        activeCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('menu');
        }}
        onScrollToSection={scrollToSection}
      />

      {/* Hero Principal con llamado a BTA 2026 */}
      <HeroSection
        onScrollToMenu={() => scrollToSection('menu')}
        onScrollToLocation={() => scrollToSection('location')}
      />

      {/* Banner y Perk de Staff del Torneo */}
      <TournamentBanner />

      {/* Carta Completa e Informativa (Sin selección de carrito por ahora) */}
      <MenuSection
        platos={platos}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onSelectPlato={(plato) => setSelectedPlatoModal(plato)}
      />

      {/* Historia, Cultura de Fuego y Redes de Green Fish / Cookout */}
      <StoryCultureSection />

      {/* Ubicación en Bushiri Beach & Horarios */}
      <LocationHoursSection tenant={tenant} marca={marca} />

      {/* Pie de Página */}
      <Footer />

      {/* Modal Interactivo de Detalle de Plato */}
      <DishDetailModal
        plato={selectedPlatoModal}
        onClose={() => setSelectedPlatoModal(null)}
      />
    </div>
  );
};

