import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import pokemonLogo from "./image/pokemon.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokedex",
  description: "A simple Pokedex app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-center pt-4 px-4">
          <Image 
            src={pokemonLogo} 
            alt="Pokemon Logo" 
            className="w-48 sm:w-64 md:w-80 lg:w-96"
            style={{ height: "auto" }}
            priority 
          />
        </div>
        {children}
      </body>
    </html>
  );
}
