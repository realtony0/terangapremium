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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] py-14 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-15%] h-64 w-64 rounded-full bg-red-500/30 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-20%] h-72 w-72 rounded-full bg-amber-400/30 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
            Nouveau catalogue 2025
          </span>
          <Link
            href="/promo/netflix-1300"
            className="flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition hover:bg-red-400"
          >
            🔥 Offre Netflix 1300 F
            <span className="text-white/70">Voir l&apos;offre</span>
          </Link>
        </motion.div>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(15,15,15,0.35)] backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Colonne gauche */}
            <div className="flex flex-col gap-7 px-6 py-10 sm:px-10">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[2.6rem] font-semibold leading-tight sm:text-4xl md:text-5xl"
                >
                  Tous vos{" "}
                  <span className="bg-gradient-to-r from-red-400 via-yellow-200 to-red-400 bg-clip-text text-transparent">
                    abonnements digitaux
                  </span>{" "}
                  livrés en 30 minutes chrono.
                </motion.h1>
                <p className="max-w-xl text-base text-white/70 sm:text-lg md:text-xl">
                  Netflix 4K, IPTV Premium, Spotify, Disney+, iCloud+, ChatGPT+…
                  Choisissez, payez en CFA, recevez vos accès immédiatement par WhatsApp.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 rounded-3xl bg-white/5 p-4">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80"
                  >
                    <badge.icon className="h-4 w-4 text-red-300" />
                    {badge.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/offres"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-4 text-base font-semibold text-white shadow-[0_20px_50px_rgba(248,113,113,0.35)] transition hover:bg-red-400 hover:shadow-[0_25px_60px_rgba(248,113,113,0.45)] sm:text-lg"
                >
                  <Zap className="h-5 w-5" />
                  Explorer le catalogue
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:border-white sm:text-lg"
                >
                  Parler à un conseiller
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center sm:text-left"
                  >
                    <p className="text-3xl font-bold text-white md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne droite */}
            <div className="relative overflow-hidden rounded-t-[32px] bg-[#0c0c0c] sm:rounded-l-none sm:rounded-r-[32px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,113,0.35),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,0.25),transparent_45%)]" />
              <div className="relative flex h-full flex-col gap-6 px-6 py-10 sm:px-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white">
                    Bestseller
                  </span>
                  <span className="text-sm font-semibold text-white/70">
                    Activation garantie <strong>30 min</strong>
                  </span>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="mb-4 flex items-center justify-between">
                    <Image
                      src="/logos/netflix.svg"
                      alt="Netflix logo"
                      width={120}
                      height={40}
                      className="h-8 w-auto sm:h-10"
                      priority
                    />
                    <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white">
                      1 300 F
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    Netflix Premium UHD
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Compte personnel • 4K HDR • Audio FR/ENG • 5 profils sécurisés
                  </p>
                  <div className="mt-5 space-y-3">
                    {[
                      "Livraison par WhatsApp en 15 min",
                      "Garantie remplacement 24h",
                      "Paiement Wave / OM / Free Money",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/promo/netflix-1300"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    Profiter de l&apos;offre
                  </Link>
                </div>

                <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                      Bonus
                    </p>
                    <h4 className="mt-2 text-lg font-semibold text-white">
                      IPTV Premium illimité
                    </h4>
                    <p className="text-sm text-white/60">
                      10 000+ chaînes & VOD • Rappel automatique
                    </p>
                  </div>
                  <Link
                    href="/offres"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white"
                  >
                    Découvrir
                  </Link>
                </div>

                <div className="hidden sm:flex items-center justify-between text-xs text-white/50">
                  <span>Support WhatsApp 24h/24</span>
                  <span>Connexion sécurisée & garantie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
