"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";

type ResellerOffer = {
  name: string;
  brand: string;
  price: number;
  profiles: string;
};

const resellerOffers: ResellerOffer[] = [
  { name: "Netflix Premium (Revendeur)", brand: "Netflix", price: 5300, profiles: "5 profils" },
  { name: "Prime Video Premium (Revendeur)", brand: "Prime Video", price: 5500, profiles: "6 profils" },
  { name: "Disney+ Premium (Revendeur)", brand: "Disney+", price: 10900, profiles: "6 profils" },
  { name: "Crunchyroll Premium (Revendeur)", brand: "Crunchyroll", price: 4400, profiles: "5 profils" },
];

const highlights = [
  "Activation rapide 24h/24 et suivi en temps réel de vos commandes.",
  "Comptes premium stables, testés avant livraison et prêts à l’emploi.",
  "Support prioritaire Whatsapp dédié aux revendeurs.",
  "Factures et reçus disponibles pour vos propres clients.",
];

const workflow = [
  {
    title: "Passez votre commande",
    description:
      "Sélectionnez au minimum 3 comptes premium et envoyez-nous la liste sur WhatsApp.",
  },
  {
    title: "Validation & paiement",
    description:
      "Nous vérifions la disponibilité, vous recevez le total à régler et les options de paiement sécurisées.",
  },
  {
    title: "Livraison express",
    description:
      "Recevez vos identifiants en moins d’une heure avec un guide de démarrage et la garantie TerangaPremium.",
  },
];

