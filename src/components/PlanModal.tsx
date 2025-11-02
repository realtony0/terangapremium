"use client";

import type { CatalogService } from "@/types/catalog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { serviceLogos } from "@/constants/serviceLogos";
import { useCart } from "@/context/CartContext";

type PlanModalProps = {
  service: CatalogService;
  onClose: () => void;
};

export default function PlanModal({ service, onClose }: PlanModalProps) {
  const { addItem } = useCart();
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3 py-6 backdrop-blur-md sm:px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-black/10 bg-white p-5 text-black shadow-[0_40px_120px_rgba(15,15,15,0.15)] sm:p-6"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="space-y-3">
            {serviceLogos[service.name] && (
              <Image
                src={serviceLogos[service.name]}
                alt={`${service.name} logo`}
                width={140}
                height={46}
                className="h-10 w-auto object-contain sm:h-12"
              />
            )}
            <p className="text-xs uppercase tracking-[0.4em] text-black/40">
              {service.category}
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              {service.name}
            </h2>
            <p className="mt-3 text-sm text-black/60 sm:text-base">
              {service.description}
            </p>
          </div>
          <button
            type="button"
            aria-label="Fermer"
            onClick={onClose}
            className="ml-auto rounded-full border border-black/10 p-2 text-black/60 transition hover:border-black/40 hover:text-black"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 space-y-4 pb-2 sm:pb-0">
          {service.offers.map((plan) => {
            const formattedPrice = plan.price.toLocaleString("fr-FR");
            const handleAddToCart = () => {
              addItem({
                id: plan.id,
                serviceName: service.name,
                duration: plan.duration,
                price: plan.price,
              });
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("open-cart"));
              }
              onClose();
            };

            return (
              <div
                key={`${plan.id}-${plan.duration}`}
                className={`rounded-2xl border p-4 ${
                  plan.outOfStock 
                    ? "border-gray-300 bg-gray-50" 
                    : "border-black/10 bg-white"
                }`}
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className={`text-lg font-semibold ${plan.outOfStock ? "text-gray-500" : "text-black"}`}>
                        {plan.duration}
                      </p>
                      {plan.outOfStock && (
                        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                          Rupture de stock
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${plan.outOfStock ? "text-gray-400" : "text-black/60"}`}>
                      {plan.tag}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-semibold ${plan.outOfStock ? "text-gray-500" : "text-black"}`}>
                      {formattedPrice} <span className="text-sm text-black/60">F</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-full border border-black/10 px-4 py-2 text-sm text-black transition hover:border-black disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={handleAddToCart}
                    disabled={plan.outOfStock}
                  >
                    {plan.outOfStock ? "Indisponible" : "Ajouter au panier"}
                  </button>
                </div>
              </div>
            );
          })}
          <p className="rounded-2xl bg-black/5 px-4 py-3 text-sm text-black/60">
            Ajoutez vos services au panier puis validez la commande depuis le panier pour finaliser sur WhatsApp avec vos informations.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
