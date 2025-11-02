export type CatalogOffer = {
  id: string;
  name: string;
  brandColor: string;
  price: number;
  duration: string;
  tag: string;
  description: string;
  features: string[];
  hidden?: boolean;
  outOfStock?: boolean;
};

export type CatalogCategory = {
  category: string;
  headline: string;
  offers: CatalogOffer[];
};

export type CatalogService = {
  name: string;
  brandColor: string;
  category: string;
  description: string;
  tag: string;
  offers: CatalogOffer[];
};
