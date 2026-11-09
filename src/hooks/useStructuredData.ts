import { useEffect } from 'react';
import { TenantInfo, MarcaInfo, ProductoElaborado } from '../types/food';

export function useStructuredData(
  tenant: TenantInfo,
  marca: MarcaInfo,
  platos: ProductoElaborado[]
) {
  useEffect(() => {
    try {
      const scriptId = 'cookout-structured-data';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Restaurant',
            '@id': 'https://cookout.nico-family.com/#restaurant',
            name: 'COOKOUT Aruba',
            image: 'https://res.cloudinary.com/domyogu15/image/upload/v1793880919/nalu_food/logos/pteawxglbg5w6noab9j4.jpg',
            telephone: tenant.telefono,
            email: tenant.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Bushiri Beach, Aruba Open Beach Tennis',
              addressLocality: 'Oranjestad',
              addressCountry: 'Aruba',
            },
            servesCuisine: ['Barbecue', 'American Grill', 'Burgers', 'Raw Bar', 'Ceviche'],
            priceRange: '$$',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '10:00',
                closes: '00:00',
              },
            ],
            hasMenu: {
              '@type': 'Menu',
              name: 'Beach Tennis Aruba Open 2026 Official Menu',
              hasMenuItem: platos.map((p) => ({
                '@type': 'MenuItem',
                name: p.nombre,
                description: p.descripcion,
                offers: {
                  '@type': 'Offer',
                  price: p.precio_venta,
                  priceCurrency: 'USD',
                },
              })),
            },
          },
          {
            '@type': 'SportsEvent',
            name: 'Beach Tennis Aruba Open 2026',
            startDate: '2026-11-08',
            endDate: '2026-11-22',
            location: {
              '@type': 'Place',
              name: 'Bushiri Beach',
              address: 'Oranjestad, Aruba',
            },
            description: 'The world biggest Beach Tennis Championship. Official food pop-up by Cookout & Green Fish Aruba.',
          },
        ],
      };

      script.textContent = JSON.stringify(structuredData);
    } catch (e) {
      console.warn('Failed to inject JSON-LD', e);
    }
  }, [tenant, marca, platos]);
}

