"use client";

import Link from "next/link";
import Image from "next/image";
import pokemonLogo from "../image/pokemon.png";

export default function Navbar() {
  return (
    <nav className="w-full px-5 py-2 bg-red-600 text-white flex justify-between items-center">
      <Image 
        src={pokemonLogo} 
        alt="Pokemon Logo" 
        width={100}
        height={36}
        style={{ height: "auto" }}
        priority
      />
      <div className="space-x-4">
        <Link
          href="/"
          className="hover:underline"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="hover:underline"
        >
          About
        </Link>
      </div>
    </nav>
  );
}