"use client";

import type { CatalogService } from "@/types/catalog";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import PlanModal from "./PlanModal";
import ServiceCard from "./ServiceCard";

type ServicesGalleryProps = {
  services: CatalogService[];
  limit?: number;
};

export default function ServicesGallery({
  services,
  limit,
}: ServicesGalleryProps) {
  const [selected, setSelected] = useState<CatalogService | null>(null);

  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map((service) => (
          <ServiceCard
            key={service.name}
            service={service}
            onSelect={setSelected}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <PlanModal
            service={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
