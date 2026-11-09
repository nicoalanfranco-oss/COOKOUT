export interface TenantInfo {
  tenant_id: number;
  nombre: string;
  rut?: string;
  direccion: string;
  telefono: string;
  google_maps_url?: string;
  email?: string;
  ciudad?: string;
  pais?: string;
  moneda_operacional?: string;
  logo_url?: string;
}

export interface EstadoAtencion {
  abierto_ahora: boolean;
  delivery_abierto_ahora?: boolean;
  salon_takeaway_abierto_ahora?: boolean;
  mensaje_estado: string;
  proxima_apertura?: string | null;
  horario_atencion?: string;
  dias_atencion?: string;
}

export interface EstacionCocina {
  id: string;
  nombre: string;
  color: string;
  subtitulo?: string;
}

export interface MarcaInfo {
  marca_id: number;
  tenant_id?: number;
  nombre: string;
  slug?: string;
  descripcion?: string;
  color_primario: string;
  dias_atencion: string;
  horario_atencion: string;
  permite_salon: boolean;
  permite_delivery: boolean;
  permite_takeaway: boolean;
  logo_url?: string;
  estaciones_cocina?: EstacionCocina[];
  estado_atencion?: EstadoAtencion;
}

export interface InsumoReceta {
  insumo_id: number;
  nombre: string;
  cantidad: number;
  unidad: string;
  costo_unitario?: number;
  imagen_url?: string | null;
}

export interface OpcionPersonalizacion {
  opcion_id: number;
  nombre: string;
  precio_extra: number;
  imagen_url?: string | null;
}

export interface GrupoOpciones {
  grupo_id: number;
  producto_elaborado_id: number;
  nombre: string;
  paso_orden: number;
  min_opciones: number;
  max_opciones: number;
  opciones: OpcionPersonalizacion[];
}

export interface ProductoElaborado {
  producto_elaborado_id: number;
  tenant_id: number;
  marca_id?: number | null;
  nombre: string;
  categoria: string;
  descripcion?: string | null;
  precio_venta: number;
  es_personalizable: boolean;
  formato_venta?: string;
  imagen_url?: string | null;
  imagen_local?: string | null;
  activo: boolean;
  estacion_cocina?: string;
  marca_nombre?: string;
  insumos_receta?: InsumoReceta[];
  has_fries_addon?: boolean;
  badge?: string;
}

