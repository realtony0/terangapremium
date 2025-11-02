import type { Metadata } from "next";
import Image from "next/image";
import NetflixPlanTrigger from "@/components/NetflixPlanTrigger";
import {
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Star,
  TrendingDown,
  Sparkles,
  MessageCircle,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "🔥 Netflix à 1300F/mois — Offre Flash TerangaPremium",
  description:
    "Profil Netflix personnel à seulement 1300F/mois. Qualité HD, activation instantanée, support 24/7. Offre flash valable jusqu’au 30 novembre 2024 !",
};

const features = [
  {
    icon: CheckCircle2,
    title: "Profil personnel dédié",
    description: "Votre propre profil Netflix, pas de partage",
  },
  {
    icon: Zap,
    title: "Activation en 15 minutes",
    description: "Recevez vos accès par WhatsApp immédiatement",
  },
  {
    icon: Shield,
    title: "Garantie remplacement",
    description: "Service défaillant ? On le remplace gratuitement",
  },
  {
    icon: Clock,
    title: "Support 24/7",
    description: "Notre équipe disponible jour et nuit",
  },
];

const advantages = [
  "✅ Qualité HD (720p) - Parfait pour smartphone et tablette",
  "✅ Catalogue Netflix complet (séries, films, documentaires)",
  "✅ Compte personnel - Vous êtes le seul utilisateur",
  "✅ Compatible tous appareils (TV, mobile, PC, tablette)",
  "✅ Pas d’engagement - Renouvelable chaque mois",
  "✅ Paiement Wave / Orange Money / Free Money",
  "✅ Activation instantanée (5-30 minutes)",
  "✅ Support WhatsApp disponible 24h/24",
];

const faq = [
  {
    q: "Pourquoi c’est moins cher ?",
    a: "C’est un profil Netflix personnel optimisé pour 1 utilisateur. Parfait si vous regardez seul sur votre smartphone ou tablette. Qualité HD garantie !",
  },
  {
    q: "C’est vraiment un compte Netflix officiel ?",
    a: "Oui ! C’est un vrai compte Netflix avec accès au catalogue complet. Vous aurez vos propres identifiants.",
  },
  {
    q: "Quelle est la qualité vidéo ?",
    a: "Qualité HD (720p) - Idéal pour smartphone, tablette et petit écran. Si vous voulez la 4K, prenez notre offre Premium à 2500F.",
  },
  {
    q: "Combien de temps ça dure ?",
    a: "1 mois complet (30 jours). Vous recevez un rappel WhatsApp 3 jours avant expiration pour renouveler si vous voulez.",
  },
  {
    q: "Je peux regarder sur TV ?",
    a: "Oui ! Compatible sur Smart TV, mais en qualité HD (pas 4K). Pour la 4K, optez pour Netflix Premium à 2500F.",
  },
];

const testimonials = [
  {
    name: "Amadou S.",
    location: "Dakar",
    rating: 5,
    comment:
      "Parfait pour moi qui regarde sur mon téléphone. 1300F au lieu de 2500F, c’est top !",
  },
  {
    name: "Fatou D.",
    location: "Thiès",
    rating: 5,
    comment:
      "Activation en 10 minutes, tout marche nickel. Je recommande à 100%.",
  },
  {
    name: "Ibrahima L.",
    location: "Rufisque",
    rating: 5,
    comment: "Meilleur rapport qualité/prix. Support très réactif sur WhatsApp.",
  },
];

export default function NetflixPromoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-8 lg:px-8">
      {/* Hero Section */}
      <section className="mb-12 overflow-hidden rounded-3xl border-2 border-red-500 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 p-8 text-white shadow-2xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex animate-pulse items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-black uppercase tracking-wider text-red-900">
              🔥 Offre flash jusqu’au 30 novembre
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Netflix à{" "}
              <span className="block text-6xl text-yellow-300 md:text-7xl">
                1 300 F
              </span>
              <span className="text-2xl md:text-3xl">par mois seulement !</span>
            </h1>
            <p className="mb-6 text-lg text-white/90 md:text-xl">
              Profil personnel Netflix avec qualité HD. Parfait pour regarder sur
              smartphone et tablette.
            </p>

            <div className="mb-6 flex items-center gap-2 text-yellow-300">
              <TrendingDown className="h-6 w-6" />
              <span className="text-lg font-bold">
                Économisez 1 200 F par mois vs Netflix Premium
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <NetflixPlanTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-red-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-300">
                <MessageCircle className="h-5 w-5" />
                Ajouter au panier
              </NetflixPlanTrigger>
              <a
                href="#details"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-red-600"
              >
                Voir les détails
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <Image
                src="/logos/netflix.svg"
                alt="Netflix"
                width={400}
                height={200}
                className="w-full bg-black p-12"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-yellow-400 px-6 py-3 text-center shadow-xl">
              <p className="text-sm font-bold uppercase tracking-wider text-red-900">
                Stocks limités
              </p>
              <p className="text-2xl font-black text-red-900">1 300 F</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="mb-12">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-red-400 to-red-600"
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-green-900">
                +127 Sénégalais ont pris cette offre cette semaine
              </p>
              <div className="mt-1 flex items-center justify-center gap-1 sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
                <span className="ml-2 text-sm text-green-700">4.9/5 (127 avis)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="details" className="mb-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-black md:text-4xl">
          Ce qui est inclus
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-black">{feature.title}</h3>
              <p className="text-sm text-black/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages List */}
      <section className="mb-12">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-xl md:p-12">
          <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
            Pourquoi choisir cette offre ?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl bg-gray-50 p-4"
              >
                <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                <span className="text-black/80">{advantage}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-2 border-red-200 bg-red-50 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 flex-shrink-0 text-red-600" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">Valable jusqu’au 30 novembre 2024</p>
                <p className="text-sm text-red-800">
                  Profitez du tarif spécial avant le 30/11/2024. Après cette date, l’offre repasse à 2 500 F.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-black md:text-4xl">
          Ils ont déjà profité de l’offre
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-lg"
            >
              <div className="mb-3 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-sm italic text-black/70">
                “{testimonial.comment}”
              </p>
              <div className="border-t border-black/5 pt-3">
                <p className="font-semibold text-black">{testimonial.name}</p>
                <p className="text-xs text-black/50">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-black md:text-4xl">
          Questions fréquentes
        </h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-black/10 bg-white p-5 shadow-lg"
            >
              <summary className="cursor-pointer text-lg font-bold text-black">
                {item.q}
              </summary>
              <p className="mt-3 text-sm text-black/70">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-red-600 to-red-500 p-8 text-center text-white shadow-2xl md:p-12">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Prêt à profiter de Netflix à petit prix ?
        </h2>
        <p className="mb-8 text-xl">
          Commandez maintenant et recevez vos accès en moins de 30 minutes !
        </p>
        <NetflixPlanTrigger className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-red-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-300">
          <MessageCircle className="h-6 w-6" />
          Ajouter l’offre au panier
        </NetflixPlanTrigger>
        <p className="mt-4 text-sm text-white/80">
          ⚡ Réponse en 2 minutes • Activation sous 30 minutes • Support 24/7
        </p>
      </section>
    </div>
  );
}
