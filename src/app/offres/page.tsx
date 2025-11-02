"use client";

import ServicesGallery from "@/components/ServicesGallery";
import catalog from "@data/sen_abonnement_catalog.json";
import type { CatalogCategory } from "@/types/catalog";
import { groupServicesByName } from "@/utils/catalog";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Shield, Crown, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

const catalogData = catalog as CatalogCategory[];
const services = groupServicesByName(catalogData);
const servicesByCategory = catalogData
  .map((category) => {
    const filteredServices = services.filter(
      (service) => service.category === category.category
    );
    return {
      category: category.category,
      headline: category.headline,
      services: filteredServices,
      serviceCount: filteredServices.length,
    };
  })
  .filter((section) => section.serviceCount > 0)
  .sort((a, b) => b.serviceCount - a.serviceCount);

export default function OffersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const categories = ["Tous", ...servicesByCategory.map(s => s.category)];
  
  const displayedSections = selectedCategory === "Tous" 
    ? servicesByCategory 
    : servicesByCategory.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Premium */}
      <section className="border-b border-gray-200 bg-white px-4 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-6 py-3 text-sm font-bold text-red-600">
              <Crown className="h-5 w-5 fill-red-600 text-red-600" />
              NOS OFFRES PREMIUM 2025
            </div>
            
            <h1 className="mb-6 text-5xl font-black leading-tight text-gray-900 md:text-6xl lg:text-7xl">
              Vos abonnements
              <br />
              <span className="text-red-600">à prix imbattables</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600 md:text-2xl">
              {services.length} services disponibles · Activation en 15 minutes · Support premium 24/7
            </p>

            {/* Stats rapides */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">15 min</p>
                  <p className="text-sm text-gray-600">Activation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">Garanti</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                  <Sparkles className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-600">Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promo Flash Netflix - Mis en avant */}
      <section className="bg-gray-50 px-4 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link 
            href="/promo/netflix-1300"
            className="group relative block overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-2xl transition-all hover:scale-[1.02] hover:shadow-yellow-500/50"
          >
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-black/5 to-transparent" />
            
            <div className="relative flex flex-col items-center justify-between gap-6 p-8 lg:flex-row lg:p-10">
              {/* Gauche */}
              <div className="flex items-center gap-6">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-red-600 shadow-xl">
                  <Sparkles className="h-10 w-10 text-yellow-300" />
                </div>
                <div>
                  <div className="mb-2 inline-block animate-pulse rounded-full bg-red-600 px-4 py-1 text-xs font-black uppercase text-white">
                    🔥 OFFRE FLASH LIMITÉE
                  </div>
                  <h3 className="mb-2 text-3xl font-black text-gray-900 lg:text-4xl">
                    Netflix Premium 4K
                  </h3>
                  <p className="text-lg font-semibold text-gray-700">
                    Seulement <span className="text-3xl font-black text-red-600">1 300 F</span> au lieu de <span className="line-through">2 500 F</span>
                  </p>
                  <p className="mt-1 text-sm text-gray-600">💰 Économisez 1 200 F · 48% de réduction</p>
                </div>
              </div>

              {/* Droite - CTA */}
              <div className="flex-shrink-0">
                <div className="flex items-center gap-3 rounded-2xl bg-red-600 px-8 py-4 font-black text-white shadow-lg transition-all group-hover:bg-red-700 group-hover:shadow-xl">
                  <span className="text-lg">J’en profite</span>
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filtres par catégorie - Design moderne */}
      <section className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 px-4 py-6 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 rounded-2xl px-6 py-3 text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue par catégories - Design carte */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-20">
          {displayedSections.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Header de catégorie */}
              <div className="mb-8 text-center">
                <div className="mb-3 inline-block rounded-full bg-red-100 px-5 py-2 text-sm font-bold text-red-600">
                  {section.serviceCount} {section.serviceCount > 1 ? "offres disponibles" : "offre disponible"}
                </div>
                <h2 className="mb-2 text-4xl font-black text-gray-900">{section.category}</h2>
                <p className="text-lg text-gray-600">{section.headline}</p>
              </div>

              {/* Services Gallery */}
              <ServicesGallery services={section.services} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final - Design moderne */}
      <section className="border-t border-gray-200 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-500 shadow-xl">
              <Sparkles className="h-10 w-10 text-yellow-300" />
            </div>
            
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
              Besoin d’un conseil ?
            </h2>
            
            <p className="mb-10 text-xl text-gray-300">
              Notre équipe d’experts est disponible 24/7 pour vous guider vers la meilleure offre
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-gray-900 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                Contacter un expert
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/221784467465?text=Bonjour%20Sen%20Abonnement%2C%0A%0AJ%27ai%20besoin%20d%27aide%20pour%20choisir%20le%20bon%20abonnement.%0A%0APouvez-vous%20me%20conseiller%20%3F%0A%0AMerci%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
