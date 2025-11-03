"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PopularRibbon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-10 overflow-hidden rounded-[28px] border border-black/5 bg-white/70 px-6 py-5 shadow-[0_20px_60px_rgba(15,15,15,0.08)] backdrop-blur"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/40">
            Découvrez toutes nos offres
          </p>
          <h3 className="text-2xl font-semibold text-black">
            Netflix, Disney+, Apple Music, IPTV, Prime Video… tout est prêt à être activé.
          </h3>
          <p className="text-sm text-black/60">
            Parcourez le catalogue complet et composez votre panier en quelques minutes.
          </p>
        </div>
        <Link
          href="/offres#catalogue"
          className="inline-flex items-center justify-center rounded-full bg-[#0f0f0f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#E50914]"
        >
          Voir le catalogue complet
        </Link>
      </div>
    </motion.div>
  );
}
