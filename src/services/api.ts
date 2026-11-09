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
    descripcion: 'Doble medallón de carne smash sobre fuego vivo, queso cheddar fundido, cebollas caramelizadas y salsa de la casa en pan brioche artesanal.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_1_img_1_R14.jpg',
    has_fries_addon: true,
    badge: 'Best Seller',
  },
  'Choripán': {
    categoria: 'From the Grill',
    descripcion: 'Chorizo argentino parrillero asado a las brasas, rodajas de tomate plum, lechuga fresca crocante y suave chimimayo en pan brioche.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_1_img_2_R17.jpg',
    has_fries_addon: true,
    badge: 'Popular',
  },
  'Ribeye Steak Sandwich': {
    categoria: 'From the Grill',
    descripcion: 'Láminas tiernas de bife de ribeye asadas a la parrilla, bañadas en chimichurri tradicional de la casa y queso provolone fundido.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_2_img_1_R28.jpg',
    has_fries_addon: true,
    badge: 'Chef Choice',
  },
  'Ribeye Steak & Fries': {
    categoria: 'From the Grill',
    descripcion: 'Corte premium de ribeye a las brasas sellado a punto, servido con papas fritas rústicas crocantes y copa de chimichurri criollo.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_2_img_2_R29.jpg',
    badge: 'Signature',
  },
  'Half Grilled Chicken & Fries': {
    categoria: 'From the Grill',
    descripcion: 'Medio pollo macerado en hierbas y asado lentamente a las brasas, acompañado de caja de papas fritas doradas y salsa criolla cítrica.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_1_img_3_R18.jpg',
    badge: 'Big Box',
  },
  'Mahi-Mahi Sandwich': {
    categoria: 'From the Griddle',
    descripcion: 'Filete fresco de Mahi-Mahi sellado a la plancha con hierbas aromáticas, rodajas de tomate, lechuga y tártara casera en pan brioche tostado.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_3_img_1_R37.jpg',
    has_fries_addon: true,
    badge: 'Fresh Catch',
  },
  'BLT Chicken Wrap': {
    categoria: 'From the Griddle',
    descripcion: 'Suprema de pollo a la plancha cortada en tiras, panceta ahumada crujiente, lechuga, tomate plum fresco y aderezo ligero en tortilla de trigo dorada.',
    estacion: 'GRILL + GRIDDLE',
    imagen_local: '/menu_photos/page_3_img_2_R38.jpg',
    has_fries_addon: true,
  },
  'Loaded Fries w/ Melted Cheddar & Bacon': {
    categoria: 'Crispy Classics',
    descripcion: 'Generosa porción de papas fritas crujientes bañadas en queso cheddar fundido bien caliente, lluvia de bacon crocante y cebolla crispy.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_4_img_1_R58.jpg',
    badge: 'Classic Snack',
  },
  'Loaded Fries w/ Beef Chili, Cheddar & Sour Cream': {
    categoria: 'Crispy Classics',
    descripcion: 'Papas fritas con chili con carne casero especiado, queso cheddar rallado fundido, crema agria (sour cream) fresca y cebollino verde.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_4_img_2_R59.jpg',
    badge: 'Loaded',
  },
  'Chicken Parmesan & Fries': {
    categoria: 'Crispy Classics',
    descripcion: 'Milanesa de pechuga de pollo crocante gratinada con salsa pomodoro de tomates italianos y abundante queso mozzarella fundido, con papas fritas.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_4_img_3_R60.jpg',
  },
  'Crispy Chicken Sandwich': {
    categoria: 'Crispy Classics',
    descripcion: 'Filete de pechuga de pollo rebozado ultra crocante estilo sureño, lechuga, tomate y mayonesa mostaza y miel en pan brioche.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_5_img_1_R68.jpg',
    has_fries_addon: true,
    badge: 'Crispy',
  },
  'Fish & Chips': {
    categoria: 'Crispy Classics',
    descripcion: 'Tiras de pescado blanco fresco rebozado en tempura crocante de cerveza dorada, servido con papas fritas, gajos de limón y salsa tártara artesanal.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_5_img_2_R69.jpg',
    badge: 'Tournament Fav',
  },
  'Crispy Calamari': {
    categoria: 'Crispy Classics',
    descripcion: 'Aros tiernos de calamar rebozados y fritos en su punto exacto de crocancia, acompañados de salsa aioli de ajo asado y gajos de limón fresco.',
    estacion: 'CRISPY',
    imagen_local: '/menu_photos/page_5_img_3_R70.jpg',
    badge: 'Appetizer',
  },
  'Grilled Bowl': {
    categoria: 'From the Salad Bar',
    descripcion: 'Bowl saludable y completo con tu proteína a elección: Salmón, Pollo a las brasas o Mahi-Mahi fresco, arroz sushi, vegetales de estación, palta, huevo y aderezo cítrico.',
    estacion: 'SALAD BAR',
    imagen_local: '/menu_photos/page_6_img_1_R48.jpg',
    badge: 'High Protein',
  },
  'Salmon Poke Bowl': {
    categoria: 'From the Salad Bar',
    descripcion: 'Dados de salmón fresco marinados en sésamo y soja, base de arroz sushi, edamame fresco, mango dulce maduro, pepino y furikake.',
    estacion: 'SALAD BAR',
    imagen_local: '/menu_photos/page_6_img_2_R49.jpg',
    badge: 'Healthy & Fresh',
  },
  'Ceviche': {
    categoria: 'From the Salad Bar',
    descripcion: 'Pesca fresca del día de Aruba curada en jugo de lima recién exprimido, cebolla morada fina, cilantro, rodaja de batata dulce y maíz cancha peruano.',
    estacion: 'SALAD BAR',
    imagen_local: '/menu_photos/page_6_img_3_R50.jpg',
    badge: 'Green Fish Raw Bar',
  },
  'Fries (extra)': {
    categoria: 'From the Grill',
    descripcion: 'Porción individual de papas fritas doradas y crocantes sazonadas con sal marina, ideal como guarnición para cualquier sándwich.',
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
    descripcion: enrichment.descripcion || p.descripcion || 'Especialidad oficial de Cookout para Beach Tennis Aruba Open 2026.',
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

export async function fetchCookoutCatalogo(): Promise<{
  elaborados: ProductoElaborado[];
  tenant: TenantInfo;
  marca: MarcaInfo;
  gruposOpciones: GrupoOpciones[];
}> {
  try {
    const url = `${FOOD_BACKEND_URL}/api/public/catalogo?tenant_id=8&marca_id=7`;
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (res.ok) {
      const data = await res.json();
      const platosBackend = (data.elaborados || []).map(normalizePlato);
      return {
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
    }
  } catch (err) {
    console.warn('Conectando con catálogo estático offline:', err);
  }

  return {
    elaborados: REAL_PLATOS,
    tenant: TENANT_INFO,
    marca: MARCA_INFO,
    gruposOpciones: REAL_GRUPOS,
  };
}
