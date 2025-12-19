// app/layout.tsx
import "./globals.css";
import localFont from "next/font/local";
import { Libre_Baskerville } from "next/font/google";
import TopNav from "@/components/TopNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gift of Winter",
  icons: {
    icon: "/christmas-tree.svg",
  },
};

const christmasSquad = localFont({
  src: "../public/fonts/ChristmasSquad.otf",
  variable: "--font-christmas",
  display: "swap",
});

const foremostItalic = localFont({
  src: "../public/fonts/ForemostItalic.otf",
  variable: "--font-section",
  display: "swap",
});

const libre = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${christmasSquad.variable} ${foremostItalic.variable} ${libre.variable}`}
    >
      <body>
        <TopNav />{children}
      </body>
    </html>
  );
}