"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Headphones, RefreshCw, Lock, TrendingUp } from "lucide-react";

const guarantees = [
  {
    icon: Zap,
    title: "Activation en 15 minutes",
    description: "Recevez vos accès par WhatsApp dès validation du paiement",
  },
  {
    icon: Shield,
    title: "Garantie remplacement",
    description: "Service défaillant ? On le remplace gratuitement sous 24h",
  },
  {
    icon: Lock,
    title: "Paiement 100% sécurisé",
    description: "Wave, Orange Money, Free Money avec reçu systématique",
  },
  {
    icon: Headphones,
    title: "Support réactif 24/7",
    description: "Notre équipe répond sur WhatsApp 24h/24 et 7j/7, toujours disponible",
  },
  {
    icon: RefreshCw,
    title: "Renouvellement facile",
    description: "Rappel automatique 3 jours avant expiration + renouvellement en 1 clic",
  },
  {
    icon: TrendingUp,
    title: "Comptes officiels uniquement",
    description: "Tous nos abonnements sont créés et gérés légalement",
  },
];

export default function GuaranteeSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-600 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-red-400 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Pourquoi 2 000+ Sénégalais nous font confiance ?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/80 sm:text-lg md:text-xl">
            Transparence, rapidité et qualité : nos 3 piliers pour votre satisfaction
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-400 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <guarantee.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                {guarantee.title}
              </h3>
              <p className="text-sm text-white/70">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-2xl border-2 border-red-500 bg-gradient-to-r from-red-600 to-red-500 p-6 sm:rounded-3xl md:p-8 lg:p-12"
        >
          <div className="flex flex-col items-center gap-6 text-center sm:gap-8 lg:flex-row lg:text-left">
            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Prêt à profiter de vos abonnements ?
              </h3>
              <p className="text-lg text-white/90">
                Rejoignez les milliers de Sénégalais qui économisent et profitent
                pleinement de leurs services streaming préférés.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="/offres"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-red-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-red-50"
              >
                <Zap className="h-5 w-5" />
                Commander maintenant
              </a>
              <a
                href="https://wa.me/221784467465?text=Bonjour%20!%20J’ai%20des%20questions%20sur%20vos%20offres"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-red-600"
              >
                <Headphones className="h-5 w-5" />
                Poser une question
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
