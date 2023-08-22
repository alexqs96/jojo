import './globals.css'
import type { Metadata } from 'next'
import localFont from "next/font/local";
import Image from 'next/image';
import Link from 'next/link'

const caudexFont = localFont({ src: "../fonts/caudex.woff2" });

export const metadata: Metadata = {
  title: "Jojo's",
  description: 'Jojos animes y mangas.',
  openGraph: {
    type: "website",
    url: "https://jojos.vercel.app",
    title: "Jojo's",
    siteName: "Jojo's",
    description: "Jojos animes y mangas.",
    images: "/img/jojo_banner.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={caudexFont.className+" mx-auto max-w-screen-xl w-[90%] relative"}>
        <header className='flex items-center py-4 gap-10'>
          <Link href="/" className='text-5xl tracking-widest scale-x-90'>
          JOJO
          </Link>
          <nav className='flex items-center gap-4'>
            <Link href="/">
              Anime
            </Link>

            <Link href="/mangas">
              Mangas
            </Link>
          </nav>
        </header>
        <main className='flex'>
        {children}
        <Image
          className='ml-auto mt-auto object-contain'
          src="/img/bg_kamen_black.png"
          width={200}
          height={400}
          alt='mask'
          unoptimized
          priority
        />
        </main>
      </body>
    </html>
  )
}
