import { TenantInfo, MarcaInfo, ProductoElaborado, GrupoOpciones } from '../types/food';
import rawCatalog from './cookout_catalog.json';

export const TENANT_INFO: TenantInfo = {
  tenant_id: rawCatalog.tenant?.tenant_id || 8,
  nombre: rawCatalog.tenant?.nombre || 'COOKOUT Aruba',
  rut: rawCatalog.tenant?.rut || 'H49511.0',
  direccion: rawCatalog.tenant?.direccion || 'Avenida Milio Croes 78, Oranjestad, Aruba (Bushiri Beach durante Torneo)',
  telefono: rawCatalog.tenant?.telefono || '+297 593 0387',
  email: rawCatalog.tenant?.email || 'seba@greenfish.com',
  moneda_operacional: rawCatalog.tenant?.moneda_operacional || 'AWG',
  logo_url: rawCatalog.tenant?.logo_url || '/logo_cookout.jpg',
  google_maps_url: 'https://maps.google.com/?q=Bushiri+Beach+Aruba',
  ciudad: 'Oranjestad',
  pais: 'Aruba',
};

export const MARCA_INFO: MarcaInfo = {
  marca_id: rawCatalog.marca?.marca_id || 7,
  tenant_id: 8,
  nombre: 'COOKOUT',
  slug: 'cookout-eventos',
  descripcion: 'Outdoor Pit-Fire Grill & Raw Bar by Green Fish • Beach Tennis Aruba Open 2026',
  color_primario: '#F59E0B',
  dias_atencion: 'Lunes a Domingo (Nov 8 - 22, 2026)',
  horario_atencion: '10:00 a 00:00 hs',
  permite_salon: true,
  permite_delivery: false,
  permite_takeaway: true,
  logo_url: '/logo_cookout.jpg',
  estaciones_cocina: (rawCatalog.marca?.estaciones_cocina as any[]) || [
    { id: 'grill', nombre: 'GRILL + GRIDDLE', color: '#9b273e', subtitulo: 'Burgers & Steaks' },
    { id: 'crispy', nombre: 'CRISPY', color: '#f8b90d', subtitulo: 'Classics & Fries' },
    { id: 'salad', nombre: 'SALAD BAR', color: '#10b981', subtitulo: 'Bowls & Ceviche' },
  ],
  estado_atencion: {
    abierto_ahora: true,
    mensaje_estado: 'Abierto todos los días de 10:00 a 00:00 hs',
    horario_atencion: '10:00 a 00:00 hs',
    dias_atencion: 'Lunes a Domingo (BTA Open 2026)',
  },
};

