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
  title: "MAVRIC // TECHNICAL FOOTWEAR & ARCHITECTURE",
  description:
    "Official MAVRIC flagship store. Precision technical footwear engineered for performance and form. Designed by Anar Gadirli. Worldwide shipping.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: ["MAVRIC", "Technical Footwear", "Luxury Sneakers", "Anar Gadirli", "Streetwear", "SR-FOAM"],
  openGraph: {
    title: "MAVRIC // OFFICIAL FLAGSHIP STORE",
    description: "Precision technical footwear engineered for performance and form. Designed by Anar Gadirli.",
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
