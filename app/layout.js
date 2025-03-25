import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata = {
  title: "KV Nails",
  description: "Nail Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
