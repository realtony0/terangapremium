"use client";

import { motion } from "framer-motion";
import { CreditCard, PlayCircle, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Choisissez vos services",
    description:
      "Parcourez Netflix, Spotify, VPN, IPTV, cloud… Chaque carte contient les tarifs réels et la description officielle.",
    icon: PlayCircle,
  },
  {
    title: "Payez en toute simplicité",
    description:
      "Wave, Orange Money, Free Money ou espèces à Dakar. Nous envoyons un reçu numérique systématique.",
    icon: CreditCard,
  },
  {
    title: "Activation & suivi",
    description:
      "Activation entre 5 et 30 minutes, assistance WhatsApp 24h/24 et 7j/7, remplacement garanti en cas de souci.",
    icon: ShieldCheck,
  },
];

const paymentOptions = [
  { label: "Wave", detail: "QR ou numéro marchand" },
  { label: "Orange Money / Free", detail: "Transfert sécurisé + reçu" },
];

export default function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-black lg:px-8">
      <div className="flex flex-col gap-4 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-red-600/70">
          Comment ça marche ?
        </p>
        <h2 className="text-3xl font-semibold md:text-4xl">
          Une expérience inspirée des apps de streaming : claire, rapide, fiable.
        </h2>
        <p className="text-black/60">
          Nous traitons chaque abonnement comme un abonnement premium : informations
          transparentes, paiement simple, support humain.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl border border-black/5 bg-white p-6 text-left shadow-[0_20px_50px_rgba(15,15,15,0.05)]"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
              <step.icon size={22} />
            </div>
            <h3 className="text-xl font-semibold text-black">{step.title}</h3>
            <p className="mt-2 text-sm text-black/65">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_20px_50px_rgba(15,15,15,0.05)]">
        <p className="text-xs uppercase tracking-[0.4em] text-red-600/70">
          Moyens de paiement vérifiés
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {paymentOptions.map((option) => (
            <div
              key={option.label}
              className="rounded-2xl border border-black/5 bg-[#fafafa] p-4"
            >
              <p className="text-sm font-semibold text-black">{option.label}</p>
              <p className="text-sm text-black/60">{option.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
