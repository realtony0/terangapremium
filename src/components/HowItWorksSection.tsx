"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  MessageCircle, 
  CreditCard, 
  Smartphone, 
  CheckCircle2,
  Clock,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choisissez votre service",
    description: "Parcourez notre catalogue (Netflix, IPTV, Spotify...) et sélectionnez la durée qui vous convient.",
    details: [
      "Plus de 14 services disponibles",
      "Plusieurs durées (1, 3, 6, 12 mois)",
      "Prix transparents affichés",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Contactez-nous sur WhatsApp",
    description: "Cliquez sur &apos;Commander&apos; ou écrivez-nous directement. On vous répond en moins de 2 minutes.",
    details: [
      "Réponse immédiate 24/7",
      "Disponible 24h/24 et 7j/7",
      "Conseil personnalisé gratuit",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Effectuez le paiement",
    description: "Payez via Wave, Orange Money ou Free Money. On vous envoie le numéro marchand ou QR code.",
    details: [
      "Wave QR code instantané",
      "Orange Money / Free Money",
      "Reçu numérique automatique",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Recevez vos accès",
    description: "Dès paiement confirmé, vos identifiants arrivent par WhatsApp. Activation en 5 à 30 minutes.",
    details: [
      "Identifiant + mot de passe",
      "Guide d&apos;installation inclus",
      "Support pour vous aider",
    ],
    color: "from-red-500 to-red-600",
  },
];

const guarantees = [
  {
    icon: Zap,
    title: "15 min",
    subtitle: "Activation moyenne",
  },
  {
    icon: Shield,
    title: "100%",
    subtitle: "Sécurisé",
  },
  {
    icon: Clock,
    title: "24/7",
    subtitle: "Support disponible",
  },
  {
    icon: CheckCircle2,
    title: "Garantie",
    subtitle: "Remplacement gratuit",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2">
            <Zap className="h-5 w-5 text-red-600" />
            <span className="text-sm font-bold text-red-600">
              Simple & Rapide
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Comment ça marche ?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-black/70">
            4 étapes simples pour profiter de vos abonnements préférés.
            Du choix au paiement, tout se passe en ligne en moins de 30 minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Ligne de connexion verticale (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-200 via-green-200 via-yellow-200 to-red-200 lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                      >
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-black/40">
                          Étape {step.number}
                        </p>
                        <h3 className="text-2xl font-bold text-black">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mb-6 text-lg text-black/70">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-sm text-black/70">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Number badge (center on desktop) */}
                <div className="hidden lg:block">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-red-600 to-red-400 shadow-xl">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-3xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white p-8 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1">
                <MessageCircle className="h-4 w-4 text-green-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-green-600">
                  Exemple de conversation
                </span>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-black">
                Voilà à quoi ressemble le process
              </h3>
              <p className="mb-6 text-lg text-black/70">
                Simple, rapide, humain. Pas de formulaire compliqué, juste une
                conversation WhatsApp naturelle.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Démarrer une conversation
              </Link>
            </div>

            {/* Chat simulation */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-3 border-b border-black/5 pb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-600 to-red-400" />
                <div>
                  <p className="font-bold text-black">TerangaPremium</p>
                  <p className="text-xs text-green-600">● En ligne</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Message client */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-green-500 px-4 py-3 text-sm text-white">
                    Bonjour ! Je veux Netflix Premium 1 mois
                  </div>
                </div>

                {/* Réponse TerangaPremium */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3 text-sm text-black">
                    Bonjour ! 🎉 Netflix Premium 1 mois = 2 500 F. Vous payez
                    par Wave ou OM ?
                  </div>
                </div>

                {/* Message client */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-green-500 px-4 py-3 text-sm text-white">
                    Wave s&apos;il vous plaît
                  </div>
                </div>

                {/* Réponse TerangaPremium */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3 text-sm text-black">
                    Parfait ! Voici le QR code Wave 👇
                    <br />
                    Dès paiement reçu, je vous envoie vos accès ⚡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantees bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-6 rounded-3xl border border-black/10 bg-white p-8 shadow-xl md:grid-cols-4"
        >
          {guarantees.map((guarantee) => (
            <div
              key={guarantee.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <guarantee.icon className="h-7 w-7" />
              </div>
              <p className="text-3xl font-bold text-black">{guarantee.title}</p>
              <p className="text-sm text-black/60">{guarantee.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
