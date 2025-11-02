import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://terangapremium.com"),
  title: {
    default: "TerangaPremium — Streaming & musique au Sénégal",
    template: "%s | TerangaPremium",
  },
  description:
    "Abonnements Netflix, myCANAL, Spotify, Disney+, VPN et Cloud livrés instantanément au Sénégal. Paiement Wave / OM, support WhatsApp 24h/24 et 7j/7.",
  keywords: [
    "Netflix Sénégal",
    "Abonnement streaming Sénégal",
    "TerangaPremium",
    "IPTV Premium",
    "Spotify Sénégal",
    "Disney Plus Sénégal",
    "ChatGPT Plus Sénégal",
    "Vente comptes premium",
    "Abonnements digitaux Dakar",
  ],
  authors: [{ name: "TerangaPremium" }],
  creator: "TerangaPremium",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': "large",
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/terangapremium-logo.jpg",
  },
  openGraph: {
    title: "TerangaPremium — Streaming & musique au Sénégal",
    description:
      "Votre boutique futuriste d’abonnements streaming, musique, TV et cloud au Sénégal.",
    url: "https://terangapremium.com",
    siteName: "TerangaPremium",
    images: [
      {
        url: "/terangapremium-logo.jpg",
        width: 1065,
        height: 1067,
        alt: "TerangaPremium",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TerangaPremium — Streaming & musique au Sénégal",
    description:
      "Profitez d’abonnements digitaux (Netflix, IPTV, Spotify, ChatGPT+, Cloud) livrés instantanément au Sénégal avec TerangaPremium.",
    images: ["/terangapremium-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} antialiased bg-[#121212] text-white`}
      >
        <CartProvider>
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(29,185,84,0.15),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.4),transparent_55%)]" />
          <div className="relative z-10 min-h-screen">
            <Navbar />
            <main className="pt-20 sm:pt-24 lg:pt-28">{children}</main>
            <Footer />
          </div>
          <CartDrawer showFloatingButton={false} />
        </CartProvider>
      </body>
    </html>
  );
}
