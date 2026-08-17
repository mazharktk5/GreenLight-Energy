import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/navbar/MainNav";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GreenLight Energy – Solar Solutions Pakistan",
  description: "Reliable, efficient, and sustainable solar energy solutions across Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="overflow-x-hidden">
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
