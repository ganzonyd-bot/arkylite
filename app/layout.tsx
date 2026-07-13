import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/app/components/SplashScreen";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arkylite Design + Build | Architectural Design & Engineering Consultancy",
  description:
    "Architectural Design & Engineering Consultancy and Construction Services in Plaridel, Philippines. Design + Build. Licensed Architect, Engineer and Master Plumber.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
