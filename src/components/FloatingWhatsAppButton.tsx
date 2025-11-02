"use client";

import { MotionConfig, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CTA_WHATSAPP =
  "https://wa.me/221784467465?text=Bonjour%20Sen%20Abonnement%2C%0A%0AJe%20suis%20int%C3%A9ress%C3%A9%28e%29%20par%20vos%20offres%20d%27abonnements.%0A%0APouvez-vous%20me%20donner%20plus%20d%27informations%20%3F%0A%0AMerci%20!";

export default function FloatingWhatsAppButton() {
  return (
    <MotionConfig transition={{ duration: 0.25, ease: "easeOut" }}>
      <motion.a
        href={CTA_WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-[#E50914] p-3 text-white opacity-60 shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition hover:opacity-100 sm:bottom-5 sm:right-5 sm:p-4"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.6, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.a>
    </MotionConfig>
  );
}