// Mapa de enriquecimiento visual y descripciones para la carta informativa
const PRODUCT_ENRICHMENT: Record<string, {
  categoria: string;
  descripcion: string;
  estacion: string;
  imagen_local: string;
  has_fries_addon?: boolean;
  badge?: string;
}> = {
  'Smash Burger': {
    categoria: 'From the Grill',
    descripcion: 'Double smash patty cooked over live fire, melted cheddar, caramelized onions and house sauce on a toasted brioche bun.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_1_img_1_R14.jpg',
    has_fries_addon: true,
    badge: 'Best Seller',
  },
  'Choripan': {
    categoria: 'From the Grill',
    descripcion: 'Argentine-style chorizo grilled over charcoal, fresh tomato, crispy lettuce and chimichurri mayo on a brioche bun.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_1_img_2_R17.jpg',
    has_fries_addon: true,
    badge: 'Popular',
  },
  'Choripán': {
    categoria: 'From the Grill',
    descripcion: 'Argentine-style chorizo grilled over charcoal, fresh tomato, crispy lettuce and chimichurri mayo on a brioche bun.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_1_img_2_R17.jpg',
    has_fries_addon: true,
    badge: 'Popular',
  },
  'Ribeye Steak Sandwich': {
    categoria: 'From the Grill',
    descripcion: 'Thinly sliced grilled ribeye strips, house-made chimichurri and melted provolone cheese on toasted bread.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_2_img_1_R28.jpg',
    has_fries_addon: true,
    badge: 'Chef Choice',
  },
  'Ribeye Steak & Fries': {
    categoria: 'From the Grill',
    descripcion: 'Premium ribeye cut seared over live coals, served with crispy rustic fries and a side of house chimichurri.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_2_img_2_R29.jpg',
    badge: 'Signature',
  },
  'Half Grilled Chicken & Fries': {
    categoria: 'From the Grill',
    descripcion: 'Herb-marinated half chicken slow-grilled over charcoal, served with golden fries and a citrus criollo sauce.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_1_img_3_R18.jpg',
    badge: 'Big Box',
  },
  'Mahi-Mahi Sandwich': {
    categoria: 'From the Griddle',
    descripcion: 'Fresh Mahi-Mahi fillet pan-seared with aromatic herbs, tomato, lettuce and house-made tartare on a toasted brioche bun.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_3_img_1_R37.jpg',
    has_fries_addon: true,
    badge: 'Fresh Catch',
  },
  'BLT Chicken Wrap': {
    categoria: 'From the Griddle',
    descripcion: 'Grilled chicken breast strips, crispy smoked bacon, fresh tomato, lettuce and light dressing wrapped in a golden wheat tortilla.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_3_img_2_R38.jpg',
    has_fries_addon: true,
  },
  'Loaded Fries w/ Melted Cheddar & Bacon': {
    categoria: 'Crispy Classics',
    descripcion: 'Generous portion of crispy french fries smothered in warm melted cheddar cheese, crispy bacon bits and crispy onions.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_4_img_1_R58.jpg',
    badge: 'Classic Snack',
  },
  'Loaded Fries w/ Beef Chili, Cheddar & Sour Cream': {
    categoria: 'Crispy Classics',
    descripcion: 'Crispy french fries loaded with house-made seasoned beef chili, melted shredded cheddar, fresh sour cream and green scallions.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_4_img_2_R59.jpg',
    badge: 'Loaded',
  },
  'Chicken Parmesan & Fries': {
    categoria: 'Crispy Classics',
    descripcion: 'Crispy breaded chicken breast cutlet gratinéed with Italian pomodoro tomato sauce and melted mozzarella, served with french fries.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_4_img_3_R60.jpg',
  },
  'Crispy Chicken Sandwich': {
    categoria: 'Crispy Classics',
    descripcion: 'Southern-style ultra-crispy breaded chicken breast fillet, lettuce, tomato and honey mustard mayonnaise on a brioche bun.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_5_img_1_R68.jpg',
    has_fries_addon: true,
    badge: 'Crispy',
  },
  'Fish & Chips': {
    categoria: 'Crispy Classics',
    descripcion: 'Fresh white fish strips dipped in golden beer tempura batter, served with crispy fries, lemon wedges and artisan tartar sauce.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_5_img_2_R69.jpg',
    badge: 'Tournament Fav',
  },
  'Crispy Calamari': {
    categoria: 'Crispy Classics',
    descripcion: 'Tender calamari rings lightly breaded and fried to perfection, served with roasted garlic aioli and fresh lemon wedges.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_5_img_3_R70.jpg',
    badge: 'Appetizer',
  },
  'Grilled Bowl': {
    categoria: 'From the Salad Bar',
    descripcion: 'Fresh salad bowl with rice, mixed greens, cucumber, pickled onion, corn & beans salad. Choose your protein: Salmon, Chicken or Mahi-Mahi.',
    estacion: 'SALAD BAR',
    imagen_local: '/menu_photos/page_6_img_1_R48.jpg',
    badge: 'High Protein',
  },
  'Salmon Poke Bowl': {
    categoria: 'From the Salad Bar',
    descripcion: 'Fresh salmon cubes marinated in sesame and soy, sushi rice base, fresh edamame, ripe sweet mango, cucumber and furikake.',
    estacion: 'SALAD BAR',
    imagen_local: '/menu_photos/page_6_img_2_R49.jpg',
    badge: 'Healthy & Fresh',
  },
  'Ceviche': {
    categoria: 'From the Salad Bar',
    descripcion: 'Fresh Aruba catch cured in freshly squeezed lime juice, thinly sliced red onion, cilantro, sweet potato slice and Peruvian cancha corn.',
    estacion: 'SALAD BAR',
    imagen_local: '/menu_photos/page_6_img_3_R50.jpg',
    badge: 'Green Fish Raw Bar',
  },
  'Fries (extra)': {
    categoria: 'From the Grill',
    descripcion: 'Individual portion of golden crispy fries seasoned with sea salt — the perfect side for any sandwich.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_4_img_1_R58.jpg',
  },
};

