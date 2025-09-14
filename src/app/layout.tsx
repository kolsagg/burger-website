import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Burgerpark",
    template: "%s | Burgerpark",
  },
  description: "Burgerpark kurumsal web sitesi",
  metadataBase: new URL("https://burgerpark.com.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Burgerpark",
    title: "Burgerpark",
    description: "Burgerpark kurumsal web sitesi",
    images: [{ url: "/Burger-Park-White.webp" }],
    url: "https://burgerpark.com.tr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burgerpark",
    description: "Burgerpark kurumsal web sitesi",
    images: ["/Burger-Park-White.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
