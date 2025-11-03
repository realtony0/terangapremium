"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type PopularRibbonProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  href?: string;
};

export default function PopularRibbon({
  title = "Petit prix, grande satisfaction.",
  description = "Découvrez les offres du moment : Netflix, IPTV, Spotify, Disney+, Apple TV+, Apple Music…",
  ctaLabel = "Voir tout le catalogue",
  href = "/offres#catalogue",
}: PopularRibbonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-12 overflow-hidden rounded-[28px] border border-black/5 bg-black px-6 py-6 text-white shadow-[0_25px_70px_rgba(15,15,15,0.25)] sm:px-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
          <p className="text-sm text-white/70 sm:text-base">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#E50914] hover:text-white"
        >
          {ctaLabel}
        </Link>
      </div>
    </motion.div>
  );
}

