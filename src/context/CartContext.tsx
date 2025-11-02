"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: string;
  serviceName: string;
  duration: string;
  price: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, duration: string) => void;
  clear: () => void;
  total: number;
  buildWhatsAppLink: (details: {
    firstName: string;
    lastName: string;
    email: string;
  }) => string;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const WHATSAPP_NUMBER = "221784467465";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find(
        (current) =>
          current.id === item.id && current.duration === item.duration
      );
      if (exists) {
        return prev;
      }
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((id: string, duration: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id || item.duration !== duration));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items]
  );

  const buildWhatsAppLink = useCallback(
    (details: { firstName: string; lastName: string; email: string }) => {
      const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
      if (items.length === 0) return baseUrl;

      const safeFirstName = details.firstName.trim();
      const safeLastName = details.lastName.trim();
      const safeEmail = details.email.trim();

      const lines = items.map(
        (item) => `• ${item.serviceName} – ${item.duration} – ${item.price.toLocaleString("fr-FR")} F`
      );

      const message = [
        "Bonjour TerangaPremium !",
        "",
        "Je souhaite finaliser une commande :",
        "",
        `👤 Client : ${safeFirstName} ${safeLastName}`,
        `📧 Email : ${safeEmail}`,
        "",
        "🛒 Détails de la commande :",
        ...lines,
        "",
        `Total : ${total.toLocaleString("fr-FR")} F`,
      ].join("\n");

      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    },
    [items, total]
  );

  const value = useMemo(
    () => ({ items, addItem, removeItem, clear, total, buildWhatsAppLink }),
    [items, addItem, removeItem, clear, total, buildWhatsAppLink]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
