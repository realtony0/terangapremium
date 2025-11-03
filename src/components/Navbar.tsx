"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Offres", href: "/offres" },
  { label: "Revendeur", href: "/revendeur" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();

  const openCart = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cart"));
    }
    setIsOpen(false);
  };
  const itemsCount = items.length;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 shadow-[0_10px_30px_rgba(15,15,15,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/terangapremium-logo.jpg"
            alt="Logo TerangaPremium"
            width={40}
            height={40}
            priority
            className="h-9 w-9 rounded-full bg-black/5 object-cover sm:h-10 sm:w-10"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black sm:text-sm sm:tracking-[0.3em]">
            TerangaPremium
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-black/70 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex lg:gap-3">
          <button
            type="button"
            onClick={openCart}
            className="relative flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-black transition hover:border-black lg:px-6 lg:py-3 lg:text-sm"
          >
            <ShoppingBag size={16} />
            Panier
            {itemsCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#E50914] px-1 text-xs text-white">
                {itemsCount}
              </span>
            )}
          </button>
          <Link href="/offres" className="btn-primary px-4 py-2 text-xs lg:px-6 lg:py-3 lg:text-sm">
            Découvrir
          </Link>
          <Link
            href="/offres#catalogue"
            className="btn-outline border-white/40 px-4 py-2 text-xs text-white/90 hover:text-black lg:px-6 lg:py-3 lg:text-sm"
          >
            Catalogue
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="text-black md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 mb-4 rounded-3xl border border-black/5 bg-white p-6 text-black md:hidden shadow-[0_20px_50px_rgba(15,15,15,0.08)]"
          >
            <div className="space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl border border-black/5 px-4 py-3 text-sm transition hover:border-black/20"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/offres"
                onClick={() => setIsOpen(false)}
                className="btn-primary block text-center text-sm"
              >
                Découvrir les offres
              </Link>
              <button
                type="button"
                onClick={openCart}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 px-4 py-3 text-sm transition hover:border-black/20"
              >
                <ShoppingBag size={18} />
                Ouvrir le panier
                {itemsCount > 0 && (
                  <span className="rounded-full bg-[#E50914] px-2 py-0.5 text-xs text-white">
                    {itemsCount}
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
