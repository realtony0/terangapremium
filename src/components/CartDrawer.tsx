"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, removeItem, clear, total, buildWhatsAppLink } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const isEmailValid = useMemo(() => {
    if (!email.trim()) return false;
    // Basic email structure validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);

  const canSendOrder = useMemo(() => {
    if (items.length === 0) return false;
    return Boolean(firstName.trim() && lastName.trim() && isEmailValid);
  }, [firstName, lastName, isEmailValid, items.length]);

  const handleWhatsAppOrder = () => {
    if (!canSendOrder) return;
    const link = buildWhatsAppLink({
      firstName,
      lastName,
      email,
    });
    window.open(link, "_blank");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-black shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 sm:bottom-5 sm:left-5 sm:gap-2 sm:px-4 sm:text-sm"
      >
        <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="hidden sm:inline">Panier</span>
        {items.length > 0 && (
          <span className="rounded-full bg-[#E50914] px-1.5 py-0.5 text-xs text-white sm:px-2">
            {items.length}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute right-0 top-0 h-full w-full overflow-y-auto border-l border-black/5 bg-white p-4 text-black shadow-[0_-20px_60px_rgba(15,15,15,0.15)] sm:max-w-md sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Mon panier</h2>
                <button
                  type="button"
                  className="text-sm text-black/60 transition hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Fermer
                </button>
              </div>

              {items.length === 0 ? (
                <p className="mt-10 text-black/60">
                  Ajoutez un plan depuis une offre pour le retrouver ici.
                </p>
              ) : (
                <div className="mt-6 space-y-4">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.duration}`}
                      className="rounded-2xl border border-black/10 bg-[#fdfdfd] p-4"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                              {item.duration}
                            </p>
                            <h3 className="text-lg font-semibold">
                              {item.serviceName}
                            </h3>
                          </div>
                          <p className="text-lg font-semibold">
                            {item.price.toLocaleString("fr-FR")} F
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.duration)}
                          className="inline-flex items-center gap-2 text-xs text-black/60 transition hover:text-black"
                        >
                          <Trash2 size={14} /> Retirer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {items.length > 0 && (
                <div className="mt-8 space-y-5 border-t border-black/10 pt-6">
                  <div className="flex items-center justify-between text-black">
                    <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                      Total
                    </p>
                    <p className="text-2xl font-semibold">
                      {total.toLocaleString("fr-FR")} F
                    </p>
                  </div>
                  <div className="space-y-3 rounded-2xl border border-black/10 bg-[#fdfdfd] p-4">
                    <p className="text-sm font-semibold text-black">
                      Coordonnées client
                    </p>
                    <div className="grid gap-3">
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-black/40">
                          Prénom
                          <input
                            type="text"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            placeholder="Ex: Awa"
                            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-[#E50914]"
                          />
                        </label>
                        <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-black/40">
                          Nom
                          <input
                            type="text"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            placeholder="Ex: Diop"
                            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-[#E50914]"
                          />
                        </label>
                      </div>
                      <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-black/40">
                        Email
                        <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="Ex: awa@example.com"
                          className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none transition focus:border-[#E50914]"
                        />
                      </label>
                      {!isEmailValid && email.trim().length > 0 && (
                        <p className="text-xs text-[#E50914]">
                          Merci de saisir une adresse email valide.
                        </p>
                      )}
                      <p className="text-xs text-black/50">
                        Ces informations nous servent à préparer votre facture et à
                        sécuriser la livraison de vos accès.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppOrder}
                      disabled={!canSendOrder}
                      className={`btn-primary text-base ${
                        !canSendOrder ? "cursor-not-allowed opacity-60" : ""
                      }`}
                    >
                      Commander via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={clear}
                      className="rounded-full border border-black/10 px-6 py-3 text-sm text-black transition hover:border-black"
                    >
                      Vider le panier
                    </button>
                  </div>
                </div>
              )}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
