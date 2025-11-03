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
        const duplicate = existing.offers.find(
          (item) => item.duration === offer.duration
        );
        if (duplicate) {
          if (offer.price < duplicate.price) {
            const index = existing.offers.indexOf(duplicate);
            existing.offers.splice(index, 1, offer);
          }
        } else {
          existing.offers.push(offer);
        }
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
