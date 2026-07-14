import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/navbar/TopBar";
import MainNav from "@/components/navbar/MainNav";

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
  description: "Residential, commercial & industrial solar solutions. Net metering, battery storage and consultancy services across Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden w-full">
        <TopBar />
        <MainNav />
        {children}
      </body>
    </html>
  );
}
