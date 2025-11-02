"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import NetflixPlanTrigger from "@/components/NetflixPlanTrigger";

const highlights = [
  "Activation en 15 minutes",
  "Support WhatsApp 24/7",
  "Paiement Wave / OM / Free Money",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8f8fb] to-white py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-20%] h-64 w-64 rounded-full bg-red-200/40 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-72 w-72 rounded-full bg-yellow-200/40 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 overflow-hidden rounded-[28px] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 p-0.5 shadow-[0_25px_70px_rgba(229,57,57,0.35)]"
        >
          <Link
            href="/promo/netflix-1300"
            className="block rounded-[26px] bg-gradient-to-r from-red-600 via-red-500 to-orange-400 px-4 py-5 text-white transition hover:brightness-110 sm:px-8 sm:py-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80 sm:text-xs">
                  🔥 Offre flash Netflix
                </span>
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Profil Netflix Premium UHD à {" "}
                  <span className="font-bold text-yellow-300">1 300 F / mois</span>
                </h2>
                <p className="text-sm text-white/80 sm:text-base">
                  Offre valable jusqu’au 30 novembre 2024. Qualité 4K, 5 profils personnels et activation en 15 min.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 sm:items-end">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                  <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-yellow-300" />
                  Stocks limités
                </div>
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-red-600 shadow sm:text-sm">
                  Réduction -48%
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
          {/* Colonne gauche */}
          <div className="flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-semibold leading-tight text-[#0f0f0f] sm:text-4xl lg:text-5xl"
            >
              Vos abonnements streaming, musique et cloud livrés en {" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                30 minutes
              </span>
            </motion.h1>

            <p className="max-w-xl text-base text-[#2c2c2c] sm:text-lg">
              Netflix UHD, IPTV Premium, Spotify, Disney+, iCloud+, ChatGPT+ et plus encore.
              Ajoutez vos services au panier, validez en CFA et recevez vos accès par WhatsApp.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <NetflixPlanTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E50914] px-6 py-3 text-base font-semibold text-white shadow-[0_18px_40px_rgba(229,9,20,0.25)] transition hover:bg-[#ff4754] sm:px-8 sm:text-lg">
                <Zap className="h-5 w-5" />
                Voir les options Netflix
              </NetflixPlanTrigger>
            </div>

            <ul className="mt-2 space-y-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-black/70 sm:text-base">
                  <CheckCircle2 className="h-4 w-4 text-[#E50914]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne droite */}
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_25px_80px_rgba(15,15,15,0.12)]">
              <div className="flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <Image
                    src="/logos/netflix.svg"
                    alt="Netflix logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto sm:h-9"
                    priority
                  />
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
                    Bestseller
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#0f0f0f] sm:text-3xl">
                    Netflix Premium UHD
                  </h3>
                  <p className="mt-2 text-sm text-black/60 sm:text-base">
                    Compte personnel sécurisé, 4K HDR, 5 profils, audio FR/ENG. Activation express incluse.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Livraison WhatsApp en 15 min",
                    "Garantie remplacement 24h",
                    "Rappel automatique avant expiration",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-black/70">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-[#0f0f0f]">1 300 F</span>
                  <span className="mb-1 text-sm text-black/50">/ mois</span>
                </div>

                <NetflixPlanTrigger className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#E50914]">
                  Ajouter au panier
                </NetflixPlanTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
