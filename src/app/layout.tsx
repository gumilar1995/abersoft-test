import SplashScreen from "@/components/SplashScreen";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import { routes } from "@/contants/routes";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abersoft Test",
  description: "Abersoft Technical Test - Angga Gumilar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SplashScreen />
        <main className="container">
          <Navigation items={routes} />
          {children}
        </main>
      </body>
    </html>
  );
}
