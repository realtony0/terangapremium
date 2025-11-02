"use client";

import { motion } from "framer-motion";
import { HelpCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "C’est légal et sécurisé ?",
    answer:
      "✅ Absolument ! Tous nos abonnements sont des comptes officiels créés via les plateformes (Netflix, Spotify, Disney+, etc.). Nous gérons et maintenons ces comptes pour vous garantir un service continu. Plus de 2 000 clients nous font confiance depuis 2022.",
    icon: "🔒",
  },
  {
    question: "Combien de temps pour recevoir mes accès ?",
    answer:
      "⚡ En moyenne 15 minutes ! Dès que votre paiement Wave/OM est confirmé, nous vous envoyons les identifiants par WhatsApp. Dans 95% des cas, c’est fait en moins de 20 minutes, même le week-end.",
    icon: "⏱️",
  },
  {
    question: "Ça marche sur tous mes appareils ?",
    answer:
      "📱 Oui ! TV connectée (Samsung, LG, etc.), smartphone Android/iPhone, tablette, PC/Mac, Xbox, PlayStation, Fire TV Stick... On vous guide gratuitement pour l’installation si besoin via WhatsApp.",
    icon: "📺",
  },
  {
    question: "Et si ça ne fonctionne pas après l’activation ?",
    answer:
      "💯 Garantie remplacement immédiat ! Si votre accès ne fonctionne pas ou rencontre un problème technique, on le remplace gratuitement sous 24h maximum. Support WhatsApp disponible 24h/24 et 7j/7.",
    icon: "🛡️",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "💳 Vous payez par Wave, Orange Money ou Free Money. On vous envoie le numéro marchand, vous transférez, et on vous envoie un reçu numérique + vos accès. Tout est tracé et sécurisé.",
    icon: "💰",
  },
  {
    question: "Je dois renouveler comment ?",
    answer:
      "🔄 C’est automatique ! Vous recevez un rappel WhatsApp 3 jours avant expiration. Un simple message suffit pour renouveler au même tarif ou changer de durée. Aucune coupure, aucune complication.",
    icon: "🔔",
  },
  {
    question: "C’est un compte personnel ou partagé ?",
    answer:
      "🔐 C’est un compte personnel dédié uniquement à vous. Vous êtes le seul utilisateur, ce qui garantit une connexion stable, aucun conflit d’utilisation, et une sécurité maximale. Pas de partage = pas de problème !",
    icon: "👤",
  },
  {
    question: "Vous avez d’autres services disponibles ?",
    answer:
      "🎯 On a TOUT ! Netflix, IPTV Premium (10 000+ chaînes), Spotify, Apple Music, Deezer, Disney+, Prime Video, HBO Max, Crunchyroll, myCANAL, Hulu, VPN Surfshark, iCloud+, Snapchat+... Plus de 14 services différents avec plusieurs durées.",
    icon: "🌟",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-black lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
          <HelpCircle className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-bold text-blue-600">
            Questions fréquentes
          </span>
        </div>
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Vous avez des questions ? On a les réponses.
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-black/70">
          Tout ce que vous devez savoir avant de commander. 100% transparent, 0% surprise.
        </p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start gap-4 p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="mt-1 text-3xl">{faq.icon}</span>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-bold text-black">
                    {faq.question}
                  </h3>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-sm leading-relaxed text-black/70"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </div>
                <div className="mt-1">
                  <div
                    className={`h-6 w-6 rounded-full border-2 border-black/20 transition-transform ${
                      isOpen ? "rotate-45 border-red-600" : ""
                    }`}
                  >
                    <svg
                      className="h-full w-full text-black/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Encore des questions CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 rounded-3xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-white p-8 text-center"
      >
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <CheckCircle2 className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-black">
          Encore des questions ?
        </h3>
        <p className="mb-6 text-black/70">
          Notre équipe est disponible 24h/24 et 7j/7 sur WhatsApp pour répondre à toutes vos questions
          et vous guider dans votre choix.
        </p>
        <a
          href="https://wa.me/221784467465?text=Bonjour%20!%20J’ai%20des%20questions%20sur%20vos%20abonnements"
          target="_blank"
          rel="noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          Discuter avec un conseiller
        </a>
      </motion.div>
    </section>
  );
}
