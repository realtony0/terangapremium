"use client";

import { useState } from "react";
import type { CatalogService } from "@/types/catalog";
import PlanModal from "./PlanModal";
import Image from "next/image";
import { motion } from "framer-motion";
import { serviceLogos } from "@/constants/serviceLogos";

type SpotlightSectionProps = {
  services: CatalogService[];
};

export default function SpotlightSection({ services }: SpotlightSectionProps) {
  const [selected, setSelected] = useState<CatalogService | null>(null);

  if (services.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-black lg:px-8">
      <div className="mb-8 flex flex-col gap-4 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-red-600/70">
          À la une
        </p>
        <h2 className="text-3xl font-semibold md:text-4xl">
          Netflix Premium & IPTV Pro : les deux services les plus demandés du
          Sénégal
        </h2>
        <p className="text-black/60">
          Des images ultra nettes, du foot en direct, les dernières séries US.
          Ajoutez-les au panier et recevez votre accès en quelques minutes.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <motion.div
            key={service.name}
            className="flex flex-col gap-4 rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_30px_80px_rgba(15,15,15,0.08)] sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {serviceLogos[service.name] && (
                <Image
                  src={serviceLogos[service.name]}
                  alt={`${service.name} logo`}
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain sm:h-12"
                />
              )}
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs uppercase tracking-[0.4em] text-red-600">
                Best seller
              </span>
            </div>
            <h3 className="text-2xl font-semibold">{service.name}</h3>
            <p className="text-sm text-black/65 sm:text-base">
              {service.description}
            </p>
            <ul className="list-inside list-disc text-sm text-black/60">
              {service.offers.slice(0, 3).map((offer) => (
                <li key={`${offer.id}-spotlight`}>
                  {offer.duration} — {offer.price.toLocaleString("fr-FR")} F
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="btn-primary text-sm"
                onClick={() => setSelected(service)}
              >
                Voir les plans disponibles
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <PlanModal service={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
