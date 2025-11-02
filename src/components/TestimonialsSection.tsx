"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "J&apos;ai résilié mon abo CANAL+ classique : maintenant je combine Netflix UHD + IPTV chez TerangaPremium. Activation en 15 min, rien à dire. J&apos;économise 8000 F par mois !",
    name: "Moussa D.",
    location: "Dakar Plateau",
    service: "Netflix + IPTV",
    rating: 5,
    saved: "8 000 F/mois",
  },
  {
    quote:
      "Je bosse dans la musique, j&apos;avais besoin de Spotify + Apple Music + iCloud. Tout est géré sur un seul numéro WhatsApp, super pratique. Je recommande à 100%.",
    name: "Aïssatou B.",
    location: "Rufisque",
    service: "Spotify + Apple Music",
    rating: 5,
    saved: "12 000 F/mois",
  },
  {
    quote:
      "Pour regarder la Premier League et la Liga, l&apos;IPTV premium est imbattable. Le support me répond même le dimanche. Meilleur investissement de l&apos;année !",
    name: "Cheikh M.",
    location: "Thiès",
    service: "IPTV Premium",
    rating: 5,
    saved: "15 000 F/mois",
  },
  {
    quote:
      "Netflix Premium en 4K, c&apos;est juste parfait. Tout fonctionne parfaitement depuis 6 mois. Prix imbattable, activation rapide, je ne vais plus ailleurs !",
    name: "Fatou S.",
    location: "Parcelles Assainies",
    service: "Netflix Premium",
    rating: 5,
    saved: "6 500 F/mois",
  },
  {
    quote:
      "Le VPN Surfshark marche nickel, je peux enfin regarder les contenus bloqués au Sénégal. Installation guidée par WhatsApp, très professionnel.",
    name: "Omar L.",
    location: "Mbao",
    service: "Surfshark VPN",
    rating: 5,
    saved: "3 000 F/mois",
  },
  {
    quote:
      "Spotify Premium, qualité audio parfaite. Activation instantanée, qualité HiFi au top. Support réactif, je suis conquis !",
    name: "Amina K.",
    location: "Guédiawaye",
    service: "Spotify Premium",
    rating: 5,
    saved: "5 500 F/mois",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-black lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
          <Star className="h-5 w-5 fill-green-600 text-green-600" />
          <span className="text-sm font-bold text-green-600">
            4.9/5 • 2 000+ avis clients
          </span>
        </div>
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Ils ont économisé, ils témoignent
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-black/70">
          Plus de 2 000 Sénégalais nous font confiance pour leurs abonnements.
          Découvrez leurs retours d&apos;expérience.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            {/* Quote icon */}
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
              <Quote className="h-6 w-6" />
            </div>

            {/* Rating */}
            <div className="mb-4 flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="mb-6 text-sm leading-relaxed text-black/80">
              &quot;{testimonial.quote}&quot;
            </p>

            {/* Service badge */}
            <div className="mb-4 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
              {testimonial.service}
            </div>

            {/* Savings highlight */}
            <div className="mb-4 rounded-2xl border border-green-200 bg-green-50 p-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                Économie
              </p>
              <p className="text-lg font-bold text-green-600">
                {testimonial.saved}
              </p>
            </div>

            {/* Author */}
            <footer className="border-t border-black/5 pt-4">
              <p className="font-semibold text-black">{testimonial.name}</p>
              <p className="text-xs text-black/50">{testimonial.location}</p>
            </footer>

            {/* Verified badge */}
            <div className="absolute right-6 top-6 rounded-full bg-green-600 p-1">
              <svg
                className="h-4 w-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 grid gap-6 rounded-3xl border border-black/5 bg-white p-8 shadow-xl md:grid-cols-4"
      >
        <div className="text-center">
          <p className="text-4xl font-bold text-red-600">2 000+</p>
          <p className="mt-1 text-sm text-black/60">Clients actifs</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-red-600">98%</p>
          <p className="mt-1 text-sm text-black/60">Satisfaction client</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-red-600">15 min</p>
          <p className="mt-1 text-sm text-black/60">Activation moyenne</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-red-600">24/7</p>
          <p className="mt-1 text-sm text-black/60">Support disponible</p>
        </div>
      </motion.div>
    </section>
  );
}
