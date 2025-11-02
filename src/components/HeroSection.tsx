"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";

const stats = [
  { value: "2 000+", label: "Clients actifs" },
  { value: "15 min", label: "Activation moyenne" },
  { value: "98%", label: "Clients satisfaits" },
];

const trustBadges = [
  { icon: Zap, text: "Activation instantanée" },
  { icon: Shield, text: "100% sécurisé" },
  { icon: Clock, text: "Support 24/7" },
];

export default function HeroSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-10 lg:px-8">
      {/* Banner promo - OFFRE FLASH Netflix 1300F */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-6"
      >
        <Link
          href="/promo/netflix-1300"
          className="group block cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 p-0.5 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <div className="rounded-[14px] bg-gradient-to-r from-red-600 to-red-500 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
              <span className="animate-pulse rounded-full bg-yellow-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-red-900 shadow-lg">
                🔥 Offre Flash
              </span>
              <p className="text-center text-sm font-bold text-white sm:text-base md:text-lg">
                Netflix Profil Personnel à seulement <span className="text-2xl text-yellow-300 sm:text-3xl">1 300 F</span> / mois
              </p>
              <span className="text-xs font-semibold text-white/90 underline group-hover:text-yellow-300 sm:text-sm">
                Voir l&apos;offre →
              </span>
            </div>
          </div>
        </Link>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Colonne gauche - Contenu principal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-red-200 bg-red-50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-600"></span>
            <span className="text-sm font-semibold text-red-600">
              +150 activations cette semaine
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Vos abonnements streaming en{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              30 minutes
            </span>
          </h1>

          <p className="text-base text-black/70 sm:text-lg md:text-xl lg:text-2xl">
            Netflix UHD, IPTV Premium, Spotify, Disney+, VPN...
            <br className="hidden sm:block" />
            <strong className="text-black">Activation express • Paiement Wave/OM • Support 24/7</strong>
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-black/70"
              >
                <badge.icon className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/offres"
              className="btn-primary inline-flex items-center justify-center gap-2 text-center text-lg font-semibold"
            >
              <Zap className="h-5 w-5" />
              Commander maintenant
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black/10 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              Parler à un conseiller
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-3xl font-bold text-red-600 md:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm text-black/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Colonne droite - Offre mise en avant */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="space-y-4 lg:sticky lg:top-24 lg:space-y-6">
            {/* Card Netflix Premium */}
            <div className="overflow-hidden rounded-2xl border-2 border-red-200 bg-gradient-to-br from-white to-red-50/30 p-6 shadow-2xl sm:rounded-3xl sm:p-8">
              <div className="mb-4 flex items-center justify-between">
                <Image
                  src="/logos/netflix.svg"
                  alt="Netflix logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  #1 Populaire
                </span>
              </div>

              <h3 className="mb-2 text-3xl font-bold text-black">
                Netflix Premium UHD
              </h3>
              <p className="mb-6 text-black/70">
                Compte personnel • Qualité 4K HDR • Compatible tous appareils • Audio multilingue
              </p>

              <div className="mb-6 space-y-3">
                {[
                  "Activation en 15 minutes",
                  "Garantie remplacement gratuit",
                  "Compte personnel dédié",
                  "Support WhatsApp 24/7",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-sm font-medium text-black">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-6 flex items-end gap-2">
                <span className="text-5xl font-bold text-black">1 300 F</span>
                <span className="mb-2 text-xl text-black/60">/ mois</span>
              </div>

              <Link
                href="/offres"
                className="btn-primary block w-full py-4 text-center text-lg font-semibold"
              >
                Voir tous les plans Netflix
              </Link>
            </div>

            {/* Mini card IPTV */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-black/60">
                    Également populaire
                  </p>
                  <h4 className="text-xl font-bold text-black">
                    IPTV Premium
                  </h4>
                  <p className="text-sm text-black/60">10 000+ chaînes • VOD</p>
                </div>
                <Link
                  href="/offres"
                  className="rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Voir →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
