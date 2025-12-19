// app/layout.tsx
import "./globals.css";
import localFont from "next/font/local";
import { Libre_Baskerville } from "next/font/google";

const dreamAvenue = localFont({
  src: "../public/fonts/DreamAvenue.woff2",
  variable: "--font-dream",
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
    <html lang="en" className={`${dreamAvenue.variable} ${libre.variable}`}>
      <body>{children}</body>
    </html>
  );
}