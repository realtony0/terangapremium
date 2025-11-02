"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import type { CatalogService } from "@/types/catalog";
import PlanModal from "./PlanModal";
import { serviceLogos } from "@/constants/serviceLogos";

type PopularOffersSectionProps = {
  services: CatalogService[];
};

const featuredServices = [
  {
    name: "Netflix",
    badge: "Le plus vendu",
    gradient: "from-red-600 to-red-400",
  },
  {
    name: "IPTV Premium",
    badge: "10 000+ chaînes",
    gradient: "from-yellow-600 to-orange-500",
  },
  {
    name: "Spotify Premium",
    badge: "Musique illimitée",
    gradient: "from-green-600 to-green-400",
  },
];

const computeWeeklyClients = (name: string) => {
  const charTotal = name
    .split("")
    .reduce((accumulator, character) => accumulator + character.charCodeAt(0), 0);
  return 200 + (charTotal % 501);
};

export default function PopularOffersSection({
  services,
}: PopularOffersSectionProps) {
  const [selected, setSelected] = useState<CatalogService | null>(null);

  const popularServices = services.filter((service) =>
    featuredServices.some((featured) => featured.name === service.name)
  );

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600"
          >
            <Star className="h-4 w-4 fill-red-600" />
            Offres les plus demandées
          </motion.div>
          <h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl">
            Commencez avec nos best-sellers
          </h2>
          <p className="mt-4 text-base text-black/70 sm:text-lg md:text-xl">
            Des milliers de Sénégalais leur font confiance chaque jour
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {popularServices.map((service, index) => {
            const featured = featuredServices.find(
              (f) => f.name === service.name
            );
            const lowestPrice = Math.min(
              ...service.offers.map((offer) => offer.price)
            );

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-xl transition-all duration-300 hover:shadow-2xl sm:rounded-3xl sm:p-6 lg:p-8"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${featured?.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />

                {/* Badge */}
                <div className="relative mb-6 flex items-start justify-between">
                  <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {featured?.badge}
                  </span>
                </div>

                {/* Logo */}
                <div className="relative mb-6 flex h-14 items-center sm:h-16">
                  {serviceLogos[service.name] && (
                    <Image
                      src={serviceLogos[service.name]}
                      alt={`${service.name} logo`}
                      width={140}
                      height={56}
                      className="h-auto w-auto max-h-12 object-contain sm:max-h-14"
                    />
                  )}
                </div>

                {/* Description */}
                <h3 className="relative mb-3 text-xl font-bold text-black sm:text-2xl">
                  {service.name}
                </h3>
                <p className="relative mb-6 text-sm text-black/70 sm:text-base">
                  {service.description.length > 120
                    ? `${service.description.slice(0, 120)}…`
                    : service.description}
                </p>

                {/* Price */}
                <div className="relative mb-6 flex flex-wrap items-end gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-black/60">
                    À partir de
                  </span>
                  <span className="text-3xl font-bold text-black sm:text-4xl">
                    {lowestPrice.toLocaleString("fr-FR")} F
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelected(service)}
                  className="relative flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 font-semibold text-white transition-all duration-300 hover:bg-red-600"
                >
                  Voir les plans
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Popular indicator */}
                <div className="relative mt-4 flex items-center justify-center gap-2 text-xs text-black/50">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-red-400 to-red-600"
                      />
                    ))}
                  </div>
                  <span>+{computeWeeklyClients(service.name)} clients cette semaine</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA voir tout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/offres"
            className="inline-flex items-center gap-2 rounded-full border-2 border-black px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Voir tout le catalogue ({services.length} services)
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </section>

      {selected && (
        <PlanModal service={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
