import type { CatalogCategory, CatalogService } from "@/types/catalog";

export function groupServicesByName(
  data: CatalogCategory[]
): CatalogService[] {
  const map = new Map<string, CatalogService>();

  data.forEach((category) => {
    category.offers.forEach((offer) => {
      // Skip hidden offers
      if (offer.hidden) return;
      
      const existing = map.get(offer.name);
      if (existing) {
        existing.offers.push(offer);
      } else {
        map.set(offer.name, {
          name: offer.name,
          brandColor: offer.brandColor,
          category: category.category,
          description: offer.description,
          tag: offer.tag,
          offers: [offer],
        });
      }
    });
  });

  return Array.from(map.values());
}
