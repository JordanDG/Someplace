import './globals.css'
import { Lato } from 'next/font/google'

// Components //
import Navbar from './components/Navbar';

const lato = Lato({ weight: ['100', '400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Someplace | Home',
  description: 'Testing grounds for new Next.js Concepts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
