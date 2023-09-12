import Image from "next/image";
import Link from "next/link";

import logo from './logo.png';

export default function Navbar() {
  return (
    <nav>
        <Image 
        src={logo}
        alt="Someplace Logo"
        Width={150}
        quality={100}
        />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <form>
            <input type="text" placeholder="Search for items" required name="search_term" />
            <button type="submit">Search</button>
        </form>
        
    </nav>
  )
}
