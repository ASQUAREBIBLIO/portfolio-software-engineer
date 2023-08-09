import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ach-chatibi Ahmed - Portfolio Website | Software Engineer",
  description: "Software engineer portfolio based in Morocco.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="m-0 bg-slate-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
