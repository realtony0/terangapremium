import { Instagram, MessageCircle } from "lucide-react";
import type { LucideProps } from "lucide-react";
import Link from "next/link";

function SnapchatIcon(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8.2 3.7C9.2 2.3 10.7 2 12 2c1.3 0 2.8.3 3.8 1.7.8 1 1.1 2.3 1.1 4.9s.6 5 2.1 5.8c.3.2.5.5.5.8 0 .6-.5.9-1.2.9-.4 0-.7.3-.7.7 0 .7 1.5 1.4 1.5 1.9 0 .6-1.4.8-2.4.8-.8 0-1.2.2-1.5.7-.5.8-1.4 1.4-3.1 1.4-1.7 0-2.6-.6-3.1-1.4-.3-.5-.7-.7-1.5-.7-1 0-2.4-.2-2.4-.8 0-.5 1.5-1.2 1.5-1.9 0-.4-.3-.7-.7-.7-.7 0-1.2-.3-1.2-.9 0-.3.2-.6.5-.8 1.5-.8 2.1-3.2 2.1-5.8s.3-3.9 1.1-4.9z" />
    </svg>
  );
}

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/221784467465",
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/teranga_premium1",
    icon: Instagram,
  },
  {
    label: "Snapchat",
    href: "https://snapchat.com/t/fEeaj0fW",
    icon: SnapchatIcon,
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Company info */}
          <div className="flex-1">
            <p className="mb-3 text-lg font-semibold text-black">
              TerangaPremium
            </p>
            <p className="mb-4 max-w-md text-sm text-black/60">
              Votre boutique d’abonnements streaming, musique, TV et cloud au
              Sénégal. Activation rapide, paiement local, support 24/7.
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-xs text-black transition hover:border-[#E50914] hover:text-[#E50914]"
                >
                  <social.icon size={16} />
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-black/40">
              Navigation
            </p>
            <div className="space-y-2">
              <Link
                href="/offres"
                className="block text-sm text-black/70 transition hover:text-[#E50914]"
              >
                Catalogue complet
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-black/70 transition hover:text-[#E50914]"
              >
                Contact & Support
              </Link>
              <a
                href="https://wa.me/221784467465"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-black/70 transition hover:text-[#E50914]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-black/5 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
            <p className="text-sm text-black/60">
              © 2025 TerangaPremium — Tous droits réservés
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              Site web conçu par
              <Link
                href="https://wa.me/221774992742"
                target="_blank"
                rel="noreferrer"
                className="ml-2 text-[#E50914] transition hover:underline"
              >
                MMB
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
