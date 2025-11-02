"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le message WhatsApp
    const message = `Bonjour TerangaPremium,%0A%0AJe souhaite entrer en contact avec vous.%0A%0A👤 Nom : ${formData.name}%0A📱 Téléphone : ${formData.phone}%0A✉️ Email : ${formData.email}%0A📦 Service d\\'intérêt : ${formData.service}%0A%0A💬 Message :%0A${formData.message}%0A%0AMerci de me recontacter rapidement.`;
    
    // Rediriger vers WhatsApp
    window.open(`https://wa.me/221784467465?text=${message}`, "_blank");
    
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-semibold text-black"
        >
          Nom complet *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-2xl border border-black/10 bg-gray-50 px-4 py-3 text-black transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-semibold text-black"
        >
          Téléphone (WhatsApp) *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full rounded-2xl border border-black/10 bg-gray-50 px-4 py-3 text-black transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20"
          placeholder="77 123 45 67"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-black"
        >
          Email (optionnel)
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-2xl border border-black/10 bg-gray-50 px-4 py-3 text-black transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20"
          placeholder="exemple@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-semibold text-black"
        >
          Service intéressé
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) =>
            setFormData({ ...formData, service: e.target.value })
          }
          className="w-full rounded-2xl border border-black/10 bg-gray-50 px-4 py-3 text-black transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20"
        >
          <option value="">-- Choisissez un service --</option>
          <option value="Netflix">Netflix</option>
          <option value="IPTV Premium">IPTV Premium</option>
          <option value="Spotify">Spotify Premium</option>
          <option value="Disney+">Disney+</option>
          <option value="Apple Music">Apple Music</option>
          <option value="myCANAL">myCANAL</option>
          <option value="VPN">VPN Surfshark</option>
          <option value="iCloud">iCloud+</option>
          <option value="Prime Video">Prime Video</option>
          <option value="HBO Max">HBO Max</option>
          <option value="Autre">Autre service</option>
          <option value="Pack">Pack personnalisé</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-black"
        >
          Votre message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full rounded-2xl border border-black/10 bg-gray-50 px-4 py-3 text-black transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20"
          placeholder="Décrivez votre besoin ou posez votre question..."
        />
      </div>

      <button
        type="submit"
        className="btn-primary flex w-full items-center justify-center gap-2 py-4 text-base"
      >
        <Send className="h-5 w-5" />
        Envoyer via WhatsApp
      </button>

      <p className="text-center text-xs text-black/60">
        En soumettant ce formulaire, vous serez redirigé vers WhatsApp avec votre
        message pré-rempli.
      </p>
    </form>
  );
}


