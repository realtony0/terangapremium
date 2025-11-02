"use client";

import Image from "next/image";
import type { CatalogService } from "@/types/catalog";
import { motion } from "framer-motion";
import { serviceLogos, spotlightServices } from "@/constants/serviceLogos";

const spotlightCopy: Record<string, string> = {
  Netflix: "N°1 au Sénégal pour partager vos séries en 4K.",
  "IPTV Premium": "Le bouquet TV préféré des fans de foot & de cinéma.",
};

type ServiceCardProps = {
  service: CatalogService;
  onSelect?: (service: CatalogService) => void;
};

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const logoSrc = serviceLogos[service.name];
  const isSpotlight = spotlightServices.includes(service.name);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect?.(service)}
      className="cards flex w-full flex-col gap-4 text-left"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
        {logoSrc ? (
          <span className="inline-flex items-center rounded-xl bg-black/5 px-2.5 py-1.5 sm:px-3 sm:py-2">
            <Image
              src={logoSrc}
              alt={`${service.name} logo`}
              width={96}
              height={32}
              className="h-8 w-auto max-w-[72px] object-contain sm:max-w-[96px]"
            />
          </span>
        ) : (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold text-white"
            style={{ backgroundColor: service.brandColor }}
          >
            {service.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}
        {isSpotlight && (
          <span className="rounded-full bg-[#E50914]/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#E50914]">
            Focus
          </span>
        )}
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.4em] text-black/40">
          {service.category}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-black sm:text-xl">
          {service.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-black/60 sm:line-clamp-3">
          {isSpotlight && spotlightCopy[service.name]
            ? spotlightCopy[service.name]
            : service.description}
        </p>
      </div>
      <span className="text-xs font-medium uppercase tracking-wide text-[#E50914] sm:text-sm">
        {service.tag}
      </span>
    </motion.button>
  );
}
