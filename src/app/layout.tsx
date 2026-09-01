import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";

export const metadata: Metadata = {
  title: "BEYOND. — Performance Merchandise & Adaptive Systems",
  description:
    "The brand doesn't sell apparel. It sells possibility. Designed for movement. Built for the person you're becoming.",
  keywords: [
    "Beyond",
    "Performance Merchandise",
    "Technical Apparel",
    "Activewear",
    "Luxury Sportswear",
    "Adaptive Systems",
  ],
  authors: [{ name: "BEYOND Lab" }],
  openGraph: {
    title: "BEYOND. — Performance Merchandise & Adaptive Systems",
    description: "The brand doesn't sell apparel. It sells possibility.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-[#F1ECE4] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#F1ECE4]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
