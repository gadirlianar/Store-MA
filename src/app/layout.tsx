import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import BagDrawer from "@/components/BagDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SRIGEN // 001 LIMITED EDITION DROP",
  description:
    "SRIGEN 001. Limited to 300 pairs worldwide. US 4–13 · Unisex. Rel. 09.26.2026. No restock. Ever.",
  robots: {
    index: false,
    follow: false,
  },
  keywords: ["SRIGEN", "001", "Sneaker Drop", "Limited Edition", "SR-FOAM"],
  openGraph: {
    title: "SRIGEN // 001 LIMITED EDITION DROP",
    description: "Limited to 300 numbered pairs worldwide. No restock. Ever.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#EDEBE4] text-[#14110D] font-sans antialiased min-h-screen">
        <CartProvider>
          {children}
          <BagDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
