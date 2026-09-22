import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sampan Highway Inn",
  description:
    "Experience comfort and convenience on every journey, in one place: 24/7 Restaurant & Party Center, Fuel & LPG Filling Station, Hotel & Motel, Sweet & Super Shop.",
  icons: {
    icon: [
      { url: "/logos/sampanhighwayinn.png" },
      { url: "/logos/sampanhighwayinn.png", sizes: "32x32" },
      { url: "/logos/sampanhighwayinn.png", sizes: "16x16" },
    ],
    shortcut: "/logos/sampanhighwayinn.png",
    apple: "/logos/sampanhighwayinn.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#0c0f17] text-slate-100 selection:bg-brand-blue/30 selection:text-white"
      >
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
