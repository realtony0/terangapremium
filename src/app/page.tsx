import HeroSection from "@/components/HeroSection";
import WhyUs from "@/components/WhyUs";
import ServicesGallery from "@/components/ServicesGallery";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import SpotlightSection from "@/components/SpotlightSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import catalog from "@data/sen_abonnement_catalog.json";
import type { CatalogCategory } from "@/types/catalog";
import { groupServicesByName } from "@/utils/catalog";
import Link from "next/link";

const catalogData = catalog as CatalogCategory[];
const services = groupServicesByName(catalogData);
const spotlight = services.filter((service) =>
  ["Netflix", "IPTV Premium"].includes(service.name)
);

export default function Home() {
  return (
    <>
      <HeroSection />

      <SpotlightSection services={spotlight} />

      <section className="mx-auto mt-4 max-w-6xl px-4 py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-red-600/70">
              Aperçu du catalogue
            </p>
            <h2 className="text-3xl font-semibold text-black">
              Des services prêts à être activés
            </h2>
            <p className="text-black/60">
              Choisissez votre plateforme, nous nous chargeons du reste. Tout est
              centralisé et suivi comme votre playlist favorite.
            </p>
          </div>
          <Link href="/offres" className="btn-outline text-sm">
            Voir toutes les offres
          </Link>
        </div>

        <ServicesGallery services={services} limit={6} />

        <div className="mt-10 flex flex-col gap-4 rounded-[28px] border border-black/5 bg-white p-8 text-black shadow-[0_20px_60px_rgba(15,15,15,0.08)] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-red-600/70">
              Packs personnalisés
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Netflix + Spotify + VPN ? On crée votre combo.
            </h3>
            <p className="text-black/60">
              Envoyez la liste de vos services, nous répondons en moins de 2 minutes
              avec un plan optimisé.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/offres" className="btn-outline text-sm">
              Explorer les offres
            </Link>
            <a
              href="https://wa.me/221784467465?text=Bonjour%20Sen%20Abonnement%2C%0A%0AJe%20souhaite%20cr%C3%A9er%20un%20pack%20personnalis%C3%A9%20adapt%C3%A9%20%C3%A0%20mes%20besoins.%0A%0APouvez-vous%20me%20proposer%20une%20offre%20sur%20mesure%20%3F%0A%0AMerci%20!"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm"
            >
              Créer mon pack
            </a>
          </div>
        </div>
      </section>

      <WhyUs />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
