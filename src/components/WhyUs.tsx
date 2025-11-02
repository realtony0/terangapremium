"use client";

import { motion } from "framer-motion";
import { Clock3, Headphones, ShieldCheck, Wallet } from "lucide-react";

const reasons = [
  {
    title: "Activation express",
    description: "Vos accès officiels sont livrés en quelques minutes.",
    icon: Clock3,
  },
  {
    title: "Paiement local",
    description: "Wave, OM, espèces — toujours avec justificatif.",
    icon: Wallet,
  },
  {
    title: "Support WhatsApp 24/7",
    description: "On vous guide pour installer, renouveler ou upgrader 24h/24.",
    icon: Headphones,
  },
  {
    title: "Garanties premium",
    description: "Accès remplacé gratuitement en cas de souci technique.",
    icon: ShieldCheck,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl px-4 py-16 lg:px-8 text-black">
      <div className="flex flex-col gap-4 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-red-600/70">
          Pourquoi TerangaPremium
        </p>
        <h2 className="text-3xl font-semibold md:text-4xl">
          Une expérience premium, inspirée des meilleurs services musicaux.
        </h2>
        <p className="text-black/60">
          On combine la proximité d’une équipe locale et la fluidité d’une
          app de streaming pour gérer vos abonnements.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-3xl border border-black/5 bg-white p-6 text-left text-black/80 shadow-[0_20px_50px_rgba(15,15,15,0.06)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
              <reason.icon size={22} />
            </div>
            <h3 className="text-xl font-semibold text-black">
              {reason.title}
            </h3>
            <p className="mt-2 text-sm text-black/60">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