export default function RevendeurPage() {
  const { addItem } = useCart();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOffer = (offerId: string) => {
    setSelected((current) =>
      current.includes(offerId)
        ? current.filter((id) => id !== offerId)
        : [...current, offerId]
    );
  };

  const canValidate = selected.length >= 3;

  const selectedDetail = useMemo(
    () =>
      resellerOffers.filter((offer) =>
        selected.includes(offer.name)
      ),
    [selected]
  );

  const handleValidate = () => {
    if (!canValidate) return;
    selectedDetail.forEach((offer) => {
      addItem({
        id: `revendeur-${offer.brand.toLowerCase().replace(/[^a-z0-9]/g, "")}-1m`,
        serviceName: `${offer.brand} • Revendeur`,
        duration: "1 mois",
        price: offer.price,
      });
    });
    window.dispatchEvent(new CustomEvent("open-cart"));
  };

  const total = selectedDetail.reduce((sum, offer) => sum + offer.price, 0);

  return (
    <main className="bg-gradient-to-b from-red-50 via-white to-white pb-24 pt-24 text-black">
      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-4 lg:px-8">
        <header className="rounded-[32px] border border-black/5 bg-white p-10 shadow-[0_24px_80px_rgba(15,15,15,0.08)] lg:p-16">
          <p className="text-xs uppercase tracking-[0.4em] text-red-600/70">
            Revendeur
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight lg:text-5xl">
            Profitez de comptes premium testés et prêts à revendre
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-black/70">
            Boostez votre marge avec des comptes premium stables, une activation
            éclair et un support prioritaire. TerangaPremium vous accompagne
            dans la création d’une offre revendeur fiable et rentable.
          </p>
          <div className="mt-8 flex flex-col gap-4 text-sm sm:text-base lg:flex-row lg:items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 font-medium text-red-600">
              Achat minimum 3 comptes par commande
            </div>
              <a
                href="https://wa.me/221784467465?text=Bonjour%20TerangaPremium%2C%0A%0AJe%20souhaite%20passer%20une%20commande%20revendeur%20(minimum%203%20comptes).%0A%0AVoici%20les%20comptes%20qui%20m%27int%C3%A9ressent%20:%0A- "
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-fit"
              >
                Contacter le support revendeur
            </a>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_auto]">
          <div className="rounded-[24px] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(15,15,15,0.06)] sm:p-10">
            <h2 className="text-2xl font-semibold">Comptes premium 1 mois</h2>
            <p className="mt-2 text-sm text-black/60">
              Prix nets revendeur livrés avec profils sécurisés. Les comptes sont
              renouvelables à volonté. Sélectionnez au minimum 3 comptes pour valider votre commande.
            </p>
            <div className="mt-8 space-y-4">
              {resellerOffers.map((offer) => (
                <div
                  key={offer.name}
                  className={`flex flex-col gap-2 rounded-2xl border p-6 transition sm:flex-row sm:items-center sm:justify-between ${
                    selected.includes(offer.name)
                      ? "border-[#E50914] bg-red-50/60 shadow-[0_20px_40px_rgba(229,9,20,0.1)]"
                      : "border-black/5 bg-gradient-to-br from-white to-red-50/30"
                  }`}
                >
                  <div>
                    <p className="text-lg font-semibold">{offer.brand}</p>
                    <p className="text-sm text-black/60">
                      {offer.profiles.charAt(0).toUpperCase() +
                        offer.profiles.slice(1)}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm uppercase tracking-[0.3em] text-red-600/70">
                      1 mois
                    </p>
                    <p className="text-2xl font-semibold">
                      {offer.price.toLocaleString("fr-FR")} F
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleOffer(offer.name)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selected.includes(offer.name)
                        ? "bg-[#E50914] text-white shadow hover:bg-[#ff4754]"
                        : "border border-black/10 text-black hover:border-black"
                    }`}
                  >
                    {selected.includes(offer.name) ? "Sélectionné" : "Ajouter"}
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/70 p-5 text-sm text-black">
              <p className="font-semibold text-[#E50914]">
                Minimum 3 comptes (actuellement {selected.length} sélectionné
                {selected.length > 1 ? "s" : ""})
              </p>
              <p className="mt-2 text-black/70">
                Total estimatif :{" "}
                <span className="font-semibold text-black">
                  {total.toLocaleString("fr-FR")} F
                </span>
              </p>
              <button
                type="button"
                onClick={handleValidate}
                disabled={!canValidate}
                className={`mt-4 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  canValidate
                    ? "bg-[#E50914] text-white shadow hover:bg-[#ff4754]"
                    : "cursor-not-allowed bg-black/10 text-black/50"
                }`}
              >
                Valider la commande via panier
              </button>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(15,15,15,0.06)]">
              <h3 className="text-xl font-semibold">Pourquoi ça marche</h3>
              <ul className="mt-4 space-y-3 text-sm text-black/70">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-red-50/60 p-3"
                  >
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-black/5 bg-gradient-to-br from-red-600 via-red-500 to-red-400 p-6 text-white shadow-[0_20px_60px_rgba(220,38,38,0.35)]">
              <h3 className="text-xl font-semibold">
                Besoin d’une offre sur mesure ?
              </h3>
              <p className="mt-3 text-sm text-white/80">
                Dites-nous les plateformes que vos clients demandent, nous
                construisons un pricing spécial revendeur.
              </p>
              <a
                href="https://wa.me/221784467465?text=Bonjour%20TerangaPremium%2C%0A%0AJ%27ai%20besoin%20d%27une%20offre%20revendeur%20sur%20mesure.%0A%0APlateformes%20souhait%C3%A9es%20:%0A- "
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white px-6 py-3 text-sm font-semibold text-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition hover:border-white hover:bg-white/90"
              >
                Construire mon pack
              </a>
            </div>
          </aside>
        </section>

        <section className="rounded-[32px] border border-black/5 bg-white p-10 shadow-[0_24px_80px_rgba(15,15,15,0.08)]">
          <div className="grid gap-10 lg:grid-cols-3">
            {workflow.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-600">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="mt-2 text-sm text-black/65">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-red-100 bg-red-50/70 p-10 text-black shadow-[0_30px_90px_rgba(244,63,94,0.2)] lg:p-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold">
                Garanties TerangaPremium pour revendeurs
              </h2>
              <p className="mt-4 text-base text-black/70">
                Nous accompagnons les revendeurs depuis 2020 avec des comptes
                stables, une assistance réactive et des renouvellements simplifiés.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-black/80">
                <li>
                  ▸ Tests de fonctionnement avant livraison et remplacement si
                  problème sous 24h.
                </li>
                <li>
                  ▸ Historique de vos commandes pour suivre vos renouvellements.
                </li>
                <li>▸ Astuces et scripts de communication pour votre clientèle.</li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-5 rounded-[28px] border border-white/60 bg-white/70 p-6 backdrop-blur">
              <div>
                <h3 className="text-lg font-semibold text-red-600">
                  Prêt à passer votre première commande ?
                </h3>
                <p className="mt-2 text-sm text-black/70">
                  Préparez la liste des plateformes et le nombre de comptes
                  souhaités (minimum 3). Notre équipe vous répond dans les 5
                  minutes.
                </p>
              </div>
              <a
                href="https://wa.me/221784467465?text=Bonjour%20TerangaPremium%2C%0A%0AJe%20souhaite%20activer%20une%20commande%20revendeur%20:%0A- "
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full text-center"
              >
                Démarrer sur WhatsApp
              </a>
              <p className="text-xs text-black/50">
                Disponible chaque jour de 9h à 00h GMT. Livraison garantie sous
                1h hors forte affluence.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