function normalizePlato(p: any): ProductoElaborado {
  const enrichment = PRODUCT_ENRICHMENT[p.nombre] || {};
  return {
    producto_elaborado_id: p.producto_elaborado_id,
    tenant_id: p.tenant_id || 8,
    marca_id: p.marca_id || 7,
    nombre: p.nombre,
    categoria: enrichment.categoria || p.categoria || 'From the Grill',
    descripcion: p.descripcion || enrichment.descripcion || 'Official Cookout dish — Beach Tennis Aruba Open 2026.',
    precio_venta: Number(p.precio_venta || 0),
    es_personalizable: Boolean(p.es_personalizable),
    formato_venta: 'unidad',
    imagen_url: p.imagen_url || enrichment.imagen_local || '/logo_cookout.jpg',
    imagen_local: enrichment.imagen_local || null,
    activo: Boolean(p.activo !== false),
    estacion_cocina: enrichment.estacion || p.estacion_cocina || 'GRILL + GRIDDLE',
    marca_nombre: 'COOKOUT',
    has_fries_addon: enrichment.has_fries_addon || false,
    badge: enrichment.badge,
    insumos_receta: (p.insumos_receta || []).map((i: any) => ({
      insumo_id: Number(i.insumo_id),
      nombre: i.nombre,
      cantidad: Number(i.cantidad ?? i.cantidad_receta ?? 0),
      unidad: i.unidad || 'unidad',
      costo_unitario: Number(i.costo_unitario || 0),
      imagen_url: i.imagen_url || null,
    })),
  };
}

export const REAL_PLATOS: ProductoElaborado[] = ((rawCatalog.elaborados || []) as any[]).map(normalizePlato);

export const REAL_GRUPOS: GrupoOpciones[] = ((rawCatalog.gruposOpciones || []) as any[]).map(g => ({
  grupo_id: g.grupo_id,
  producto_elaborado_id: g.producto_elaborado_id,
  nombre: g.nombre,
  paso_orden: g.paso_orden || 1,
  min_opciones: g.min_opciones || 1,
  max_opciones: g.max_opciones || 1,
  opciones: (g.opciones || []).map((o: any) => ({
    opcion_id: o.opcion_id,
    nombre: o.nombre,
    precio_extra: Number(o.precio_extra || 0),
    imagen_url: o.imagen_url || null,
  })),
}));

export const FOOD_BACKEND_URL = (() => {
  try {
    const host = window.location.hostname;
    if (host.includes('localhost') || host.includes('127.0.0.1')) {
      return '';
    }
  } catch {}
  return 'https://food--studio-4748759464-52942.us-east4.hosted.app';
})();

const LOCAL_STORAGE_CATALOG_KEY = 'cookout_cached_catalog_v2';

export function getInitialCatalog() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_CATALOG_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.elaborados && parsed.elaborados.length > 0) {
        return parsed;
      }
    }
  } catch {}
  return {
    elaborados: REAL_PLATOS,
    tenant: TENANT_INFO,
    marca: MARCA_INFO,
    gruposOpciones: REAL_GRUPOS,
  };
}

export async function fetchCookoutCatalogo(forceRefresh = false): Promise<{
  elaborados: ProductoElaborado[];
  tenant: TenantInfo;
  marca: MarcaInfo;
  gruposOpciones: GrupoOpciones[];
}> {
  try {
    const timestamp = Date.now();
    const url = `${FOOD_BACKEND_URL}/api/public/catalogo?tenant_id=8&marca_id=7&_t=${timestamp}`;
    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
    });
    if (res.ok) {
      const data = await res.json();
      const platosBackend = (data.elaborados || []).map(normalizePlato);
      const finalCatalog = {
        elaborados: platosBackend.length > 0 ? platosBackend : REAL_PLATOS,
        tenant: {
          ...TENANT_INFO,
          ...(data.tenant || {}),
        },
        marca: {
          ...MARCA_INFO,
          ...(data.marca || {}),
        },
        gruposOpciones: data.gruposOpciones || REAL_GRUPOS,
      };

      try {
        localStorage.setItem(LOCAL_STORAGE_CATALOG_KEY, JSON.stringify(finalCatalog));
      } catch {}

      return finalCatalog;
    }
  } catch (err) {
    console.warn('Conectando con catálogo estático offline:', err);
  }

  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_CATALOG_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.elaborados && parsed.elaborados.length > 0) {
        return parsed;
      }
    }
  } catch {}

  return {
    elaborados: REAL_PLATOS,
    tenant: TENANT_INFO,
    marca: MARCA_INFO,
    gruposOpciones: REAL_GRUPOS,
  };
}

