import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Mukta, Crimson_Text } from 'next/font/google'

import Row from './components/layout/Row'
import Header from './components/Header'
import SiteFooter from './components/SiteFooter'

import { baseUrl } from './sitemap'

import './styles/global.css'

const mukta = Mukta ({
  weight: ['300', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
 
const crimson = Crimson_Text ({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Abby Milberg Portfolio',
    template: '%s | Abby Milberg',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${mukta.variable} ${crimson.variable}`}
    >
      <head></head> 
      <body>
        <Header />
        <main>
          {children}
        </main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
