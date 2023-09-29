'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Assets */
import logo from '../assets/logo.png';

export default function Navbar() {
  const Pathname = usePathname();
  return (
    <nav className="Nav">
        <Image 
        src={logo}
        alt="Someplace Logo"
        width={300}
        quality={100}
        />
        <div>
          <Link href="/" className={Pathname == "/" ? "Nav_Link Active" : "Nav_Link"}>Home</Link>
          <Link href="/about" className={Pathname == "/about" ? "Nav_Link Active" : "Nav_Link"}>About</Link>
          <Link href="/contact" className={Pathname == "/contact" ? "Nav_Link Active" : "Nav_Link"}>Contact</Link>
        </div>
    </nav>
  )
}