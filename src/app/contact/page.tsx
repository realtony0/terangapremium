import type { Metadata } from "next";
import { 
  MessageCircle, 
  Mail, 
  Clock, 
  MapPin,
  Phone,
  Instagram,
  Send
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — TerangaPremium",
  description:
    "Contactez TerangaPremium par WhatsApp, email ou via notre formulaire. Support disponible 24h/24 et 7j/7.",
};

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp (Prioritaire)",
    value: "+221 78 446 74 65",
    link: "https://wa.me/221784467465?text=Bonjour%20!%20J%27ai%20une%20question",
    description: "Réponse en moins de 2 minutes",
    available: "24h/24 et 7j/7",
    color: "from-green-500 to-green-600",
    primary: true,
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+221 78 446 74 65",
    link: "tel:+221784467465",
    description: "Appelez-nous directement",
    available: "Lun-Sam • 9h - 20h",
    color: "from-blue-500 to-blue-600",
    primary: false,
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@terangapremium.com",
    link: "mailto:contact@terangapremium.com",
    description: "Pour questions détaillées",
    available: "Réponse sous 24h",
    color: "from-red-500 to-red-600",
    primary: false,
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@teranga_premium1",
    link: "https://instagram.com/teranga_premium1",
    description: "Suivez nos actualités",
    available: "Stories & Posts quotidiens",
    color: "from-pink-500 to-purple-600",
    primary: false,
  },
];

const faq = [
  {
    q: "Quels sont vos horaires ?",
    a: "Notre support WhatsApp est disponible 24h/24 et 7j/7. Nous répondons à toute heure, même la nuit et les jours fériés.",
  },
  {
    q: "Combien de temps pour une réponse ?",
    a: "Sur WhatsApp : en moyenne 2 minutes, 24h/24. Par email : sous 24h maximum.",
  },
  {
    q: "Je peux venir vous voir physiquement ?",
    a: "Nous fonctionnons 100% en ligne pour vous offrir les meilleurs prix. Tous nos services sont gérés via WhatsApp de manière sécurisée.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 lg:px-8">
      {/* Header */}
      <section className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2">
          <MessageCircle className="h-5 w-5 text-red-600" />
          <span className="text-sm font-bold text-red-600">
            On est là pour vous
          </span>
        </div>
        <h1 className="mb-4 text-5xl font-bold text-black md:text-6xl">
          Contactez-nous
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-black/70">
          Une question sur nos offres ? Besoin d&apos;aide pour choisir ? Notre équipe
          répond en moins de 2 minutes sur WhatsApp.
        </p>
      </section>

      {/* Contact methods */}
      <section className="mb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-3xl border-2 ${
                method.primary ? "border-green-500" : "border-black/10"
              } bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
            >
              {method.primary && (
                <div className="absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  ⚡ Rapide
                </div>
              )}
              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${method.color} text-white shadow-lg`}
              >
                <method.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-black">
                {method.title}
              </h3>
              <p className="mb-1 text-sm font-semibold text-black/80">
                {method.value}
              </p>
              <p className="mb-2 text-xs text-black/60">{method.description}</p>
              <div className="mt-4 flex items-center gap-2 text-xs">
                <Clock className="h-4 w-4 text-black/40" />
                <span className="text-black/60">{method.available}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA large */}
      <section className="mb-16 overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-green-500 p-12 text-center text-white shadow-2xl">
        <MessageCircle className="mx-auto mb-4 h-16 w-16" />
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">
          Démarrez une conversation maintenant
        </h2>
        <p className="mb-8 text-lg text-white/90">
          Notre équipe vous attend sur WhatsApp pour répondre à toutes vos questions
        </p>
        <a
          href="https://wa.me/221784467465?text=Bonjour%20!%20J%27ai%20une%20question%20sur%20Sen%20Abonnement"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-green-600 shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          Ouvrir WhatsApp
        </a>
        <p className="mt-4 text-sm text-white/80">
          ⚡ Réponse moyenne en 2 minutes
        </p>
      </section>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Formulaire de contact */}
        <section>
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-xl">
            <div className="mb-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1">
                <Send className="h-4 w-4 text-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Formulaire
                </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-black">
                Envoyez-nous un message
              </h2>
              <p className="text-black/70">
                Remplissez ce formulaire et nous vous répondrons par WhatsApp ou email
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Informations supplémentaires */}
        <section className="space-y-8">
          {/* Horaires */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-black">
              Horaires de disponibilité
            </h3>
            <div className="space-y-3 text-black/70">
              <div className="flex items-center justify-between border-b border-black/5 pb-3">
                <span className="font-medium">Tous les jours</span>
                <span className="font-bold text-green-600">24h/24 • 7j/7</span>
              </div>
              <p className="text-sm text-black/60">
                💬 Support WhatsApp disponible jour et nuit
              </p>
              <p className="text-sm text-black/60">
                📧 Réponse email sous 24h maximum
              </p>
            </div>
          </div>

          {/* Localisation */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-black">
              Nous sommes au Sénégal
            </h3>
            <p className="mb-4 text-black/70">
              TerangaPremium est une entreprise 100% sénégalaise basée à Dakar.
              Nous servons l&apos;ensemble du Sénégal.
            </p>
            <div className="rounded-2xl bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-600">
                📍 Service disponible partout au Sénégal
              </p>
              <p className="mt-1 text-xs text-black/60">
                Dakar • Thiès • Saint-Louis • Rufisque • Kaolack • Ziguinchor...
              </p>
            </div>
          </div>

          {/* FAQ rapide */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-xl font-bold text-black">
              Questions fréquentes
            </h3>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="border-b border-black/5 pb-4 last:border-0">
                  <p className="mb-2 font-semibold text-black">{item.q}</p>
                  <p className="text-sm text-black/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
