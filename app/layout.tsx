import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Randolph Pelican III | Sovereign Research & Tech",
  description: "Official portal for K-Metric analysis, Substrate Affect Theory, and decentralized sovereign software.",
  openGraph: {
    title: "Randolph Pelican III | Sovereign Research & Tech",
    description: "Official portal for K-Metric analysis and decentralized sovereign software.",
    url: "https://randolphpelican.com",
    siteName: "Randolph Pelican III LLC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Randolph Pelican III - Sovereign Research",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Randolph Pelican III | Sovereign Research & Tech",
    description: "Official portal for K-Metric analysis and decentralized sovereign software.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
