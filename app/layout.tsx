import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Mukta, Crimson_Text, Space_Mono } from 'next/font/google'

import Header from 'app/components/Header'
import SiteFooter from 'app/components/SiteFooter'

import { baseUrl } from 'app/sitemap'

import 'app/styles/global.css'

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

const space_mono = Space_Mono ({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Abby Milberg Portfolio',
    template: '%s | Abby Milberg',
  },
  description: 'Experienced frontend developer specializing in component libraries, javascript, accessibility, and Drupal, with a complementary background in design.',
  openGraph: {
    title: 'Abby Milberg Portfolio',
    description: 'Experienced frontend developer specializing in component libraries, javascript, accessibility, and Drupal, with a complementary background in design.',
    url: baseUrl,
    siteName: 'Abby Milberg Portfolio',
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
      className={`${mukta.variable} ${crimson.variable} ${space_mono.variable}`}
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
