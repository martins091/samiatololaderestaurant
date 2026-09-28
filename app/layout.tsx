import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Spectral } from "next/font/google";
import "./globals.css";

const display = Spectral({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samiat Ololade Restaurant — amala, abula & cocktails in Surulere, Lagos",
  description:
    "Modern Nigerian restaurant and cocktail spot specialising in amala and abula, home of the Amala Date. Open 24 hours at 52 Adeniran Ogunsanya Street, Surulere, Lagos. Reserve on WhatsApp: 0816 290 0017.",
  openGraph: {
    title: "Samiat Ololade Restaurant — bring a date, we'll bring the amala",
    description:
      "Amala, abula and cocktails, open 24 hours at 52 Adeniran Ogunsanya Street, Surulere, Lagos.",
    images: ["/images/amala-abula.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4e9dc" },
    { media: "(prefers-color-scheme: dark)", color: "#170d0b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
