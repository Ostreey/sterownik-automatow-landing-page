import type { Metadata } from "next";
import { Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const chakra = Chakra_Petch({
  variable: "--font-geist-mono",
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Sterowniki do odkurzaczy | Myjnie bezdotykowe",
    template: "%s | Sterowniki do odkurzaczy",
  },
  description:
    "Uniwersalne sterowniki elektroniczne do odkurzaczy na myjniach bezdotykowych. 3 wejscia platnosci, WiFi, wyswietlacz TFT. Sprawdzone na dziesieciach urzadzen.",
  keywords: [
    "sterownik odkurzacza",
    "myjnia bezdotykowa",
    "sterownik do odkurzacza",
    "elektronika myjnia",
    "wrzutnik monet odkurzacz",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${chakra.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
